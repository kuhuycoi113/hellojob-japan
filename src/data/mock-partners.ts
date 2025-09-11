// This is a new file.
import type { Language } from "@/locales/translations";

export type MockPartner = {
    id: string;
    name: Record<Language, string>;
    type: Record<Language, string>;
    locations: Record<Language, string>[];
    specialties: Record<Language, string>[];
};

const partnerNames = {
    union: ["Global Support", "Future Bridge", "Asahi", "Shinsei", "Chubu Tech", "Kansai Food", "Hokuriku", "Tohoku", "Shikoku"],
    supportOrg: ["Sakura", "Kaizen", "Fuji", "Harmony", "Kyushu Agri", "Community Care", "IT Link", "Hospitality Japan", "Life Support"],
    sending: ["Vietproud Manpower", "Vietnam Link", "Hoang Long", "Song Hong", "Esuhai", "Vinaconex"],
    yuryo: ["Pasona", "Recruit", "MyNavi", "Doda", "Adecco"],
    haken: ["Staff Service", "Tempstaff", "Randstad", "ManpowerGroup"]
};

const locations = [
    { vi: 'Toàn quốc', en: 'Nationwide', ja: '全国' },
    { vi: 'Tokyo', en: 'Tokyo', ja: '東京' },
    { vi: 'Osaka', en: 'Osaka', ja: '大阪' },
    { vi: 'Aichi', en: 'Aichi', ja: '愛知' },
    { vi: 'Kanagawa', en: 'Kanagawa', ja: '神奈川' },
    { vi: 'Saitama', en: 'Saitama', ja: '埼玉' },
    { vi: 'Chiba', en: 'Chiba', ja: '千葉' },
    { vi: 'Hokkaido', en: 'Hokkaido', ja: '北海道' },
    { vi: 'Fukuoka', en: 'Fukuoka', ja: '福岡' },
    { vi: 'Hyogo', en: 'Hyogo', ja: '兵庫' },
    { vi: 'Shizuoka', en: 'Shizuoka', ja: '静岡' }
];

const specialties = [
    { vi: 'Xây dựng', en: 'Construction', ja: '建設' },
    { vi: 'Cơ khí', en: 'Mechanical', ja: '機械加工' },
    { vi: 'Chế biến thực phẩm', en: 'Food Processing', ja: '食品加工' },
    { vi: 'Nông nghiệp', en: 'Agriculture', ja: '農業' },
    { vi: 'Hộ lý', en: 'Caregiving', ja: '介護' },
    { vi: 'Nhà hàng', en: 'Restaurant', ja: '外食' },
    { vi: 'Dệt may', en: 'Textiles', ja: '繊維' },
    { vi: 'Lắp ráp điện tử', en: 'Electronics', ja: '電子組立' },
    { vi: 'Bảo dưỡng ô tô', en: 'Auto Maintenance', ja: '自動車整備' },
    { vi: 'Khách sạn', en: 'Hospitality', ja: '宿泊' },
    { vi: 'Công nghệ thông tin', en: 'IT', ja: 'IT' }
];

const partnerTypes = {
    union: { vi: 'Nghiệp đoàn', en: 'Cooperative Union', ja: '協同組合' },
    supportOrg: { vi: 'Cơ quan hỗ trợ', en: 'Supporting Organization', ja: '登録支援機関' },
    sending: { vi: 'Công ty phái cử', en: 'Sending Company', ja: '送り出し機関' },
    yuryo: { vi: 'Công ty giới thiệu có phí', en: 'Paid Employment Placement', ja: '有料職業紹介' },
    haken: { vi: 'Công ty Haken', en: 'Dispatch Company', ja: '派遣会社' }
}

const getRandomElements = <T>(arr: T[], count: number): T[] => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};


const generatePartners = (
    count: number,
    typeKey: keyof typeof partnerTypes,
    idPrefix: string
): MockPartner[] => {
    const partners: MockPartner[] = [];
    const names = partnerNames[typeKey];
    
    for (let i = 0; i < count; i++) {
        const nameBase = names[i % names.length];
        const partnerNameSuffix = count > names.length ? ` ${Math.floor(i / names.length) + 1}` : '';
        const partnerName = `${nameBase}${partnerNameSuffix}`

        partners.push({
            id: `${idPrefix}-${String(i + 1).padStart(3, '0')}`,
            name: {
                vi: `${partnerTypes[typeKey].vi} ${partnerName}`,
                en: `${partnerName} ${partnerTypes[typeKey].en}`,
                ja: `${partnerName}${partnerTypes[typeKey].ja}`
            },
            type: partnerTypes[typeKey],
            locations: getRandomElements(locations, Math.floor(Math.random() * 3) + 1),
            specialties: getRandomElements(specialties, Math.floor(Math.random() * 4) + 2),
        });
    }
    return partners;
}

export const mockPartners: MockPartner[] = [
    ...generatePartners(30, 'sending', 'send'),
    ...generatePartners(50, 'supportOrg', 'support'),
    ...generatePartners(40, 'union', 'union'),
    ...generatePartners(20, 'yuryo', 'yuryo'),
    ...generatePartners(20, 'haken', 'haken')
];
