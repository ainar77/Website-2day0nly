import { useLanguage } from "@/lib/i18n";
import { reviews, reviewsVideo } from "@/data/reviews";

export function Reviews() {
  const { t, tl } = useLanguage();

  return (
    <section
      id="reviews"
      className="py-16 md:py-24 px-4 bg-white border-t border-border"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12 md:mb-16">
          {t("reviewsTitle")}
        </h2>

        <div className="mb-16 md:mb-20">
          <h3 className="text-sm md:text-base uppercase tracking-widest text-muted-foreground text-center mb-5">
            {t("reviewsVideoTitle")}
          </h3>
          <div className="mx-auto max-w-3xl">
            <div className="aspect-video w-full overflow-hidden rounded-xl border border-neutral-300 bg-neutral-100 shadow-sm">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster={reviewsVideo.poster}
              >
                <source src={reviewsVideo.src} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="group flex flex-col justify-between rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:border-foreground/40 hover:shadow-md"
            >
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-6">
                <span className="text-foreground/70 mr-1">“</span>
                {tl(review.text)}
                <span className="text-foreground/70 ml-1">”</span>
              </p>
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-foreground/40" aria-hidden />
                <span className="text-xs uppercase tracking-widest font-medium text-foreground/70">
                  {tl(review.clientType)}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
