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

export function VietnamLinkProfile() {
    const { t, language } = useLanguage();
    const profileData = {
        vi: {
            companyName: 'Công ty TNHH Vietnam Link',
            tagline: 'Công ty phái cử (Okuridashi Kikan)',
            location: 'Hồ Chí Minh, Việt Nam',
            introduction: "Công ty TNHH Vietnam Link tự hào là một trong những công ty phái cử hàng đầu Việt Nam, chuyên cung ứng nguồn nhân lực dồi dào và chất lượng cho thị trường Nhật Bản. Chúng tôi có một quy trình tuyển chọn và đào tạo nghiêm ngặt, đảm bảo người lao động không chỉ có tay nghề tốt mà còn có ý thức kỷ luật và khả năng thích ứng cao với văn hóa Nhật Bản. Đối tác của chúng tôi là các nghiệp đoàn và xí nghiệp lớn trên khắp Nhật Bản.",
            history: [
                { year: '2015', event: "Thành lập công ty", description: "Tập trung vào việc đào tạo và cung ứng lao động cho các ngành thiếu hụt nhân lực." },
                { year: '2018', event: "Hợp tác chiến lược", description: "Ký kết hợp tác với hơn 30 nghiệp đoàn lớn tại Nhật Bản." },
                { year: '2023', event: "Đạt giải thưởng uy tín", description: "Nhận giải thưởng 'Công ty phái cử xuất sắc' do Hiệp hội trao tặng." }
            ],
            licenses: "Giấy phép hoạt động dịch vụ đưa người lao động đi làm việc ở nước ngoài số 777/LDTBXH-GP",
            companyInfo: {
                founded: '2015',
                size: '50-100 nhân viên',
                phone: '028-1234-5678',
                website: 'vietnam-link.vn',
                address: 'Quận 1, TP. Hồ Chí Minh, Việt Nam'
            },
            industryInfo: {
                mainIndustries: ["Dệt may", "Lắp ráp điện tử", "Nông nghiệp"],
                fields: "Cung ứng lao động cho các ngành: dệt may, điện tử, nông nghiệp, xây dựng, cơ khí."
            },
            benefits: "Mạng lưới đối tác rộng khắp Nhật Bản, mang lại nhiều lựa chọn việc làm.\nChương trình đào tạo toàn diện, bao gồm cả đào tạo nâng cao sau khi sang Nhật.\nChính sách hỗ trợ minh bạch, rõ ràng cho người lao động."
        },
        ja: {
            companyName: 'ベトナムリンク有限会社',
            tagline: '送り出し機関',
            location: 'ホーチミン市、ベトナム',
            introduction: "ベトナムリンク有限会社は、豊富で質の高い人材を日本市場に供給する、ベトナムの主要な送り出し機関の一つであることを誇りに思っています。私たちは厳格な選考・研修プロセスを持ち、労働者が優れたスキルを持つだけでなく、日本の文化に対する高い規律意識と適応能力を身につけることを保証します。私たちのパートナーは、日本全国の主要な協同組合や企業です。",
            history: [
                { year: '2015年', event: "会社設立", description: "人材不足の産業への労働者の研修と供給に注力。" },
                { year: '2018年', event: "戦略的提携", description: "日本の30以上の主要な協同組合と提携契約を締結。" },
                { year: '2023年', event: "名誉ある賞を受賞", description: "協会から「優秀送り出し機関」賞を受賞。" }
            ],
            licenses: "労働者海外派遣事業許可証 第777/LDTBXH-GP号",
            companyInfo: {
                founded: '2015年',
                size: '50-100名',
                phone: '028-1234-5678',
                website: 'vietnam-link.vn',
                address: 'ベトナム、ホーチミン市、1区'
            },
            industryInfo: {
                mainIndustries: ["繊維", "電子組立", "農業"],
                fields: "労働供給分野：繊維、電子、農業、建設、機械。"
            },
            benefits: "日本全国に広がるパートナーネットワークにより、多くの就職選択肢を提供。\n渡日後の高度な研修を含む、包括的な研修プログラム。\n労働者のための透明で明確な支援ポリシー。"
        },
        en: {
            companyName: 'Vietnam Link Co., Ltd',
            tagline: 'Sending Company (Okuridashi Kikan)',
            location: 'Ho Chi Minh City, Vietnam',
            introduction: "Vietnam Link Co., Ltd is proud to be one of Vietnam's leading sending companies, specializing in providing an abundant and high-quality workforce for the Japanese market. We have a rigorous selection and training process, ensuring that workers not only have good skills but also a high sense of discipline and adaptability to Japanese culture. Our partners include major unions and enterprises throughout Japan.",
            history: [
                { year: '2015', event: "Company Establishment", description: "Focused on training and supplying labor for industries with workforce shortages." },
                { year: '2018', event: "Strategic Partnership", description: "Signed cooperation agreements with over 30 major unions in Japan." },
                { year: '2023', event: "Received Prestigious Award", description: "Received the 'Excellent Sending Company' award from the association." }
            ],
            licenses: "License for the service of sending workers abroad No. 777/LDTBXH-GP",
            companyInfo: {
                founded: '2015',
                size: '50-100 employees',
                phone: '028-1234-5678',
                website: 'vietnam-link.vn',
                address: 'District 1, Ho Chi Minh City, Vietnam'
            },
            industryInfo: {
                mainIndustries: ["Textiles", "Electronics Assembly", "Agriculture"],
                fields: "Supplying labor for industries: textiles, electronics, agriculture, construction, mechanics."
            },
            benefits: "Extensive partner network throughout Japan, providing many job options.\nComprehensive training program, including advanced training after arriving in Japan.\nTransparent and clear support policies for workers."
        }
    };
    
    const profile = profileData[language as keyof typeof profileData] || profileData.vi;

  return (
    <div className="flex w-full flex-col p-4 md:gap-8 md:p-10 bg-blue-50/50">
        <div className="mx-auto grid w-full max-w-7xl gap-6">
            <Card className="shadow-sm">
                <div className="relative h-48 w-full">
                <Image
                    src="https://picsum.photos/1200/300?random=40"
                    alt="Company Banner"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    data-ai-hint="ho chi minh cityscape"
                />
                <div className="absolute -bottom-12 left-6">
                    <div className="relative">
                        <Avatar className="h-24 w-24 border-4 border-card">
                            <AvatarImage src="https://picsum.photos/150/150?random=vl" />
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
