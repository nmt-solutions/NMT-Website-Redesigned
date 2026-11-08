import { LoadingSignal } from "./revamp/LoadingSignal";

const LoadingFallback = () => {
  return (
    <div
      className="loading-state"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <LoadingSignal />
      <p>Loading content</p>
      <div className="loading-skeleton" aria-hidden="true">
        <span />
        <span />
      </div>
    </div>
  );
};

export default LoadingFallback;
