import { useLanguage } from "@/lib/i18n";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export function ContactModal({ open, onClose, title, description }: ContactModalProps) {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-neutral-900 text-neutral-100 border border-neutral-700 rounded-2xl shadow-2xl max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-white text-xl tracking-tight text-center">
            {title ?? t("contactModalTitle")}
          </DialogTitle>
        </DialogHeader>

        {description && (
          <p className="text-neutral-300 text-sm leading-relaxed text-center whitespace-pre-line -mt-1">
            {description}
          </p>
        )}

        <div className="flex flex-row justify-center gap-8 pt-2 pb-2">
          <a
            href="mailto:2day0nly26@gmail.com"
            className="group flex flex-col items-center gap-3"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-800 border border-neutral-700 transition-all duration-200 group-hover:bg-neutral-700 group-hover:border-neutral-500 group-hover:shadow-lg">
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-sm font-medium text-white">{t("contactModalEmail")}</span>
              <span className="text-[11px] text-neutral-400 leading-tight">2day0nly26@gmail.com</span>
            </div>
          </a>

          <a
            href="https://wa.me/37125784274"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-800 border border-neutral-700 transition-all duration-200 group-hover:bg-neutral-700 group-hover:border-neutral-500 group-hover:shadow-lg">
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-sm font-medium text-white">{t("contactModalWhatsApp")}</span>
              <span className="text-[11px] text-neutral-400 leading-tight">+371 25784274</span>
            </div>
          </a>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center h-10 rounded-full text-sm font-medium border border-neutral-600 bg-transparent text-neutral-300 hover:bg-neutral-800 hover:border-neutral-400 transition-colors duration-200"
          >
            {t("modalClose")}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
