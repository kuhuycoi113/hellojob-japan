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

export function FukushiCareProfile() {
    const { t, language } = useLanguage();
    const profileData = {
        vi: {
            companyName: 'Trung tâm chăm sóc Fukushi',
            tagline: 'Xí nghiệp tiếp nhận',
            location: 'Kanagawa, Nhật Bản',
            introduction: "Trung tâm chăm sóc Fukushi là một cơ sở dưỡng lão hàng đầu tại Kanagawa, chuyên cung cấp dịch vụ chăm sóc toàn diện cho người cao tuổi. Với đội ngũ nhân viên tận tâm và cơ sở vật chất hiện đại, chúng tôi tạo ra một môi trường sống an toàn, thoải mái và đầy tình thương. Chúng tôi luôn tìm kiếm những ứng viên có lòng nhân ái và chuyên môn để cùng chúng tôi thực hiện sứ mệnh chăm sóc người cao tuổi.",
            history: [
                { year: '2005', event: "Thành lập trung tâm", description: "Bắt đầu với quy mô 30 giường, tập trung vào chăm sóc nội trú." },
                { year: '2015', event: "Mở rộng dịch vụ chăm sóc ban ngày", description: "Cung cấp thêm dịch vụ chăm sóc ban ngày để phục vụ nhiều người hơn trong cộng đồng." },
                { year: '2023', event: "Nhận chứng nhận cơ sở chăm sóc xuất sắc", description: "Được chính quyền địa phương công nhận về chất lượng dịch vụ vượt trội." }
            ],
            licenses: "Giấy phép kinh doanh cơ sở dưỡng lão của tỉnh Kanagawa",
            companyInfo: {
                founded: '2005',
                size: '50-100 nhân viên',
                phone: '045-123-4567',
                website: 'fukushi-care.jp',
                address: 'Yokohama, Kanagawa, Nhật Bản'
            },
            industryInfo: {
                mainIndustries: ["Hộ lý", "Y tế"],
                fields: "Chăm sóc nội trú cho người cao tuổi, dịch vụ chăm sóc ban ngày, phục hồi chức năng."
            },
            benefits: "Môi trường làm việc chuyên nghiệp, thân thiện.\nChế độ đào tạo nâng cao tay nghề thường xuyên.\nLương thưởng và phúc lợi cạnh tranh, hỗ trợ nhà ở."
        },
        ja: {
            companyName: '福祉ケアセンター',
            tagline: '受入企業',
            location: '神奈川県、日本',
            introduction: "福祉ケアセンターは、神奈川県を代表する老人ホーム施設であり、高齢者向けの包括的なケアサービスを提供しています。献身的なスタッフと最新の設備により、安全で快適、そして愛情あふれる生活環境を創り出しています。私たちは、高齢者ケアという使命を共に果たすため、思いやりと専門知識を持つ候補者を常に探しています。",
            history: [
                { year: '2005年', event: "センター設立", description: "入所介護を中心に30床規模でスタート。" },
                { year: '2015年', event: "デイケアサービスを拡充", description: "地域社会のより多くの方々にサービスを提供するため、デイケアサービスを追加。" },
                { year: '2023年', event: "優秀介護施設として認定", description: "卓越したサービス品質が地方自治体から認められる。" }
            ],
            licenses: "神奈川県より老人ホーム事業許可",
            companyInfo: {
                founded: '2005年',
                size: '50-100名',
                phone: '045-123-4567',
                website: 'fukushi-care.jp',
                address: '神奈川県横浜市'
            },
            industryInfo: {
                mainIndustries: ["介護", "医療"],
                fields: "高齢者入所介護、デイケアサービス、リハビリテーション。"
            },
            benefits: "プロフェッショナルでフレンドリーな職場環境。\n定期的なスキルアップ研修制度。\n競争力のある給与・福利厚生、住宅支援あり。"
        },
        en: {
            companyName: 'Fukushi Care Center',
            tagline: 'Accepting Company',
            location: 'Kanagawa, Japan',
            introduction: "Fukushi Care Center is a leading nursing home in Kanagawa, dedicated to providing comprehensive care for the elderly. With a devoted staff and modern facilities, we create a safe, comfortable, and loving living environment. We are always looking for compassionate and skilled candidates to join us in our mission of caring for the elderly.",
            history: [
                { year: '2005', event: "Center Establishment", description: "Started with a 30-bed capacity, focusing on residential care." },
                { year: '2015', event: "Expanded Day Care Services", description: "Added day care services to serve more people in the community." },
                { year: '2023', event: "Received Excellent Care Facility Certification", description: "Recognized by the local government for outstanding service quality." }
            ],
            licenses: "Nursing home business license from Kanagawa Prefecture",
            companyInfo: {
                founded: '2005',
                size: '50-100 employees',
                phone: '045-123-4567',
                website: 'fukushi-care.jp',
                address: 'Yokohama, Kanagawa, Japan'
            },
            industryInfo: {
                mainIndustries: ["Caregiving", "Healthcare"],
                fields: "Residential care for the elderly, day care services, rehabilitation."
            },
            benefits: "Professional and friendly working environment.\nRegular skill enhancement training programs.\nCompetitive salary and benefits, housing support available."
        }
    };
    
    const profile = profileData[language as keyof typeof profileData] || profileData.vi;

  return (
    <div className="flex w-full flex-col p-4 md:gap-8 md:p-10 bg-blue-50/50">
        <div className="mx-auto grid w-full max-w-7xl gap-6">
            <Card className="shadow-sm">
                <div className="relative h-48 w-full">
                <Image
                    src="https://picsum.photos/1200/300?random=50"
                    alt="Company Banner"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    data-ai-hint="nursing home exterior"
                />
                <div className="absolute -bottom-12 left-6">
                    <div className="relative">
                        <Avatar className="h-24 w-24 border-4 border-card">
                            <AvatarImage src="https://picsum.photos/150/150?random=fc" />
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
