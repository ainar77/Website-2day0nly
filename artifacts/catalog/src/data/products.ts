import { LocalizedString } from "./translations";

export type Product = {
  id: string;
  mediaType: "image" | "video";
  mediaUrl: string;
  posterUrl?: string;
  name: LocalizedString;
  description: LocalizedString;
  samplePrice: number;
  wholesale5to10: number;
  wholesale10plus: number;
  unit?: LocalizedString;
};

/*
  HOW TO ADD A NEW PRODUCT:
  Simply add a new object to the `products` array below.
  Ensure all fields are filled out, including translations for 'name' and 'description'.
  If mediaType is "video", 'posterUrl' is recommended for the initial frame.
*/

export const products: Product[] = [
  {
    id: "prod-1",
    mediaType: "image",
    mediaUrl: "/images/product-face-shields.png",
    name: {
      en: "Disposable Face Shields",
      lv: "Vienreizlietojamie sejas aizsargi",
      ru: "Одноразовые защитные маски для лица"
    },
    description: {
      en: "Protects the client's face, eyes, and skin during haircuts and coloring. Prevents contact with hair, chemicals, and liquids.",
      lv: "Aizsargā klienta seju, acis un ādu matu griešanas un krāsošanas laikā. Novērš saskari ar matiem, ķīmiskām vielām un šķidrumiem.",
      ru: "Защищает лицо, глаза и кожу клиента во время стрижки и окрашивания. Предотвращает контакт с волосами, химикатами и жидкостями."
    },
    samplePrice: 12.00,
    wholesale5to10: 10.00,
    wholesale10plus: 8.00,
    unit: {
      en: "pack of 50",
      lv: "iepakojums (50 gab.)",
      ru: "упаковка (50 шт.)"
    }
  },
  {
    id: "prod-2",
    mediaType: "video",
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    posterUrl: "/images/product-scissors.png",
    name: {
      en: "Japanese Steel Scissors 6\"",
      lv: "Japāņu Tērauda Šķēres 6\"",
      ru: "Японские стальные ножницы 6\""
    },
    description: {
      en: "Hand-honed barber scissors providing smooth and precise cuts.",
      lv: "Roku darba frizieru šķēres, kas nodrošina gludu un precīzu griezumu.",
      ru: "Ножницы ручной заточки, обеспечивающие плавный и точный срез."
    },
    samplePrice: 120.00,
    wholesale5to10: 100.00,
    wholesale10plus: 90.00
  },
  {
    id: "prod-3",
    mediaType: "image",
    mediaUrl: "/images/product-pomade.png",
    name: {
      en: "Matte Finish Styling Pomade",
      lv: "Matētas Apdares Veidošanas Pomāde",
      ru: "Матовая помада для укладки"
    },
    description: {
      en: "Water-based pomade offering a firm hold with a natural matte finish.",
      lv: "Uz ūdens bāzes veidota pomāde, kas piedāvā stingru fiksāciju ar dabisku matētu apdari.",
      ru: "Помада на водной основе, обеспечивающая сильную фиксацию с естественным матовым финишем."
    },
    samplePrice: 15.00,
    wholesale5to10: 12.00,
    wholesale10plus: 9.50
  },
  {
    id: "prod-4",
    mediaType: "image",
    mediaUrl: "/images/product-brush.png",
    name: {
      en: "Badger Hair Shaving Brush",
      lv: "Āpša Spalvu Skūšanās Ota",
      ru: "Помазок для бритья из барсучьего ворса"
    },
    description: {
      en: "Premium shaving brush that creates a rich, warm lather.",
      lv: "Premium klases skūšanās ota, kas rada bagātīgas, siltas putas.",
      ru: "Премиальный помазок, создающий густую теплую пену."
    },
    samplePrice: 25.00,
    wholesale5to10: 20.00,
    wholesale10plus: 16.00
  },
  {
    id: "prod-5",
    mediaType: "image",
    mediaUrl: "/images/product-towels.png",
    name: {
      en: "Microfiber Salon Towels (Set of 10)",
      lv: "Mikrošķiedras Salona Dvieļi (10 gab. komplekts)",
      ru: "Микрофибровые полотенца для салона (набор из 10 шт.)"
    },
    description: {
      en: "Ultra-absorbent, quick-drying black towels designed for repeated salon use.",
      lv: "Īpaši uzsūcoši, ātri žūstoši melni dvieļi, paredzēti atkārtotai lietošanai salonos.",
      ru: "Ультра-впитывающие, быстросохнущие черные полотенца для многократного использования."
    },
    samplePrice: 35.00,
    wholesale5to10: 30.00,
    wholesale10plus: 25.00
  },
  {
    id: "prod-6",
    mediaType: "image",
    mediaUrl: "/images/product-cape.png",
    name: {
      en: "Waterproof Barber Cape",
      lv: "Ūdensnecaurlaidīgs Frizieru Apmetnis",
      ru: "Водонепроницаемый пеньюар для барбера"
    },
    description: {
      en: "Lightweight, durable cape with a snap closure. One size fits all.",
      lv: "Viegls, izturīgs apmetnis ar spiedpogu aizdari. Universāls izmērs.",
      ru: "Легкий, прочный пеньюар с застежкой-кнопкой. Универсальный размер."
    },
    samplePrice: 18.00,
    wholesale5to10: 15.00,
    wholesale10plus: 12.00
  }
];