export default function SceneFallback({ stack = false }: { stack?: boolean }) {
  return (
    <div
      className={`scene-fallback ${stack ? "is-stack" : ""}`}
      aria-hidden="true"
    >
      <div className="fallback-assembly">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
