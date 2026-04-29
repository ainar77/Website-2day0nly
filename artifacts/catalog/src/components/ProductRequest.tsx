import { useLanguage } from "@/lib/i18n";

export function ProductRequest() {
  const { t } = useLanguage();

  return (
    <section className="px-4 pb-20 md:pb-28 bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <div className="rounded-2xl border border-border bg-white/60 backdrop-blur-sm px-6 py-10 md:px-12 md:py-14 text-center">
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
            {t("requestMessage")}
          </p>
        </div>
      </div>
    </section>
  );
}
