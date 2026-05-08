import { LocalizedString } from "./translations";

export type Feature = {
  id: string;
  icon: string;
  title: LocalizedString;
  description: LocalizedString;
};

export const aboutFeatures: Feature[] = [
  {
    id: "pricing",
    icon: "pricing",
    title: { en: "Lower wholesale prices", lv: "Zemākas vairumtirdzniecības cenas", ru: "Низкие оптовые цены" },
    description: { en: "Competitive rates optimized for salons buying regularly.", lv: "Konkurētspējīgas cenas saloniem, kas pērk regulāri.", ru: "Конкурентные цены для салонов, которые закупают регулярно." },
  },
  {
    id: "communication",
    icon: "communication",
    title: { en: "Fast communication", lv: "Ātra komunikācija", ru: "Быстрая коммуникация" },
    description: { en: "We respond quickly via WhatsApp or email — no waiting.", lv: "Ātri atbildam WhatsApp vai e-pastā — bez gaidīšanas.", ru: "Быстро отвечаем в WhatsApp или по почте — без ожиданий." },
  },
  {
    id: "delivery",
    icon: "delivery",
    title: { en: "Local delivery", lv: "Vietējā piegāde", ru: "Локальная доставка" },
    description: { en: "Fast and reliable delivery within Latvia.", lv: "Ātra un uzticama piegāde visā Latvijā.", ru: "Быстрая и надёжная доставка по Латвии." },
  },
  {
    id: "quality",
    icon: "quality",
    title: { en: "Tested product quality", lv: "Pārbaudīta produktu kvalitāte", ru: "Проверенное качество продукции" },
    description: { en: "Every product we carry has been vetted before listing.", lv: "Katrs produkts tiek pārbaudīts pirms iekļaušanas katalogā.", ru: "Каждый товар проходит проверку перед попаданием в каталог." },
  },
  {
    id: "quantities",
    icon: "quantities",
    title: { en: "Flexible quantities", lv: "Elastīgi daudzumi", ru: "Гибкие объёмы" },
    description: { en: "Order what you need — small batches or large volumes.", lv: "Pasūtiet tik, cik nepieciešams — mazus vai lielus daudzumus.", ru: "Заказывайте сколько нужно — малые партии или большие объёмы." },
  },
  {
    id: "offers",
    icon: "offers",
    title: { en: "Special offers", lv: "Īpašie piedāvājumi", ru: "Специальные предложения" },
    description: { en: "Regular deals and new product introductions for loyal clients.", lv: "Regulāri piedāvājumi un jauni produkti uzticamiem klientiem.", ru: "Регулярные акции и новинки для постоянных клиентов." },
  },
];
