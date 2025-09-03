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

export function MiyazakiFarmProfile() {
    const { t, language } = useLanguage();
    const profileData = {
        vi: {
            companyName: 'Nông trang Miyazaki',
            tagline: 'Xí nghiệp tiếp nhận',
            location: 'Miyazaki, Nhật Bản',
            introduction: "Nông trang Miyazaki là một doanh nghiệp nông nghiệp hiện đại, chuyên trồng các loại rau củ hữu cơ chất lượng cao theo tiêu chuẩn Nhật Bản. Chúng tôi áp dụng các công nghệ tiên tiến vào sản xuất để đảm bảo năng suất và chất lượng sản phẩm. Môi trường làm việc của chúng tôi thân thiện, an toàn và chúng tôi luôn chào đón những người lao động chăm chỉ, có mong muốn học hỏi và phát triển trong ngành nông nghiệp.",
            history: [
                { year: '2010', event: "Thành lập nông trang", description: "Bắt đầu với 5 hecta đất, tập trung trồng cà chua và dưa chuột." },
                { year: '2018', event: "Đạt chứng nhận hữu cơ JAS", description: "Toàn bộ sản phẩm được công nhận đạt tiêu chuẩn hữu cơ của Nhật Bản." },
                { year: '2021', event: "Bắt đầu tiếp nhận thực tập sinh", description: "Hợp tác với các nghiệp đoàn để tiếp nhận thực tập sinh kỹ năng từ Việt Nam." }
            ],
            licenses: "Giấy chứng nhận Nông nghiệp hữu cơ JAS (Japanese Agricultural Standard)",
            companyInfo: {
                founded: '2010',
                size: '20-50 nhân viên',
                phone: '0985-123-456',
                website: 'miyazaki-farm.jp',
                address: 'Miyazaki-shi, Miyazaki, Nhật Bản'
            },
            industryInfo: {
                mainIndustries: ["Nông nghiệp"],
                fields: "Trồng trọt rau củ hữu cơ (cà chua, dưa chuột, ớt chuông), quản lý nông trang, thu hoạch và đóng gói sản phẩm."
            },
            benefits: "Cung cấp ký túc xá sạch sẽ, đầy đủ tiện nghi gần nông trang.\nBảo hiểm đầy đủ theo luật lao động Nhật Bản.\nCơ hội học hỏi về nông nghiệp công nghệ cao và làm việc lâu dài."
        },
        ja: {
            companyName: '宮崎農園',
            tagline: '受入企業',
            location: '宮崎県、日本',
            introduction: "宮崎農園は、日本の基準に従って高品質の有機野菜を専門に栽培する近代的な農業企業です。生産性と製品品質を確保するために、生産に先進技術を適用しています。私たちの職場環境はフレンドリーで安全であり、農業分野で学び成長したいと願う勤勉な労働者を常に歓迎しています。",
            history: [
                { year: '2010年', event: "農園設立", description: "トマトとキュウリの栽培を中心に5ヘクタールの土地でスタート。" },
                { year: '2018年', event: "JAS有機認証を取得", description: "すべての製品が日本の有機基準を満たしていると認定される。" },
                { year: '2021年', event: "実習生の受け入れ開始", description: "ベトナムからの技能実習生を受け入れるために協同組合と協力。" }
            ],
            licenses: "JAS（日本農林規格）有機認証",
            companyInfo: {
                founded: '2010年',
                size: '20-50名',
                phone: '0985-123-456',
                website: 'miyazaki-farm.jp',
                address: '宮崎県宮崎市'
            },
            industryInfo: {
                mainIndustries: ["農業"],
                fields: "有機野菜（トマト、キュウリ、ピーマン）の栽培、農場管理、収穫および製品の包装。"
            },
            benefits: "農園の近くに清潔で設備の整った寮を提供。\n日本の労働法に基づく完全な保険。\nハイテク農業について学び、長期的に働く機会。"
        },
        en: {
            companyName: 'Miyazaki Farm',
            tagline: 'Accepting Company',
            location: 'Miyazaki, Japan',
            introduction: "Miyazaki Farm is a modern agricultural enterprise specializing in growing high-quality organic vegetables according to Japanese standards. We apply advanced technologies in production to ensure productivity and product quality. Our working environment is friendly and safe, and we always welcome hardworking individuals who wish to learn and grow in the agricultural industry.",
            history: [
                { year: '2010', event: "Farm Establishment", description: "Started with 5 hectares of land, focusing on growing tomatoes and cucumbers." },
                { year: '2018', event: "Achieved JAS Organic Certification", description: "All products are certified to meet Japan's organic standards." },
                { year: '2021', event: "Began Accepting Interns", description: "Partnered with unions to accept technical intern trainees from Vietnam." }
            ],
            licenses: "JAS (Japanese Agricultural Standard) Organic Certification",
            companyInfo: {
                founded: '2010',
                size: '20-50 employees',
                phone: '0985-123-456',
                website: 'miyazaki-farm.jp',
                address: 'Miyazaki-shi, Miyazaki, Japan'
            },
            industryInfo: {
                mainIndustries: ["Agriculture"],
                fields: "Cultivation of organic vegetables (tomatoes, cucumbers, bell peppers), farm management, harvesting, and product packaging."
            },
            benefits: "Provides clean, fully-equipped dormitories near the farm.\nFull insurance coverage according to Japanese labor law.\nOpportunities to learn about high-tech agriculture and for long-term employment."
        }
    };
    
    const profile = profileData[language as keyof typeof profileData] || profileData.vi;

  return (
    <div className="flex w-full flex-col p-4 md:gap-8 md:p-10 bg-blue-50/50">
        <div className="mx-auto grid w-full max-w-7xl gap-6">
            <Card className="shadow-sm">
                <div className="relative h-48 w-full">
                <Image
                    src="https://picsum.photos/1200/300?random=51"
                    alt="Company Banner"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    data-ai-hint="vegetable farm"
                />
                <div className="absolute -bottom-12 left-6">
                    <div className="relative">
                        <Avatar className="h-24 w-24 border-4 border-card">
                            <AvatarImage src="https://picsum.photos/150/150?random=mf" />
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
