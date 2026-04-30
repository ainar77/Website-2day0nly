import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function SuggestBubble() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleOpenCatalog = () => {
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById("products");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed top-20 right-4 md:top-24 md:right-8 z-40 inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 border-2 border-neutral-800 px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base font-medium shadow-lg shadow-black/10 hover:bg-neutral-900 hover:text-white hover:shadow-xl hover:scale-[1.03] active:scale-100 transition-all duration-200"
        aria-label={t("suggestBtn")}
      >
        <span className="inline-block h-2 w-2 rounded-full bg-current opacity-70" aria-hidden />
        {t("suggestBtn")}
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-neutral-900 text-neutral-100 border border-neutral-700 rounded-2xl shadow-2xl max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-white text-xl tracking-tight">
              {t("suggestBtn")}
            </DialogTitle>
            <DialogDescription className="text-neutral-300 leading-relaxed pt-2 text-base whitespace-pre-line">
              {t("requestMessage")}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4 gap-2 sm:gap-2">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center h-10 px-5 rounded-full text-sm font-medium border border-neutral-600 bg-transparent text-neutral-200 hover:bg-neutral-800 hover:border-neutral-400 transition-colors duration-200"
            >
              {t("modalClose")}
            </button>
            <button
              type="button"
              onClick={handleOpenCatalog}
              className="inline-flex items-center justify-center h-10 px-5 rounded-full text-sm font-medium bg-white text-neutral-900 hover:bg-neutral-200 transition-colors duration-200"
            >
              {t("modalOpenCatalog")}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
