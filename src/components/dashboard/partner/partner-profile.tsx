'use client';

import {
  Briefcase,
  Building,
  Calendar,
  Camera,
  Globe,
  MapPin,
  Phone,
  Users,
  Video,
  FileText,
} from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/language-context';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function PartnerProfile() {
    const { t, language } = useLanguage();
    // This data would eventually come from a backend based on partner ID
    const profileData = {
        vi: {
            companyName: 'Công ty cổ phần Nhân lực Vietproud',
            tagline: 'Công ty phái cử',
            location: 'Hà Nội, Việt Nam',
            introduction: "Công ty Cổ phần Nhân lực Vietproud là một trong những đơn vị tiên phong trong lĩnh vực cung ứng và quản lý nguồn nhân lực Việt Nam cho thị trường Nhật Bản. Với sứ mệnh kết nối tài năng Việt với các doanh nghiệp hàng đầu Nhật Bản, chúng tôi cam kết mang đến những giải pháp nhân sự toàn diện, hiệu quả và đáng tin cậy. Chúng tôi không chỉ cung cấp lao động có tay nghề cao mà còn chú trọng đào tạo ngôn ngữ, văn hóa và kỹ năng làm việc chuyên nghiệp để đảm bảo người lao động hòa nhập nhanh chóng và thành công.",
            history: [
                { year: '2012', event: "Thành lập công ty", description: "Tiền thân là một trung tâm Nhật ngữ, đặt nền móng cho hoạt động đào tạo." },
                { year: '2016', event: "Nhận giấy phép phái cử lao động", description: "Chính thức được cấp phép bởi Bộ LĐ-TB&XH, mở ra chương mới trong việc cung ứng nhân lực." },
                { year: '2020', event: "Đạt mốc 1000 lao động xuất cảnh", description: "Khẳng định vị thế và uy tín trên thị trường phái cử lao động sang Nhật Bản." }
            ],
            licenses: "Giấy phép hoạt động dịch vụ đưa người lao động đi làm việc ở nước ngoài số 888/LDTBXH-GP",
            companyInfo: {
                founded: '2012',
                size: '100-200 nhân viên',
                phone: '024-8888-9999',
                website: 'vietproud-hr.com.vn',
                address: 'Quận Đống Đa, Hà Nội, Việt Nam'
            },
            industryInfo: {
                mainIndustries: ["Xây dựng", "Cơ khí", "Chế biến thực phẩm", "Nông nghiệp", "Hộ lý"],
                fields: "Cung ứng lao động cho đa dạng các ngành nghề: xây dựng, cơ khí, nông nghiệp, chế biến thực phẩm, hộ lý, dệt may..."
            },
            benefits: "Hệ thống trung tâm đào tạo hiện đại trên toàn quốc.\nQuy trình tuyển chọn và đào tạo chuyên nghiệp theo tiêu chuẩn Nhật Bản.\nHỗ trợ toàn diện người lao động từ quá trình học tập đến khi làm việc tại Nhật."
        },
        ja: {
            companyName: 'ベットプラウド人材株式会社',
            tagline: '送り出し機関',
            location: 'ハノイ、ベトナム',
            introduction: "ベットプラウド人材株式会社は、日本市場向けのベトナム人材の供給と管理分野における先駆的企業の一つです。ベトナムの才能を日本のトップ企業と結びつけるという使命のもと、包括的で効果的かつ信頼性の高い人材ソリューションを提供することをお約束します。私たちは、高いスキルを持つ労働者を提供するだけでなく、言語、文化、専門的な職業スキルのトレーニングにも重点を置き、労働者が迅速に溶け込み、成功することを保証します。",
            history: [
                { year: '2012年', event: "会社設立", description: "前身は日本語センターで、研修活動の基盤を築きました。" },
                { year: '2016年', event: "労働者派遣許可を取得", description: "労働・傷病兵・社会省から正式に認可され、人材供給の新たな章を開きました。" },
                { year: '2020年', event: "1000人の労働者派遣を達成", description: "日本への労働者派遣市場での地位と信頼性を確立しました。" }
            ],
            licenses: "労働者海外派遣事業許可証 第888/LDTBXH-GP号",
            companyInfo: {
                founded: '2012年',
                size: '100-200名',
                phone: '024-8888-9999',
                website: 'vietproud-hr.com.vn',
                address: 'ベトナム、ハノイ市、ドンダー区'
            },
            industryInfo: {
                mainIndustries: ["建設", "機械", "食品加工", "農業", "介護"],
                fields: "多様な産業への労働者供給：建設、機械、農業、食品加工、介護、繊維..."
            },
            benefits: "全国に最新のトレーニングセンターシステム。\n日本の基準に準拠した専門的な選考・研修プロセス。\n学習過程から日本での就労まで、労働者を包括的にサポートします。"
        },
        en: {
            companyName: 'Vietproud Manpower JSC',
            tagline: 'Sending Company',
            location: 'Hanoi, Vietnam',
            introduction: "Vietproud Manpower Joint Stock Company is one of the pioneers in supplying and managing Vietnamese human resources for the Japanese market. With the mission of connecting Vietnamese talent with leading Japanese enterprises, we are committed to providing comprehensive, effective, and reliable human resource solutions. We not only provide highly skilled labor but also focus on training in language, culture, and professional work skills to ensure that workers integrate quickly and succeed.",
            history: [
                { year: '2012', event: "Company Establishment", description: "Its predecessor was a Japanese language center, laying the foundation for training activities." },
                { year: '2016', event: "Received Labor Dispatch License", description: "Officially licensed by the Ministry of Labour, Invalids and Social Affairs, opening a new chapter in human resource supply." },
                { year: '2020', event: "Reached the milestone of 1000 exported workers", description: "Affirming its position and reputation in the labor dispatch market to Japan." }
            ],
            licenses: "License for the service of sending workers abroad No. 888/LDTBXH-GP",
            companyInfo: {
                founded: '2012',
                size: '100-200 employees',
                phone: '024-8888-9999',
                website: 'vietproud-hr.com.vn',
                address: 'Dong Da District, Hanoi, Vietnam'
            },
            industryInfo: {
                mainIndustries: ["Construction", "Mechanics", "Food Processing", "Agriculture", "Caregiving"],
                fields: "Supplying labor for various industries: construction, mechanics, agriculture, food processing, caregiving, textiles..."
            },
            benefits: "A nationwide network of modern training centers.\nA professional selection and training process according to Japanese standards.\nComprehensive support for workers from the learning process to working in Japan."
        }
    };
    
    const profile = profileData[language as keyof typeof profileData] || profileData.vi;

  return (
    <div className="flex w-full flex-col p-4 md:gap-8 md:p-10 bg-blue-50/50">
        <div className="mx-auto grid w-full max-w-7xl gap-6">
            <Card className="shadow-sm">
                <div className="relative h-48 w-full">
                <Image
                    src="https://picsum.photos/1200/300?random=10"
                    alt="Company Banner"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    data-ai-hint="vietnam cityscape hanoi"
                />
                <div className="absolute -bottom-12 left-6">
                    <div className="relative">
                        <Avatar className="h-24 w-24 border-4 border-card">
                            <AvatarImage src="https://picsum.photos/150/150?random=vp" />
                            <AvatarFallback>{profile.companyName.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                </div>
                <div className="flex justify-between items-start pt-16 p-6">
                    <div>
                        <CardTitle className="text-2xl">
                            {profile.companyName}
                        </CardTitle>
                        <CardDescription>{profile.tagline}</CardDescription>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <MapPin className="h-4 w-4" />
                            {profile.location}
                        </div>
                    </div>
                </div>
            </Card>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div className="md:col-span-2 space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>{t.dashboard_employer.company_profile.companyIntroduction.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground whitespace-pre-wrap">{profile.introduction}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                    <CardTitle>{t.dashboard_employer.company_profile.companyVideo.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-3 gap-4">
                    <div className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group">
                        <Image src="https://picsum.photos/400/225?random=11" layout="fill" objectFit="cover" alt="video thumbnail" data-ai-hint="classroom learning"/>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Video className="h-8 w-8 text-white opacity-80 group-hover:opacity-100 transition-opacity"/>
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group">
                        <Image src="https://picsum.photos/400/225?random=12" layout="fill" objectFit="cover" alt="video thumbnail" data-ai-hint="workers training"/>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Video className="h-8 w-8 text-white opacity-80 group-hover:opacity-100 transition-opacity"/>
                        </div>
                    </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                    <CardTitle>{t.dashboard_employer.company_profile.companyPhotos.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-4 gap-4">
                    <Image src="https://picsum.photos/200?random=14" width={200} height={200} alt="company photo" className="rounded-lg object-cover aspect-square" data-ai-hint="training center"/>
                    <Image src="https://picsum.photos/200?random=15" width={200} height={200} alt="company photo" className="rounded-lg object-cover aspect-square" data-ai-hint="students group"/>
                    <Image src="https://picsum.photos/200?random=16" width={200} height={200} alt="company photo" className="rounded-lg object-cover aspect-square" data-ai-hint="office building vietnam"/>
                    <Image src="https://picsum.photos/200?random=17" width={200} height={200} alt="company photo" className="rounded-lg object-cover aspect-square" data-ai-hint="graduation ceremony"/>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{t.dashboard_employer.company_profile.history.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                    {profile.history.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <p className="font-bold text-muted-foreground w-12">{item.year}</p>
                            <div className="flex-grow border-l-2 border-primary pl-4">
                                <p className="font-semibold">{item.event}</p>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        </div>
                    ))}
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{t.dashboard_employer.company_profile.licenses.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <ul className="list-disc pl-5 text-muted-foreground space-y-1 whitespace-pre-wrap">
                            {profile.licenses.split('\n').map((item, index) => item.trim() && <li key={index}>{item}</li>)}
                        </ul>
                    </CardContent>
                </Card>
                </div>
                <div className="md:col-span-1 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>{t.dashboard_employer.company_profile.companyInfo.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-sm">
                            <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-muted-foreground"/> 
                                <span className="font-medium">{t.dashboard_employer.company_profile.companyInfo.founded}: </span>
                                <span className="text-muted-foreground">{profile.companyInfo.founded}</span>
                            </div>
                            <div className="flex items-center gap-2"><Users className="h-4 w-4 text-muted-foreground"/>
                               <span className="font-medium">{t.dashboard_employer.company_profile.companyInfo.size}: </span>
                               <span className="text-muted-foreground">{profile.companyInfo.size}</span>
                            </div>
                            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-muted-foreground"/> 
                                <span className="font-medium">{t.dashboard_employer.company_profile.companyInfo.phone}: </span>
                                <span className="text-muted-foreground">{profile.companyInfo.phone}</span>
                            </div>
                            <div className="flex items-center gap-2"><Globe className="h-4 w-4 text-muted-foreground"/> 
                                <span className="font-medium">{t.dashboard_employer.company_profile.companyInfo.website}: </span>
                                <span className="text-muted-foreground">{profile.companyInfo.website}</span>
                            </div>
                            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-muted-foreground"/> 
                               <span className="font-medium">{t.dashboard_employer.company_profile.companyInfo.address}: </span>
                               <span className="text-muted-foreground">{profile.companyInfo.address}</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>{t.dashboard_employer.company_profile.industryInfo.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-semibold text-sm mb-2">{t.dashboard_employer.company_profile.industryInfo.mainIndustry}</p>
                            <div className="flex flex-wrap gap-2">
                                {profile.industryInfo.mainIndustries.map((industry, index) => (
                                     <Badge key={index} variant="outline">{industry}</Badge>
                                ))}
                            </div>
                            <p className="font-semibold text-sm mt-4 mb-2">{t.dashboard_employer.company_profile.industryInfo.fields}</p>
                            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{profile.industryInfo.fields}</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>{t.dashboard_employer.company_profile.benefits.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 whitespace-pre-wrap">
                                {profile.benefits.split('\n').map((item, index) => item.trim() && <li key={index}>{item}</li>)}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  );
}
