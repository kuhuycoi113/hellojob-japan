
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
    prefectures: []
  },
  {
    vi: "Tohoku",
    en: "Tohoku",
    ja: "東北",
    prefectures: []
  },
  {
    vi: "Kanto",
    en: "Kanto",
    ja: "関東",
    prefectures: []
  },
  {
    vi: "Chubu",
    en: "Chubu",
    ja: "中部",
    prefectures: []
  },
  {
    vi: "Kansai",
    en: "Kansai",
    ja: "関西",
    prefectures: []
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
