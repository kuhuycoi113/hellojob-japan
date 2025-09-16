// This is a new file.
import type { Language } from "@/locales/translations";

export type MockJob = {
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
};

export const mockJobs: MockJob[] = [
  {
    id: 'JOB001',
    title: {
      vi: 'Nhân viên Chế biến Thực phẩm',
      en: 'Food Processing Staff',
      ja: '食品加工スタッフ'
    },
    company: {
      vi: 'Công ty TNHH Thực phẩm Sasaki',
      en: 'Sasaki Foods Co., Ltd.',
      ja: '佐々木食品株式会社'
    },
    applicants: 12,
    status: 'Active',
    postedDate: '2024-05-20',
    image: 'https://picsum.photos/400/225?random=1',
    imageHint: 'food factory',
    location: {
      vi: 'Tỉnh Aichi',
      en: 'Aichi Prefecture',
      ja: '愛知県'
    },
    visaType: {
      vi: 'Kỹ năng đặc định (i)',
      en: 'Specified Skilled Worker (i)',
      ja: '特定技能1号'
    },
    salary: {
      vi: '180.000 - 220.000 JPY/tháng',
      en: '¥180,000 - ¥220,000/month',
      ja: '月給18万～22万円'
    },
    contractType: {
      vi: 'Toàn thời gian',
      en: 'Full-time',
      ja: '正社員'
    },
    workingHours: {
      vi: '08:00 - 17:00 (8 tiếng)',
      en: '08:00 - 17:00 (8 hours)',
      ja: '08:00～17:00（実働8時間）'
    },
    holidays: {
      vi: 'Cuối tuần và ngày lễ quốc gia',
      en: 'Weekends and national holidays',
      ja: '土日祝'
    },
    description: {
      vi: 'Chịu trách nhiệm chế biến và đóng gói sản phẩm thực phẩm trong môi trường nhà máy sạch sẽ và an toàn. Công việc bao gồm vận hành máy móc, kiểm tra chất lượng và duy trì các tiêu chuẩn vệ sinh.',
      en: 'Responsible for processing and packaging food products in a clean and safe factory environment. This includes operating machinery, quality checking, and maintaining hygiene standards.',
      ja: '清潔で安全な工場環境で食品の加工および包装を担当します。機械の操作、品質チェック、衛生基準の維持などが含まれます。'
    },
    requirements: {
      vi: ['Ưu tiên có kinh nghiệm trong ngành thực phẩm', 'Kỹ năng giao tiếp tiếng Nhật cơ bản (trình độ N4)', 'Có khả năng làm việc nhóm', 'Sức khỏe tốt'],
      en: ['Experience in food industry preferred', 'Basic Japanese communication skills (N4 level)', 'Ability to work in a team', 'Good physical health'],
      ja: ['食品業界での経験者優遇', '基本的な日本語コミュニケーション能力（N4レベル）', 'チームで働く能力', '良好な健康状態']
    },
    benefits: {
      vi: ['Cung cấp bảo hiểm xã hội', 'Có trả lương làm thêm giờ', 'Hỗ trợ nhà ở', 'Thưởng hàng năm dựa trên hiệu suất'],
      en: ['Social insurance provided', 'Overtime pay available', 'Housing support available', 'Annual bonus based on performance'],
      ja: ['社会保険完備', '残業代支給', '住宅支援あり', '業績に応じた年次賞与']
    }
  },
  {
    id: 'JOB002',
    title: {
      vi: 'Thợ hàn xây dựng',
      en: 'Construction Welder',
      ja: '建設溶接工'
    },
    company: {
      vi: 'Công ty Xây dựng Takahashi',
      en: 'Takahashi Construction',
      ja: '高橋建設'
    },
    applicants: 5,
    status: 'Active',
    postedDate: '2024-05-18',
    image: 'https://picsum.photos/400/225?random=2',
    imageHint: 'welder construction',
    location: {
      vi: 'Tokyo',
      en: 'Tokyo',
      ja: '東京'
    },
    visaType: {
      vi: 'Thực tập sinh kỹ năng',
      en: 'Technical Intern Trainee',
      ja: '技能実習生'
    },
    salary: {
      vi: '170.000 JPY/tháng',
      en: '¥170,000/month',
      ja: '月給17万円'
    },
    contractType: {
      vi: 'Thực tập 3 năm',
      en: '3-Year Internship',
      ja: '3年間の実習'
    },
    workingHours: {
      vi: '08:00 - 17:30',
      en: '08:00 - 17:30',
      ja: '08:00～17:30'
    },
    holidays: {
      vi: 'Chủ nhật, 2 ngày thứ Bảy mỗi tháng',
      en: 'Sundays, 2 Saturdays per month',
      ja: '日曜、月2回土曜'
    },
    description: {
      vi: 'Thực hiện các công việc hàn tại các công trường xây dựng khác nhau. Trách nhiệm bao gồm đọc bản vẽ, lắp đặt thiết bị hàn và đảm bảo tất cả các mối hàn đều đạt tiêu chuẩn an toàn và chất lượng.',
      en: 'Perform welding duties on various construction sites. Responsibilities include interpreting blueprints, setting up welding equipment, and ensuring all welds meet safety and quality standards.',
      ja: '様々な建設現場で溶接業務を行います。図面の解釈、溶接設備の設置、すべての溶接が安全性と品質基準を満たしていることの確認などが含まれます。'
    },
    requirements: {
      vi: ['Có chứng chỉ hoặc kinh nghiệm hàn', 'Dưới 30 tuổi', 'Ham học hỏi kỹ năng mới'],
      en: ['Welding certification or experience', 'Must be under 30 years old', 'Eager to learn new skills'],
      ja: ['溶接資格または経験', '30歳未満であること', '新しいスキルを学ぶ意欲があること']
    },
    benefits: {
      vi: ['Cung cấp chương trình đào tạo', 'Cung cấp tất cả các thiết bị và đồ bảo hộ cần thiết', 'Có ký túc xá'],
      en: ['Training program provided', 'All necessary equipment and safety gear provided', 'Dormitory available'],
      ja: ['研修プログラム提供', '必要なすべての機器と安全具を提供', '寮あり']
    }
  },
  {
    id: 'JOB003',
    title: {
      vi: 'Hộ lý chăm sóc người cao tuổi',
      en: 'Elderly Caregiver',
      ja: '高齢者介護士'
    },
    company: {
      vi: 'Viện dưỡng lão Sakura',
      en: 'Sakura Nursing Home',
      ja: 'さくら介護施設'
    },
    applicants: 25,
    status: 'Awaiting Approval',
    postedDate: '2024-05-22',
    image: 'https://picsum.photos/400/225?random=3',
    imageHint: 'caregiver elderly',
    location: {
      vi: 'Osaka',
      en: 'Osaka',
      ja: '大阪'
    },
    visaType: {
      vi: 'Kỹ năng đặc định (i) - Hộ lý',
      en: 'Specified Skilled Worker (i) - Caregiver',
      ja: '特定技能1号（介護）'
    },
    salary: {
      vi: '190.000 JPY/tháng + phụ cấp ca đêm',
      en: '¥190,000/month + night shift allowance',
      ja: '月給19万円＋夜勤手当'
    },
    contractType: {
      vi: 'Toàn thời gian',
      en: 'Full-time',
      ja: '正社員'
    },
    workingHours: {
      vi: 'Theo ca (Ngày/Tối/Đêm)',
      en: 'Shift-based (Day/Evening/Night)',
      ja: 'シフト制（日勤/夕勤/夜勤）'
    },
    holidays: {
      vi: '4 ngày nghỉ mỗi 4 tuần (luân phiên)',
      en: '4 days off per 4-week period (rotating)',
      ja: '4週8休（シフト制）'
    },
    description: {
      vi: 'Cung cấp chăm sóc và hỗ trợ hàng ngày cho người cao tuổi, bao gồm hỗ trợ tắm rửa, ăn uống và di chuyển. Tạo một môi trường sống thoải mái và an toàn cho tất cả cư dân.',
      en: 'Provide daily care and support to elderly residents, including assistance with bathing, meals, and mobility. Create a comfortable and safe living environment for all residents.',
      ja: '高齢者の入居者様への日常的なケアとサポートを提供します。入浴、食事、移動の支援などが含まれます。すべての入居者様にとって快適で安全な生活環境を創出します。'
    },
    requirements: {
      vi: ['Có chứng chỉ Hộ lý (Kaigo Fukushi Shi) hoặc đã hoàn thành đào tạo Thực tập sinh kỹ năng ngành hộ lý', 'JLPT N3 trở lên', 'Tính cách nhân ái và kiên nhẫn'],
      en: ['Certified Care Worker (Kaigo Fukushi Shi) or completed Technical Intern training in caregiving', 'JLPT N3 or higher', 'A compassionate and patient personality'],
      ja: ['介護福祉士の資格保有者、または介護分野の技能実習修了者', 'JLPT N3以上', '思いやりと忍耐力のある方']
    },
    benefits: {
      vi: ['Bảo hiểm xã hội đầy đủ', 'Phụ cấp đi lại', 'Cung cấp đồng phục', 'Cơ hội đào tạo nâng cao kỹ năng'],
      en: ['Full social insurance', 'Transportation allowance', 'Uniform provided', 'Opportunities for skill-up training'],
      ja: ['社会保険完備', '交通費支給', '制服貸与', 'スキルアップ研修の機会あり']
    }
  },
  ...Array.from({ length: 27 }, (_, i) => {
    const jobIndex = i + 4;
    const statusTypes: ('Active' | 'Awaiting Approval' | 'Closed')[] = ['Active', 'Awaiting Approval', 'Closed'];
    const industries = [
        { vi: 'Nông nghiệp', en: 'Agriculture', ja: '農業', hint: 'farm tractor' },
        { vi: 'Cơ khí', en: 'Mechanics', ja: '機械', hint: 'metal workshop' },
        { vi: 'Lắp ráp điện tử', en: 'Electronics Assembly', ja: '電子組立', hint: 'electronics factory' },
        { vi: 'Dệt may', en: 'Textiles', ja: '繊維', hint: 'sewing machine' },
        { vi: 'Dọn dẹp tòa nhà', en: 'Building Cleaning', ja: 'ビルクリーニング', hint: 'cleaning service' },
        { vi: 'Khách sạn', en: 'Hospitality', ja: '宿泊', hint: 'hotel lobby' }
    ];
    const locations = [
        { vi: 'Hokkaido', en: 'Hokkaido', ja: '北海道' },
        { vi: 'Fukuoka', en: 'Fukuoka', ja: '福岡' },
        { vi: 'Kanagawa', en: 'Kanagawa', ja: '神奈川' },
        { vi: 'Saitama', en: 'Saitama', ja: '埼玉' },
        { vi: 'Chiba', en: 'Chiba', ja: '千葉' }
    ];
    const companies = [
        { vi: 'Công ty TNHH Watanabe', en: 'Watanabe Co., Ltd.', ja: '渡辺株式会社' },
        { vi: 'Tập đoàn Ito', en: 'Ito Group', ja: '伊藤グループ' },
        { vi: 'Xí nghiệp Yamamoto', en: 'Yamamoto Works', ja: '山本工業' },
        { vi: 'Công ty Tanaka', en: 'Tanaka Corporation', ja: '田中商事' }
    ];
    const industry = industries[jobIndex % industries.length];
    const location = locations[jobIndex % locations.length];
    const company = companies[jobIndex % companies.length];

    return {
      id: `JOB${String(jobIndex).padStart(3, '0')}`,
      title: {
        vi: `${industry.vi} tại ${location.vi}`,
        en: `${industry.en} in ${location.en}`,
        ja: `${location.ja}での${industry.ja}`
      },
      company,
      applicants: jobIndex * 3 % 30, // Consistent applicants
      status: statusTypes[jobIndex % statusTypes.length],
      postedDate: `2024-05-${String(25 - (jobIndex % 25)).padStart(2, '0')}`,
      image: `https://picsum.photos/400/225?random=${jobIndex}`,
      imageHint: industry.hint,
      location,
      visaType: {
        vi: 'Kỹ năng đặc định (i)',
        en: 'Specified Skilled Worker (i)',
        ja: '特定技能1号'
      },
      salary: {
        vi: '195.000 JPY/tháng',
        en: '¥195,000/month',
        ja: '月給19.5万円'
      },
      contractType: {
        vi: 'Toàn thời gian',
        en: 'Full-time',
        ja: '正社員'
      },
      workingHours: {
        vi: '08:30 - 17:30',
        en: '08:30 - 17:30',
        ja: '08:30～17:30'
      },
      holidays: {
        vi: 'Chủ Nhật và một ngày khác trong tuần',
        en: 'Sunday and one other weekday',
        ja: '日曜・他週1日'
      },
      description: {
        vi: `Tuyển dụng nhân viên cho ngành ${industry.vi}. Công việc ổn định, môi trường làm việc tốt. Yêu cầu ứng viên chăm chỉ, có trách nhiệm.`,
        en: `Recruiting staff for the ${industry.en} industry. Stable job, good working environment. Seeking hardworking and responsible candidates.`,
        ja: `${industry.ja} ngànhのスタッフを募集しています。安定した仕事、良好な労働環境。勤勉で責任感のある候補者を求めています。`
      },
      requirements: {
        vi: ['Sức khỏe tốt, không có bệnh truyền nhiễm', 'Chăm chỉ, chịu khó học hỏi', 'Ưu tiên ứng viên có kinh nghiệm'],
        en: ['Good health, no infectious diseases', 'Hardworking, willing to learn', 'Candidates with experience are prioritized'],
        ja: ['健康で、伝染病がないこと', '勤勉で、学ぶ意欲があること', '経験者優遇']
      },
      benefits: {
        vi: ['Hỗ trợ tìm nhà ở', 'Bảo hiểm đầy đủ theo luật pháp', 'Tăng lương hàng năm'],
        en: ['Housing search support', 'Full insurance according to law', 'Annual salary increase'],
        ja: ['住居探しサポート', '法律に基づく完全な保険', '毎年の昇給']
      }
    };
  })
] as MockJob[];
