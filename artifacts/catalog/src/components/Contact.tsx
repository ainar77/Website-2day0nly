import { useLanguage } from "@/lib/i18n";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-4 bg-white border-t border-border">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">{t("navContact")}</h2>
        <p className="text-muted-foreground mb-12 max-w-md mx-auto">
          {t("contactHelper")}
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-2">Email</span>
            <a href="mailto:info@2dayonly.com" className="text-xl font-medium hover:text-muted-foreground transition-colors">
              info@2dayonly.com
            </a>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-2">Phone / WhatsApp</span>
            <a href="tel:+37120000000" className="text-xl font-medium hover:text-muted-foreground transition-colors">
              +371 20 000 000
            </a>
          </div>
        </div>

        <div className="mt-16">
          <a href="#" className="inline-block text-sm uppercase tracking-widest font-medium hover:text-muted-foreground transition-colors underline underline-offset-4">
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
