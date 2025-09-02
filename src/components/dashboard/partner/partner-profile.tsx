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
    const { t } = useLanguage();
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
        }
    };
    
    const profile = profileData.vi;

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
