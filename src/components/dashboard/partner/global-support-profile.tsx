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

export function GlobalSupportProfile() {
    const { t, language } = useLanguage();
    const profileData = {
        vi: {
            companyName: 'Nghiệp đoàn Global Support',
            tagline: 'Nghiệp đoàn (Kumiai)',
            location: 'Tokyo, Nhật Bản',
            introduction: "Nghiệp đoàn Global Support là một tổ chức uy tín trong việc tiếp nhận và quản lý thực tập sinh kỹ năng tại Nhật Bản. Chúng tôi hoạt động với mục tiêu hỗ trợ các doanh nghiệp vừa và nhỏ giải quyết vấn đề thiếu hụt lao động, đồng thời tạo cơ hội cho lao động nước ngoài học hỏi kỹ thuật tiên tiến và phát triển sự nghiệp. Chúng tôi tập trung vào các ngành nghề như xây dựng, cơ khí, và chế biến thực phẩm, cam kết đảm bảo môi trường làm việc an toàn và tuân thủ pháp luật cho thực tập sinh.",
            history: [
                { year: '2008', event: "Thành lập nghiệp đoàn", description: "Bắt đầu hoạt động với 20 công ty thành viên, tập trung vào ngành xây dựng." },
                { year: '2014', event: "Mở rộng ngành nghề tiếp nhận", description: "Bổ sung ngành cơ khí và chế biến thực phẩm vào danh mục tiếp nhận." },
                { year: '2021', event: "Đạt mốc 500 thực tập sinh", description: "Trở thành một trong những nghiệp đoàn hàng đầu tại khu vực Kanto." }
            ],
            licenses: "Giấy phép hoạt động của Nghiệp đoàn được cấp bởi OTIT",
            companyInfo: {
                founded: '2008',
                size: '20-50 nhân viên',
                phone: '03-1234-5678',
                website: 'globalsupport-union.jp',
                address: 'Shinjuku, Tokyo, Nhật Bản'
            },
            industryInfo: {
                mainIndustries: ["Xây dựng", "Cơ khí", "Chế biến thực phẩm"],
                fields: "Tiếp nhận và quản lý thực tập sinh kỹ năng các ngành: xây dựng, cơ khí, chế biến thực phẩm, nông nghiệp."
            },
            benefits: "Tổ chức các buổi học tiếng Nhật và văn hóa định kỳ.\nThăm hỏi và hỗ trợ đời sống của thực tập sinh 3 tháng/lần.\nLuôn bảo vệ quyền lợi hợp pháp của thực tập sinh."
        },
        ja: {
            companyName: 'グローバルサポート協同組合',
            tagline: '協同組合',
            location: '東京都、日本',
            introduction: "グローバルサポート協同組合は、日本における技能実習生の受け入れと管理において信頼される組織です。私たちは、中小企業の人手不足問題の解決を支援するとともに、外国人労働者が先進技術を学びキャリアを築く機会を創出することを目指して活動しています。建設、機械、食品加工などの分野に重点を置き、実習生のために安全で法令を遵守した労働環境を確保することをお約束します。",
            history: [
                { year: '2008年', event: "組合設立", description: "建設業を中心に20社の組合員で活動を開始。" },
                { year: '2014年', event: "受入職種の拡大", description: "機械加工と食品加工を受入職種に追加。" },
                { year: '2021年', event: "実習生500人達成", description: "関東地方でトップクラスの協同組合となる。" }
            ],
            licenses: "外国人技能実習機構（OTIT）より認可",
            companyInfo: {
                founded: '2008年',
                size: '20-50名',
                phone: '03-1234-5678',
                website: 'globalsupport-union.jp',
                address: '東京都新宿区'
            },
            industryInfo: {
                mainIndustries: ["建設", "機械", "食品加工"],
                fields: "技能実習生の受入れ・管理分野：建設、機械、食品加工、農業。"
            },
            benefits: "定期的な日本語および文化の勉強会の開催。\n3ヶ月に1度の実習生の生活状況の訪問とサポート。\n実習生の法的権利を常に保護します。"
        },
        en: {
            companyName: 'Global Support Union',
            tagline: 'Cooperative Union (Kumiai)',
            location: 'Tokyo, Japan',
            introduction: "Global Support Union is a reputable organization for accepting and managing technical intern trainees in Japan. We operate with the goal of helping small and medium-sized enterprises solve labor shortages while creating opportunities for foreign workers to learn advanced techniques and develop their careers. We focus on industries such as construction, mechanics, and food processing, and are committed to ensuring a safe and legally compliant working environment for interns.",
            history: [
                { year: '2008', event: "Union Establishment", description: "Started operations with 20 member companies, focusing on the construction industry." },
                { year: '2014', event: "Expanded Reception Fields", description: "Added mechanics and food processing to the reception categories." },
                { year: '2021', event: "Reached 500 Interns Milestone", description: "Became one of the leading unions in the Kanto region." }
            ],
            licenses: "Union operation license granted by OTIT",
            companyInfo: {
                founded: '2008',
                size: '20-50 employees',
                phone: '03-1234-5678',
                website: 'globalsupport-union.jp',
                address: 'Shinjuku, Tokyo, Japan'
            },
            industryInfo: {
                mainIndustries: ["Construction", "Mechanics", "Food Processing"],
                fields: "Accepting and managing technical intern trainees in: construction, mechanics, food processing, agriculture."
            },
            benefits: "Regularly organizing Japanese language and cultural study sessions.\nVisiting and supporting the daily lives of interns every 3 months.\nAlways protecting the legal rights of interns."
        }
    };
    
    const profile = profileData[language as keyof typeof profileData] || profileData.vi;

  return (
    <div className="flex w-full flex-col p-4 md:gap-8 md:p-10 bg-blue-50/50">
        <div className="mx-auto grid w-full max-w-7xl gap-6">
            <Card className="shadow-sm">
                <div className="relative h-48 w-full">
                <Image
                    src="https://picsum.photos/1200/300?random=20"
                    alt="Company Banner"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    data-ai-hint="tokyo office building"
                />
                <div className="absolute -bottom-12 left-6">
                    <div className="relative">
                        <Avatar className="h-24 w-24 border-4 border-card">
                            <AvatarImage src="https://picsum.photos/150/150?random=gs" />
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
                        <Image src="https://picsum.photos/400/225?random=21" layout="fill" objectFit="cover" alt="video thumbnail" data-ai-hint="construction site"/>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Video className="h-8 w-8 text-white opacity-80 group-hover:opacity-100 transition-opacity"/>
                        </div>
                    </div>
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
