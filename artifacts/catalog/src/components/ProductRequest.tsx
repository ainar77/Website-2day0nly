import { useLanguage } from "@/lib/i18n";

export function ProductRequest() {
  const { t } = useLanguage();

  return (
    <section className="px-4 pb-10 md:pb-14 bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <div className="rounded-2xl border-2 border-neutral-800 bg-neutral-200 px-4 py-5 md:px-6 md:py-6 text-center shadow-sm">
          <p className="text-base md:text-lg leading-relaxed text-neutral-700 whitespace-pre-line">
            {t("requestMessage")}
          </p>
        </div>
      </div>
    </section>
  );
}
