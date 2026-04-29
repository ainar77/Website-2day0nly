import { useLanguage } from "@/lib/i18n";

export function ProductRequest() {
  const { t } = useLanguage();

  return (
    <section className="px-4 pb-20 md:pb-28 bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <div className="rounded-2xl border-2 border-neutral-800 bg-neutral-200 px-6 py-10 md:px-12 md:py-14 text-center shadow-sm">
          <p className="text-base md:text-lg leading-relaxed text-neutral-700 whitespace-pre-line">
            {t("requestMessage")}
          </p>
        </div>
      </div>
    </section>
  );
}
