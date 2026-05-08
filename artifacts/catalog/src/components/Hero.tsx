import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 lg:py-40 flex flex-col items-center justify-center text-center px-4 bg-white">
      <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground mb-5 font-medium">
        2DAYONLY — Wholesale
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-5 max-w-3xl leading-tight">
        {t("heroTitle")}
      </h1>
      <p className="text-base md:text-lg text-muted-foreground mb-10 font-medium tracking-wide">
        {t("heroSubtitle")}
      </p>
      <a
        href="#products"
        className="inline-flex items-center justify-center h-12 px-8 font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors duration-200"
      >
        {t("heroBtn")}
      </a>
    </section>
  );
}
