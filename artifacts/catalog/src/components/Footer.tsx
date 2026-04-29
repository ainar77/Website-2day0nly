import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-white text-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <span className="font-bold text-lg tracking-tight mb-2">2DAYONLY</span>
        <p className="text-sm text-muted-foreground">
          &copy; {year} 2DAYONLY. {t("footerText")}
        </p>
      </div>
    </footer>
  );
}
