import { useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { reviewsVideo } from "@/data/reviews";

export function Reviews() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleToggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => undefined);
    } else {
      v.pause();
    }
  };

  return (
    <section
      id="reviews"
      className="py-16 md:py-24 px-4 bg-white border-t border-border"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12 md:mb-16">
          {t("reviewsTitle")}
        </h2>

        <div className="flex flex-col items-center mb-8">
          <span className="h-px w-10 bg-foreground/40 mb-4" aria-hidden />
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-center text-foreground max-w-2xl">
            {t("reviewsVideoTitle")}
          </h3>
        </div>
        <div className="mx-auto max-w-3xl">
          <div
            className="group relative w-full overflow-hidden rounded-xl border border-neutral-300 bg-neutral-100 shadow-sm cursor-pointer"
            onClick={handleToggle}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                handleToggle();
              }
            }}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            <video
              ref={videoRef}
              className="block w-full h-auto"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={reviewsVideo.poster}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={reviewsVideo.src} type="video/mp4" />
            </video>
            <div
              className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            >
              <div className="h-10 w-10 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center">
                {isPlaying ? (
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="currentColor" aria-hidden>
                    <rect x="6" y="5" width="4" height="14" rx="1" />
                    <rect x="14" y="5" width="4" height="14" rx="1" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-white ml-0.5" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
