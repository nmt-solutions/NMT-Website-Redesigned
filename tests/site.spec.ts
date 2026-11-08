import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { site } from "../src/lib/site-content";

test("service and technology controls work with keyboard and have no axe WCAG violations", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
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
  const diagram = page.getByRole("figure");
  await expect(diagram).toBeVisible();
  await diagram.getByRole("button", { name: "Resume flow animation" }).focus();
  await page.keyboard.press("Space");
  for (const [label, text, category] of [
    ["Mobile apps", "React Native", "mobile"],
    ["Server applications", "FastAPI", "services"],
    ["IoT", "Cloudflare Tunnel", "infrastructure"],
    ["Web interface", "TypeScript", "interface"],
  ]) {
    const control = page
      .getByRole("group", { name: "Explore technology categories" })
      .getByRole("button", { name: new RegExp(label) });
    await control.focus();
    await page.keyboard.press("Space");
    await expect(page.locator("#stack-detail")).toContainText(text);
    await expect(diagram).toHaveAttribute("data-category", category);
    const signal = diagram.locator(".diagram-signal").first();
    const initialOffset = await signal.evaluate(
      (el) => getComputedStyle(el).strokeDashoffset,
    );
    await expect
      .poll(() =>
        signal.evaluate((el) => getComputedStyle(el).strokeDashoffset),
      )
      .not.toBe(initialOffset);
  }
  await page.waitForTimeout(3600);
  const recurringSignal = diagram.locator(".diagram-signal").first();
  const secondCycleOffset = await recurringSignal.evaluate(
    (el) => getComputedStyle(el).strokeDashoffset,
  );
  await expect
    .poll(() =>
      recurringSignal.evaluate((el) => getComputedStyle(el).strokeDashoffset),
    )
    .not.toBe(secondCycleOffset);
  await diagram.getByRole("button", { name: "Pause flow animation" }).focus();
  await page.keyboard.press("Enter");
  await expect(diagram).toHaveAttribute("data-motion", "paused");
  const signal = diagram.locator(".diagram-signal").first();
  const pausedOffset = await signal.evaluate(
    (el) => getComputedStyle(el).strokeDashoffset,
  );
  await page.waitForTimeout(200);
  expect(
    await signal.evaluate((el) => getComputedStyle(el).strokeDashoffset),
  ).toBe(pausedOffset);
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
    const centers = await page.locator(".site-header").evaluate((header) => {
      const center = (selector: string) => {
        const rect = header.querySelector(selector)!.getBoundingClientRect();
        return rect.top + rect.height / 2;
      };
      return {
        header: center(".header-inner"),
        logo: center(".brand-logo"),
        wordmark: center(".wordmark"),
      };
    });
    expect(Math.abs(centers.logo - centers.header)).toBeLessThan(1);
    expect(Math.abs(centers.wordmark - centers.header)).toBeLessThan(1);
    await page.locator("#stack").scrollIntoViewIfNeeded();
    await expect(page.getByRole("figure")).toHaveAttribute(
      "data-motion",
      "static",
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expect(page.getByRole("figure")).toHaveAttribute(
    "data-motion",
    "animated",
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.getByRole("figure")).toHaveAttribute(
    "data-motion",
    "static",
  );
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
    expect(response?.headers()["link"]).toContain(
      '/llms.txt>; rel="describedby"',
    );
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    const title = await page.title();
    expect(titles.has(title)).toBe(false);
    titles.add(title);
    const canonical = await page
      .locator('link[rel="canonical"]')
      .getAttribute("href");
    expect(new URL(canonical!).href).toBe(
      `${site.url}${path === "/" ? "/" : path}`,
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
  const publicProject = page.getByRole("article").filter({
    has: page.getByRole("heading", { name: "Control Nest v2", exact: true }),
  });
  await expect(publicProject.locator(".project-status")).toHaveText(
    "In development",
  );
  await expect(
    publicProject.getByRole("link", { name: /Visit website/ }),
  ).toHaveAttribute("href", "https://controlnest.nmt-solutions.in/");
  await expect(page.locator(".site-header img")).toHaveAttribute(
    "src",
    "/brand/nmt-logo.svg",
  );
  await expect(page.locator("#contact a")).toHaveAttribute(
    "href",
    "mailto:wafa.khan@nmtsolutions.in",
  );
  await expect(page.locator("body")).not.toContainText(
    "support@nmt-solutions.in",
  );
  await expect(page.locator("body")).not.toContainText("application pending");
  await expect(page.locator(".site-header .trademark-symbol")).toHaveText("™");
  const schema = await page
    .locator('script[type="application/ld+json"]')
    .textContent();
  expect(JSON.parse(schema!)["@graph"]).toBeTruthy();
  for (const [path, text] of [
    ["/robots.txt", "Allow: /"],
    ["/sitemap.xml", "control-nest-v2"],
    ["/llms.txt", "in development"],
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

test("the original logo and wordmark tilt without changing their artwork", async ({
  page,
}) => {
  await page.goto("/");
  const logo = page.locator(".site-header .brand-perspective");
  await logo.hover();
  await expect
    .poll(() =>
      logo
        .locator(".brand-logo-wrap")
        .evaluate((el) => getComputedStyle(el).transform),
    )
    .not.toBe("none");
  await expect
    .poll(() =>
      logo
        .locator(".wordmark")
        .evaluate((el) => getComputedStyle(el).transform),
    )
    .not.toBe("none");
  await expect(logo.locator("img")).toHaveAttribute(
    "src",
    "/brand/nmt-logo.svg",
  );
  await expect(logo.locator(".wordmark")).toHaveText("NMTSolutions");
  await page.mouse.move(0, 0);
  await expect
    .poll(() =>
      logo
        .locator(".brand-logo-wrap")
        .evaluate((el) => getComputedStyle(el).transform),
    )
    .toBe("none");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  await logo.hover();
  await expect(logo.locator(".brand-logo-wrap")).toHaveCSS("transform", "none");
  await expect(logo.locator(".wordmark")).toHaveCSS("transform", "none");
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
    .getByRole("group", { name: "Explore technology categories" })
    .getByRole("button", { name: /IoT/ })
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

test("glass navigation, service disclosures, and shared motion controls respond to input", async ({
  page,
}) => {
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Main navigation" });
  const pause = page.getByRole("button", {
    name: "Pause background animation",
  });
  await pause.focus();
  await page.keyboard.press("Space");
  await expect(page.locator(".site-experience")).toHaveAttribute(
    "data-motion-paused",
    "true",
  );
  await expect(page.locator(".ambient-network")).toHaveAttribute(
    "data-paused",
    "true",
  );
  await expect(
    page.getByRole("button", { name: "Resume decorative motion" }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".ambient-packet").first()).toHaveCSS(
    "animation-play-state",
    "paused",
  );
  await page
    .getByRole("button", { name: "Resume background animation" })
    .click();
  await expect(
    page.getByRole("button", { name: "Pause decorative motion" }),
  ).toHaveAttribute("aria-pressed", "false");

  const card = page.getByRole("article").filter({
    has: page.getByRole("heading", { name: "Web applications", exact: true }),
  });
  const disclosure = card.getByRole("button");
  await expect(disclosure).toHaveAccessibleName(
    "How we build it for Web applications",
  );
  await disclosure.focus();
  await page.keyboard.press("Enter");
  await expect(disclosure).toHaveAttribute("aria-expanded", "true");
  await expect(card.locator(".service-detail")).toBeVisible();
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(
    results.violations.map((v) => ({
      id: v.id,
      targets: v.nodes.map((node) => node.target),
    })),
  ).toEqual([]);
  await disclosure.focus();
  await page.keyboard.press("Space");
  await expect(disclosure).toHaveAttribute("aria-expanded", "false");
  await expect(card.locator(".service-detail")).toHaveCount(0);

  await page.locator("#stack").scrollIntoViewIfNeeded();
  await expect(nav.getByRole("link", { name: "Our stack" })).toHaveAttribute(
    "data-active",
    "true",
  );
  await expect(page.locator(".site-header")).toHaveAttribute(
    "data-scrolled",
    "true",
  );
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await expect(nav.getByRole("link", { name: "What we do" })).toHaveAttribute(
    "data-active",
    "true",
  );
  await expect(page.locator(".site-header")).toHaveAttribute(
    "data-scrolled",
    "false",
  );
});
