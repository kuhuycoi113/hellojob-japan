// This is a new file.
import type { Language } from "@/locales/translations";

export type Opportunity = {
    id: string;
    title: Record<Language, string>;
    company: Record<Language, string>;
    applicants: number;
    status: 'Active' | 'Awaiting Approval' | 'Closed';
    postedDate: string;
    image: string;
    imageHint: string;
    location: Record<Language, string>;
    visaType: Record<Language, string>;
    salary: Record<Language, string>;
    contractType: Record<Language, string>;
    workingHours: Record<Language, string>;
    holidays: Record<Language, string>;
    description: Record<Language, string>;
    requirements: Record<Language, string[]>;
    benefits: Record<Language, string[]>;
    expires: string;
    referralFee: Record<Language, string>;
    managementFee: Record<Language, string>;
};

// Set expiry time to 15 minutes from now for all opportunities
const expiryDate = new Date();
expiryDate.setMinutes(expiryDate.getMinutes() + 15);

export const opportunities: Opportunity[] = [
    {
        id: 'OPP001',
        title: {
            vi: 'Tuyển 05 Kỹ sư cơ khí',
            en: 'Recruit 05 Mechanical Engineers',
            ja: '機械エンジニア5名募集'
        },
        company: {
            vi: 'Công ty Sản xuất Linh kiện Ô tô Aichi',
            en: 'Aichi Auto Parts Manufacturing Co.',
            ja: '愛知自動車部品製造株式会社'
        },
        applicants: 0,
        status: 'Active',
        postedDate: new Date().toISOString().split('T')[0],
        image: 'https://picsum.photos/400/225?random=101',
        imageHint: 'automotive factory',
        location: { vi: 'Aichi', en: 'Aichi', ja: '愛知県' },
        visaType: { vi: 'Kỹ sư', en: 'Engineer', ja: '技術者' },
        salary: { vi: '220,000 JPY/tháng', en: '220,000 JPY/month', ja: '月給22万円' },
        contractType: { vi: 'Toàn thời gian', en: 'Full-time', ja: '正社員' },
        workingHours: { vi: '08:00 - 17:00', en: '08:00 - 17:00', ja: '08:00～17:00' },
        holidays: { vi: 'Thứ 7, Chủ Nhật', en: 'Sat, Sun', ja: '土日' },
        description: {
            vi: 'Thiết kế và phát triển các bộ phận cơ khí cho ngành công nghiệp ô tô. Sử dụng phần mềm CAD để tạo ra các mô hình chi tiết và làm việc với nhóm sản xuất để đảm bảo chất lượng.',
            en: 'Design and develop mechanical parts for the automotive industry. Use CAD software to create detailed models and work with the production team to ensure quality.',
            ja: '自動車産業向けの機械部品の設計・開発。CADソフトウェアを使用して詳細なモデルを作成し、品質を確保するために生産チームと協力します。'
        },
        requirements: [
            { vi: 'Tiếng Nhật N3 trở lên', en: 'Japanese N3 or higher', ja: '日本語N3以上' },
            { vi: 'Có kinh nghiệm 3 năm', en: '3 years of experience', ja: '経験3年' },
            { vi: 'Sử dụng thành thạo AutoCAD', en: 'Proficient in AutoCAD', ja: 'AutoCADの堪能な使用' }
        ],
        benefits: [
            { vi: 'Thưởng 2 lần/năm', en: 'Bonus twice a year', ja: '賞与年2回' },
            { vi: 'Hỗ trợ nhà ở', en: 'Housing support', ja: '住宅手当' }
        ],
        expires: expiryDate.toISOString(),
        referralFee: { vi: '80,000 JPY/người', en: '80,000 JPY/person', ja: '80,000円/人' },
        managementFee: { vi: '30,000 JPY/người/tháng', en: '30,000 JPY/person/month', ja: '30,000円/人/月' },
    },
    {
        id: 'OPP002',
        title: {
            vi: 'Tuyển 10 TTS Chế biến thực phẩm',
            en: 'Recruit 10 Food Processing Interns',
            ja: '食品加工実習生10名募集'
        },
        company: {
            vi: 'Nhà máy Thực phẩm Hokkaido',
            en: 'Hokkaido Food Factory',
            ja: '北海道食品工場'
        },
        applicants: 0,
        status: 'Active',
        postedDate: new Date().toISOString().split('T')[0],
        image: 'https://picsum.photos/400/225?random=102',
        imageHint: 'food processing',
        location: { vi: 'Hokkaido', en: 'Hokkaido', ja: '北海道' },
        visaType: { vi: 'Thực tập sinh', en: 'Intern', ja: '技能実習生' },
        salary: { vi: '180,000 JPY/tháng', en: '180,000 JPY/month', ja: '月給18万円' },
        contractType: { vi: 'Thực tập 3 năm', en: '3-Year Internship', ja: '3年実習' },
        workingHours: { vi: '08:00 - 17:00', en: '08:00 - 17:00', ja: '08:00～17:00' },
        holidays: { vi: 'Theo lịch nhà máy', en: 'According to factory calendar', ja: '工場カレンダーによる' },
        description: {
            vi: 'Tham gia vào dây chuyền chế biến và đóng gói các sản phẩm nông sản của Hokkaido. Đảm bảo vệ sinh an toàn thực phẩm.',
            en: 'Participate in the processing and packaging line for Hokkaido agricultural products. Ensure food safety and hygiene.',
            ja: '北海道の農産物の加工・包装ラインに参加。食品の安全性と衛生を確保する。'
        },
        requirements: [
            { vi: 'Không yêu cầu kinh nghiệm', en: 'No experience required', ja: '経験不問' },
            { vi: 'Chăm chỉ, sức khỏe tốt', en: 'Hardworking, good health', ja: '勤勉、健康' },
            { vi: 'Nữ, tuổi từ 18-28', en: 'Female, age 18-28', ja: '女性、18～28歳' }
        ],
        benefits: [
            { vi: 'Có ký túc xá', en: 'Dormitory available', ja: '寮あり' },
            { vi: 'Đào tạo tại chỗ', en: 'On-the-job training', ja: 'OJT研修あり' }
        ],
        expires: expiryDate.toISOString(),
        referralFee: { vi: '75,000 JPY/người', en: '75,000 JPY/person', ja: '75,000円/人' },
        managementFee: { vi: '25,000 JPY/người/tháng', en: '25,000 JPY/person/month', ja: '25,000円/人/月' },
    },
    {
        id: 'OPP003',
        title: {
            vi: 'Tuyển 03 Nhân viên hộ lý',
            en: 'Recruit 03 Caregivers',
            ja: '介護職員3名募集'
        },
        company: {
            vi: 'Viện dưỡng lão Osaka Smile',
            en: 'Osaka Smile Nursing Home',
            ja: '介護老人保健施設おおさかスマイル'
        },
        applicants: 0,
        status: 'Active',
        postedDate: new Date().toISOString().split('T')[0],
        image: 'https://picsum.photos/400/225?random=103',
        imageHint: 'elderly care',
        location: { vi: 'Osaka', en: 'Osaka', ja: '大阪府' },
        visaType: { vi: 'Kỹ năng đặc định', en: 'Specified Skilled Worker', ja: '特定技能' },
        salary: { vi: '200,000 JPY/tháng', en: '200,000 JPY/month', ja: '月給20万円' },
        contractType: { vi: 'Toàn thời gian', en: 'Full-time', ja: '正社員' },
        workingHours: { vi: 'Theo ca', en: 'Shift work', ja: 'シフト制' },
        holidays: { vi: '4 tuần 8 ngày nghỉ', en: '8 days off in 4 weeks', ja: '4週8休' },
        description: {
            vi: 'Chăm sóc và hỗ trợ sinh hoạt hàng ngày cho người cao tuổi trong viện. Công việc bao gồm hỗ trợ ăn uống, tắm rửa, và các hoạt động giải trí.',
            en: 'Provide daily life care and support for elderly residents. Duties include assisting with meals, bathing, and recreational activities.',
            ja: '施設利用者の日常生活の介護と支援。食事、入浴、レクリエーション活動の支援など。'
        },
        requirements: [
            { vi: 'Có chứng chỉ N4 hoặc tương đương', en: 'N4 certificate or equivalent', ja: 'N4資格または同等レベル' },
            { vi: 'Đã hoàn thành khóa đào tạo hộ lý', en: 'Completed caregiver training course', ja: '介護研修修了者' },
            { vi: 'Kiên nhẫn, yêu thương người già', en: 'Patient, loves working with the elderly', ja: '忍耐強く、高齢者と接することが好きな方' }
        ],
        benefits: [
            { vi: 'Phụ cấp ca đêm', en: 'Night shift allowance', ja: '夜勤手当あり' },
            { vi: 'Hỗ trợ đi lại', en: 'Transportation support', ja: '交通費支給' }
        ],
        expires: expiryDate.toISOString(),
        referralFee: { vi: '90,000 JPY/người', en: '90,000 JPY/person', ja: '90,000円/人' },
        managementFee: { vi: '35,000 JPY/người/tháng', en: '35,000 JPY/person/month', ja: '35,000円/人/月' },
    },
    {
        id: 'OPP004',
        title: { vi: 'Tuyển 02 Thợ sơn xây dựng', en: 'Recruit 02 Construction Painters', ja: '建設塗装工2名募集' },
        company: { vi: 'Công ty Sơn Kanto', en: 'Kanto Painting Company', ja: '関東塗装株式会社' },
        applicants: 0,
        status: 'Active',
        postedDate: new Date().toISOString().split('T')[0],
        image: 'https://picsum.photos/400/225?random=104',
        imageHint: 'painter construction',
        location: { vi: 'Saitama', en: 'Saitama', ja: '埼玉県' },
        visaType: { vi: 'Thực tập sinh', en: 'Intern', ja: '技能実習生' },
        salary: { vi: '175,000 JPY/tháng', en: '175,000 JPY/month', ja: '月給17.5万円' },
        contractType: { vi: 'Thực tập 3 năm', en: '3-Year Internship', ja: '3年実習' },
        workingHours: { vi: '08:00 - 17:00', en: '08:00 - 17:00', ja: '08:00～17:00' },
        holidays: { vi: 'Chủ nhật', en: 'Sundays', ja: '日曜日' },
        description: {
            vi: 'Thực hiện công việc sơn tường, sơn kết cấu thép tại các công trình xây dựng. Yêu cầu sự tỉ mỉ và cẩn thận.',
            en: 'Perform wall painting and steel structure painting at construction sites. Requires meticulousness and care.',
            ja: '建設現場での壁や鉄骨の塗装作業。細やかさと丁寧さが求められます。'
        },
        requirements: [
            { vi: 'Không yêu cầu kinh nghiệm', en: 'No experience required', ja: '経験不問' },
            { vi: 'Chịu khó, cẩn thận', en: 'Hardworking and careful', ja: '勤勉で丁寧な方' },
            { vi: 'Nam, tuổi từ 20-35', en: 'Male, age 20-35', ja: '男性、20～35歳' }
        ],
        benefits: [
            { vi: 'Trợ cấp đi lại', en: 'Travel allowance', ja: '交通費支給' },
            { vi: 'Bảo hiểm lao động', en: 'Labor insurance', ja: '労働保険' }
        ],
        expires: expiryDate.toISOString(),
        referralFee: { vi: '70,000 JPY/người', en: '70,000 JPY/person', ja: '70,000円/人' },
        managementFee: { vi: '25,000 JPY/người/tháng', en: '25,000 JPY/person/month', ja: '25,000円/人/月' },
    },
    {
        id: 'OPP005',
        title: { vi: 'Tuyển 04 Nhân viên làm nông nghiệp', en: 'Recruit 04 Agricultural Workers', ja: '農業作業員4名募集' },
        company: { vi: 'Trang trại Nông sản Ibaraki', en: 'Ibaraki Agricultural Farm', ja: '茨城農産ファーム' },
        applicants: 0,
        status: 'Active',
        postedDate: new Date().toISOString().split('T')[0],
        image: 'https://picsum.photos/400/225?random=105',
        imageHint: 'agriculture farm',
        location: { vi: 'Ibaraki', en: 'Ibaraki', ja: '茨城県' },
        visaType: { vi: 'Kỹ năng đặc định', en: 'Specified Skilled Worker', ja: '特定技能' },
        salary: { vi: '185,000 JPY/tháng', en: '185,000 JPY/month', ja: '月給18.5万円' },
        contractType: { vi: 'Toàn thời gian', en: 'Full-time', ja: '正社員' },
        workingHours: { vi: '07:30 - 16:30', en: '07:30 - 16:30', ja: '07:30～16:30' },
        holidays: { vi: 'Theo mùa vụ', en: 'Seasonal', ja: '季節による' },
        description: {
            vi: 'Trồng và thu hoạch các loại rau củ theo mùa. Công việc chủ yếu làm ngoài trời, yêu cầu sức khỏe tốt.',
            en: 'Planting and harvesting seasonal vegetables. Work is mainly outdoors and requires good physical health.',
            ja: '季節の野菜の栽培と収穫。主に屋外での作業となり、良好な体力が求められます。'
        },
        requirements: [
            { vi: 'Có kinh nghiệm làm nông nghiệp', en: 'Experience in agriculture', ja: '農業経験者' },
            { vi: 'Sức khỏe tốt, không sợ côn trùng', en: 'Good health, not afraid of insects', ja: '健康で虫が苦手でない方' }
        ],
        benefits: [
            { vi: 'Có chỗ ở cho nhân viên', en: 'Staff housing available', ja: '社員寮あり' },
            { vi: 'Cung cấp sản phẩm nông sản của trang trại', en: 'Provided with farm products', ja: '自社農産物の支給あり' }
        ],
        expires: expiryDate.toISOString(),
        referralFee: { vi: '70,000 JPY/người', en: '70,000 JPY/person', ja: '70,000円/人' },
        managementFee: { vi: '20,000 JPY/người/tháng', en: '20,000 JPY/person/month', ja: '20,000円/人/月' },
    },
    {
        id: 'OPP006',
        title: { vi: 'Tuyển 05 Nhân viên dọn dẹp tòa nhà', en: 'Recruit 05 Building Cleaners', ja: 'ビルクリーニングスタッフ5名募集' },
        company: { vi: 'Công ty Dịch vụ Sạch Chiba', en: 'Chiba Clean Service Co.', ja: '株式会社千葉クリーンサービス' },
        applicants: 0,
        status: 'Active',
        postedDate: new Date().toISOString().split('T')[0],
        image: 'https://picsum.photos/400/225?random=106',
        imageHint: 'cleaning service',
        location: { vi: 'Chiba', en: 'Chiba', ja: '千葉県' },
        visaType: { vi: 'Kỹ năng đặc định', en: 'Specified Skilled Worker', ja: '特定技能' },
        salary: { vi: '190,000 JPY/tháng', en: '190,000 JPY/month', ja: '月給19万円' },
        contractType: { vi: 'Toàn thời gian', en: 'Full-time', ja: '正社員' },
        workingHours: { vi: '09:00 - 18:00', en: '09:00 - 18:00', ja: '09:00～18:00' },
        holidays: { vi: 'Thứ 7, Chủ nhật', en: 'Sat, Sun', ja: '土日' },
        description: {
            vi: 'Dọn dẹp vệ sinh các tòa nhà văn phòng, trung tâm thương mại. Sử dụng các dụng cụ và hóa chất chuyên dụng.',
            en: 'Cleaning office buildings and shopping centers. Use specialized tools and chemicals.',
            ja: 'オフィスビルや商業施設の清掃。専門の用具や化学薬品を使用します。'
        },
        requirements: [
            { vi: 'Nhanh nhẹn, sạch sẽ, cẩn thận', en: 'Agile, clean, and careful', ja: '機敏で清潔、丁寧な方' },
            { vi: 'Có trách nhiệm với công việc', en: 'Responsible for work', ja: '仕事に責任感のある方' }
        ],
        benefits: [
            { vi: 'Đóng bảo hiểm đầy đủ', en: 'Full insurance coverage', ja: '各種保険完備' },
            { vi: 'Cấp phát đồng phục', en: 'Uniform provided', ja: '制服貸与' }
        ],
        expires: expiryDate.toISOString(),
        referralFee: { vi: '65,000 JPY/người', en: '65,000 JPY/person', ja: '65,000円/人' },
        managementFee: { vi: '20,000 JPY/người/tháng', en: '20,000 JPY/person/month', ja: '20,000円/人/月' },
    },
    {
        id: 'OPP007',
        title: { vi: 'Tuyển 03 Nhân viên khách sạn', en: 'Recruit 03 Hotel Staff', ja: 'ホテルスタッフ3名募集' },
        company: { vi: 'Khách sạn Hakone View', en: 'Hakone View Hotel', ja: '箱根ビューホテル' },
        applicants: 0,
        status: 'Active',
        postedDate: new Date().toISOString().split('T')[0],
        image: 'https://picsum.photos/400/225?random=107',
        imageHint: 'hotel reception',
        location: { vi: 'Kanagawa', en: 'Kanagawa', ja: '神奈川県' },
        visaType: { vi: 'Kỹ năng đặc định', en: 'Specified Skilled Worker', ja: '特定技能' },
        salary: { vi: '210,000 JPY/tháng', en: '210,000 JPY/month', ja: '月給21万円' },
        contractType: { vi: 'Toàn thời gian', en: 'Full-time', ja: '正社員' },
        workingHours: { vi: 'Theo ca', en: 'Shift work', ja: 'シフト制' },
        holidays: { vi: 'Theo ca', en: 'Shift-based', ja: 'シフトによる' },
        description: {
            vi: 'Phục vụ khách hàng tại quầy lễ tân, nhà hàng, hoặc bộ phận buồng phòng. Mang đến trải nghiệm tốt nhất cho khách hàng.',
            en: 'Serve customers at the front desk, restaurant, or housekeeping department. Provide the best customer experience.',
            ja: 'フロント、レストラン、または客室部門でのお客様対応。最高のおもてなしを提供します。'
        },
        requirements: [
            { vi: 'Tiếng Nhật giao tiếp tốt (N3 trở lên)', en: 'Good communication in Japanese (N3 or higher)', ja: '日本語での良好なコミュニケーション能力（N3以上）' },
            { vi: 'Ngoại hình ưa nhìn, thái độ thân thiện', en: 'Pleasant appearance, friendly attitude', ja: '見た目が良く、フレンドリーな態度' }
        ],
        benefits: [
            { vi: 'Có thể sử dụng các tiện ích của khách sạn', en: 'Can use hotel facilities', ja: 'ホテル施設の利用可能' },
            { vi: 'Môi trường làm việc quốc tế', en: 'International working environment', ja: '国際的な職場環境' }
        ],
        expires: expiryDate.toISOString(),
        referralFee: { vi: '100,000 JPY/người', en: '100,000 JPY/person', ja: '100,000円/人' },
        managementFee: { vi: '40,000 JPY/người/tháng', en: '40,000 JPY/person/month', ja: '40,000円/人/月' },
    },
    {
        id: 'OPP008',
        title: { vi: 'Tuyển 06 Công nhân dệt may', en: 'Recruit 06 Textile Workers', ja: '繊維工場作業員6名募集' },
        company: { vi: 'Công ty Dệt may Gunma', en: 'Gunma Textile Company', ja: '群馬繊維株式会社' },
        applicants: 0,
        status: 'Active',
        postedDate: new Date().toISOString().split('T')[0],
        image: 'https://picsum.photos/400/225?random=108',
        imageHint: 'sewing factory',
        location: { vi: 'Gunma', en: 'Gunma', ja: '群馬県' },
        visaType: { vi: 'Thực tập sinh', en: 'Intern', ja: '技能実習生' },
        salary: { vi: '170,000 JPY/tháng', en: '170,000 JPY/month', ja: '月給17万円' },
        contractType: { vi: 'Thực tập 3 năm', en: '3-Year Internship', ja: '3年実習' },
        workingHours: { vi: '08:30 - 17:30', en: '08:30 - 17:30', ja: '08:30～17:30' },
        holidays: { vi: 'Chủ nhật, ngày lễ', en: 'Sundays, holidays', ja: '日曜、祝日' },
        description: {
            vi: 'Vận hành máy may, máy dệt trong nhà xưởng. Sản xuất các sản phẩm quần áo, vải vóc theo yêu cầu.',
            en: 'Operate sewing machines and looms in the factory. Produce clothing and fabric products as required.',
            ja: '工場でミシンや織機を操作します。要求に応じて衣類や布地製品を生産します。'
        },
        requirements: [
            { vi: 'Khéo léo, có kinh nghiệm may vá là một lợi thế', en: 'Dexterous, sewing experience is an advantage', ja: '手先が器用で、縫製経験があれば尚可' },
            { vi: 'Có khả năng làm việc theo nhóm', en: 'Ability to work in a team', ja: 'チームで作業できる方' }
        ],
        benefits: [
            { vi: 'Môi trường làm việc sạch sẽ, có điều hòa', en: 'Clean, air-conditioned work environment', ja: '清潔で空調の効いた職場環境' },
            { vi: 'Trợ cấp ăn trưa', en: 'Lunch allowance', ja: '昼食手当あり' }
        ],
        expires: expiryDate.toISOString(),
        referralFee: { vi: '70,000 JPY/người', en: '70,000 JPY/person', ja: '70,000円/人' },
        managementFee: { vi: '25,000 JPY/người/tháng', en: '25,000 JPY/person/month', ja: '25,000円/人/月' },
    }
];
