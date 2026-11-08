import Image from "next/image";

export function LoadingSignal() {
  return (
    <div className="loading-visual" aria-hidden="true">
      <div className="loading-floor" />
      <div className="loading-slab loading-slab-bottom" />
      <div className="loading-slab loading-slab-middle" />
      <div className="loading-slab loading-slab-top">
        <Image src="/brand/nmt-logo.svg" width={40} height={40} alt="" />
      </div>
      <svg className="loading-bus" viewBox="0 0 240 60">
        <path d="M12 30H70L91 9H149L170 30H228" className="loading-bus-track" />
        <path
          d="M12 30H70L91 9H149L170 30H228"
          className="loading-bus-packet"
        />
        <circle cx="12" cy="30" r="4" />
        <circle cx="228" cy="30" r="4" />
      </svg>
    </div>
  );
}

export function InlineLoadingSignal() {
  return (
    <span className="inline-loading-signal" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}
