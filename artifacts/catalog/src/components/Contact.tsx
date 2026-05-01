import { useLanguage } from "@/lib/i18n";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-20 py-24 px-4 bg-white border-t border-border">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">{t("navContact")}</h2>
        <p className="text-muted-foreground mb-12 max-w-md mx-auto">
          {t("contactHelper")}
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-2">Email</span>
            <a href="mailto:2day0nly26@gmail.com" className="text-xl font-medium hover:text-muted-foreground transition-colors">
              2day0nly26@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-2">Phone / WhatsApp</span>
            <a href="tel:+37125784274" className="text-xl font-medium hover:text-muted-foreground transition-colors">
              +371 25784274
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
