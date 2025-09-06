import { type Language } from "@/locales/translations";

export type Candidate = {
    id: string;
    name_ja: string;
    name_vi: string;
    avatar: string;
    details: Record<Language, string>;
    visa_type: Record<Language, string>;
    specialty: Record<Language, string>;
    desired_salary: Record<Language, string>;
    jobs: {
        count: number;
        images: string[];
    };
    created_date: string;
}

const lastNames = [
    { vi: "Nguyễn", ja: "グエン" },
    { vi: "Trần", ja: "チャン" },
    { vi: "Lê", ja: "レー" },
    { vi: "Phạm", ja: "ファム" },
    { vi: "Hoàng", ja: "ホアン" },
    { vi: "Huỳnh", ja: "フィン" },
    { vi: "Phan", ja: "ファン" },
    { vi: "Vũ", ja: "ヴー" },
    { vi: "Võ", ja: "ヴォー" },
    { vi: "Đặng", ja: "ダン" },
    { vi: "Bùi", ja: "ブイ" },
    { vi: "Đỗ", ja: "ドー" },
    { vi: "Hồ", ja: "ホー" },
    { vi: "Ngô", ja: "ゴー" },
    { vi: "Dương", ja: "ズオン" },
];

const firstNames = [
    { vi: "An", ja: "アン" },
    { vi: "Bình", ja: "ビン" },
    { vi: "Chí", ja: "チー" },
    { vi: "Dũng", ja: "ズン" },
    { vi: "Giang", ja: "ザン" },
    { vi: "Hải", ja: "ハイ" },
    { vi: "Khánh", ja: "カイン" },
    { vi: "Linh", ja: "リン" },
    { vi: "Minh", ja: "ミン" },
    { vi: "Nam", ja: "ナム" },
    { vi: "Oanh", ja: "オアイン" },
    { vi: "Phúc", ja: "フック" },
    { vi: "Quân", ja: "クアン" },
    { vi: "Sơn", ja: "ソン" },
    { vi: "Tâm", ja: "タム" },
    { vi: "Uyên", ja: "ウイエン" },
    { vi: "Vân", ja: "ヴァン" },
    { vi: "Xuân", ja: "スアン" },
    { vi: "Yến", ja: "イエン" },
];


const specialties = [
    { vi: "Đóng gói công nghiệp", en: "Industrial Packaging", ja: "工業包装" },
    { vi: "Gia công đồ ăn", en: "Food Processing", ja: "食品加工" },
    { vi: "Xây dựng", en: "Construction", ja: "建設" },
    { vi: "Nông nghiệp", en: "Agriculture", ja: "農業" },
    { vi: "Cơ khí", en: "Mechanics", ja: "機械加工" },
    { vi: "Hộ lý", en: "Caregiving", ja: "介護" },
    { vi: "Lắp ráp điện tử", en: "Electronics Assembly", ja: "電子組立" },
    { vi: "Dệt may", en: "Textiles", ja: "繊維" },
];

const visaTypes = {
    intern: {
        vi: "Thực tập sinh kỹ năng",
        en: "Technical Intern Trainee",
        ja: "技能実習生",
        subtypes: {
            vi: ["Thực tập sinh 3 năm", "Thực tập sinh 1 năm", "Thực tập sinh 3 Go"],
            en: ["3-Year Intern", "1-Year Intern", "3 Go Intern"],
            ja: ["技能実習3年", "技能実習1年", "技能実習3号"],
        }
    },
    skilled: {
        vi: "Kỹ năng đặc định",
        en: "Specified Skilled Worker",
        ja: "特定技能",
        subtypes: {
            vi: ["Đặc định đầu Nhật", "Đặc định đầu Việt", "Đặc định đi mới"],
            en: ["Skilled (in Japan)", "Skilled (from Vietnam)", "New Skilled Worker"],
            ja: ["特定技能（国内）", "特定技能（国外）", "特定技能（新規）"],
        }
    },
    engineer: {
        vi: "Kỹ sư, tri thức",
        en: "Engineer/Specialist",
        ja: "技術・人文知識・国際業務",
        subtypes: {
            vi: ["Kỹ sư, tri thức đầu Nhật", "Kỹ sư, tri thức đầu Việt"],
            en: ["Engineer/Specialist (in Japan)", "Engineer/Specialist (from Vietnam)"],
            ja: ["技術・人文知識・国際業務（国内）", "技術・人文知識・国際業務（国外）"],
        }
    }
}

const desiredSalaries = {
    vi: ["Phí giới thiệu", "Thương lượng", "20 vạn Yên", "22 vạn Yên", "25 vạn Yên"],
    en: ["Referral Fee", "Negotiable", "200,000 JPY", "220,000 JPY", "250,000 JPY"],
    ja: ["紹介料", "交渉可能", "20万円", "22万円", "25万円"],
};

function getRandomElement<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomDate(start: Date, end: Date): string {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export const allCandidates: Candidate[] = Array.from({ length: 100 }, (_, i) => {
    const id = `VN${String(i + 1).padStart(5, '0')}`;
    const avatar = `https://i.pravatar.cc/150?u=candidate${i}`;

    const randomSpecialty = getRandomElement(specialties);
    
    const visaKeys = Object.keys(visaTypes) as (keyof typeof visaTypes)[];
    const randomVisaKey = getRandomElement(visaKeys);
    const visaInfo = visaTypes[randomVisaKey];
    const randomVisaSubtypeIndex = Math.floor(Math.random() * visaInfo.subtypes.vi.length);
    
    const randomLastName = getRandomElement(lastNames);
    const randomFirstName = getRandomElement(firstNames);

    const name_vi = `${randomLastName.vi} ${randomFirstName.vi}`;
    const name_ja = `${randomLastName.ja} ${randomFirstName.ja}`;

    const age = Math.floor(Math.random() * 20) + 20; // 20-39
    const height = Math.floor(Math.random() * 30) + 150; // 150-179 cm
    const weight = Math.floor(Math.random() * 30) + 45; // 45-74 kg
    const hasTattoo = Math.random() > 0.8;

    return {
        id,
        name_ja,
        name_vi,
        avatar,
        details: {
            vi: `${age} tuổi - ${height} cm - ${weight} kg - ${hasTattoo ? "Có hình xăm" : "Không hình xăm"}`,
            en: `${age} years old - ${height} cm - ${weight} kg - ${hasTattoo ? "Has tattoo" : "No tattoo"}`,
            ja: `${age}歳 - ${height} cm - ${weight} kg - ${hasTattoo ? "刺青あり" : "刺青なし"}`,
        },
        visa_type: {
            vi: visaInfo.subtypes.vi[randomVisaSubtypeIndex],
            en: visaInfo.subtypes.en[randomVisaSubtypeIndex],
            ja: visaInfo.subtypes.ja[randomVisaSubtypeIndex],
        },
        specialty: {
            vi: randomSpecialty.vi,
            en: randomSpecialty.en,
            ja: randomSpecialty.ja,
        },
        desired_salary: {
            vi: getRandomElement(desiredSalaries.vi),
            en: getRandomElement(desiredSalaries.en),
            ja: getRandomElement(desiredSalaries.ja),
        },
        jobs: {
            count: Math.floor(Math.random() * 10) + 1,
            images: Array.from({ length: 3 }, (_, j) => `https://picsum.photos/50?random=job${i}${j}`)
        },
        created_date: generateRandomDate(new Date(2023, 0, 1), new Date()),
    };
});
