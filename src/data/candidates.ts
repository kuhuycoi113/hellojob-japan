
import { type Language } from "@/locales/translations";
import { japanRegions } from "./locations";

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
    desired_annual_income?: Record<Language, string> | null;
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
    documents_status?: Record<Language, string>;
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
    fishery: {
        vi: "Ngư nghiệp",
        en: "Fishery",
        ja: "漁業",
        jobs: [
            { vi: 'Câu cá ngừ cần và dây', en: 'Tuna pole and line fishing', ja: 'まぐろ一本釣り漁業' },
            { vi: 'Câu mực', en: 'Squid fishing', ja: 'いか釣り漁業' },
            { vi: 'Câu tôm, cua bằng lồng', en: 'Pot fishing for shrimp and crab', ja: 'かご漁業（えび・かに）' },
            { vi: 'Đánh cá dây câu dài', en: 'Longline fishing', ja: 'はえ縄漁業' },
            { vi: 'Đánh cá lưới kéo', en: 'Trawl fishing', ja: 'トロール漁業' },
            { vi: 'Đánh cá lưới rê', en: 'Gillnet fishing', ja: '刺し網漁業' },
            { vi: 'Đánh cá lưới sào', en: 'Stick-held dip net fishing', ja: '棒受網漁業' },
            { vi: 'Đánh cá lưới thả', en: 'Drift net fishing', ja: '流し網漁業' },
            { vi: 'Đặt lưới đánh cá', en: 'Set net fishing', ja: '定置網漁業' },
            { vi: 'Nuôi sò điệp', en: 'Scallop aquaculture', ja: 'ほたてがい養殖業' }
        ]
    },
    agriculture: {
        vi: "Nông nghiệp",
        en: "Agriculture",
        ja: "農業",
        jobs: [
            { vi: 'Nông nghiệp trồng trọt', en: 'Cultivation Agriculture', ja: '耕種農業' },
            { vi: 'Nông nghiệp chăn nuôi', en: 'Livestock Agriculture', ja: '畜産農業' },
            { vi: 'Chăn nuôi bò', en: 'Cattle Raising', ja: '牛の飼育' },
            { vi: 'Chăn nuôi bò sữa', en: 'Dairy Farming', ja: '酪農' },
            { vi: 'Chăn nuôi gà', en: 'Chicken Farming', ja: '養鶏' },
            { vi: 'Chăn nuôi lợn', en: 'Pig Farming', ja: '養豚' },
            { vi: 'Nhặt trứng gà', en: 'Egg Collecting', ja: '鶏卵の収集' },
            { vi: 'Thu hoạch bắp cải', en: 'Cabbage Harvesting', ja: 'キャベツの収穫' },
            { vi: 'Thu hoạch cà chua', en: 'Tomato Harvesting', ja: 'トマトの収穫' },
            { vi: 'Thu hoạch dâu tây', en: 'Strawberry Harvesting', ja: 'いちごの収穫' },
            { vi: 'Thu hoạch hoa', en: 'Flower Harvesting', ja: '花の収穫' },
            { vi: 'Thu hoạch hoa quả', en: 'Fruit Harvesting', ja: '果物の収穫' },
            { vi: 'Thu hoạch rau củ', en: 'Vegetable Harvesting', ja: '野菜の収穫' },
            { vi: 'Trồng cây ăn quả', en: 'Fruit Cultivation', ja: '果樹栽培' },
            { vi: 'Trồng nấm', en: 'Mushroom Cultivation', ja: 'きのこ栽培' },
            { vi: 'Trồng nấm công nghệ cao', en: 'High-tech Mushroom Cultivation', ja: 'ハイテクきのこ栽培' },
            { vi: 'Trồng rau củ', en: 'Vegetable Cultivation', ja: '野菜栽培' },
            { vi: 'Trồng trọt nhà kính', en: 'Greenhouse Cultivation', ja: 'ハウス栽培' },
        ]
    },
    food: {
        vi: "Thực phẩm", 
        en: "Food", 
        ja: "食品製造", 
        jobs: [
            { vi: 'Bánh gạo', en: 'Rice Crackers', ja: 'せんべい' },
            { vi: 'Bánh kẹo', en: 'Confectionery', ja: '菓子' },
            { vi: 'Bánh ngọt', en: 'Cakes/Pastries', ja: '洋菓子' },
            { vi: 'Bếp viện', en: 'Hospital Kitchen Staff', ja: '病院内調理' },
            { vi: 'Chế biến cá', en: 'Fish Processing', ja: '魚肉加工' },
            { vi: 'Chế biến đồ ăn sẵn', en: 'Ready-to-eat Meal Processing', ja: '惣菜加工' },
            { vi: 'Chế biến gia cầm', en: 'Poultry Processing', ja: '鶏肉加工' },
            { vi: 'Chế biến sushi', en: 'Sushi Preparation', ja: '寿司製造' },
            { vi: 'Chế biến thịt bò, lợn', en: 'Beef & Pork Processing', ja: '食肉加工（牛・豚）' },
            { vi: 'Chế biến thuỷ sản sống', en: 'Live Seafood Processing', ja: '活魚介類加工' },
            { vi: 'Chiết xuất thuỷ sản', en: 'Seafood Extract Production', ja: '水産エキス製造' },
            { vi: 'Cơm hộp', en: 'Bento Box Preparation', ja: '弁当製造' },
            { vi: 'Cơm nắm', en: 'Onigiri (Rice Ball) Making', ja: 'おにぎり製造' },
            { vi: 'Cửa hàng siêu thị', en: 'Supermarket Staff', ja: 'スーパーマーケット業務' },
            { vi: 'Đậu hũ', en: 'Tofu Production', ja: '豆腐製造' },
            { vi: 'Đồ ăn kèm', en: 'Side Dish Preparation', ja: '付け合わせ調理' },
            { vi: 'Đồ konbini', en: 'Convenience Store Food Preparation', ja: 'コンビニ向け食品製造' },
            { vi: 'Đóng gói bánh kẹo', en: 'Confectionery Packaging', ja: '菓子包装' },
            { vi: 'Đóng gói cafe', en: 'Coffee Packaging', ja: 'コーヒー包装' },
            { vi: 'Đóng gói gạo', en: 'Rice Packaging', ja: '米包装' },
            { vi: 'Đóng gói rau', en: 'Vegetable Packaging', ja: '野菜包装' },
            { vi: 'Đóng gói rau củ', en: 'Vegetable Packaging', ja: '野菜包装' },
            { vi: 'Đóng gói rong biển', en: 'Seaweed Packaging', ja: '海苔包装' },
            { vi: 'Đóng gói thanh cua', en: 'Imitation Crab Stick Packaging', ja: 'カニカマ包装' },
            { vi: 'Đóng hộp thực phẩm', en: 'Food Canning', ja: '食品缶詰' },
            { vi: 'Gia công đồ ăn liền', en: 'Instant Food Processing', ja: 'インスタント食品加工' },
            { vi: 'Giăm bông, xúc xích', en: 'Ham & Sausage Production', ja: 'ハム・ソーセージ製造' },
            { vi: 'Há cảo', en: 'Dumpling (Gyoza) Making', ja: '餃子製造' },
            { vi: 'Làm bánh kẹo', en: 'Confectionery Making', ja: '製菓' },
            { vi: 'Mỳ tôm', en: 'Instant Noodle Production', ja: '即席麺製造' },
            { vi: 'Salad', en: 'Salad Preparation', ja: 'サラダ製造' },
            { vi: 'Sản xuất bánh mì', en: 'Bread Making', ja: '製パン' },
            { vi: 'Sản xuất dưa muối', en: 'Pickle Production', ja: '漬物製造' },
            { vi: 'Sản xuất mắm cá', en: 'Fish Sauce Production', ja: '魚醤製造' },
            { vi: 'Sản xuất mỳ', en: 'Noodle Production', ja: '製麺' },
            { vi: 'Siêu thị', en: 'Supermarket Staff', ja: 'スーパーマーケット業務' },
            { vi: 'Tẩm ướp thuỷ sản', en: 'Marinated Seafood Production', ja: '水産物味付け加工' },
            { vi: 'Thái cá sashimi', en: 'Sashimi Slicing', ja: '刺身のスライス' },
            { vi: 'Thịt bò', en: 'Beef Processing', ja: '牛肉加工' },
            { vi: 'Thịt gà', en: 'Chicken Processing', ja: '鶏肉加工' },
            { vi: 'Thịt lợn', en: 'Pork Processing', ja: '豚肉加工' },
            { vi: 'Thức ăn cơ sở y tế', en: 'Medical Facility Food Service', ja: '医療施設向け給食' },
            { vi: 'Thực phẩm', en: 'Food Products', ja: '食品' },
            { vi: 'Thực phẩm sữa', en: 'Dairy Products', ja: '乳製品' },
            { vi: 'Thực phẩm trứng', en: 'Egg Products', ja: '鶏卵製品' },
            { vi: 'Thuỷ sản gia công chế biến', en: 'Processed Seafood Production', ja: '水産加工品製造' },
            { vi: 'Thuỷ sản khô', en: 'Dried Seafood Production', ja: '水産乾物製造' },
            { vi: 'Thuỷ sản lên men', en: 'Fermented Seafood Production', ja: '水産発酵食品製造' },
            { vi: 'Thuỷ sản sấy khô', en: 'Dried Seafood Production', ja: '水産乾燥品製造' },
            { vi: 'Thuỷ sản ủ muối', en: 'Salted Seafood Production', ja: '水産塩蔵品製造' },
            { vi: 'Thuỷ sản xông khói', en: 'Smoked Seafood Production', ja: '水産燻製品製造' },
        ]
    },
    general: {
        vi: "Sản xuất, dịch vụ tổng hợp", 
        en: "General Manufacturing & Services", 
        ja: "製造・サービス", 
        jobs: [
            { vi: 'Bảo dưỡng ô tô', en: 'Automotive Maintenance', ja: '自動車整備' },
            { vi: 'Bảo trì đường sắt', en: 'Railway Maintenance', ja: '鉄道保守' },
            { vi: 'Buồng phòng khách sạn', en: 'Hotel Housekeeping', ja: 'ホテル客室清掃' },
            { vi: 'Công việc cưa gỗ', en: 'Wood Sawing', ja: '製材作業' },
            { vi: 'Điều dưỡng, hộ lý', en: 'Nursing, Caregiving', ja: '看護・介護' },
            { vi: 'Dọn dẹp khoang hành khách', en: 'Passenger Cabin Cleaning', ja: '客室清掃（交通機関）' },
            { vi: 'Đóng gói', en: 'Packaging', ja: '包装' },
            { vi: 'Đóng gói công nghiệp', en: 'Industrial Packaging', ja: '工業包装' },
            { vi: 'Đóng gói mỹ phẩm', en: 'Cosmetics Packaging', ja: '化粧品包装' },
            { vi: 'Đóng sách', en: 'Bookbinding', ja: '製本' },
            { vi: 'Đúc gốm bằng áp lực', en: 'Pressure-cast Ceramics', ja: 'セラミック圧力鋳造' },
            { vi: 'Đúc khuôn cao su', en: 'Rubber Molding', ja: 'ゴム成形' },
            { vi: 'Đục lỗ hộp in', en: 'Printed Box Punching', ja: '印刷箱の穴あけ' },
            { vi: 'Đúc nhựa', en: 'Plastic Molding', ja: 'プラスチック成形' },
            { vi: 'Đúc nhựa cán xếp chồng', en: 'Laminated Plastic Molding', ja: '積層プラスチック成形' },
            { vi: 'Đúc nhựa ép phun', en: 'Injection Molding', ja: '射出成形' },
            { vi: 'Đúc nhựa nén', en: 'Compression Molding', ja: '圧縮成形' },
            { vi: 'Đúc nhựa thổi định hình', en: 'Blow Molding', ja: 'ブロー成形' },
            { vi: 'Đúc nhựa thổi phồng', en: 'Inflation Molding', ja: 'インフレーション成形' },
            { vi: 'Gia công đồ gia dụng', en: 'Home Appliance Processing', ja: '家電製品加工' },
            { vi: 'Gia công ép đùn cao su', en: 'Rubber Extrusion', ja: 'ゴム押出加工' },
            { vi: 'Gia công sản phẩm gỗ', en: 'Wood Product Processing', ja: '木製品加工' },
            { vi: 'Gỗ ép', en: 'Plywood Manufacturing', ja: '合板製造' },
            { vi: 'Hàng hóa hàng không', en: 'Air Cargo Handling', ja: '航空貨物取扱' },
            { vi: 'Hỗ trợ mặt đất máy bay', en: 'Aircraft Ground Support', ja: '航空機地上支援' },
            { vi: 'In gốm', en: 'Ceramic Printing', ja: 'セラミック印刷' },
            { vi: 'In offset', en: 'Offset Printing', ja: 'オフセット印刷' },
            { vi: 'In ống đồng', en: 'Gravure Printing', ja: 'グラビア印刷' },
            { vi: 'In vỏ bánh kẹo', en: 'Confectionery Wrapper Printing', ja: '菓子包装印刷' },
            { vi: 'Kiểm tra linh kiện ô tô', en: 'Automotive Parts Inspection', ja: '自動車部品検査' },
            { vi: 'Kiểm tra sản phẩm nhựa', en: 'Plastic Product Inspection', ja: 'プラスチック製品検査' },
            { vi: 'Lắp ráp linh kiện ô tô', en: 'Automotive Parts Assembly', ja: '自動車部品組立' },
            { vi: 'Linh kiện ô tô', en: 'Automotive Components', ja: '自動車部品' },
            { vi: 'Nặn gốm bằng bánh xoay', en: 'Pottery (Wheel Throwing)', ja: '陶芸（ろくろ）' },
            { vi: 'Nhiên liệu rắn từ rác', en: 'Solid Recovered Fuel (SRF)', ja: 'ごみ固形燃料（RDF）' },
            { vi: 'Sản xuất hộp bìa cứng', en: 'Cardboard Box Manufacturing', ja: '段ボール箱製造' },
            { vi: 'Sản xuất hộp in', en: 'Printed Box Manufacturing', ja: '印刷箱製造' },
            { vi: 'Sản xuất hộp nhãn dán', en: 'Sticker Box Manufacturing', ja: 'シールボックス製造' },
            { vi: 'Sản xuất linh kiện', en: 'Component Manufacturing', ja: '部品製造' },
            { vi: 'Sản xuất pin năng lượng', en: 'Battery Manufacturing', ja: '電池製造' },
            { vi: 'Sản xuất vải lanh', en: 'Linen Fabric Manufacturing', ja: 'リネン生地製造' },
            { vi: 'Sửa chữa ô tô', en: 'Automotive Repair', ja: '自動車修理' },
            { vi: 'Thiết bị khí nén đường sắt', en: 'Railway Pneumatic Equipment', ja: '鉄道用空気圧装置' },
            { vi: 'Trộn và cán cao su', en: 'Rubber Mixing and Calendering', ja: 'ゴム混合・圧延' },
            { vi: 'Vật liệu composite nhiều lớp', en: 'Laminated Composite Materials', ja: '積層複合材' },
            { vi: 'Vệ sinh phòng học', en: 'Classroom Cleaning', ja: '教室清掃' },
            { vi: 'Vệ sinh toà nhà', en: 'Building Cleaning', ja: 'ビルクリーニング' },
            { vi: 'Vệ sinh văn phòng', en: 'Office Cleaning', ja: 'オフィス清掃' }
        ]
    },
    mechanics: {
        vi: "Cơ khí, kim loại", en: "Mechanics & Metal", ja: "機械・金属", jobs: [
            { vi: 'Bảo trì máy móc', en: 'Machine Maintenance', ja: '機械保全' },
            { vi: 'Chế tạo kim loại tấm', en: 'Sheet Metal Fabrication', ja: '板金加工' },
            { vi: 'Chế tạo máy', en: 'Machine Manufacturing', ja: '機械製造' },
            { vi: 'Cơ khí', en: 'Mechanics', ja: '機械加工' },
            { vi: 'Cuộn dây máy điện quay', en: 'Rotating Electrical Machine Winding', ja: '回転電機巻線' },
            { vi: 'Dập khuôn kim loại', en: 'Metal Stamping', ja: '金属プレス加工' },
            { vi: 'Điện', en: 'Electrical', ja: '電気' },
            { vi: 'Điện tử', en: 'Electronics', ja: '電子' },
            { vi: 'Đóng tàu', en: 'Shipbuilding', ja: '造船' },
            { vi: 'Đúc', en: 'Casting', ja: '鋳造' },
            { vi: 'Đúc gang', en: 'Iron Casting', ja: '鋳鉄鋳物製造' },
            { vi: 'Đúc khuôn', en: 'Die Casting', ja: 'ダイカスト' },
            { vi: 'Đúc khuôn buồng lạnh', en: 'Cold Chamber Die Casting', ja: 'コールドチャンバーダイカスト' },
            { vi: 'Đúc khuôn buồng nóng', en: 'Hot Chamber Die Casting', ja: 'ホットチャンバーダイカスト' },
            { vi: 'Đúc kim loại màu', en: 'Non-ferrous Metal Casting', ja: '非鉄金属鋳物製造' },
            { vi: 'Ép dập kim loại', en: 'Metal Pressing', ja: '金属プレス' },
            { vi: 'Gia công cơ khí', en: 'Machining', ja: '機械加工' },
            { vi: 'Gia công ép đùn', en: 'Extrusion Processing', ja: '押出加工' },
            { vi: 'Gia công kim loại - Tekko', en: 'Metal Processing - Tekko', ja: '金属加工 - 鉄工' },
            { vi: 'Gia công tinh', en: 'Finishing', ja: '仕上げ' },
            { vi: 'Hàn', en: 'Welding', ja: '溶接' },
            { vi: 'Hàn bán tự động', en: 'Semi-automatic Welding', ja: '半自動溶接' },
            { vi: 'Hàn kết cấu', en: 'Structural Welding', ja: '構造物溶接' },
            { vi: 'Hàn khí', en: 'Gas Welding', ja: 'ガス溶接' },
            { vi: 'Hàn khung thép', en: 'Steel Frame Welding', ja: '鉄骨溶接' },
            { vi: 'Hàn tàu', en: 'Ship Welding', ja: '造船溶接' },
            { vi: 'Hàn thủ công', en: 'Manual Welding', ja: '手溶接' },
            { vi: 'Hàn tủ điện', en: 'Electrical Cabinet Welding', ja: '配電盤溶接' },
            { vi: 'Hàn xì', en: 'Oxy-acetylene Welding', ja: 'ガス溶接' },
            { vi: 'Hoàn thiện dụng cụ nung chảy', en: 'Furnace Tool Finishing', ja: '溶解炉具仕上げ' },
            { vi: 'Hoàn thiện khuôn', en: 'Mold Finishing', ja: '金型仕上げ' },
            { vi: 'Hoàn thiện sản phẩm ép đùn', en: 'Extruded Product Finishing', ja: '押出製品仕上げ' },
            { vi: 'Kiểm tra máy móc', en: 'Machine Inspection', ja: '機械検査' },
            { vi: 'Lắp đặt điều hoà', en: 'Air Conditioner Installation', ja: 'エアコン設置' },
            { vi: 'Lắp đặt máy móc', en: 'Machine Installation', ja: '機械設置' },
            { vi: 'Lắp đặt tủ lạnh', en: 'Refrigerator Installation', ja: '冷蔵庫設置' },
            { vi: 'Lắp ráp máy móc', en: 'Machinery Assembly', ja: '機械組立' },
            { vi: 'Lắp ráp thiết bị điện khí', en: 'Pneumatic Equipment Assembly', ja: '空気圧装置組立' },
            { vi: 'Lắp ráp thiết bị điện quay', en: 'Rotating Electrical Equipment Assembly', ja: '回転電機組立' },
            { vi: 'Lắp ráp thiết bị điện tử', en: 'Electronic Equipment Assembly', ja: '電子機器組立' },
            { vi: 'Lắp thiết bị đóng, mở', en: 'Switchgear Assembly', ja: '開閉制御器具組立' },
            { vi: 'Lắp tủ điện, tủ điều khiển', en: 'Control Panel Assembly', ja: '配電盤・制御盤組立' },
            { vi: 'Mạ điện', en: 'Electroplating', ja: '電気めっき' },
            { vi: 'Mạ kẽm nhúng nóng', en: 'Hot-dip Galvanizing', ja: '溶融亜鉛めっき' },
            { vi: 'Máy sản xuất tấm kim loại', en: 'Sheet Metal Machine', ja: '板金機械' },
            { vi: 'Rèn', en: 'Forging', ja: '鍛造' },
            { vi: 'Rèn bằng búa', en: 'Hammer Forging', ja: 'ハンマー鍛造' },
            { vi: 'Sơn', en: 'Painting', ja: '塗装' },
            { vi: 'Sơn cầu thép', en: 'Steel Bridge Painting', ja: '鋼橋塗装' },
            { vi: 'Sơn công trình xây dựng', en: 'Construction Painting', ja: '建築塗装' },
            { vi: 'Sơn kim loại', en: 'Metal Painting', ja: '金属塗装' },
            { vi: 'Sơn phun', en: 'Spray Painting', ja: '噴霧塗装' },
            { vi: 'Sử dụng máy phay', en: 'Milling Machine Operation', ja: 'フライス盤作業' },
            { vi: 'Sử dụng máy tiện số', en: 'NC Lathe Operation', ja: 'NC旋盤作業' },
            { vi: 'Sử dụng máy tiện thường', en: 'Lathe Operation', ja: '普通旋盤作業' },
            { vi: 'Thi công kết cấu thép', en: 'Steel Structure Construction', ja: '鉄骨工事' },
            { vi: 'Vận hành máy', en: 'Machine Operation', ja: '機械操作' },
            { vi: 'Vận hành máy CNC', en: 'CNC Machine Operation', ja: 'CNC機械操作' },
            { vi: 'Vận hành máy ép', en: 'Press Machine Operation', ja: 'プレス機械操作' },
            { vi: 'Vận hành máy ép nhựa', en: 'Plastic Injection Molding Machine Operation', ja: 'プラスチック射出成形機操作' },
            { vi: 'Xử lý điện hóa nhôm', en: 'Aluminum Anodizing', ja: 'アルミニウム陽極酸化処理' }
        ]
    },
    construction: {
        vi: "Xây dựng", en: "Construction", ja: "建設", jobs: [
            { vi: 'Bê tông', en: 'Concrete Work', ja: 'コンクリート工事' },
            { vi: 'Buộc thép', en: 'Rebar Tying', ja: '鉄筋結束' },
            { vi: 'Chống thấm', en: 'Waterproofing', ja: '防水工事' },
            { vi: 'Chống thấm trần nhà', en: 'Ceiling Waterproofing', ja: '天井防水' },
            { vi: 'Công trình chống nóng, lạnh', en: 'Insulation Work', ja: '断熱工事' },
            { vi: 'Cốp pha công trình', en: 'Formwork', ja: '型枠工事' },
            { vi: 'Dán tường', en: 'Wallpapering', ja: '壁貼り' },
            { vi: 'Đổ bê tông áp lực', en: 'Pressure Concrete Pouring', ja: '圧送コンクリート' },
            { vi: 'Đổ nhựa đường', en: 'Asphalt Paving', ja: 'アスファルト舗装' },
            { vi: 'Dựng giàn giáo', en: 'Scaffolding', ja: '足場組立' },
            { vi: 'Đường ống', en: 'Piping', ja: '配管' },
            { vi: 'Đường ống điều hoà', en: 'HVAC Piping', ja: '空調配管' },
            { vi: 'Đường ống nhà máy', en: 'Factory Piping', ja: '工場配管' },
            { vi: 'Đường ống nước', en: 'Plumbing', ja: '給排水配管' },
            { vi: 'Đường ống xây dựng', en: 'Construction Piping', ja: '建設配管' },
            { vi: 'Gia công đường ống', en: 'Pipe Fabrication', ja: '配管加工' },
            { vi: 'Gia công khung thép', en: 'Steel Frame Fabrication', ja: '鉄骨加工' },
            { vi: 'Gia công khung thép trong xưởng', en: 'In-shop Steel Frame Fabrication', ja: '工場内鉄骨加工' },
            { vi: 'Gia công sắt trong xưởng', en: 'In-shop Ironwork', ja: '工場内鉄筋加工' },
            { vi: 'Gia công vật liệu đá', en: 'Stone Material Processing', ja: '石材加工' },
            { vi: 'Hàn khung thép trên cao', en: 'High-altitude Steel Frame Welding', ja: '高所鉄骨溶接' },
            { vi: 'Hoàn thiện nội thất', en: 'Interior Finishing', ja: '内装仕上げ' },
            { vi: 'Hoàn thiện sàn nhựa', en: 'Plastic Floor Finishing', ja: 'プラスチック系床仕上げ' },
            { vi: 'Hoàn thiện sàn thảm', en: 'Carpet Floor Finishing', ja: 'カーペット系床仕上げ' },
            { vi: 'Hoàn thiện ván', en: 'Board Finishing', ja: 'ボード仕上げ' },
            { vi: 'Hút nước ngầm công trình', en: 'Construction Dewatering', ja: '建設現場の排水' },
            { vi: 'Khoan giếng máy dập', en: 'Percussion Drilling', ja: 'パーカッション式井戸掘り' },
            { vi: 'Khoan giếng máy khoan', en: 'Rotary Drilling', ja: 'ロータリー式井戸掘り' },
            { vi: 'Khung chắn toà nhà', en: 'Building Curtain Wall', ja: 'カーテンウォール施工' },
            { vi: 'Lái máy ủi', en: 'Bulldozer Operator', ja: 'ブルドーザー運転' },
            { vi: 'Lái máy xây dựng', en: 'Construction Machinery Operator', ja: '建設機械施工' },
            { vi: 'Lái máy xúc', en: 'Excavator Operator', ja: '掘削機運転' },
            { vi: 'Lái máy xúc lật', en: 'Loader Operator', ja: 'ローダー運転' },
            { vi: 'Lái xe lu', en: 'Road Roller Operator', ja: 'ローラー運転' },
            { vi: 'Làm nền, móng', en: 'Foundation Work', ja: '基礎工事' },
            { vi: 'Lắp bồn tắm', en: 'Bathtub Installation', ja: '浴槽設置' },
            { vi: 'Lắp đặt đường ống', en: 'Pipe Installation', ja: '配管設置' },
            { vi: 'Lắp đặt lò nung-xây dựng', en: 'Furnace Installation', ja: '築炉' },
            { vi: 'Lắp đặt pin năng lượng', en: 'Solar Panel Installation', ja: '太陽光パネル設置' },
            { vi: 'Lắp điện lạnh, điều hòa', en: 'HVAC Installation', ja: '冷凍空調機器施工' },
            { vi: 'Lắp ghép cốt thép', en: 'Reinforcement Assembly', ja: '鉄筋組立' },
            { vi: 'Lát đá', en: 'Stone Paving', ja: '石張り' },
            { vi: 'Lợp mái nhà', en: 'Roofing', ja: '屋根葺き' },
            { vi: 'Lợp ngói', en: 'Tiling', ja: '瓦葺き' },
            { vi: 'Mộc cốp pha', en: 'Formwork Carpentry', ja: '型枠大工' },
            { vi: 'Nội thất gỗ-xây dựng', en: 'Architectural Carpentry', ja: '建築大工' },
            { vi: 'Ốp lát gạch', en: 'Tiling', ja: 'タイル張り' },
            { vi: 'Phá dỡ', en: 'Demolition', ja: '解体' },
            { vi: 'San lấp mặt bằng', en: 'Earth-moving / Leveling', ja: '土工' },
            { vi: 'Sản xuất bê tông', en: 'Concrete Production', ja: 'コンクリート製造' },
            { vi: 'Sơn xây dựng', en: 'Architectural Painting', ja: '建築塗装' },
            { vi: 'Tấm kim loại kiến trúc', en: 'Architectural Sheet Metal', ja: '建築板金' },
            { vi: 'Tấm kim loại ống gió', en: 'Duct Sheet Metal', ja: 'ダクト板金' },
            { vi: 'Thi công dán tường', en: 'Wallpapering', ja: '壁紙施工' },
            { vi: 'Thi công lắp rèm', en: 'Curtain Installation', ja: 'カーテン施工' },
            { vi: 'Thi công móng thép', en: 'Steel Foundation Work', ja: '鉄筋コンクリート基礎工事' },
            { vi: 'Thợ mộc xây dựng', en: 'Carpenter', ja: '大工' },
            { vi: 'Trát vữa', en: 'Plastering', ja: '左官' },
            { vi: 'Xây dựng tổng hợp', en: 'General Construction', ja: '総合建設' },
        ]
    },
    textiles: {
        vi: "May mặc", en: "Textiles", ja: "繊維・衣服", jobs: [
            { vi: 'Chăn ga gối đệm', en: 'Bedding', ja: '寝具' },
            { vi: 'Công việc trước kéo sợi', en: 'Pre-spinning work', ja: '紡績前作業' },
            { vi: 'Công việc trước khi dệt', en: 'Pre-weaving work', ja: '製織前作業' },
            { vi: 'Dệt hoàn thiện', en: 'Weaving finishing', ja: '織物仕上げ' },
            { vi: 'Dệt kim máy sợi dọc', en: 'Warp knitting', ja: '経編' },
            { vi: 'Dệt may', en: 'Weaving', ja: '織物' },
            { vi: 'Gia công dệt', en: 'Textile processing', ja: '繊維加工' },
            { vi: 'Gia công sợi hỗn hợp', en: 'Mixed yarn processing', ja: '混紡糸加工' },
            { vi: 'Kéo sợi tinh', en: 'Fine spinning', ja: '精紡' },
            { vi: 'May khăn mặt', en: 'Towel sewing', ja: 'タオル縫製' },
            { vi: 'May mặc', en: 'Garment sewing', ja: '衣類縫製' },
            { vi: 'May quần áo', en: 'Clothes sewing', ja: '衣服縫製' },
            { vi: 'May quần áo nam', en: "Men's clothing sewing", ja: '紳士服縫製' },
            { vi: 'Nhuộm chỉ', en: 'Yarn dyeing', ja: '糸染め' },
            { vi: 'Nhuộm vải, đan len', en: 'Fabric dyeing, knitting', ja: '布染め、ニット編み' },
            { vi: 'Quần áo phụ nữ, trẻ em', en: "Women's and children's clothing", ja: '婦人子供服' },
            { vi: 'Quấn sợi', en: 'Yarn winding', ja: '糸巻き' },
            { vi: 'Sản xuất áo sơ mi', en: 'Shirt manufacturing', ja: 'ワイシャツ製造' },
            { vi: 'Sản xuất đồ lót', en: 'Underwear manufacturing', ja: '下着製造' },
            { vi: 'Sản xuất ghế ngồi ô tô', en: 'Car seat manufacturing', ja: '自動車シート製造' },
            { vi: 'Sản xuất máy dệt kim tròn', en: 'Circular knitting machine manufacturing', ja: '丸編み機製造' },
            { vi: 'Sản xuất tất', en: 'Socks manufacturing', ja: '靴下製造' },
            { vi: 'Sản xuất thảm dệt', en: 'Woven carpet manufacturing', ja: '織りカーペット製造' },
            { vi: 'Sản xuất thảm đục lỗ', en: 'Needle-punched carpet manufacturing', ja: 'ニードルパンチカーペット製造' },
            { vi: 'Sản xuất thảm nhung nổi', en: 'Tufted carpet manufacturing', ja: 'タフテッドカーペット製造' },
            { vi: 'Sản xuất vải bạt', en: 'Canvas manufacturing', ja: '帆布製造' }
        ]
    },
};

const skilledIndustries = {
    caregiver: { 
        vi: "Điều dưỡng", 
        en: "Caregiver", 
        ja: "介護", 
        jobs: [
            { vi: 'Điều dưỡng, hộ lý', en: 'Nursing, Caregiving', ja: '看護・介護' }
        ] 
    },
    hotel: { 
        vi: "Lưu trú, khách sạn", 
        en: "Accommodation & Hotel", 
        ja: "宿泊・ホテル", 
        jobs: [
            { vi: 'Buồng phòng khách sạn', en: 'Hotel Housekeeping', ja: 'ホテル客室清掃' },
            { vi: '(Khách sạn) Tiếp khách, quản lý vệ sinh', en: 'Guest Services & Hygiene Management', ja: '接客・衛生管理' },
            { vi: 'Hành lý khách sạn', en: 'Bellhop / Porter', ja: 'ベルスタッフ / ポーター' },
            { vi: 'Lễ tân khách sạn', en: 'Hotel Reception / Front Desk', ja: 'フロント業務 / 受付' },
            { vi: 'Lưu trú khách sạn', en: 'Accommodation Services', ja: '宿泊サービス' },
            { vi: 'Quản lý khách sạn', en: 'Hotel Management', ja: 'ホテル管理' }
        ] 
    },
    cleaning: { 
        vi: "Vệ sinh toà nhà", 
        en: "Building Cleaning", 
        ja: "ビルクリーニング", 
        jobs: [
            { vi: 'Vệ sinh toà nhà', en: 'Building Cleaning', ja: 'ビルクリーニング' }
        ] 
    },
    transport: { 
        vi: "Vận tải", 
        en: "Transportation", 
        ja: "運輸", 
        jobs: [
            { vi: 'Hậu cần vận tải', en: 'Logistics', ja: '運輸・物流' },
            { vi: 'Lái xe', en: 'Driver', ja: '運転手' },
            { vi: 'Lái xe buýt cỡ lớn', en: 'Large Bus Driver', ja: '大型バス運転手' },
            { vi: 'Lái xe buýt cỡ trung', en: 'Medium Bus Driver', ja: '中型バス運転手' },
            { vi: 'Lái xe nâng', en: 'Forklift Driver', ja: 'フォークリフト運転手' },
            { vi: 'Lái xe tải cỡ lớn', en: 'Large Truck Driver', ja: '大型トラック運転手' },
            { vi: 'Lái xe tải cỡ nhỏ', en: 'Small Truck Driver', ja: '小型トラック運転手' },
            { vi: 'Lái xe tải cỡ trung', en: 'Medium Truck Driver', ja: '中型トラック運転手' },
            { vi: 'Lái xe taxi', en: 'Taxi Driver', ja: 'タクシー運転手' },
            { vi: 'Phụ xe', en: "Driver's Assistant / Conductor", ja: '車掌 / 助手' },
            { vi: 'Quản lý kho vận tải', en: 'Warehouse Management', ja: '倉庫管理' },
            { vi: 'Thực tập lái xe', en: 'Driving Intern / Trainee Driver', ja: '運転実習生' }
        ] 
    },
    aviation: { 
        vi: "Hàng không", 
        en: "Aviation", 
        ja: "航空", 
        jobs: [
            { vi: 'Dọn dẹp khoang hành khách', en: 'Passenger cabin cleaning', ja: '客室清掃（交通機関）' },
            { vi: 'Hàng hóa hàng không', en: 'Air cargo handling', ja: '航空貨物取扱' },
            { vi: 'Hỗ trợ mặt đất máy bay', en: 'Aircraft ground support', ja: '航空機地上支援' }
        ] 
    },
    automotive: { 
        vi: "Ô tô", 
        en: "Automotive", 
        ja: "自動車", 
        jobs: [
            { vi: 'Bảo dưỡng ô tô', en: 'Automotive Maintenance', ja: '自動車整備' },
            { vi: 'Kiểm tra linh kiện ô tô', en: 'Automotive Parts Inspection', ja: '自動車部品検査' },
            { vi: 'Lắp ráp linh kiện ô tô', en: 'Automotive Parts Assembly', ja: '自動車部品組立' },
            { vi: 'Linh kiện ô tô', en: 'Automotive Components', ja: '自動車部品' },
            { vi: 'Sửa chữa ô tô', en: 'Automotive Repair', ja: '自動車修理' }
        ] 
    },
    machinery: { 
        vi: "Cơ khí, chế tạo máy", 
        en: "Machinery Manufacturing", 
        ja: "機械製造", 
        jobs: [
        { vi: 'Bảo trì máy móc', en: 'Machine Maintenance', ja: '機械保全' },
        { vi: 'Chế tạo kim loại tấm', en: 'Sheet Metal Fabrication', ja: '板金加工' },
        { vi: 'Chế tạo máy', en: 'Machine Manufacturing', ja: '機械製造' },
        { vi: 'Cơ khí', en: 'Mechanics', ja: '機械加工' },
        { vi: 'Dập khuôn kim loại', en: 'Metal Stamping', ja: '金属プレス加工' },
        { vi: 'Đóng tàu', en: 'Shipbuilding', ja: '造船' },
        { vi: 'Đúc', en: 'Casting', ja: '鋳造' },
        { vi: 'Đúc gang', en: 'Iron Casting', ja: '鋳鉄鋳物製造' },
        { vi: 'Đúc khuôn', en: 'Die Casting', ja: 'ダイカスト' },
        { vi: 'Đúc khuôn buồng lạnh', en: 'Cold Chamber Die Casting', ja: 'コールドチャンバーダイカスト' },
        { vi: 'Đúc khuôn buồng nóng', en: 'Hot Chamber Die Casting', ja: 'ホットチャンバーダイカスト' },
        { vi: 'Đúc kim loại màu', en: 'Non-ferrous Metal Casting', ja: '非鉄金属鋳物製造' },
        { vi: 'Ép dập kim loại', en: 'Metal Pressing', ja: '金属プレス' },
        { vi: 'Gia công cơ khí', en: 'Machining', ja: '機械加工' },
        { vi: 'Gia công ép đùn', en: 'Extrusion Processing', ja: '押出加工' },
        { vi: 'Gia công kim loại - Tekko', en: 'Metal Processing - Tekko', ja: '金属加工 - 鉄工' },
        { vi: 'Gia công tinh', en: 'Finishing', ja: '仕上げ' },
        { vi: 'Hàn', en: 'Welding', ja: '溶接' },
        { vi: 'Hàn bán tự động', en: 'Semi-automatic Welding', ja: '半自動溶接' },
        { vi: 'Hàn kết cấu', en: 'Structural Welding', ja: '構造物溶接' },
        { vi: 'Hàn khí', en: 'Gas Welding', ja: 'ガス溶接' },
        { vi: 'Hàn khung thép', en: 'Steel Frame Welding', ja: '鉄骨溶接' },
        { vi: 'Hàn tàu', en: 'Ship Welding', ja: '造船溶接' },
        { vi: 'Hàn thủ công', en: 'Manual Welding', ja: '手溶接' },
        { vi: 'Hàn tủ điện', en: 'Electrical Cabinet Welding', ja: '配電盤溶接' },
        { vi: 'Hàn xì', en: 'Oxy-acetylene Welding', ja: 'ガス溶接' },
        { vi: 'Hoàn thiện dụng cụ nung chảy', en: 'Furnace Tool Finishing', ja: '溶解炉具仕上げ' },
        { vi: 'Hoàn thiện khuôn', en: 'Mold Finishing', ja: '金型仕上げ' },
        { vi: 'Hoàn thiện sản phẩm ép đùn', en: 'Extruded Product Finishing', ja: '押出製品仕上げ' },
        { vi: 'Kiểm tra máy móc', en: 'Machine Inspection', ja: '機械検査' },
        { vi: 'Lắp đặt điều hoà', en: 'Air Conditioner Installation', ja: 'エアコン設置' },
        { vi: 'Lắp đặt máy móc', en: 'Machine Installation', ja: '機械設置' },
        { vi: 'Lắp đặt tủ lạnh', en: 'Refrigerator Installation', ja: '冷蔵庫設置' },
        { vi: 'Lắp ráp máy móc', en: 'Machinery Assembly', ja: '機械組立' },
        { vi: 'Mạ điện', en: 'Electroplating', ja: '電気めっき' },
        { vi: 'Mạ kẽm nhúng nóng', en: 'Hot-dip Galvanizing', ja: '溶融亜鉛めっき' },
        { vi: 'Máy sản xuất tấm kim loại', en: 'Sheet Metal Machine', ja: '板金機械' },
        { vi: 'Rèn', en: 'Forging', ja: '鍛造' },
        { vi: 'Rèn bằng búa', en: 'Hammer Forging', ja: 'ハンマー鍛造' },
        { vi: 'Sơn', en: 'Painting', ja: '塗装' },
        { vi: 'Sơn cầu thép', en: 'Steel Bridge Painting', ja: '鋼橋塗装' },
        { vi: 'Sơn công trình xây dựng', en: 'Construction Painting', ja: '建築塗装' },
        { vi: 'Sơn kim loại', en: 'Metal Painting', ja: '金属塗装' },
        { vi: 'Sơn phun', en: 'Spray Painting', ja: '噴霧塗装' },
        { vi: 'Sử dụng máy phay', en: 'Milling Machine Operation', ja: 'フライス盤作業' },
        { vi: 'Sử dụng máy tiện số', en: 'NC Lathe Operation', ja: 'NC旋盤作業' },
        { vi: 'Sử dụng máy tiện thường', en: 'Lathe Operation', ja: '普通旋盤作業' },
        { vi: 'Thi công kết cấu thép', en: 'Steel Structure Construction', ja: '鉄骨工事' },
        { vi: 'Vận hành máy', en: 'Machine Operation', ja: '機械操作' },
        { vi: 'Vận hành máy CNC', en: 'CNC Machine Operation', ja: 'CNC機械操作' },
        { vi: 'Vận hành máy ép', en: 'Press Machine Operation', ja: 'プレス機械操作' },
        { vi: 'Vận hành máy ép nhựa', en: 'Plastic Injection Molding Machine Operation', ja: 'プラスチック射出成形機操作' },
        { vi: 'Xử lý điện hóa nhôm', en: 'Aluminum Anodizing', ja: 'アルミニウム陽極酸化処理' }
        ] 
    },
    material: { 
        vi: "Chế tạo Vật liệu", 
        en: "Material Manufacturing", 
        ja: "素材製造", 
        jobs: [
            { vi: 'Xử lý nhiệt bề mặt', en: 'Surface Heat Treatment', ja: '表面熱処理' },
            { vi: 'Xử lý nhiệt một phần', en: 'Partial Heat Treatment', ja: '部分熱処理' },
            { vi: 'Xử lý nhiệt tổng thể', en: 'Overall Heat Treatment', ja: '全体熱処理' }
        ] 
    },
    electronics: { 
        vi: "Điện, điện tử", 
        en: "Electronics", 
        ja: "電気・電子", 
        jobs: [
            { vi: 'Bản mạch in', en: 'Printed Circuit Board', ja: 'プリント基板' },
            { vi: 'Cuộn dây máy điện quay', en: 'Rotating Electrical Machine Winding', ja: '回転電機巻線' },
            { vi: 'Điện', en: 'Electrical', ja: '電気' },
            { vi: 'Điện tử', en: 'Electronics', ja: '電子' },
            { vi: 'Lắp ráp điện', en: 'Electrical Assembly', ja: '電気組立' },
            { vi: 'Lắp ráp điện tử', en: 'Electronic Assembly', ja: '電子組立' },
            { vi: 'Lắp ráp linh kiện bán dẫn', en: 'Semiconductor Component Assembly', ja: '半導体部品組立' },
            { vi: 'Lắp ráp máy biến áp', en: 'Transformer Assembly', ja: '変圧器組立' },
            { vi: 'Lắp ráp thiết bị điện khí', en: 'Electrical Pneumatic Equipment Assembly', ja: '電気空圧機器組立' },
            { vi: 'Lắp ráp thiết bị điện quay', en: 'Rotating Electrical Equipment Assembly', ja: '回転電機組立' },
            { vi: 'Lắp ráp thiết bị điện tử', en: 'Electronic Equipment Assembly', ja: '電子機器組立' },
            { vi: 'Lắp thiết bị đóng, mở', en: 'Switchgear Assembly', ja: '開閉制御器具組立' },
            { vi: 'Lắp tủ điện, tủ điều khiển', en: 'Control Panel Assembly', ja: '配電盤・制御盤組立' },
            { vi: 'Sản xuất bảng mạch in', en: 'Printed Circuit Board Manufacturing', ja: 'プリント基板製造' },
            { vi: 'Sửa chữa dụng cụ', en: 'Tool Repair', ja: '治工具修理' },
            { vi: 'Sửa chữa tủ điện', en: 'Electrical Cabinet Repair', ja: '配電盤修理' },
            { vi: 'Thi công điện', en: 'Electrical Construction', ja: '電気工事' },
            { vi: 'Thiết kế bảng mạch in', en: 'PCB Design', ja: 'プリント基板設計' }
        ] 
    },
    construction: { 
        vi: "Xây dựng", 
        en: "Construction", 
        ja: "建設", 
        jobs: [
            { vi: 'Bê tông', en: 'Concrete Work', ja: 'コンクリート工事' },
            { vi: 'Buộc thép', en: 'Rebar Tying', ja: '鉄筋結束' },
            { vi: 'Chống thấm', en: 'Waterproofing', ja: '防水工事' },
            { vi: 'Chống thấm trần nhà', en: 'Ceiling Waterproofing', ja: '天井防水' },
            { vi: 'Công trình chống nóng, lạnh', en: 'Insulation Work', ja: '断熱工事' },
            { vi: 'Cốp pha công trình', en: 'Formwork', ja: '型枠工事' },
            { vi: 'Dán tường', en: 'Wallpapering', ja: '壁貼り' },
            { vi: 'Đổ bê tông áp lực', en: 'Pressure Concrete Pouring', ja: '圧送コンクリート' },
            { vi: 'Đổ nhựa đường', en: 'Asphalt Paving', ja: 'アスファルト舗装' },
            { vi: 'Dựng giàn giáo', en: 'Scaffolding', ja: '足場組立' },
            { vi: 'Đường ống', en: 'Piping', ja: '配管' },
            { vi: 'Đường ống điều hoà', en: 'HVAC Piping', ja: '空調配管' },
            { vi: 'Đường ống nhà máy', en: 'Factory Piping', ja: '工場配管' },
            { vi: 'Đường ống nước', en: 'Plumbing', ja: '給排水配管' },
            { vi: 'Đường ống xây dựng', en: 'Construction Piping', ja: '建設配管' },
            { vi: 'Gia công đường ống', en: 'Pipe Fabrication', ja: '配管加工' },
            { vi: 'Gia công khung thép', en: 'Steel Frame Fabrication', ja: '鉄骨加工' },
            { vi: 'Gia công khung thép trong xưởng', en: 'In-shop Steel Frame Fabrication', ja: '工場内鉄骨加工' },
            { vi: 'Gia công sắt trong xưởng', en: 'In-shop Ironwork', ja: '工場内鉄筋加工' },
            { vi: 'Gia công vật liệu đá', en: 'Stone Material Processing', ja: '石材加工' },
            { vi: 'Hàn khung thép trên cao', en: 'High-altitude Steel Frame Welding', ja: '高所鉄骨溶接' },
            { vi: 'Hoàn thiện nội thất', en: 'Interior Finishing', ja: '内装仕上げ' },
            { vi: 'Hoàn thiện sàn nhựa', en: 'Plastic Floor Finishing', ja: 'プラスチック系床仕上げ' },
            { vi: 'Hoàn thiện sàn thảm', en: 'Carpet Floor Finishing', ja: 'カーペット系床仕上げ' },
            { vi: 'Hoàn thiện ván', en: 'Board Finishing', ja: 'ボード仕上げ' },
            { vi: 'Hút nước ngầm công trình', en: 'Construction Dewatering', ja: '建設現場の排水' },
            { vi: 'Khoan giếng máy dập', en: 'Percussion Drilling', ja: 'パーカッション式井戸掘り' },
            { vi: 'Khoan giếng máy khoan', en: 'Rotary Drilling', ja: 'ロータリー式井戸掘り' },
            { vi: 'Khung chắn toà nhà', en: 'Building Curtain Wall', ja: 'カーテンウォール施工' },
            { vi: 'Lái máy ủi', en: 'Bulldozer Operator', ja: 'ブルドーザー運転' },
            { vi: 'Lái máy xây dựng', en: 'Construction Machinery Operator', ja: '建設機械施工' },
            { vi: 'Lái máy xúc', en: 'Excavator Operator', ja: '掘削機運転' },
            { vi: 'Lái máy xúc lật', en: 'Loader Operator', ja: 'ローダー運転' },
            { vi: 'Lái xe lu', en: 'Road Roller Operator', ja: 'ローラー運転' },
            { vi: 'Làm nền, móng', en: 'Foundation Work', ja: '基礎工事' },
            { vi: 'Lắp bồn tắm', en: 'Bathtub Installation', ja: '浴槽設置' },
            { vi: 'Lắp đặt đường ống', en: 'Pipe Installation', ja: '配管設置' },
            { vi: 'Lắp đặt lò nung-xây dựng', en: 'Furnace Installation', ja: '築炉' },
            { vi: 'Lắp đặt pin năng lượng', en: 'Solar Panel Installation', ja: '太陽光パネル設置' },
            { vi: 'Lắp điện lạnh, điều hòa', en: 'HVAC Installation', ja: '冷凍空調機器施工' },
            { vi: 'Lắp ghép cốt thép', en: 'Reinforcement Assembly', ja: '鉄筋組立' },
            { vi: 'Lát đá', en: 'Stone Paving', ja: '石張り' },
            { vi: 'Lợp mái nhà', en: 'Roofing', ja: '屋根葺き' },
            { vi: 'Lợp ngói', en: 'Tiling', ja: '瓦葺き' },
            { vi: 'Mộc cốp pha', en: 'Formwork Carpentry', ja: '型枠大工' },
            { vi: 'Nội thất gỗ-xây dựng', en: 'Architectural Carpentry', ja: '建築大工' },
            { vi: 'Ốp lát gạch', en: 'Tiling', ja: 'タイル張り' },
            { vi: 'Phá dỡ', en: 'Demolition', ja: '解体' },
            { vi: 'San lấp mặt bằng', en: 'Earth-moving / Leveling', ja: '土工' },
            { vi: 'Sản xuất bê tông', en: 'Concrete Production', ja: 'コンクリート製造' },
            { vi: 'Sơn xây dựng', en: 'Architectural Painting', ja: '建築塗装' },
            { vi: 'Tấm kim loại kiến trúc', en: 'Architectural Sheet Metal', ja: '建築板金' },
            { vi: 'Tấm kim loại ống gió', en: 'Duct Sheet Metal', ja: 'ダクト板金' },
            { vi: 'Thi công dán tường', en: 'Wallpapering', ja: '壁紙施工' },
            { vi: 'Thi công lắp rèm', en: 'Curtain Installation', ja: 'カーテン施工' },
            { vi: 'Thi công móng thép', en: 'Steel Foundation Work', ja: '鉄筋コンクリート基礎工事' },
            { vi: 'Thợ mộc xây dựng', en: 'Carpenter', ja: '大工' },
            { vi: 'Trát vữa', en: 'Plastering', ja: '左官' },
            { vi: 'Xây dựng tổng hợp', en: 'General Construction', ja: '総合建設' },
        ] 
    },
    general: { 
        vi: "Sản xuất, dịch vụ tổng hợp", 
        en: "General Manufacturing & Services", 
        ja: "製造・サービス", 
        jobs: [
            { vi: 'Bảo trì đường sắt', en: 'Railway Maintenance', ja: '鉄道保守' },
            { vi: 'Công việc cưa gỗ', en: 'Wood Sawing', ja: '製材作業' },
            { vi: 'Đóng gói', en: 'Packaging', ja: '包装' },
            { vi: 'Đóng gói công nghiệp', en: 'Industrial Packaging', ja: '工業包装' },
            { vi: 'Đóng gói mỹ phẩm', en: 'Cosmetics Packaging', ja: '化粧品包装' },
            { vi: 'Đóng sách', en: 'Bookbinding', ja: '製本' },
            { vi: 'Đúc gốm bằng áp lực', en: 'Pressure-cast Ceramics', ja: 'セラミック圧力鋳造' },
            { vi: 'Đúc khuôn cao su', en: 'Rubber Molding', ja: 'ゴム成形' },
            { vi: 'Đục lỗ hộp in', en: 'Printed Box Punching', ja: '印刷箱の穴あけ' },
            { vi: 'Đúc nhựa', en: 'Plastic Molding', ja: 'プラスチック成形' },
            { vi: 'Đúc nhựa cán xếp chồng', en: 'Laminated Plastic Molding', ja: '積層プラスチック成形' },
            { vi: 'Đúc nhựa ép phun', en: 'Injection Molding', ja: '射出成形' },
            { vi: 'Đúc nhựa nén', en: 'Compression Molding', ja: '圧縮成形' },
            { vi: 'Đúc nhựa thổi định hình', en: 'Blow Molding', ja: 'ブロー成形' },
            { vi: 'Đúc nhựa thổi phồng', en: 'Inflation Molding', ja: 'インフレーション成形' },
            { vi: 'Gia công đồ gia dụng', en: 'Home Appliance Processing', ja: '家電製品加工' },
            { vi: 'Gia công ép đùn cao su', en: 'Rubber Extrusion', ja: 'ゴム押出加工' },
            { vi: 'Gia công sản phẩm gỗ', en: 'Wood Product Processing', ja: '木製品加工' },
            { vi: 'Gỗ ép', en: 'Plywood Manufacturing', ja: '合板製造' },
            { vi: 'In gốm', en: 'Ceramic Printing', ja: 'セラミック印刷' },
            { vi: 'In offset', en: 'Offset Printing', ja: 'オフセット印刷' },
            { vi: 'In ống đồng', en: 'Gravure Printing', ja: 'グラビア印刷' },
            { vi: 'In vỏ bánh kẹo', en: 'Confectionery Wrapper Printing', ja: '菓子包装印刷' },
            { vi: 'Kiểm tra sản phẩm nhựa', en: 'Plastic Product Inspection', ja: 'プラスチック製品検査' },
            { vi: 'Nặn gốm bằng bánh xoay', en: 'Pottery (Wheel Throwing)', ja: '陶芸（ろくろ）' },
            { vi: 'Nhiên liệu rắn từ rác', en: 'Solid Recovered Fuel (SRF)', ja: 'ごみ固形燃料（RDF）' },
            { vi: 'Sản xuất hộp bìa cứng', en: 'Cardboard Box Manufacturing', ja: '段ボール箱製造' },
            { vi: 'Sản xuất hộp in', en: 'Printed Box Manufacturing', ja: '印刷箱製造' },
            { vi: 'Sản xuất hộp nhãn dán', en: 'Sticker Box Manufacturing', ja: 'シールボックス製造' },
            { vi: 'Sản xuất linh kiện', en: 'Component Manufacturing', ja: '部品製造' },
            { vi: 'Sản xuất pin năng lượng', en: 'Battery Manufacturing', ja: '電池製造' },
            { vi: 'Sản xuất vải lanh', en: 'Linen Fabric Manufacturing', ja: 'リネン生地製造' },
            { vi: 'Thiết bị khí nén đường sắt', en: 'Railway Pneumatic Equipment', ja: '鉄道用空気圧装置' },
            { vi: 'Trộn và cán cao su', en: 'Rubber Mixing and Calendering', ja: 'ゴム混合・圧延' },
            { vi: 'Vật liệu composite nhiều lớp', en: 'Laminated Composite Materials', ja: '積層複合材' }
        ] 
    },
    food: {
        vi: "Thực phẩm",
        en: "Food",
        ja: "食品",
        jobs: [
            { vi: 'Bánh gạo', en: 'Rice Crackers', ja: 'せんべい' },
            { vi: 'Bánh kẹo', en: 'Confectionery', ja: '菓子' },
            { vi: 'Bánh ngọt', en: 'Cakes/Pastries', ja: '洋菓子' },
            { vi: 'Bếp viện', en: 'Hospital Kitchen Staff', ja: '病院内調理' },
            { vi: 'Chế biến cá', en: 'Fish Processing', ja: '魚肉加工' },
            { vi: 'Chế biến đồ ăn sẵn', en: 'Ready-to-eat Meal Processing', ja: '惣菜加工' },
            { vi: 'Chế biến gia cầm', en: 'Poultry Processing', ja: '鶏肉加工' },
            { vi: 'Chế biến sushi', en: 'Sushi Preparation', ja: '寿司製造' },
            { vi: 'Chế biến thịt bò, lợn', en: 'Beef & Pork Processing', ja: '食肉加工（牛・豚）' },
            { vi: 'Chế biến thuỷ sản sống', en: 'Live Seafood Processing', ja: '活魚介類加工' },
            { vi: 'Chiết xuất thuỷ sản', en: 'Seafood Extract Production', ja: '水産エキス製造' },
            { vi: 'Cơm hộp', en: 'Bento Box Preparation', ja: '弁当製造' },
            { vi: 'Cơm nắm', en: 'Onigiri (Rice Ball) Making', ja: 'おにぎり製造' },
            { vi: 'Cửa hàng siêu thị', en: 'Supermarket Staff', ja: 'スーパーマーケット業務' },
            { vi: 'Đậu hũ', en: 'Tofu Production', ja: '豆腐製造' },
            { vi: 'Đồ ăn kèm', en: 'Side Dish Preparation', ja: '付け合わせ調理' },
            { vi: 'Đồ konbini', en: 'Convenience Store Food Preparation', ja: 'コンビニ向け食品製造' },
            { vi: 'Đóng gói bánh kẹo', en: 'Confectionery Packaging', ja: '菓子包装' },
            { vi: 'Đóng gói cafe', en: 'Coffee Packaging', ja: 'コーヒー包装' },
            { vi: 'Đóng gói gạo', en: 'Rice Packaging', ja: '米包装' },
            { vi: 'Đóng gói rau', en: 'Vegetable Packaging', ja: '野菜包装' },
            { vi: 'Đóng gói rau củ', en: 'Vegetable Packaging', ja: '野菜包装' },
            { vi: 'Đóng gói rong biển', en: 'Seaweed Packaging', ja: '海苔包装' },
            { vi: 'Đóng gói thanh cua', en: 'Imitation Crab Stick Packaging', ja: 'カニカマ包装' },
            { vi: 'Đóng hộp thực phẩm', en: 'Food Canning', ja: '食品缶詰' },
            { vi: 'Gia công đồ ăn liền', en: 'Instant Food Processing', ja: 'インスタント食品加工' },
            { vi: 'Giăm bông, xúc xích', en: 'Ham & Sausage Production', ja: 'ハム・ソーセージ製造' },
            { vi: 'Há cảo', en: 'Dumpling (Gyoza) Making', ja: '餃子製造' },
            { vi: 'Làm bánh kẹo', en: 'Confectionery Making', ja: '製菓' },
            { vi: 'Mỳ tôm', en: 'Instant Noodle Production', ja: '即席麺製造' },
            { vi: 'Salad', en: 'Salad Preparation', ja: 'サラダ製造' },
            { vi: 'Sản xuất bánh mì', en: 'Bread Making', ja: '製パン' },
            { vi: 'Sản xuất dưa muối', en: 'Pickle Production', ja: '漬物製造' },
            { vi: 'Sản xuất mắm cá', en: 'Fish Sauce Production', ja: '魚醤製造' },
            { vi: 'Sản xuất mỳ', en: 'Noodle Production', ja: '製麺' },
            { vi: 'Siêu thị', en: 'Supermarket Staff', ja: 'スーパーマーケット業務' },
            { vi: 'Tẩm ướp thuỷ sản', en: 'Marinated Seafood Production', ja: '水産物味付け加工' },
            { vi: 'Thái cá sashimi', en: 'Sashimi Slicing', ja: '刺身のスライス' },
            { vi: 'Thịt bò', en: 'Beef Processing', ja: '牛肉加工' },
            { vi: 'Thịt gà', en: 'Chicken Processing', ja: '鶏肉加工' },
            { vi: 'Thịt lợn', en: 'Pork Processing', ja: '豚肉加工' },
            { vi: 'Thức ăn cơ sở y tế', en: 'Medical Facility Food Service', ja: '医療施設向け給食' },
            { vi: 'Thực phẩm', en: 'Food Products', ja: '食品' },
            { vi: 'Thực phẩm sữa', en: 'Dairy Products', ja: '乳製品' },
            { vi: 'Thực phẩm trứng', en: 'Egg Products', ja: '鶏卵製品' },
            { vi: 'Thuỷ sản gia công chế biến', en: 'Processed Seafood Production', ja: '水産加工品製造' },
            { vi: 'Thuỷ sản khô', en: 'Dried Seafood Production', ja: '水産乾物製造' },
            { vi: 'Thuỷ sản lên men', en: 'Fermented Seafood Production', ja: '水産発酵食品製造' },
            { vi: 'Thuỷ sản sấy khô', en: 'Dried Seafood Production', ja: '水産乾燥品製造' },
            { vi: 'Thuỷ sản ủ muối', en: 'Salted Seafood Production', ja: '水産塩蔵品製造' },
            { vi: 'Thuỷ sản xông khói', en: 'Smoked Seafood Production', ja: '水産燻製品製造' },
        ]
    },
    restaurant: { 
        vi: "Nhà hàng", 
        en: "Restaurant", 
        ja: "外食", 
        jobs: [
            { vi: 'Chạy bàn', en: 'Waiting tables / Server', ja: 'ホールスタッフ / 接客' },
            { vi: 'Mua hàng', en: 'Purchasing / Procurement', ja: '仕入れ' },
            { vi: 'Nấu bếp', en: 'Cooking / Chef', ja: '調理 / 厨房' },
            { vi: 'Phụ bếp', en: 'Kitchen Assistant', ja: '調理補助' },
            { vi: 'Quản lý', en: 'Management / Manager', ja: '管理 / 店長' },
            { vi: 'Rửa bát', en: 'Dishwashing', ja: '洗い場' },
            { vi: 'Thu ngân', en: 'Cashier', ja: 'レジ' }
        ] 
    },
    agriculture: {
        vi: "Nông nghiệp",
        en: "Agriculture",
        ja: "農業",
        jobs: [
            { vi: 'Nông nghiệp chăn nuôi', en: 'Livestock Agriculture', ja: '畜産農業' },
            { vi: 'Nông nghiệp trồng trọt', en: 'Cultivation Agriculture', ja: '耕種農業' },
            { vi: 'Chăn nuôi bò', en: 'Cattle Raising', ja: '牛の飼育' },
            { vi: 'Chăn nuôi bò sữa', en: 'Dairy Farming', ja: '酪農' },
            { vi: 'Chăn nuôi gà', en: 'Chicken Farming', ja: '養鶏' },
            { vi: 'Chăn nuôi lợn', en: 'Pig Farming', ja: '養豚' },
            { vi: 'Nhặt trứng gà', en: 'Egg Collecting', ja: '鶏卵の収集' },
            { vi: 'Thu hoạch bắp cải', en: 'Cabbage Harvesting', ja: 'キャベツの収穫' },
            { vi: 'Thu hoạch cà chua', en: 'Tomato Harvesting', ja: 'トマトの収穫' },
            { vi: 'Thu hoạch dâu tây', en: 'Strawberry Harvesting', ja: 'いちごの収穫' },
            { vi: 'Thu hoạch hoa', en: 'Flower Harvesting', ja: '花の収穫' },
            { vi: 'Thu hoạch hoa quả', en: 'Fruit Harvesting', ja: '果物の収穫' },
            { vi: 'Thu hoạch rau củ', en: 'Vegetable Harvesting', ja: '野菜の収穫' },
            { vi: 'Trồng cây ăn quả', en: 'Fruit Cultivation', ja: '果樹栽培' },
            { vi: 'Trồng nấm', en: 'Mushroom Cultivation', ja: 'きのこ栽培' },
            { vi: 'Trồng nấm công nghệ cao', en: 'High-tech Mushroom Cultivation', ja: 'ハイテクきのこ栽培' },
            { vi: 'Trồng rau củ', en: 'Vegetable Cultivation', ja: '野菜栽培' },
            { vi: 'Trồng trọt nhà kính', en: 'Greenhouse Cultivation', ja: 'ハウス栽培' }
        ]
    },
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
    agri_forest_fish: { 
        vi: "Nông lâm ngư nghiệp", 
        en: "Agriculture, Forestry, Fishery", 
        ja: "農林水産業", 
        jobs: [
            { vi: "Chăn nuôi", en: "Livestock Farming", ja: "畜産" },
            { vi: "Công nghệ nông, lâm, ngư nghiệp", en: "Agriculture, Forestry, and Fishery Technology", ja: "農林水産技術" },
            { vi: "Công nhân chăn nuôi đặc khu", en: "Special Zone Livestock Worker", ja: "特区畜産労働者" },
            { vi: "Công nhân Nông, Lâm, Ngư nghiệp", en: "Agriculture, Forestry, and Fishery Worker", ja: "農林水産業作業員" },
            { vi: "Công nhân trồng trọt đặc khu", en: "Special Zone Cultivation Worker", ja: "特区栽培作業員" }
        ] 
    },
    food: { 
        vi: "Thực phẩm", 
        en: "Food", 
        ja: "食品", 
        jobs: [
            { vi: 'Công nghệ sinh học', en: 'Biotechnology', ja: 'バイオテクノロジー' },
            { vi: 'Công nghệ thực phẩm', en: 'Food Technology', ja: '食品技術' },
            { vi: 'Đóng gói rau', en: 'Vegetable Packaging', ja: '野菜包装' },
            { vi: 'Quản lý sản xuất thực phẩm', en: 'Food Production Management', ja: '食品生産管理' },
            { vi: 'Thực phẩm', en: 'Food', ja: '食品' }
        ] 
    },
    manufacturing: { 
        vi: "Sản xuất, chế tạo, công nghệ", 
        en: "Manufacturing, Fabrication, Technology", 
        ja: "製造・加工・技術", 
        jobs: [
            { vi: 'Công nghệ môi trường', en: 'Environmental Technology', ja: '環境技術' },
            { vi: 'Công nghệ sản xuất', en: 'Production Technology', ja: '生産技術' },
            { vi: 'Công nhân sản xuất, gia công sản phẩm (trừ kim loại)', en: 'Production Worker, Product Processing (excluding metal)', ja: '製造作業員、製品加工（金属を除く）' },
            { vi: 'Gia công đồ xa xỉ', en: 'Luxury Goods Processing', ja: '高級品加工' },
            { vi: 'Hoá học làm xưởng', en: 'Industrial Chemistry', ja: '工場化学' },
            { vi: 'In ấn', en: 'Printing', ja: '印刷' },
            { vi: 'IT làm xưởng', en: 'Factory IT / IT for Manufacturing', ja: '工場IT／製造業向けIT' },
            { vi: 'Khoan khảo sát dầu mỏ, năng lượng', en: 'Oil & Energy Exploration Drilling', ja: '石油・エネルギー探査掘削' },
            { vi: 'Kinh tế làm xưởng', en: 'Industrial Economics', ja: '工場経済' },
            { vi: 'Lao động nước ngoài lĩnh vực sản xuất', en: 'Foreign Worker in Manufacturing', ja: '製造業の外国人労働者' },
            { vi: 'May mặc', en: 'Garment Making', ja: '縫製' },
            { vi: 'Môi trường làm xưởng', en: 'Factory Environment Management', ja: '工場環境管理' },
            { vi: 'Nhân viên sân bay', en: 'Airport Staff', ja: '空港スタッフ' },
            { vi: 'Quản lý sản xuất tổng hợp', en: 'General Production Management', ja: '総合生産管理' },
            { vi: 'Rác thải, phế liệu, tái chế', en: 'Waste, Scrap, Recycling', ja: '廃棄物・スクラップ・リサイクル' },
            { vi: 'Sản xuất sản phẩm', en: 'Product Manufacturing', ja: '製品製造' },
            { vi: 'Sản xuất sản phẩm cho nước ngoài', en: 'Export Product Manufacturing', ja: '輸出向け製品製造' },
            { vi: 'Thiết kế thời trang', en: 'Fashion Design', ja: 'ファッションデザイン' }
        ] 
    },
    mechanics: { 
        vi: "Cơ khí, máy móc", 
        en: "Mechanics, Machinery", 
        ja: "機械・機器", 
        jobs: [
            { vi: 'Bảo trì hệ thống điện', en: 'Electrical System Maintenance', ja: '電気系統の保守' },
            { vi: 'Bảo trì máy móc', en: 'Machine Maintenance', ja: '機械保守' },
            { vi: 'Chế tạo máy', en: 'Machine Manufacturing', ja: '機械製造' },
            { vi: 'Cơ khí', en: 'Mechanics', ja: '機械' },
            { vi: 'Công nghệ cơ khí', en: 'Mechanical Engineering Technology', ja: '機械工学技術' },
            { vi: 'Công nhân đóng tàu nước ngoài', en: 'Foreign Shipbuilding Worker', ja: '外国人造船作業員' },
            { vi: 'Công nhân sản xuất, gia công kim loại', en: 'Production Worker, Metal Processing', ja: '生産作業員、金属加工' },
            { vi: 'Điện cơ khí hỗ trợ chuyển nhà', en: 'Mechatronics for Moving Support', ja: '引越し支援メカトロニクス' },
            { vi: 'Điện nội thất', en: 'Interior Electrical Works', ja: '内装電気工事' },
            { vi: 'Điện, kỹ thuật điện', en: 'Electrical, Electrical Engineering', ja: '電気、電気工学' },
            { vi: 'Gia công cơ khí', en: 'Machining', ja: '機械加工' },
            { vi: 'Kiểm tra máy móc', en: 'Machine Inspection', ja: '機械検査' },
            { vi: 'Lắp đặt điều hoà', en: 'Air Conditioner Installation', ja: 'エアコン設置' },
            { vi: 'Lắp đặt máy móc', en: 'Machine Installation', ja: '機械設置' },
            { vi: 'Lắp đặt tủ lạnh', en: 'Refrigerator Installation', ja: '冷蔵庫設置' },
            { vi: 'Lắp ráp máy móc', en: 'Machinery Assembly', ja: '機械組立' },
            { vi: 'Phân tích CAE', en: 'CAE Analysis', ja: 'CAE解析' },
            { vi: 'Quản lý sản xuất máy', en: 'Machine Production Management', ja: '機械生産管理' },
            { vi: 'Thiết kế Auto CAD', en: 'AutoCAD Design', ja: 'AutoCAD設計' },
            { vi: 'Thiết kế cơ khí', en: 'Mechanical Design', ja: '機械設計' },
            { vi: 'Thiết kế điện', en: 'Electrical Design', ja: '電気設計' },
            { vi: 'Tự động hoá', en: 'Automation', ja: '自動化' },
            { vi: 'Vận hành máy', en: 'Machine Operation', ja: '機械操作' },
            { vi: 'Vận hành máy CNC', en: 'CNC Machine Operation', ja: 'CNC機械操作' },
            { vi: 'Vận hành máy ép', en: 'Press Machine Operation', ja: 'プレス機械操作' },
            { vi: 'Vận hành máy ép nhựa', en: 'Plastic Injection Molding Machine Operation', ja: 'プラスチック射出成形機操作' },
            { vi: 'Vận hành robot', en: 'Robot Operation', ja: 'ロボット操作' },
            { vi: 'Viễn thông', en: 'Telecommunications', ja: '電気通信' }
        ] 
    },
    automotive: { 
        vi: "Công nghệ ô tô", 
        en: "Automotive Technology", 
        ja: "自動車技術", 
        jobs: [
            { vi: 'Ô tô', en: 'Automotive', ja: '自動車' },
            { vi: 'Thiết kế ô tô', en: 'Automotive Design', ja: '自動車設計' }
        ] 
    },
    transport: { 
        vi: "Vận chuyển hàng hoá", 
        en: "Freight Transport", 
        ja: "貨物輸送", 
        jobs: [
            { vi: 'Đại lý thủ tục hàng hải', en: 'Maritime Procedures Agent', ja: '海事手続代理店' },
            { vi: 'Quản lý dọn dẹp', en: 'Cleaning Management', ja: '清掃管理' },
            { vi: 'Quản lý đóng gói', en: 'Packaging Management', ja: '包装管理' },
            { vi: 'Quản lý vận chuyển', en: 'Transportation Management', ja: '輸送管理' },
            { vi: 'Quản lý vận chuyển, dọn dẹp, đóng gói', en: 'Logistics, Cleaning, and Packaging Management', ja: '輸送・清掃・包装管理' }
        ] 
    },
    construction: { 
        vi: "Xây dựng", 
        en: "Construction", 
        ja: "建設", 
        jobs: [
            { vi: 'Cầu đường', en: 'Bridge and Road Construction', ja: '橋梁・道路工事' },
            { vi: 'Công nghệ xây dựng của nước ngoài', en: 'Foreign Construction Technology', ja: '海外建設技術' },
            { vi: 'Công nhân kết cấu xây dựng', en: 'Structural Construction Worker', ja: '構造建設作業員' },
            { vi: 'Công nhân xây dựng (trừ khung công trình)', en: 'Construction Worker (excluding frame construction)', ja: '建設作業員（躯体工事を除く）' },
            { vi: 'Công nhân xây dựng mỏ tổng hợp', en: 'General Mine Construction Worker', ja: '総合鉱山建設作業員' },
            { vi: 'Công nhân xây dựng nước ngoài', en: 'Foreign Construction Worker', ja: '外国人建設作業員' },
            { vi: 'Đường ống', en: 'Piping', ja: '配管' },
            { vi: 'Giám sát thi công', en: 'Construction Supervision', ja: '施工監理' },
            { vi: 'Hoàn thiện nội thất', en: 'Interior Finishing', ja: '内装仕上げ' },
            { vi: 'Khảo sát', en: 'Surveying', ja: '測量' },
            { vi: 'Kiến trúc sư', en: 'Architect', ja: '建築士' },
            { vi: 'Kỹ thuật Khảo sát', en: 'Surveying Engineering', ja: '測量技術' },
            { vi: 'Kỹ thuật Kiến trúc', en: 'Architectural Engineering', ja: '建築技術' },
            { vi: 'Kỹ thuật Kiến trúc, Xây dựng, Khảo sát', en: 'Architecture, Construction, Surveying Engineering', ja: '建築・建設・測量技術' },
            { vi: 'Kỹ thuật Xây dựng', en: 'Construction Engineering', ja: '建設技術' },
            { vi: 'Nội thất gỗ', en: 'Wood Interior', ja: '木製内装' },
            { vi: 'Quản lý, giám sát thi công công trình', en: 'Construction Project Management and Supervision', ja: '建設工事の管理・監督' },
            { vi: 'Trắc địa, khảo sát', en: 'Geodesy, Surveying', ja: '測地・測量' },
            { vi: 'Xây dựng dân dụng', en: 'Civil Construction', ja: '土木建設' }
        ] 
    },
    hotel: { 
        vi: "Khách sạn, lưu trú", 
        en: "Hotel, Accommodation", 
        ja: "ホテル・宿泊", 
        jobs: [
            { vi: 'Dịch vụ khách sạn', en: 'Hotel Service', ja: 'ホテルサービス' },
            { vi: 'Khu nghỉ dưỡng', en: 'Resort', ja: 'リゾート' },
            { vi: 'Lễ tân khách sạn', en: 'Hotel Reception', ja: 'ホテル受付' }
        ] 
    },
    medical_care: { 
        vi: "Y tế, điều dưỡng", 
        en: "Medical, Caregiving", 
        ja: "医療・介護", 
        jobs: [
            { vi: 'Bác sĩ', en: 'Doctor', ja: '医師' },
            { vi: 'Bác sĩ chỉnh thị lực', en: 'Optometrist', ja: '視能訓練士' },
            { vi: 'Chuyên viên phục hình', en: 'Prosthetist/Orthotist', ja: '義肢装具士' },
            { vi: 'Điều dưỡng có chứng chỉ', en: 'Certified Nurse', ja: '正看護師' },
            { vi: 'Điều dưỡng dự bị học EPA', en: 'EPA Candidate Nurse', ja: 'EPA看護師候補者' },
            { vi: 'Điều dưỡng, hộ lý EPA', en: 'EPA Nurse/Caregiver', ja: 'EPA看護師・介護福祉士' },
            { vi: 'Điều dưỡng, hộ lý EPA dự bị', en: 'EPA Candidate Nurse/Caregiver', ja: 'EPA看護師・介護福祉士候補者' },
            { vi: 'Dược sĩ', en: 'Pharmacist', ja: '薬剤師' },
            { vi: 'Kỹ thuật viên X quang', en: 'Radiographer/X-ray Technician', ja: '診療放射線技師' },
            { vi: 'Nha sĩ', en: 'Dentist', ja: '歯科医師' },
            { vi: 'Nhà trị liệu nghề nghiệp', en: 'Occupational Therapist', ja: '作業療法士' },
            { vi: 'Nữ hộ sinh', en: 'Midwife', ja: '助産師' },
            { vi: 'Trợ lý y tá', en: 'Nursing Assistant', ja: '准看護師' },
            { vi: 'Vật lý trị liệu', en: 'Physical Therapist', ja: '理学療法士' },
            { vi: 'Vệ sinh răng miệng', en: 'Dental Hygienist', ja: '歯科衛生士' },
            { vi: 'Y tá', en: 'Nurse', ja: '看護師' },
            { vi: 'Y tá EPA', en: 'EPA Nurse', ja: 'EPA看護師' },
            { vi: 'Y tá EPA dự bị', en: 'EPA Candidate Nurse', ja: 'EPA看護師候補者' },
            { vi: 'Y tá sức khoẻ cộng đồng', en: 'Public Health Nurse', ja: '保健師' },
            { vi: 'Y tế lâm sàng', en: 'Clinical Technologist', ja: '臨床工学技士' }
        ] 
    },
    business_econ: { 
        vi: "Kinh doanh, kinh tế", 
        en: "Business, Economics", 
        ja: "ビジネス・経済", 
        jobs: [
            { vi: 'Bán hàng miễn thuế', en: 'Duty-free sales', ja: '免税販売' },
            { vi: 'Dịch vụ bán hàng', en: 'Sales service', ja: '販売サービス' },
            { vi: 'Dịch vụ khách hàng tổng hợp', en: 'General customer service', ja: '総合顧客サービス' },
            { vi: 'Dịch vụ nhà hàng', en: 'Restaurant service', ja: 'レストランサービス' },
            { vi: 'Điều hành', en: 'Operations / Management', ja: '運営・管理' },
            { vi: 'Hoạt động khởi nghiệp', en: 'Startup activities / Entrepreneurship', ja: '起業活動' },
            { vi: 'Kinh doanh kế toán', en: 'Business accounting', ja: '企業会計' },
            { vi: 'Kinh tế', en: 'Economics', ja: '経済' },
            { vi: 'Nghiên cứu thị trường, marketing', en: 'Market research, marketing', ja: '市場調査、マーケティング' },
            { vi: 'Nhân viên dịch vụ khác (không phân loại nơi khác)', en: 'Other service staff (not elsewhere classified)', ja: 'その他のサービススタッフ（他で分類されないもの）' },
            { vi: 'Quản lý', en: 'Management', ja: '管理' },
            { vi: 'Quản lý kế hoạch quảng cáo, truyền thông', en: 'Advertising and communications planning management', ja: '広告・コミュニケーション計画管理' },
            { vi: 'Thương mại nước ngoài', en: 'Foreign trade', ja: '外国貿易' },
            { vi: 'Tiếp thị (sales) doanh nghiệp', en: 'Corporate sales/marketing', ja: '法人営業・マーケティング' }
        ] 
    },
    finance: { 
        vi: "Tài chính, kế toán, bảo hiểm", 
        en: "Finance, Accounting, Insurance", 
        ja: "金融・会計・保険", 
        jobs: [
            { vi: 'Kế toán công chứng', en: 'Certified Public Accountant', ja: '公認会計士' },
            { vi: 'Kế toán công chứng nước ngoài', en: 'Foreign Certified Public Accountant', ja: '外国公認会計士' },
            { vi: 'Kế toán thuế', en: 'Tax Accountant', ja: '税理士' },
            { vi: 'Tài chính, bảo hiểm', en: 'Finance, Insurance', ja: '金融・保険' },
            { vi: 'Tư vấn bảo hiểm xã hội', en: 'Social Insurance Consultant', ja: '社会保険労務士' }
        ] 
    },
    media: { 
        vi: "Báo chí, truyền thông, marketing", 
        en: "Journalism, Media, Marketing", 
        ja: "報道・メディア・マーケティング", 
        jobs: [
            { vi: 'Báo chí', en: 'Journalism', ja: '報道' },
            { vi: 'Biên tập', en: 'Editing', ja: '編集' },
            { vi: 'Digital Marketing', en: 'Digital Marketing', ja: 'デジタルマーケティング' },
            { vi: 'Marketing', en: 'Marketing', ja: 'マーケティング' },
            { vi: 'Nhà báo', en: 'Journalist', ja: 'ジャーナリスト' },
            { vi: 'Thiết kế Marketing', en: 'Marketing Design', ja: 'マーケティングデザイン' },
            { vi: 'Truyền thông', en: 'Communications', ja: 'コミュニケーション' },
            { vi: 'Viết quảng cáo', en: 'Copywriting', ja: 'コピーライティング' }
        ] 
    },
    it: { 
        vi: "Công nghệ thông tin", 
        en: "Information Technology", 
        ja: "情報技術", 
        jobs: [
            { vi: 'Blockchain', en: 'Blockchain', ja: 'ブロックチェーン' },
            { vi: 'BrSE (Bridge System Engineer)', en: 'BrSE (Bridge System Engineer)', ja: 'BrSE (ブリッジシステムエンジニア)' },
            { vi: 'Business Analyst (BA)', en: 'Business Analyst (BA)', ja: 'ビジネスアナリスト (BA)' },
            { vi: 'Công nghệ thông tin', en: 'Information Technology', ja: '情報技術' },
            { vi: 'COO (Chief Operation Officer)', en: 'COO (Chief Operation Officer)', ja: 'COO (最高執行責任者)' },
            { vi: 'CTO (Chief Technology Officer)', en: 'CTO (Chief Technology Officer)', ja: 'CTO (最高技術責任者)' },
            { vi: 'ITM (Information Technical Manager)', en: 'ITM (Information Technical Manager)', ja: 'ITM (情報技術管理者)' },
            { vi: 'Lập trình nhúng', en: 'Embedded Programming', ja: '組み込みプログラミング' },
            { vi: 'Lập trình viên', en: 'Programmer', ja: 'プログラマー' },
            { vi: 'PM (Product Manager)', en: 'PM (Product Manager)', ja: 'PM (プロダクトマネージャー)' },
            { vi: 'PO (Product Owner)', en: 'PO (Product Owner)', ja: 'PO (プロダクトオーナー)' },
            { vi: 'Tester', en: 'Tester', ja: 'テスター' },
            { vi: 'Thiết kế', en: 'Design', ja: 'デザイン' },
            { vi: 'Thiết kế UI, UX', en: 'UI, UX Design', ja: 'UI, UXデザイン' },
            { vi: 'Trí tuệ nhân tạo', en: 'Artificial Intelligence', ja: '人工知能' },
            { vi: 'Vận hành web thương mại điện tử', en: 'E-commerce Web Operation', ja: 'ECサイト運営' }
        ] 
    },
    research: { 
        vi: "Nghiên cứu, phân tích", 
        en: "Research, Analysis", 
        ja: "研究・分析", 
        jobs: [
            { vi: "Khảo sát đất đai, nhà ở", en: "Land and housing survey", ja: "土地・家屋調査" },
            { vi: "Nghiên cứu", en: "Research", ja: "研究" },
            { vi: "Nghiên cứu thị trường", en: "Market research", ja: "市場調査" }
        ] 
    },
    education: {
        vi: "Giáo dục, đào tạo",
        en: "Education, Training",
        ja: "教育・研修",
        jobs: []
    },
    admin: { 
        vi: "Hành chính, văn phòng", 
        en: "Administration, Office", 
        ja: "事務・オフィス", 
        jobs: [] 
    },
    legal: { 
        vi: "Pháp lý", 
        en: "Legal", 
        ja: "法務", 
        jobs: [] 
    },
    arts: { 
        vi: "Nghệ thuật, nghệ sĩ", 
        en: "Arts, Artist", 
        ja: "芸術・アーティスト", 
        jobs: []
    },
    sports: { 
        vi: "Thể dục thể thao", 
        en: "Sports", 
        ja: "スポーツ", 
        jobs: []
    },
    professional: { 
        vi: "Nghề có kỹ năng chuyên nghiệp", 
        en: "Professional Occupations", 
        ja: "専門職", 
        jobs: []
    },
    semi_professional: { 
        vi: "Việc làm bán chuyên nghiệp", 
        en: "Semi-professional Occupations", 
        ja: "準専門職", 
        jobs: []
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
            en: ["3-Year Intern", "1-Year Intern", "No. 3 Intern"],
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
        en: "Engineer/Specialist in Humanities/International Services",
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
    { vi: "Không yêu cầu", en: "Not required", ja: "不問" }
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

const documentStatuses = [
    { vi: 'Giấy tờ Việt Nam', en: 'Vietnamese Documents', ja: 'ベトナムの書類' },
    { vi: 'Giấy tờ Nhật Bản', en: 'Japanese Documents', ja: '日本の書類' },
    { vi: 'Giấy tờ nước ngoài/du học', en: 'Foreign/Study Abroad Documents', ja: '外国/留学の書類' },
];


function getRandomSalary(visaTypeKey: keyof typeof visaTypes): Record<Language, string> {
    let min, max;
    // These are hourly wages
    switch (visaTypeKey) {
      case 'intern':
        min = 700; max = 1800;
        break;
      case 'skilled':
        min = 750; max = 5000;
        break;
      case 'engineer':
        min = 800; max = 15000;
        break;
      default:
        min = 700; max = 2000;
    }
    const salary = Math.floor(Math.random() * (max - min + 1)) + min;
    return {
      vi: `${salary.toLocaleString('de-DE')} Yên/giờ`,
      en: `${salary.toLocaleString('en-US')} JPY/hour`,
      ja: `${salary.toLocaleString('ja-JP')}円/時`,
    };
}

function getRandomAnnualIncome(visaTypeKey: keyof typeof visaTypes): Record<Language, string> | null {
    let min: number, max: number;

    switch (visaTypeKey) {
        case 'skilled':
            min = 1500000;
            max = 10000000;
            break;
        case 'engineer':
            min = 1600000;
            max = 30000000;
            break;
        case 'intern':
        default:
            return null; // Interns don't have this data
    }
    
    const salary = Math.floor(Math.random() * (max - min + 1)) + min;
    
    const formatToMan = (value: number) => {
        const man = value / 10000;
        if (man >= 100) {
            return `${(man / 100).toFixed(1)} triệu`; // for Vietnamese
        }
        if (man >= 1) {
            return `${Math.round(man)}万`;
        }
        return `${value.toLocaleString('ja-JP')}`;
    };

    const formatToManJa = (value: number) => {
         const man = value / 10000;
         return `${Math.round(man)}万円`;
    }

    return {
        vi: `${salary.toLocaleString('de-DE')} Yên/năm`,
        en: `${salary.toLocaleString('en-US')} JPY/year`,
        ja: `${formatToManJa(salary)}/年`,
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

const allJapanesePrefectures = japanRegions.flatMap(region => region.prefectures);

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
    
    // --- Start applying rules from the image ---
    const visaSubtypeEn = visaSubtype.en;

    let hasTattoo = Math.random() > 0.6;
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
    
    if (visaSubtypeEn === 'No. 3 Intern' || visaSubtypeEn === 'Skilled (from Vietnam)' || visaSubtypeEn === 'New Skilled Worker' || visaSubtypeEn === 'Skilled (in Japan)' || visaSubtypeEn === 'Engineer/Specialist (in Japan)') {
        hasTattoo = false;
    }
    
    if (visaSubtypeEn !== '3-Year Intern' && visaSubtypeEn !== '1-Year Intern') {
        hasHepatitisB = false;
    }
    
    if (visaSubtypeEn === 'Skilled (in Japan)' || visaSubtypeEn === 'Engineer/Specialist (in Japan)') {
        financialAbility = null;
        interviewLocation = null;
    }

    if (visaSubtypeEn === 'No. 3 Intern') {
        interviewLocation = null;
    }
    
    if (visaSubtypeEn === '3-Year Intern' || visaSubtypeEn === '1-Year Intern') {
        randomLanguageAbility = { language: { vi: "Không yêu cầu", en: "Not required", ja: "不問" }, level: null };
    } else {
        if (randomLanguageAbility.language.en === 'Japanese') {
            randomLanguageAbility.level = getRandomElement(japaneseLevels);
        } else if (randomLanguageAbility.language.en === 'English') {
            randomLanguageAbility.level = getRandomElement(englishLevels);
        }
    }


    const tattooRecord = hasTattoo ? (Math.random() > 0.5 ? tattoos.large : tattoos.small) : tattoos.none;

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

    let details_vi = `${age} tuổi - ${height} cm - ${weight} kg`;
    let details_en = `${age} years old - ${height} cm - ${weight} kg`;
    let details_ja = `${age}歳 - ${height} cm - ${weight} kg`;

    details_vi += ` - ${tattooRecord.vi}`;
    details_en += ` - ${tattooRecord.en}`;
    details_ja += ` - ${tattooRecord.ja}`;

    const currentResidenceBase = getRandomElement(currentResidences);
    let currentResidenceWithDetail = {...currentResidenceBase};
    if (currentResidenceBase.en === 'Vietnam') {
        const randomHometown = getRandomElement(hometowns);
        currentResidenceWithDetail.vi += `, ${randomHometown.vi}`;
        currentResidenceWithDetail.en += `, ${randomHometown.en}`;
        currentResidenceWithDetail.ja += `、${randomHometown.ja}`;
    } else { // Japan
        const randomPrefecture = getRandomElement(allJapanesePrefectures);
        currentResidenceWithDetail.vi = `Nhật Bản, ${randomPrefecture.vi}`;
        currentResidenceWithDetail.en = `Japan, ${randomPrefecture.en}`;
        currentResidenceWithDetail.ja = `日本、${randomPrefecture.ja}`;
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
        desired_annual_income: getRandomAnnualIncome(randomVisaKey),
        education_level: randomEducation,
        years_of_experience: randomExperience,
        ginou_remaining_period: randomVisaKey === 'intern' ? getRandomElement(ginouRemainingPeriods) : null,
        jobs: {
            count: Math.floor(Math.random() * 10) + 1,
            images: Array.from({ length: 3 }, (_, j) => `https://picsum.photos/50?random=job${i}${j}`)
        },
        created_date: generateRandomDate(new Date(), new Date(new Date().setFullYear(new Date().getFullYear() + 1))),
        height,
        hepatitis_b: hasHepatitisB ? { vi: true, en: true, ja: true } : null,
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
        current_residence: currentResidenceWithDetail,
        documents_status: getRandomElement(documentStatuses),
    };
});

    

    

  



    




    

    




    

    






    



















    

    



    


    


