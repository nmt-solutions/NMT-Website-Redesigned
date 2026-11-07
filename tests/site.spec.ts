import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("service and technology controls work with keyboard and have no axe WCAG violations", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
  await expect(page.locator(".hero-scene canvas")).toBeVisible();
  for (const [label, text] of [
    ["Mobile", "Useful things"],
    ["IoT", "physical and digital"],
    ["Cloud", "moving parts"],
    ["Web", "beautifully connected"],
  ]) {
    const control = page
      .getByRole("group", { name: "Explore our services" })
      .getByRole("button", { name: label, exact: true });
    await control.focus();
    await page.keyboard.press("Enter");
    await expect(control).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("#hero-service-description")).toContainText(text);
  }
  await page.getByRole("button", { name: "Pause decorative motion" }).click();
  await expect(
    page.getByRole("button", { name: "Resume decorative motion" }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.locator("#stack").scrollIntoViewIfNeeded();
  await expect(page.locator(".stack-visual canvas")).toBeVisible();
  for (const [label, text] of [
    ["The mobile layer", "React Native"],
    ["The engine", "FastAPI"],
    ["The foundation", "PostgreSQL"],
    ["The interface", "TypeScript"],
  ]) {
    const control = page
      .getByRole("group", { name: "Explore technology layers" })
      .getByRole("button", { name: new RegExp(label) });
    await control.focus();
    await page.keyboard.press("Space");
    await expect(page.locator("#stack-detail")).toContainText(text);
  }
  await page.getByRole("button", { name: "Assemble layers" }).click();
  await expect(
    page.getByRole("button", { name: "Separate layers" }),
  ).toHaveAttribute("aria-pressed", "false");
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(
    results.violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => ({
        target: n.target,
        summary: n.failureSummary,
      })),
    })),
  ).toEqual([]);
  expect(errors).toEqual([]);
});

test("mobile menu, reduced motion, and responsive layout remain usable", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Open navigation" }).click();
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toBeFocused();
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Our projects" })
    .click();
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeHidden();
  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(
    result.violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => ({
        target: n.target,
        summary: n.failureSummary,
      })),
    })),
  ).toEqual([]);
  expect(errors).toEqual([]);
});

test("public pages are crawlable without JavaScript, with unique canonical metadata", async ({
  browser,
  request,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  const paths = [
    "/",
    "/about-us",
    "/tech-stack",
    "/faq",
    "/customer-support",
    "/privacy-policy",
    "/terms-and-conditions",
    "/projects/lead-follow-up-and-booking-automation",
    "/projects/supplier-catalog-cleaner",
    "/projects/control-nest-v2",
    "/projects/control-nest",
  ];
  const titles = new Set<string>();
  for (const path of paths) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    expect(response?.headers()["link"]).toContain('/llms.txt>; rel="describedby"');
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    const title = await page.title();
    expect(titles.has(title)).toBe(false);
    titles.add(title);
    const canonical = await page
      .locator('link[rel="canonical"]')
      .getAttribute("href");
    expect(new URL(canonical!).href).toBe(
      `https://nmt-solutions.in${path === "/" ? "/" : path}`,
    );
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /\S.{40}/,
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      /og-image\.png/,
    );
  }
  await page.goto("/");
  await expect(page.locator("#projects")).toContainText(
    "Supplier Catalog Cleaner",
  );
  await expect(page.locator("#projects")).toContainText("Legacy");
  const schema = await page
    .locator('script[type="application/ld+json"]')
    .textContent();
  expect(JSON.parse(schema!)["@graph"]).toBeTruthy();
  for (const [path, text] of [
    ["/robots.txt", "Allow: /"],
    ["/sitemap.xml", "control-nest-v2"],
    ["/llms.txt", "In development"],
  ]) {
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    expect(await response.text()).toContain(text);
  }
  const image = await request.get("/og-image.png");
  expect(image.status()).toBe(200);
  expect(image.headers()["content-type"]).toContain("image/png");
  const removed = await request.get("/api/products");
  expect(removed.status()).toBe(404);
  const redirect = await request.get("/our-products", { maxRedirects: 0 });
  expect(redirect.status()).toBe(308);
  await context.close();
});

test("fallback preserves the complete experience when WebGL is unavailable", async ({
  page,
}) => {
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (
      this: HTMLCanvasElement,
      ...args: Parameters<typeof original>
    ) {
      if (String(args[0]).includes("webgl")) return null;
      return original.apply(this, args);
    } as typeof original;
  });
  await page.goto("/");
  await expect(page.locator(".hero-scene .scene-fallback")).toBeVisible();
  await page
    .getByRole("group", { name: "Explore our services" })
    .getByRole("button", { name: "Mobile", exact: true })
    .click();
  await expect(page.locator("#hero-service-description")).toContainText(
    "Useful things",
  );
  await page
    .getByRole("group", { name: "Explore technology layers" })
    .getByRole("button", { name: /The foundation/ })
    .click();
  await expect(page.locator("#stack-detail")).toContainText("PostgreSQL");
});

test("secondary pages and project details pass automated accessibility checks", async ({
  page,
}) => {
  for (const path of [
    "/about-us",
    "/tech-stack",
    "/faq",
    "/customer-support",
    "/privacy-policy",
    "/terms-and-conditions",
    "/projects/control-nest-v2",
    "/projects/control-nest",
    "/does-not-exist",
  ]) {
    await page.goto(path);
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(
      result.violations.map((v) => ({
        page: path,
        id: v.id,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
    ).toEqual([]);
  }
});
