import { useLanguage } from "@/lib/i18n";

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex flex-col">
          <a href="#" className="font-bold text-lg tracking-tight leading-none text-foreground">
            2DAYONLY
          </a>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {t("headerSubtitle")}
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
            {t("navProducts")}
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            {t("navContact")}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex bg-muted rounded-full p-1 text-xs font-medium">
            {(["en", "lv", "ru"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1 rounded-full uppercase transition-all duration-200 ${
                  language === lang 
                    ? "bg-white text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
