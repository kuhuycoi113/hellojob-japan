
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
    },
];
