
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
    height?: number;
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
    caregiver: { vi: "Điều dưỡng", en: "Caregiver", ja: "介護", jobs: [] },
    hotel: { vi: "Lưu trú, khách sạn", en: "Accommodation & Hotel", ja: "宿泊・ホテル", jobs: [] },
    cleaning: { vi: "Vệ sinh toà nhà", en: "Building Cleaning", ja: "ビルクリーニング", jobs: [] },
    transport: { vi: "Vận tải", en: "Transportation", ja: "運輸", jobs: [] },
    aviation: { vi: "Hàng không", en: "Aviation", ja: "航空", jobs: [] },
    automotive: { vi: "Ô tô", en: "Automotive", ja: "自動車", jobs: [] },
    machinery: { vi: "Cơ khí, chế tạo máy", en: "Machinery Manufacturing", ja: "機械製造", jobs: [] },
    material: { vi: "Chế tạo Vật liệu", en: "Material Manufacturing", ja: "素材製造", jobs: [] },
    electronics: { vi: "Điện, điện tử", en: "Electronics", ja: "電気・電子", jobs: [] },
    construction: { vi: "Xây dựng", en: "Construction", ja: "建設", jobs: [] },
    general: { vi: "Sản xuất, dịch vụ tổng hợp", en: "General Manufacturing & Services", ja: "製造・サービス", jobs: [] },
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
    restaurant: { vi: "Nhà hàng", en: "Restaurant", ja: "外食", jobs: [] },
    agriculture: { vi: "Nông nghiệp", en: "Agriculture", ja: "農業", jobs: [] },
    fishery: {
        vi: "Ngư nghiệp", 
        en: "Fishery", 
        ja: "漁業",
        jobs: [
            { vi: 'Nuôi trồng thuỷ sản', en: 'Aquaculture', ja: '養殖業' },
            { vi: 'Đánh bắt cá', en: 'Fishing', ja: '漁業' }
        ]
    },
};

const engineerIndustries = {
    agri_forest_fish: { vi: "Nông lâm ngư nghiệp", en: "Agriculture, Forestry, Fishery", ja: "農林水産業", jobs: [] },
    food: { vi: "Thực phẩm", en: "Food", ja: "食品", jobs: [] },
    manufacturing: { vi: "Sản xuất, chế tạo, công nghệ", en: "Manufacturing, Fabrication, Technology", ja: "製造・加工・技術", jobs: [] },
    mechanics: { vi: "Cơ khí, máy móc", en: "Mechanics, Machinery", ja: "機械・機器", jobs: [] },
    automotive: { vi: "Công nghệ ô tô", en: "Automotive Technology", ja: "自動車技術", jobs: [] },
    transport: { vi: "Vận chuyển hàng hoá", en: "Freight Transport", ja: "貨物輸送", jobs: [] },
    construction: { vi: "Xây dựng", en: "Construction", ja: "建設", jobs: [] },
    hotel: { vi: "Khách sạn, lưu trú", en: "Hotel, Accommodation", ja: "ホテル・宿泊", jobs: [] },
    medical_care: { vi: "Y tế, điều dưỡng", en: "Medical, Caregiving", ja: "医療・介護", jobs: [] },
    business_econ: { vi: "Kinh doanh, kinh tế", en: "Business, Economics", ja: "ビジネス・経済", jobs: [] },
    finance: { vi: "Tài chính, kế toán, bảo hiểm", en: "Finance, Accounting, Insurance", ja: "金融・会計・保険", jobs: [] },
    media: { 
        vi: "Báo chí, truyền thông, marketing", 
        en: "Journalism, Media, Marketing", 
        ja: "報道・メディア・マーケティング", 
        jobs: [
            { vi: "Báo chí", en: "Journalism", ja: "報道" },
            { vi: "Biên tập", en: "Editing", ja: "編集" },
            { vi: "Digital Marketing", en: "Digital Marketing", ja: "デジタルマーケティング" },
            { vi: "Marketing", en: "Marketing", ja: "マーケティング" },
            { vi: "Nhà báo", en: "Journalist", ja: "ジャーナリスト" },
            { vi: "Thiết kế Marketing", en: "Marketing Design", ja: "マーケティングデザイン" },
            { vi: "Truyền thông", en: "Media/Communications", ja: "メディア/コミュニケーション" },
            { vi: "Viết quảng cáo", en: "Copywriting", ja: "コピーライティング" }
        ] 
    },
    it: { 
        vi: "Công nghệ thông tin", 
        en: "Information Technology", 
        ja: "情報技術", 
        jobs: [
            { vi: "Blockchain", en: "Blockchain", ja: "ブロックチェーン" },
            { vi: "BrSE (Bridge System Engineer)", en: "BrSE (Bridge System Engineer)", ja: "BrSE (ブリッジシステムエンジニア)" },
            { vi: "Business Analyst (BA)", en: "Business Analyst (BA)", ja: "ビジネスアナリスト (BA)" },
            { vi: "Công nghệ thông tin", en: "Information Technology", ja: "情報技術" },
            { vi: "COO (Chief Operation Officer)", en: "COO (Chief Operation Officer)", ja: "COO (最高執行責任者)" },
            { vi: "CTO (Chief Technology Officer)", en: "CTO (Chief Technology Officer)", ja: "CTO (最高技術責任者)" },
            { vi: "ITM (Information Technical Manager)", en: "ITM (Information Technical Manager)", ja: "ITM (情報技術マネージャー)" },
            { vi: "Lập trình nhúng", en: "Embedded Programming", ja: "組み込みプログラミング" },
            { vi: "Lập trình viên", en: "Programmer", ja: "プログラマー" },
            { vi: "PM (Product Manager)", en: "PM (Product Manager)", ja: "PM (プロダクトマネージャー)" },
            { vi: "PO (Product Owner)", en: "PO (Product Owner)", ja: "PO (プロダクトオーナー)" },
            { vi: "Product Manager (PM)", en: "Product Manager (PM)", ja: "プロダクトマネージャー (PM)" },
            { vi: "Product Owner (PO)", en: "Product Owner (PO)", ja: "プロダクトオーナー (PO)" },
            { vi: "Tester", en: "Tester", ja: "テスター" },
            { vi: "Thiết kế", en: "Design", ja: "デザイン" },
            { vi: "Thiết kế UI, UX", en: "UI, UX Design", ja: "UI, UX デザイン" },
            { vi: "Trí tuệ nhân tạo", en: "Artificial Intelligence", ja: "人工知能" },
            { vi: "Vận hành web thương mại điện tử", en: "E-commerce Web Operation", ja: "ECサイト運営" }
        ] 
    },
    research: { 
        vi: "Nghiên cứu, phân tích", 
        en: "Research, Analysis", 
        ja: "研究・分析", 
        jobs: [
            { vi: "Phân tích dữ liệu", en: "Data Analysis", ja: "データ分析" },
            { vi: "Nghiên cứu thị trường", en: "Market Research", ja: "市場調査" }
        ] 
    },
    education: {
        vi: "Giáo dục, đào tạo",
        en: "Education, Training",
        ja: "教育・研修",
        jobs: [
            { vi: "Giảng dạy có chứng chỉ", en: "Teaching with certification", ja: "資格を持つ教員" },
            { vi: "Giảng dạy đại học", en: "University teaching", ja: "大学での教育" },
            { vi: "Giảng dạy ngoài cơ sở giáo dục", en: "Teaching outside educational institutions", ja: "教育機関外での教育" },
            { vi: "Giảng dạy ngôn ngữ tại Tiểu học, THCS, PTTH", en: "Language teaching at elementary, middle, and high schools", ja: "小中高校での言語教育" },
            { vi: "Giảng dạy trường dạy nghề (Senmon)", en: "Teaching at vocational schools (Senmon)", ja: "専門学校での教育" },
            { vi: "Giảng dạy trường học các loại", en: "Teaching at various types of schools", ja: "各種学校での教育" },
            { vi: "Giảng dạy trường quốc tế", en: "Teaching at international schools", ja: "国際学校での教育" },
            { vi: "Hướng dẫn nghiên cứu", en: "Research supervision", ja: "研究指導" },
            { vi: "Hướng dẫn thể thao", en: "Sports coaching", ja: "スポーツ指導" }
        ]
    },
    admin: { 
        vi: "Hành chính, văn phòng", 
        en: "Administration, Office", 
        ja: "事務・オフィス", 
        jobs: [
            { vi: "Biên dịch, phiên dịch", en: "Translation, Interpreting", ja: "翻訳・通訳" },
            { vi: "Nhân viên văn phòng", en: "Office Staff", ja: "事務員" }
        ] 
    },
    legal: { vi: "Pháp lý", en: "Legal", ja: "法務", jobs: [
            { vi: 'Chuyên viên pháp lý hành chính', en: 'Administrative Scrivener', ja: '行政書士' },
            { vi: 'Dịch vụ pháp lý', en: 'Legal Services', ja: '法律業務' },
            { vi: 'Lập văn bản tư pháp', en: 'Judicial Scrivener', ja: '司法書士' },
            { vi: 'Luật sư', en: 'Lawyer', ja: '弁護士' },
            { vi: 'Luật sư luật nước ngoài', en: 'Foreign Law Lawyer', ja: '外国法弁護士' },
            { vi: 'Luật sư nước ngoài', en: 'Foreign Lawyer', ja: '外国弁護士' },
            { vi: 'Luật sư sở hữu trí tuệ', en: 'Intellectual Property Lawyer', ja: '知的財産弁護士' },
    ] },
    arts: { vi: "Nghệ thuật, nghệ sĩ", en: "Arts, Artist", ja: "芸術・アーティスト", jobs: [
            { vi: 'Mỹ thuật gia, nhiếp ảnh gia', en: 'Artist, photographer', ja: '美術家、写真家' },
            { vi: 'Nhà văn', en: 'Writer', ja: '作家' },
            { vi: 'Nhạc sĩ, nghệ sĩ sân khấu', en: 'Musician, stage artist', ja: '音楽家、舞台芸術家' },
    ] },
    sports: { vi: "Thể dục thể thao", en: "Sports", ja: "スポーツ", jobs: [
        { vi: 'Vận động viên chuyên nghiệp', en: 'Professional athlete', ja: 'プロスポーツ選手' },
        { vi: 'Vận động viên nghiệp dư', en: 'Amateur athlete', ja: 'アマチュアスポーツ選手' },
    ] },
    professional: { vi: "Nghề có kỹ năng chuyên nghiệp", en: "Professional Occupations", ja: "専門職", jobs: [
        { vi: 'Công chức', en: 'Public Servant', ja: '公務員' },
        { vi: 'Giúp việc gia đình đặc khu', en: 'Special Zone Housekeeper', ja: '特別区域家事使用人' },
        { vi: 'Huấn luyện động vật', en: 'Animal Trainer', ja: '動物調教師' },
        { vi: 'Nấu nướng', en: 'Cooking', ja: '調理師' },
        { vi: 'Người pha chế rượu', en: 'Sommelier', ja: 'ソムリエ' },
        { vi: 'Người quản gia', en: 'Butler/Housekeeper', ja: '執事・家政婦' },
        { vi: 'Nhà ngoại giao', en: 'Diplomat', ja: '外交官' },
        { vi: 'Nhân viên tôn giáo', en: 'Religious Worker', ja: '宗教家' },
        { vi: 'Phi công', en: 'Pilot', ja: 'パイロット' }
    ] },
    semi_professional: { 
        vi: "Việc làm bán chuyên nghiệp", 
        en: "Semi-professional Occupations", 
        ja: "準専門職", 
        jobs: [
            { vi: 'Công việc mùa hè', en: 'Summer Job', ja: '夏の仕事' },
            { vi: 'Lao động kỳ nghỉ', en: 'Working Holiday', ja: 'ワーキングホリデー' },
            { vi: 'Sinh viên thực tập', en: 'Student Intern', ja: 'インターンシップ' },
            { vi: 'Trao đổi văn hóa quốc tế', en: 'International Cultural Exchange', ja: '国際文化交流' }
        ]
    }
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
    } else { // Engineer
        const industryKeys = Object.keys(engineerIndustries) as (keyof typeof engineerIndustries)[];
        const randomIndustryKey = getRandomElement(industryKeys);
        const industry = engineerIndustries[randomIndustryKey];
        if (industry.jobs.length > 0) {
            randomSpecialty = getRandomElement(industry.jobs);
        } else {
            randomSpecialty = { vi: industry.vi, en: industry.en, ja: industry.ja };
        }
    }
    
    const randomLastName = getRandomElement(lastNames);
    const randomFirstName = getRandomElement(firstNames);
    const randomGender = getRandomElement(genders);

    const name_vi = `${randomLastName.vi} ${randomFirstName.vi}`;
    const name_en = `${randomLastName.en} ${randomFirstName.en}`;
    const name_ja = `${randomLastName.ja} ${randomFirstName.ja}`;

    const age = Math.floor(Math.random() * (69 - 18 + 1)) + 18; // 18-69
    const height = Math.floor(Math.random() * (205 - 140 + 1)) + 140; // 140-205 cm
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
        height,
        ...(hasHepatitisB && { hepatitis_b: { vi: true, en: true, ja: true } }),
        ...(financialAbility && { financial_ability: financialAbility }),
        ...(interviewLocation && { interview_location: interviewLocation }),
    };
});
