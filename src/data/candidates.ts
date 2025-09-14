

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
    desired_net_salary?: Record<Language, string>;
    education_level?: Record<Language, string>;
    jobs: {
        count: number;
        images: string[];
    };
    created_date: string;
    height?: number;
    hepatitis_b?: Record<Language, boolean | null>;
    financial_ability?: Record<Language, string | null>;
    interview_location?: Record<Language, string | null>;
    tattoo?: Record<Language, string | null>;
    specialConditions?: {
        isUrgent: boolean;
        canDoFactory: boolean;
        canDoOutdoor: boolean;
        wantsGinou2: boolean;
        wantsToChangeJob: boolean;
    };
    language_ability?: {
        language: Record<Language, string>;
        level: Record<Language, string> | null;
    } | null;
    years_of_experience?: Record<Language, string>;
    ginou_remaining_period?: Record<Language, string> | null;
    desired_work_shift?: Record<Language, string>;
    vision?: Record<Language, string>;
    dominant_hand?: Record<Language, string>;
    hometown?: Record<Language, string>;
    current_residence?: Record<Language, string>;
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

const educationLevels = [
    { vi: "Trung học cơ sở", en: "Junior High School", ja: "中学校" },
    { vi: "Phổ thông trung học", en: "High School", ja: "高等学校" },
    { vi: "Trung cấp", en: "Vocational School", ja: "中級学校" },
    { vi: "Cao đẳng", en: "College", ja: "短期大学" },
    { vi: "Đại học", en: "University", ja: "大学" },
    { vi: "Cao học", en: "Master's Degree", ja: "大学院" },
    { vi: "Tiến sĩ", en: "Doctorate", ja: "博士" },
    { vi: "Senmon", en: "Specialized Training College", ja: "専門学校" },
    { vi: "Tanki-dai", en: "Junior College", ja: "短期大学" },
    { vi: "Daigaku", en: "University", ja: "大学" },
    { vi: "Daigaku-in", en: "Graduate School", ja: "大学院" },
    { vi: "Hakashi", en: "Doctorate", ja: "博士" }
];

const yearsOfExperience = [
    { vi: "Trên 0,5 năm", en: "Over 0.5 years", ja: "0.5年以上" },
    { vi: "Trên 1 năm", en: "Over 1 year", ja: "1年以上" },
    { vi: "Trên 1,5 năm", en: "Over 1.5 years", ja: "1.5年以上" },
    { vi: "Trên 2 năm", en: "Over 2 years", ja: "2年以上" },
    { vi: "Trên 2,5 năm", en: "Over 2.5 years", ja: "2.5年以上" },
    { vi: "Trên 3 năm", en: "Over 3 years", ja: "3年以上" },
    { vi: "Trên 3,5 năm", en: "Over 3.5 years", ja: "3.5年以上" },
    { vi: "Trên 4 năm", en: "Over 4 years", ja: "4年以上" },
    { vi: "Trên 4,5 năm", en: "Over 4.5 years", ja: "4.5年以上" },
    { vi: "Trên 5 năm", en: "Over 5 years", ja: "5年以上" },
];

const ginouRemainingPeriods = [
    { vi: "Trên 0,5 năm", en: "Over 0.5 years", ja: "0.5年以上" },
    { vi: "Trên 1 năm", en: "Over 1 year", ja: "1年以上" },
    { vi: "Trên 1,5 năm", en: "Over 1.5 years", ja: "1.5年以上" },
    { vi: "Trên 2 năm", en: "Over 2 years", ja: "2年以上" },
    { vi: "Trên 2,5 năm", en: "Over 2.5 years", ja: "2.5年以上" },
    { vi: "Trên 3 năm", en: "Over 3 years", ja: "3年以上" },
    { vi: "Trên 3,5 năm", en: "Over 3.5 years", ja: "3.5年以上" },
    { vi: "Trên 4 năm", en: "Over 4 years", ja: "4年以上" },
    { vi: "Trên 4,5 năm", en: "Over 4.5 years", ja: "4.5年以上" }
];

const desiredWorkShifts = [
    { vi: 'Ca ngày (thường 08:00-17:00 hoặc 09:00-18:00)', en: 'Day shift (usually 08:00-17:00 or 09:00-18:00)', ja: '日勤 (通常 08:00-17:00 または 09:00-18:00)' },
    { vi: 'Ca chiều/tối (thường 16:00-24:00 hoặc 17:00-01:00)', en: 'Afternoon/Evening shift (usually 16:00-24:00 or 17:00-01:00)', ja: '夕勤/夜勤 (通常 16:00-24:00 または 17:00-01:00)' },
    { vi: 'Ca đêm (thường 24:00-08:00)', en: 'Night shift (usually 24:00-08:00)', ja: '深夜勤 (通常 24:00-08:00)' },
    { vi: 'Ca luân phiên (chia ca sáng, chiều và đêm; luân phiên tuần tháng)', en: 'Rotating shift (morning, afternoon, night; weekly/monthly rotation)', ja: '交替制 (日勤、夕勤、深夜勤の交代制；週/月ごとのローテーション)' },
    { vi: 'Ca 2-2-3 (làm 2 ngày, nghỉ 2 ngày, làm 3 ngày và lặp lại)', en: '2-2-3 shift (work 2, off 2, work 3, repeat)', ja: '2-2-3勤務 (2日勤務、2日休み、3日勤務、繰り返し)' },
    { vi: 'Ca 4-3-3 (làm 4 ngày, nghỉ 3 ngày và tiếp tục 3 ngày nghỉ)', en: '4-3-3 shift (work 4, off 3 and continue 3 days off)', ja: '4勤3休制 (4日勤務、3日休み、そして3日連続休暇)' },
    { vi: 'Nghỉ thứ 7, Chủ Nhật', en: 'Off on Saturday, Sunday', ja: '土日休み' },
    { vi: 'Nghỉ định kỳ trong tuần', en: 'Regular days off during the week', ja: '週休2日制' },
    { vi: 'Khác', en: 'Other', ja: 'その他' }
];

const visions = [
    { vi: "20/10", en: "20/10", ja: "2.0" },
    { vi: "15/10", en: "15/10", ja: "1.5" },
    { vi: "10/10", en: "10/10", ja: "1.0" },
    { vi: "9/10", en: "9/10", ja: "0.9" },
    { vi: "8/10", en: "8/10", ja: "0.8" },
    { vi: "7/10", en: "7/10", ja: "0.7" },
    { vi: "6/10", en: "6/10", ja: "0.6" },
    { vi: "5/10", en: "5/10", ja: "0.5" },
    { vi: "4/10", en: "4/10", ja: "0.4" },
    { vi: "3/10", en: "3/10", ja: "0.3" },
    { vi: "2/10", en: "2/10", ja: "0.2" },
    { vi: "1/10", en: "1/10", ja: "0.1" },
    { vi: "Cận thị", en: "Myopia", ja: "近視" },
    { vi: "Viễn thị", en: "Hyperopia", ja: "遠視" },
    { vi: "Loạn thị", en: "Astigmatism", ja: "乱視" },
    { vi: "Mù màu", en: "Color Blindness", ja: "色覚異常" },
];

const dominantHands = [
    { vi: "Tay phải", en: "Right-handed", ja: "右利き" },
    { vi: "Tay trái", en: "Left-handed", ja: "左利き" },
    { vi: "Cả hai tay", en: "Ambidextrous", ja: "両利き" },
];

const hometowns = [
    { vi: "An Giang", en: "An Giang", ja: "アンザン" },
    { vi: "Bắc Ninh", en: "Bac Ninh", ja: "バクニン" },
    { vi: "Cao Bằng", en: "Cao Bang", ja: "カオバン" },
    { vi: "Cà Mau", en: "Ca Mau", ja: "カマウ" },
    { vi: "Cần Thơ", en: "Can Tho", ja: "カントー" },
    { vi: "Đà Nẵng", en: "Da Nang", ja: "ダナン" },
    { vi: "Điện Biên", en: "Dien Bien", ja: "ディエンビエン" },
    { vi: "Đồng Nai", en: "Dong Nai", ja: "ドンナイ" },
    { vi: "Đồng Tháp", en: "Dong Thap", ja: "ドンタップ" },
    { vi: "Đắk Lắk", en: "Dak Lak", ja: "ダクラク" },
    { vi: "Gia Lai", en: "Gia Lai", ja: "ザライ" },
    { vi: "Hà Nội", en: "Hanoi", ja: "ハノイ" },
    { vi: "Hà Tĩnh", en: "Ha Tinh", ja: "ハティン" },
    { vi: "Hải Phòng", en: "Hai Phong", ja: "ハイフォン" },
    { vi: "Hưng Yên", en: "Hung Yen", ja: "フンイエン" },
    { vi: "Huế", en: "Hue", ja: "フエ" },
    { vi: "Khánh Hòa", en: "Khanh Hoa", ja: "カインホア" },
    { vi: "Lai Châu", en: "Lai Chau", ja: "ライチャウ" },
    { vi: "Lào Cai", en: "Lao Cai", ja: "ラオカイ" },
    { vi: "Lạng Sơn", en: "Lang Son", ja: "ランソン" },
    { vi: "Lâm Đồng", en: "Lam Dong", ja: "ラムドン" },
    { vi: "Nghệ An", en: "Nghe An", ja: "ゲアン" },
    { vi: "Ninh Bình", en: "Ninh Binh", ja: "ニンビン" },
    { vi: "Phú Thọ", en: "Phu Tho", ja: "フート" },
    { vi: "Quảng Ngãi", en: "Quang Ngai", ja: "クアンガイ" },
    { vi: "Quảng Ninh", en: "Quang Ninh", ja: "クアンニン" },
    { vi: "Quảng Trị", en: "Quang Tri", ja: "クアンチ" },
    { vi: "Sơn La", en: "Son La", ja: "ソンラ" },
    { vi: "Tây Ninh", en: "Tay Ninh", ja: "タイニン" },
    { vi: "Thanh Hóa", en: "Thanh Hoa", ja: "タインホア" },
    { vi: "Thành phố Hồ Chí Minh", en: "Ho Chi Minh City", ja: "ホーチミン市" },
    { vi: "Thái Nguyên", en: "Thai Nguyen", ja: "タイグエン" },
    { vi: "Tuyên Quang", en: "Tuyen Quang", ja: "トゥエンクアン" },
    { vi: "Vĩnh Long", en: "Vinh Long", ja: "ヴィンロン" }
];

const currentResidences = [
    { vi: "Việt Nam", en: "Vietnam", ja: "ベトナム" },
    { vi: "Nhật Bản", en: "Japan", ja: "日本" },
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

const financialAbilities = {
    vi: ["Đã đủ", "Cần hỗ trợ", "Đang chờ"],
    en: ["Sufficient", "Needs Support", "Pending"],
    ja: ["十分", "要支援", "保留中"],
};

const interviewLocations = {
    vi: ["Phỏng vấn tại Công ty", "Hà Nội", "Thành phố Hồ Chí Minh", "Đà Nẵng", "Phỏng vấn Online"],
    en: ["Interview at Company", "Hanoi", "Ho Chi Minh City", "Da Nang", "Online Interview"],
    ja: ["会社で面接", "ハノイ", "ホーチミン市", "ダナン", "オンライン面接"],
};

const tattoos = {
    none: { vi: "Không hình xăm", en: "No tattoo", ja: "刺青なし" },
    small: { vi: "Có xăm nhỏ (kín)", en: "Has small (hidden) tattoo", ja: "小さい刺青あり（隠せる）" },
    large: { vi: "Có xăm to (lộ)", en: "Has large (visible) tattoo", ja: "大きい刺青あり（見える）" },
};

const japaneseLevels = [
    { vi: "JLPT N5", en: "JLPT N5", ja: "JLPT N5" },
    { vi: "JLPT N4", en: "JLPT N4", ja: "JLPT N4" },
    { vi: "JLPT N3", en: "JLPT N3", ja: "JLPT N3" },
    { vi: "JLPT N2", en: "JLPT N2", ja: "JLPT N2" },
    { vi: "JLPT N1", en: "JLPT N1", ja: "JLPT N1" },
    { vi: "Kaiwa N5", en: "Conversational N5", ja: "会話N5" },
    { vi: "Kaiwa N4", en: "Conversational N4", ja: "会話N4" },
    { vi: "Kaiwa N3", en: "Conversational N3", ja: "会話N3" },
    { vi: "Kaiwa N2", en: "Conversational N2", ja: "会話N2" },
    { vi: "Kaiwa N1", en: "Conversational N1", ja: "会話N1" },
    { vi: "Trình độ tương đương N5", en: "N5 Equivalent", ja: "N5相当" },
    { vi: "Trình độ tương đương N4", en: "N4 Equivalent", ja: "N4相当" },
    { vi: "Trình độ tương đương N3", en: "N3 Equivalent", ja: "N3相当" },
    { vi: "Trình độ tương đương N2", en: "N2 Equivalent", ja: "N2相当" },
    { vi: "Trình độ tương đương N1", en: "N1 Equivalent", ja: "N1相当" },
];

const englishLevels = [
    { vi: "TOEIC 900", en: "TOEIC 900", ja: "TOEIC 900" },
    { vi: "TOEIC 800", en: "TOEIC 800", ja: "TOEIC 800" },
    { vi: "TOEIC 700", en: "TOEIC 700", ja: "TOEIC 700" },
    { vi: "TOEIC 600", en: "TOEIC 600", ja: "TOEIC 600" },
    { vi: "TOEIC 500", en: "TOEIC 500", ja: "TOEIC 500" },
    { vi: "TOEIC 400", en: "TOEIC 400", ja: "TOEIC 400" },
    { vi: "IELTS 9.0", en: "IELTS 9.0", ja: "IELTS 9.0" },
    { vi: "IELTS 8.0", en: "IELTS 8.0", ja: "IELTS 8.0" },
    { vi: "IELTS 7.0", en: "IELTS 7.0", ja: "IELTS 7.0" },
    { vi: "IELTS 6.0", en: "IELTS 6.0", ja: "IELTS 6.0" },
    { vi: "IELTS 5.0", en: "IELTS 5.0", ja: "IELTS 5.0" },
    { vi: "IELTS 4.0", en: "IELTS 4.0", ja: "IELTS 4.0" },
    { vi: "Giao tiếp IELTS 9.0", en: "Conversational IELTS 9.0", ja: "会話IELTS 9.0" },
    { vi: "Giao tiếp IELTS 8.0", en: "Conversational IELTS 8.0", ja: "会話IELTS 8.0" },
    { vi: "Giao tiếp IELTS 7.0", en: "Conversational IELTS 7.0", ja: "会話IELTS 7.0" },
    { vi: "Giao tiếp IELTS 6.0", en: "Conversational IELTS 6.0", ja: "会話IELTS 6.0" },
    { vi: "Giao tiếp IELTS 5.0", en: "Conversational IELTS 5.0", ja: "会話IELTS 5.0" },
    { vi: "Giao tiếp IELTS 4.0", en: "Conversational IELTS 4.0", ja: "会話IELTS 4.0" },
    { vi: "Trình độ tương đương 9.0", en: "Equivalent 9.0", ja: "9.0相当" },
    { vi: "Trình độ tương đương 8.0", en: "Equivalent 8.0", ja: "8.0相当" },
    { vi: "Trình độ tương đương 7.0", en: "Equivalent 7.0", ja: "7.0相当" },
    { vi: "Trình độ tương đương 6.0", en: "Equivalent 6.0", ja: "6.0相当" },
    { vi: "Trình độ tương đương 5.0", en: "Equivalent 5.0", ja: "5.0相当" },
    { vi: "Trình độ tương đương 4.0", en: "Equivalent 4.0", ja: "4.0相当" },
];


const languageAbilities = [
    {
        language: { vi: "Không biết ngoại ngữ", en: "No foreign language", ja: "外国語ができない" },
        level: { vi: "Không biết tiếng", en: "Does not know the language", ja: "言語ができない" }
    },
    {
        language: { vi: "Tiếng Nhật", en: "Japanese", ja: "日本語" },
        level: null 
    },
    {
        language: { vi: "Tiếng Anh", en: "English", ja: "英語" },
        level: null
    }
];

function getRandomSalary(visaTypeKey: keyof typeof visaTypes): Record<Language, string> {
    let min: number, max: number;

    switch (visaTypeKey) {
        case 'intern':
            min = 120000;
            max = 500000;
            break;
        case 'skilled':
            min = 150000;
            max = 1500000;
            break;
        case 'engineer':
            min = 160000;
            max = 10000000;
            break;
        default:
            min = 150000;
            max = 300000;
    }
    
    const salary = Math.floor(Math.random() * (max - min + 1)) + min;
    const salaryInMan = salary / 10000;
    
    const formatToMan = (value: number) => {
        if (value >= 1) {
            return `${Math.round(value)}万`;
        }
        return `${value.toFixed(1)}万`;
    };

    return {
        vi: `${salary.toLocaleString('de-DE')} Yên`,
        en: `${salary.toLocaleString('en-US')} JPY`,
        ja: `${formatToMan(salaryInMan)}円`,
    };
}

function getRandomNetSalary(visaTypeKey: keyof typeof visaTypes): Record<Language, string> {
    let min: number, max: number;

    switch (visaTypeKey) {
        case 'intern':
            min = 100000;
            max = 400000;
            break;
        case 'skilled':
            min = 120000;
            max = 1300000;
            break;
        case 'engineer':
            min = 120000;
            max = 9000000;
            break;
        default:
            min = 120000;
            max = 250000;
    }
    
    const salary = Math.floor(Math.random() * (max - min + 1)) + min;
    const salaryInMan = salary / 10000;
    
    const formatToMan = (value: number) => {
        if (value >= 1) {
            return `${Math.round(value)}万`;
        }
        return `${value.toFixed(1)}万`;
    };

    return {
        vi: `${salary.toLocaleString('de-DE')} Yên`,
        en: `${salary.toLocaleString('en-US')} JPY`,
        ja: `${formatToMan(salaryInMan)}円`,
    };
}


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
    const combinedSpecialties = [...Object.values(internIndustries).flatMap(ind => ind.jobs), ...otherSpecialties];

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
    const randomEducation = getRandomElement(educationLevels);
    const randomExperience = getRandomElement(yearsOfExperience);
    
    let randomLanguageAbility = {...getRandomElement(languageAbilities)};
    if (randomLanguageAbility.language.en === 'Japanese') {
        randomLanguageAbility.level = getRandomElement(japaneseLevels);
    } else if (randomLanguageAbility.language.en === 'English') {
        randomLanguageAbility.level = getRandomElement(englishLevels);
    }


    const name_vi = `${randomLastName.vi} ${randomFirstName.vi}`;
    const name_en = `${randomLastName.en} ${randomFirstName.en}`;
    const name_ja = `${randomLastName.ja} ${randomFirstName.ja}`;

    const age = Math.floor(Math.random() * (69 - 18 + 1)) + 18; // 18-69
    const height = Math.floor(Math.random() * (205 - 140 + 1)) + 140; // 140-205 cm
    const weight = Math.floor(Math.random() * (105 - 40 + 1)) + 40; // 40-105 kg
    
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
    const birthMonth = Math.floor(Math.random() * 12);
    const birthDay = Math.floor(Math.random() * 28) + 1;
    const dateOfBirth = new Date(birthYear, birthMonth, birthDay);
    const formattedDateOfBirth = `${String(dateOfBirth.getDate()).padStart(2, '0')}/${String(dateOfBirth.getMonth() + 1).padStart(2, '0')}/${dateOfBirth.getFullYear()}`;

    // --- Start applying rules ---
    const tattooRand = Math.random();
    let tattooStatus: 'none' | 'small' | 'large' = 'none';
    if (tattooRand > 0.85) {
        tattooStatus = 'large';
    } else if (tattooRand > 0.6) {
        tattooStatus = 'small';
    }
    
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
         tattooStatus = 'none';
        hasHepatitisB = false;
    }
    if (["New Skilled Worker", "Engineer/Specialist (from Vietnam)", "Engineer/Specialist (in Japan)"].includes(visaSubtypeEn)) {
        hasHepatitisB = false;
    }
    if (["Skilled (in Japan)", "Engineer/Specialist (in Japan)"].includes(visaSubtypeEn)) {
        financialAbility = null;
        interviewLocation = null;
    }
    
    const tattooRecord = tattoos[tattooStatus];
    
    let details_vi = `${age} tuổi - ${height} cm - ${weight} kg`;
    let details_en = `${age} years old - ${height} cm - ${weight} kg`;
    let details_ja = `${age}歳 - ${height} cm - ${weight} kg`;

    if (!["3 Go Intern", "Skilled (from Vietnam)", "Skilled (in Japan)"].includes(visaSubtypeEn)) {
         details_vi += ` - ${tattooRecord.vi}`;
         details_en += ` - ${tattooRecord.en}`;
         details_ja += ` - ${tattooRecord.ja}`;
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
        desired_salary: getRandomSalary(randomVisaKey),
        desired_net_salary: getRandomNetSalary(randomVisaKey),
        education_level: randomEducation,
        years_of_experience: randomExperience,
        ginou_remaining_period: randomVisaKey === 'intern' ? getRandomElement(ginouRemainingPeriods) : null,
        jobs: {
            count: Math.floor(Math.random() * 10) + 1,
            images: Array.from({ length: 3 }, (_, j) => `https://picsum.photos/50?random=job${i}${j}`)
        },
        created_date: generateRandomDate(new Date(), new Date(new Date().setFullYear(new Date().getFullYear() + 1))),
        height,
        hepatitis_b: (hasHepatitisB) ? { vi: true, en: true, ja: true } : null,
        financial_ability: financialAbility,
        interview_location: interviewLocation,
        tattoo: {
            vi: tattooRecord.vi,
            en: tattooRecord.en,
            ja: tattooRecord.ja,
        },
        specialConditions: {
            isUrgent: Math.random() > 0.8,
            canDoFactory: Math.random() > 0.5,
            canDoOutdoor: (randomVisaKey === 'intern' || randomVisaKey === 'skilled') && Math.random() > 0.6,
            wantsGinou2: (randomVisaKey === 'intern') && Math.random() > 0.7,
            wantsToChangeJob: (randomVisaKey === 'skilled' || randomVisaKey === 'engineer') && Math.random() > 0.75,
        },
        language_ability: randomLanguageAbility,
        desired_work_shift: getRandomElement(desiredWorkShifts),
        vision: getRandomElement(visions),
        dominant_hand: getRandomElement(dominantHands),
        hometown: getRandomElement(hometowns),
        current_residence: getRandomElement(currentResidences),
    };
});

    

    

  

