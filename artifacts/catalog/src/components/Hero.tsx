import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 lg:py-40 flex flex-col items-center justify-center text-center px-4 bg-white">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground mb-6">
        {t("heroTitle")}
      </h1>
      <p className="max-w-[600px] text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
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
