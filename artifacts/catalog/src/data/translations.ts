export type LocalizedString = {
  en: string;
  lv: string;
  ru: string;
};

export type Translations = {
  headerSubtitle: LocalizedString;
  navProducts: LocalizedString;
  navContact: LocalizedString;
  heroTitle: LocalizedString;
  heroSubtitle: LocalizedString;
  heroBtn: LocalizedString;
  samplePrice: LocalizedString;
  wholesale5to10: LocalizedString;
  wholesale10plus: LocalizedString;
  wholesale5plus: LocalizedString;
  contactBtn: LocalizedString;
  contactHelper: LocalizedString;
  footerText: LocalizedString;
  piece: LocalizedString;
  requestMessage: LocalizedString;
  suggestBtn: LocalizedString;
  modalOpenCatalog: LocalizedString;
  modalContactUs: LocalizedString;
  modalClose: LocalizedString;
  reviewsTitle: LocalizedString;
  reviewsVideoTitle: LocalizedString;
};

export const translations: Translations = {
  headerSubtitle: {
    en: "Wholesale product catalog",
    lv: "Vairumtirdzniecības produktu katalogs",
    ru: "Оптовый каталог товаров"
  },
  navProducts: {
    en: "Products",
    lv: "Produkti",
    ru: "Товары"
  },
  navContact: {
    en: "Contact",
    lv: "Kontakti",
    ru: "Контакты"
  },
  heroTitle: {
    en: "Catalog",
    lv: "Katalogs",
    ru: "Каталог"
  },
  heroSubtitle: {
    en: "Browse our available products, sample prices and wholesale offers.",
    lv: "Apskatiet pieejamos produktus, paraugu cenas un vairumtirdzniecības piedāvājumus.",
    ru: "Ознакомьтесь с доступными товарами, ценами на образцы и оптовыми предложениями."
  },
  heroBtn: {
    en: "View Products",
    lv: "Skatīt Produktus",
    ru: "Смотреть товары"
  },
  samplePrice: {
    en: "Sample price",
    lv: "Parauga cena",
    ru: "Цена образца"
  },
  wholesale5to10: {
    en: "Wholesale 5–10 pcs",
    lv: "Vairumā 5–10 gab",
    ru: "Оптом 5–10 шт"
  },
  wholesale10plus: {
    en: "Wholesale 10+ pcs",
    lv: "Vairumā 10+ gab",
    ru: "Оптом 10+ шт"
  },
  wholesale5plus: {
    en: "Wholesale 5+ pcs",
    lv: "Vairumā 5+ gab",
    ru: "Оптом 5+ шт"
  },
  contactBtn: {
    en: "Contact to Order",
    lv: "Sazināties, lai pasūtītu",
    ru: "Связаться для заказа"
  },
  contactHelper: {
    en: "For orders and wholesale inquiries, please contact us.",
    lv: "Pasūtījumiem un vairumtirdzniecības jautājumiem lūdzam sazināties ar mums.",
    ru: "Для заказов и оптовых запросов, пожалуйста, свяжитесь с нами."
  },
  footerText: {
    en: "All rights reserved.",
    lv: "Visas tiesības aizsargātas.",
    ru: "Все права защищены."
  },
  piece: {
    en: "piece",
    lv: "gab",
    ru: "шт"
  },
  requestMessage: {
    en: "We continuously expand our product range and source new solutions for our clients.\nIf you have specific product requests, let us know — we will find the best available options at optimized pricing.",
    lv: "Mēs nepārtraukti paplašinām savu produktu klāstu un meklējam jaunus risinājumus saviem klientiem.\nJa Jums ir konkrēti produktu pieprasījumi, dariet mums zināmu — mēs atradīsim labākos pieejamos variantus par optimizētām cenām.",
    ru: "Мы постоянно расширяем ассортимент и находим новые решения для наших клиентов.\nЕсли у вас есть конкретные запросы на товары, сообщите нам — мы подберём лучшие доступные варианты по оптимальным ценам."
  },
  suggestBtn: {
    en: "Request a Product",
    lv: "Pieprasīt produktu",
    ru: "Запросить товар"
  },
  modalOpenCatalog: {
    en: "Open Catalog",
    lv: "Atvērt katalogu",
    ru: "Открыть каталог"
  },
  modalContactUs: {
    en: "Contact us",
    lv: "Sazināties",
    ru: "Связаться"
  },
  modalClose: {
    en: "Close",
    lv: "Aizvērt",
    ru: "Закрыть"
  },
  reviewsTitle: {
    en: "Customer Reviews & Product Usage",
    lv: "Klientu atsauksmes un produktu lietošana",
    ru: "Отзывы клиентов и использование продукции"
  },
  reviewsVideoTitle: {
    en: "Disposable Face Shields in use of our clients",
    lv: "Vienreizlietojamie sejas aizsargi mūsu klientu lietojumā",
    ru: "Одноразовые защитные маски для лица в использовании у наших клиентов"
  }
};
