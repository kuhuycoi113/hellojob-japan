
import type { Language } from "@/locales/translations";

export type Prefecture = {
  [key in Language]: string;
};

export type Region = {
  [key in Language]: string;
} & {
  prefectures: Prefecture[];
};

export const japanRegions: Region[] = [
  {
    vi: "Hokkaido",
    en: "Hokkaido",
    ja: "北海道",
    prefectures: [
      { vi: "Hokkaido", en: "Hokkaido", ja: "北海道" }
    ]
  },
  {
    vi: "Tohoku",
    en: "Tohoku",
    ja: "東北",
    prefectures: [
      { vi: "Aomori", en: "Aomori", ja: "青森" },
      { vi: "Iwate", en: "Iwate", ja: "岩手" },
      { vi: "Miyagi", en: "Miyagi", ja: "宮城" },
      { vi: "Akita", en: "Akita", ja: "秋田" },
      { vi: "Yamagata", en: "Yamagata", ja: "山形" },
      { vi: "Fukushima", en: "Fukushima", ja: "福島" }
    ]
  },
  {
    vi: "Kanto",
    en: "Kanto",
    ja: "関東",
    prefectures: [
      { vi: "Ibaraki", en: "Ibaraki", ja: "茨城" },
      { vi: "Tochigi", en: "Tochigi", ja: "栃木" },
      { vi: "Gunma", en: "Gunma", ja: "群馬" },
      { vi: "Saitama", en: "Saitama", ja: "埼玉" },
      { vi: "Chiba", en: "Chiba", ja: "千葉" },
      { vi: "Tokyo", en: "Tokyo", ja: "東京" },
      { vi: "Kanagawa", en: "Kanagawa", ja: "神奈川" }
    ]
  },
  {
    vi: "Chubu",
    en: "Chubu",
    ja: "中部",
    prefectures: [
        { vi: "Niigata", en: "Niigata", ja: "新潟" },
        { vi: "Toyama", en: "Toyama", ja: "富山" },
        { vi: "Ishikawa", en: "Ishikawa", ja: "石川" },
        { vi: "Fukui", en: "Fukui", ja: "福井" },
        { vi: "Yamanashi", en: "Yamanashi", ja: "山梨" },
        { vi: "Nagano", en: "Nagano", ja: "長野" },
        { vi: "Gifu", en: "Gifu", ja: "岐阜" },
        { vi: "Shizuoka", en: "Shizuoka", ja: "静岡" },
        { vi: "Aichi", en: "Aichi", ja: "愛知" }
    ]
  },
  {
    vi: "Kansai",
    en: "Kansai",
    ja: "関西",
    prefectures: [
      { vi: "Mie", en: "Mie", ja: "三重" },
      { vi: "Shiga", en: "Shiga", ja: "滋賀" },
      { vi: "Kyoto", en: "Kyoto", ja: "京都" },
      { vi: "Osaka", en: "Osaka", ja: "大阪" },
      { vi: "Hyogo", en: "Hyogo", ja: "兵庫" },
      { vi: "Nara", en: "Nara", ja: "奈良" },
      { vi: "Wakayama", en: "Wakayama", ja: "和歌山" }
    ]
  },
  {
    vi: "Chugoku",
    en: "Chugoku",
    ja: "中国",
    prefectures: []
  },
  {
    vi: "Shikoku",
    en: "Shikoku",
    ja: "四国",
    prefectures: []
  },
  {
    vi: "Kyushu",
    en: "Kyushu",
    ja: "九州",
    prefectures: []
  },
  {
    vi: "Okinawa",
    en: "Okinawa",
    ja: "沖縄",
    prefectures: []
  }
];
