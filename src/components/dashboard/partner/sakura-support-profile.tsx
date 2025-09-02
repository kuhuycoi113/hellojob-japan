// This is a new file.
'use client';

import {
  Building,
  Calendar,
  Camera,
  Globe,
  MapPin,
  Phone,
  Users,
  Video,
} from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/language-context';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function SakuraSupportProfile() {
    const { t, language } = useLanguage();
    const profileData = {
        vi: {
            companyName: 'Tổ chức hỗ trợ Sakura',
            tagline: 'Cơ quan hỗ trợ (Shien Kikan)',
            location: 'Osaka, Nhật Bản',
            introduction: "Tổ chức hỗ trợ Sakura chuyên cung cấp các dịch vụ hỗ trợ toàn diện cho người lao động nước ngoài theo visa Kỹ năng đặc định. Chúng tôi hiểu rằng việc hòa nhập với cuộc sống và công việc mới tại Nhật Bản có thể gặp nhiều khó khăn. Vì vậy, chúng tôi cung cấp các gói hỗ trợ đa dạng, từ việc tìm nhà ở, đăng ký thủ tục hành chính, đến các khóa học tiếng Nhật và tư vấn giải quyết các vấn đề trong cuộc sống hàng ngày. Sứ mệnh của chúng tôi là trở thành người bạn đồng hành đáng tin cậy của người lao động.",
            history: [
                { year: '2019', event: "Thành lập tổ chức", description: "Thành lập ngay sau khi luật visa Kỹ năng đặc định có hiệu lực, là một trong những cơ quan hỗ trợ đầu tiên." },
                { year: '2020', event: "Hỗ trợ thành công 100 lao động", description: "Hỗ trợ thành công 100 lao động đầu tiên tìm được việc làm và ổn định cuộc sống." },
                { year: '2022', event: "Mở rộng mạng lưới toàn quốc", description: "Phát triển mạng lưới hỗ trợ ra khắp các thành phố lớn tại Nhật Bản." }
            ],
            licenses: "Giấy phép Cơ quan hỗ trợ được cấp bởi Cục quản lý xuất nhập cảnh Nhật Bản",
            companyInfo: {
                founded: '2019',
                size: '10-20 nhân viên',
                phone: '06-1234-5678',
                website: 'sakura-support.jp',
                address: 'Chuo-ku, Osaka, Nhật Bản'
            },
            industryInfo: {
                mainIndustries: ["Nông nghiệp", "Hộ lý", "Nhà hàng", "Khách sạn"],
                fields: "Cung cấp các gói hỗ trợ trước và sau nhập cảnh cho lao động Kỹ năng đặc định."
            },
            benefits: "Hỗ trợ 24/7 qua đường dây nóng đa ngôn ngữ.\nTổ chức các sự kiện giao lưu văn hóa thường xuyên.\nCung cấp các khóa học nâng cao kỹ năng và tiếng Nhật."
        },
        ja: {
            companyName: '登録支援機関さくら',
            tagline: '登録支援機関',
            location: '大阪府、日本',
            introduction: "登録支援機関さくらは、特定技能ビザを持つ外国人労働者に対し、包括的な支援サービスを提供することを専門としています。日本での新しい生活や仕事への適応が困難な場合があることを理解しており、住居探し、行政手続きの登録から、日本語講座や日常生活の問題解決相談まで、多様な支援パッケージを提供しています。私たちの使命は、労働者の信頼できるパートナーとなることです。",
            history: [
                { year: '2019年', event: "機関設立", description: "特定技能ビザ法施行直後に設立された、最初の登録支援機関の一つ。" },
                { year: '2020年', event: "100人の労働者支援成功", description: "最初の100人の労働者が仕事を見つけ、生活を安定させる支援に成功。" },
                { year: '2022年', event: "全国ネットワークの拡大", description: "日本の主要都市に支援ネットワークを拡大。" }
            ],
            licenses: "出入国在留管理庁より登録支援機関として許可",
            companyInfo: {
                founded: '2019年',
                size: '10-20名',
                phone: '06-1234-5678',
                website: 'sakura-support.jp',
                address: '大阪市中央区'
            },
            industryInfo: {
                mainIndustries: ["農業", "介護", "外食", "宿泊"],
                fields: "特定技能労働者向けの入国前後の支援パッケージの提供。"
            },
            benefits: "多言語対応の24時間ホットライン。\n定期的な文化交流イベントの開催。\nスキルアップや日本語の講座を提供。"
        },
        en: {
            companyName: 'Sakura Support Organization',
            tagline: 'Supporting Organization (Shien Kikan)',
            location: 'Osaka, Japan',
            introduction: "Sakura Support Organization specializes in providing comprehensive support services for foreign workers under the Specified Skilled Worker visa. We understand that adapting to a new life and job in Japan can be challenging. Therefore, we offer various support packages, from finding housing and handling administrative procedures to Japanese language courses and consulting on daily life issues. Our mission is to be a reliable companion for workers.",
            history: [
                { year: '2019', event: "Organization Establishment", description: "Established shortly after the Specified Skilled Worker visa law came into effect, being one of the first support organizations." },
                { year: '2020', event: "Successfully Supported 100 Workers", description: "Successfully helped the first 100 workers find jobs and stabilize their lives." },
                { year: '2022', event: "Expanded Nationwide Network", description: "Expanded the support network to major cities across Japan." }
            ],
            licenses: "Support Organization license granted by the Immigration Services Agency of Japan",
            companyInfo: {
                founded: '2019',
                size: '10-20 employees',
                phone: '06-1234-5678',
                website: 'sakura-support.jp',
                address: 'Chuo-ku, Osaka, Japan'
            },
            industryInfo: {
                mainIndustries: ["Agriculture", "Caregiving", "Restaurant", "Hospitality"],
                fields: "Providing pre- and post-arrival support packages for Specified Skilled Workers."
            },
            benefits: "24/7 support via a multilingual hotline.\nRegular organization of cultural exchange events.\nProvision of skill enhancement and Japanese language courses."
        }
    };
    
    const profile = profileData[language as keyof typeof profileData] || profileData.vi;

  return (
    <div className="flex w-full flex-col p-4 md:gap-8 md:p-10 bg-blue-50/50">
        <div className="mx-auto grid w-full max-w-7xl gap-6">
            <Card className="shadow-sm">
                <div className="relative h-48 w-full">
                <Image
                    src="https://picsum.photos/1200/300?random=30"
                    alt="Company Banner"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    data-ai-hint="osaka cityscape"
                />
                <div className="absolute -bottom-12 left-6">
                    <div className="relative">
                        <Avatar className="h-24 w-24 border-4 border-card">
                            <AvatarImage src="https://picsum.photos/150/150?random=ss" />
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
