import { LocalizedString } from "./translations";

export type Review = {
  id: string;
  text: LocalizedString;
  clientType: LocalizedString;
};

/*
  HOW TO ADD A NEW REVIEW:
  Append a new object to the `reviews` array below.
  Each review needs short text and a client type, both translated for en, lv, ru.
*/

export const reviews: Review[] = [
  {
    id: "review-1",
    text: {
      en: "Great quality at a fair wholesale price. The face shields are a daily must-have for our team.",
      lv: "Lieliska kvalitāte par godīgu vairumtirdzniecības cenu. Sejas aizsargi ir mūsu komandas ikdienas nepieciešamība.",
      ru: "Отличное качество по справедливой оптовой цене. Защитные маски — ежедневная необходимость для нашей команды."
    },
    clientType: {
      en: "Barbershop",
      lv: "Bārbeŗšops",
      ru: "Барбершоп"
    }
  },
  {
    id: "review-2",
    text: {
      en: "Reliable supplier. Orders arrive quickly and the products feel premium even at wholesale tier prices.",
      lv: "Uzticams piegādātājs. Pasūtījumi pienāk ātri, un produkti šķiet kvalitatīvi pat vairumtirdzniecības cenās.",
      ru: "Надёжный поставщик. Заказы приходят быстро, а товары ощущаются премиальными даже по оптовым ценам."
    },
    clientType: {
      en: "Hair Salon",
      lv: "Frizētava",
      ru: "Парикмахерская"
    }
  },
  {
    id: "review-3",
    text: {
      en: "The hair-cutting scarves and aluminium foil are exactly what we needed. Clean, simple, professional.",
      lv: "Matu griešanas apkakles un alumīnija folija ir tieši tas, kas mums bija vajadzīgs. Tīri, vienkārši, profesionāli.",
      ru: "Воротнички для стрижки и алюминиевая фольга — именно то, что нам было нужно. Чисто, просто, профессионально."
    },
    clientType: {
      en: "Beauty Studio",
      lv: "Skaistuma studija",
      ru: "Студия красоты"
    }
  }
];

/*
  HOW TO REPLACE THE REVIEWS VIDEO:
  - Update `reviewsVideo.src` with a direct .mp4 URL (or local path under /videos/).
  - Optionally set `reviewsVideo.poster` to a still image shown before play.
*/
export const reviewsVideo = {
  src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  poster: "/images/product-face-shields.png"
};
