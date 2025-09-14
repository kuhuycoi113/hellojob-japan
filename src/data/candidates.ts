
import { type Language } from "@/locales/translations";

export type Candidate = {
    id: string;
    name_ja: string;
    name_vi: string;
    name_en: string;
    gender: Record<Language, string>;
    date_of_birth: string;
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
    // Add optional fields based on user request
    hepatitis_b?: Record<Language, boolean | null>;
    financial_ability?: Record<Language, string | null>;
    interview_location?: Record<Language, string | null>;
}

const lastNames = [
    { vi: "Nguyễn", en: "Nguyen", ja: "グエン" },
    { vi: "Trần", en: "Tran", ja: "チャン" },
    { vi: "Lê", en: "Le", ja: "レー" },
    { vi: "Phạm", en: "Pham", ja: "ファム" },
    { vi: "Hoàng", en: "Hoang", ja: "ホアン" },
    { vi: "Huỳnh", en: "Huynh", ja: "フィン" },
    { vi: "Phan", en: "Phan", ja: "ファン" },
    { vi: "Vũ", en: "Vu", ja: "ヴー" },
    { vi: "Võ", en: "Vo", ja: "ヴォー" },
    { vi: "Đặng", en: "Dang", ja: "ダン" },
    { vi: "Bùi", en: "Bui", ja: "ブイ" },
    { vi: "Đỗ", en: "Do", ja: "ドー" },
    { vi: "Hồ", en: "Ho", ja: "ホー" },
    { vi: "Ngô", en: "Ngo", ja: "ゴー" },
    { vi: "Dương", en: "Duong", ja: "ズオン" },
];

const firstNames = [
    { vi: "An", en: "An", ja: "アン" },
    { vi: "Bình", en: "Binh", ja: "ビン" },
    { vi: "Chí", en: "Chi", ja: "チー" },
    { vi: "Dũng", en: "Dung", ja: "ズン" },
    { vi: "Giang", en: "Giang", ja: "ザン" },
    { vi: "Hải", en: "Hai", ja: "ハイ" },
    { vi: "Khánh", en: "Khanh", ja: "カイン" },
    { vi: "Linh", en: "Linh", ja: "リン" },
    { vi: "Minh", en: "Minh", ja: "ミン" },
    { vi: "Nam", en: "Nam", ja: "ナム" },
    { vi: "Oanh", en: "Oanh", ja: "オアイン" },
    { vi: "Phúc", en: "Phuc", ja: "フック" },
    { vi: "Quân", en: "Quan", ja: "クアン" },
    { vi: "Sơn", en: "Son", ja: "ソン" },
    { vi: "Tâm", en: "Tam", ja: "タム" },
    { vi: "Uyên", en: "Uyen", ja: "ウイエン" },
    { vi: "Vân", en: "Van", ja: "ヴァン" },
    { vi: "Xuân", en: "Xuan", ja: "スアン" },
    { vi: "Yến", en: "Yen", ja: "イエン" },
];

const genders = [
    { vi: "Nam", en: "Male", ja: "男性" },
    { vi: "Nữ", en: "Female", ja: "女性" },
    { vi: "Chưa rõ", en: "Unknown", ja: "不明" }
];

const internIndustries = {
    agriculture: {
        vi: "Nông nghiệp",
        en: "Agriculture",
        ja: "農業",
        jobs: [
            { vi: "Trồng trọt", en: "Crop Farming", ja: "耕種農業" },
            { vi: "Chăn nuôi", en: "Livestock Farming", ja: "畜産農業" },
        ]
    },
    fishery: {
        vi: "Ngư nghiệp",
        en: "Fishery",
        ja: "漁業",
        jobs: [
            { vi: "Nuôi trồng thuỷ sản", en: "Aquaculture", ja: "養殖業" },
            { vi: "Đánh bắt cá", en: "Fishing", ja: "漁業" },
        ]
    },
    construction: {
        vi: "Xây dựng", en: "Construction", ja: "建設", jobs: []
    },
    food: {
        vi: "Thực phẩm", 
        en: "Food", 
        ja: "食品", 
        jobs: [
            { vi: 'Chế biến thủy sản', en: 'Seafood Processing', ja: '水産加工' },
            { vi: 'Chế biến thịt', en: 'Meat Processing', ja: '食肉加工' },
            { vi: 'Chế biến thực phẩm & đồ ăn liền', en: 'Food & Instant Meal Processing', ja: '食品・惣菜加工'},
            { vi: 'Làm bánh & kẹo', en: 'Bakery & Confectionery', ja: '製パン・製菓'}
        ]
    },
    textiles: {
        vi: "May mặc", en: "Textiles", ja: "繊維", jobs: []
    },
    mechanics: {
        vi: "Cơ khí, kim loại", en: "Mechanics & Metal", ja: "機械・金属", jobs: []
    },
     general: {
        vi: "Sản xuất, dịch vụ tổng hợp", 
        en: "General Manufacturing & Services", 
        ja: "製造・サービス", 
        jobs: [
            { vi: "Đúc, gia công nhựa", en: "Plastic Molding & Processing", ja: "プラスチック成形・加工" },
            { vi: "In ấn, đóng gói", en: "Printing & Packaging", ja: "印刷・包装" },
            { vi: "Bảo dưỡng ô tô", en: "Automotive Maintenance", ja: "自動車整備" },
            { vi: "Lắp ráp linh kiện", en: "Component Assembly", ja: "部品組立" },
            { vi: "Vệ sinh toà nhà", en: "Building Cleaning", ja: "ビルクリーニング" },
            { vi: "Gia công kim loại", en: "Metal Processing", ja: "金属加工" },
            { vi: "Gia công gỗ", en: "Wood Processing", ja: "木材加工" }
        ]
    }
};

const skilledIndustries = {
    fishery: {
        vi: "Ngư nghiệp", 
        en: "Fishery", 
        ja: "漁業",
        jobs: [
            { vi: 'Nuôi trồng thuỷ sản', en: 'Aquaculture', ja: '養殖業' },
            { vi: 'Đánh bắt cá', en: 'Fishing', ja: '漁業' }
        ]
    },
    agriculture: { vi: "Nông nghiệp", en: "Agriculture", ja: "農業", jobs: [] },
    restaurant: { vi: "Nhà hàng", en: "Restaurant", ja: "外食", jobs: [] },
    food: {
        vi: "Thực phẩm",
        en: "Food",
        ja: "食品",
        jobs: [
            { vi: 'Chế biến thủy sản', en: 'Seafood Processing', ja: '水産加工' },
            { vi: 'Chế biến thịt', en: 'Meat Processing', ja: '食肉加工' },
            { vi: 'Chế biến thực phẩm & đồ ăn liền', en: 'Food & Instant Meal Processing', ja: '食品・惣菜加工' },
            { vi: 'Làm bánh & kẹo', en: 'Bakery & Confectionery', ja: '製パン・製菓' }
        ]
    },
    general: { vi: "Sản xuất, dịch vụ tổng hợp", en: "General Manufacturing & Services", ja: "製造・サービス", jobs: [] },
    electronics: { vi: "Điện, điện tử", en: "Electronics", ja: "電気・電子", jobs: [] },
    material: { vi: "Chế tạo Vật liệu", en: "Material Manufacturing", ja: "素材製造", jobs: [] },
    machinery: { vi: "Cơ khí, chế tạo máy", en: "Machinery Manufacturing", ja: "機械製造", jobs: [] },
    automotive: { vi: "Ô tô", en: "Automotive", ja: "自動車", jobs: [] },
    aviation: { vi: "Hàng không", en: "Aviation", ja: "航空", jobs: [] },
    transport: { vi: "Vận tải", en: "Transportation", ja: "運輸", jobs: [] },
    construction: { vi: "Xây dựng", en: "Construction", ja: "建設", jobs: [] },
    cleaning: { vi: "Vệ sinh toà nhà", en: "Building Cleaning", ja: "ビルクリーニング", jobs: [] },
    hotel: { vi: "Lưu trú, khách sạn", en: "Accommodation & Hotel", ja: "宿泊・ホテル", jobs: [] },
    caregiver: { vi: "Điều dưỡng", en: "Caregiver", ja: "介護", jobs: [] }
};


const otherSpecialties = [
    { vi: "Gia công đồ ăn", en: "Food Processing", ja: "食品加工" },
    { vi: "Hộ lý", en: "Caregiving", ja: "介護" },
    { vi: "Lắp ráp điện tử", en: "Electronics Assembly", ja: "電子組立" },
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

const financialAbilities = {
    vi: ["Đã đủ", "Cần hỗ trợ", "Đang chờ"],
    en: ["Sufficient", "Needs Support", "Pending"],
    ja: ["十分", "要支援", "保留中"],
};

const interviewLocations = {
    vi: ["Tại Nhật Bản", "Tại Việt Nam"],
    en: ["In Japan", "In Vietnam"],
    ja: ["日本国内", "ベトナム国内"],
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

    const visaKeys = Object.keys(visaTypes) as (keyof typeof visaTypes)[];
    const randomVisaKey = getRandomElement(visaKeys);
    const visaInfo = visaTypes[randomVisaKey];
    const randomVisaSubtypeIndex = Math.floor(Math.random() * visaInfo.subtypes.vi.length);
    const visaSubtype: Record<Language, string> = {
        vi: visaInfo.subtypes.vi[randomVisaSubtypeIndex],
        en: visaInfo.subtypes.en[randomVisaSubtypeIndex],
        ja: visaInfo.subtypes.ja[randomVisaSubtypeIndex],
    };
    
    let randomSpecialty: Record<Language, string>;

    if (randomVisaKey === 'intern') {
        const industryKeys = Object.keys(internIndustries) as (keyof typeof internIndustries)[];
        const randomIndustryKey = getRandomElement(industryKeys);
        const industry = internIndustries[randomIndustryKey];
        if (industry.jobs.length > 0) {
            randomSpecialty = getRandomElement(industry.jobs);
        } else {
             // Fallback for industries with no specific jobs yet
             randomSpecialty = { vi: industry.vi, en: industry.en, ja: industry.ja };
        }
    } else if (randomVisaKey === 'skilled') {
        const industryKeys = Object.keys(skilledIndustries) as (keyof typeof skilledIndustries)[];
        const randomIndustryKey = getRandomElement(industryKeys);
        const industry = skilledIndustries[randomIndustryKey];
        if (industry.jobs.length > 0) {
            randomSpecialty = getRandomElement(industry.jobs);
        } else {
            randomSpecialty = { vi: industry.vi, en: industry.en, ja: industry.ja };
        }
    }
    else {
        randomSpecialty = getRandomElement(otherSpecialties);
    }
    
    const randomLastName = getRandomElement(lastNames);
    const randomFirstName = getRandomElement(firstNames);
    const randomGender = getRandomElement(genders);

    const name_vi = `${randomLastName.vi} ${randomFirstName.vi}`;
    const name_en = `${randomLastName.en} ${randomFirstName.en}`;
    const name_ja = `${randomLastName.ja} ${randomFirstName.ja}`;

    const age = Math.floor(Math.random() * (69 - 18 + 1)) + 18; // 18-69
    const height = Math.floor(Math.random() * 30) + 150; // 150-179 cm
    const weight = Math.floor(Math.random() * 30) + 45; // 45-74 kg
    
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
    const birthMonth = Math.floor(Math.random() * 12);
    const birthDay = Math.floor(Math.random() * 28) + 1;
    const dateOfBirth = new Date(birthYear, birthMonth, birthDay);
    const formattedDateOfBirth = `${String(dateOfBirth.getDate()).padStart(2, '0')}/${String(dateOfBirth.getMonth() + 1).padStart(2, '0')}/${dateOfBirth.getFullYear()}`;

    // --- Start applying rules ---
    let hasTattoo = Math.random() > 0.8;
    let hasHepatitisB = Math.random() > 0.9;
    let financialAbility: Record<Language, string> | null = {
        vi: getRandomElement(financialAbilities.vi),
        en: getRandomElement(financialAbilities.en),
        ja: getRandomElement(financialAbilities.ja),
    };
    let interviewLocation: Record<Language, string> | null = {
        vi: getRandomElement(interviewLocations.vi),
        en: getRandomElement(interviewLocations.en),
        ja: getRandomElement(interviewLocations.ja),
    };

    const visaSubtypeEn = visaSubtype.en;

    if (["3 Go Intern", "Skilled (from Vietnam)", "Skilled (in Japan)"].includes(visaSubtypeEn)) {
         hasTattoo = false; 
        hasHepatitisB = false;
    }
    if (["New Skilled Worker", "Engineer/Specialist (from Vietnam)", "Engineer/Specialist (in Japan)"].includes(visaSubtypeEn)) {
        hasHepatitisB = false;
    }
    if (["Skilled (in Japan)", "Engineer/Specialist (in Japan)"].includes(visaSubtypeEn)) {
        financialAbility = null;
        interviewLocation = null;
    }
    
    let details_vi = `${age} tuổi - ${height} cm - ${weight} kg`;
    let details_en = `${age} years old - ${height} cm - ${weight} kg`;
    let details_ja = `${age}歳 - ${height} cm - ${weight} kg`;

    if (!["3 Go Intern", "Skilled (from Vietnam)", "Skilled (in Japan)"].includes(visaSubtypeEn)) {
         details_vi += ` - ${hasTattoo ? "Có hình xăm" : "Không hình xăm"}`;
         details_en += ` - ${hasTattoo ? "Has tattoo" : "No tattoo"}`;
         details_ja += ` - ${hasTattoo ? "刺青あり" : "刺青なし"}`;
    }

    return {
        id,
        name_ja,
        name_vi,
        name_en,
        gender: {
            vi: randomGender.vi,
            en: randomGender.en,
            ja: randomGender.ja
        },
        date_of_birth: formattedDateOfBirth,
        avatar,
        details: {
            vi: details_vi,
            en: details_en,
            ja: details_ja,
        },
        visa_type: visaSubtype,
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
        ...(hasHepatitisB && { hepatitis_b: { vi: true, en: true, ja: true } }),
        ...(financialAbility && { financial_ability: financialAbility }),
        ...(interviewLocation && { interview_location: interviewLocation }),
    };
});

    