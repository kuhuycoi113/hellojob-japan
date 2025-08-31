'use client';

import {
  Briefcase,
  Building,
  Calendar,
  Camera,
  ChevronDown,
  ChevronRight,
  Clock,
  Edit,
  FileText,
  Globe,
  Image as ImageIcon,
  LogOut,
  MapPin,
  Plus,
  Phone,
  Sparkles,
  Users,
  Video,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
import { useLanguage } from '@/contexts/language-context';
import { JobsList } from './jobs-list';

export function CompanyProfile() {
  const { t } = useLanguage();

  const history = [
    {
      year: '2015',
      event: 'Thành lập công ty',
      description:
        'Bắt đầu với 5 nhân viên, tập trung vào thị trường sản xuất linh kiện ô tô.',
    },
    {
      year: '2018',
      event: 'Mở rộng nhà xưởng',
      description:
        'Đạt chứng nhận ISO 9001 và mở rộng quy mô sản xuất gấp đôi.',
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-7xl gap-6">
          <Card className="shadow-sm">
            <div className="relative h-48 w-full">
              <Image
                src="https://picsum.photos/1200/300"
                alt="Company Banner"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              <div className="absolute -bottom-12 left-6">
                <Avatar className="h-24 w-24 border-4 border-card">
                  <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                  <AvatarFallback>GSU</AvatarFallback>
                </Avatar>
              </div>
              <Button variant="outline" className="absolute top-4 right-4 bg-white/80">
                <Edit className="mr-2 h-4 w-4" />
                Sửa hồ sơ
              </Button>
            </div>
            <div className="pt-16 p-6">
              <CardTitle className="text-2xl">
                Global Support Union
              </CardTitle>
              <CardDescription>Sản xuất & Chế biến</CardDescription>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <MapPin className="h-4 w-4" />
                Aichi, Nhật Bản
              </div>
            </div>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Giới thiệu doanh nghiệp</CardTitle>
                  <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Chưa có thông tin. Nhấn vào đây để cập nhật</p>
                </CardContent>
              </Card>
               <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Video về doanh nghiệp</CardTitle>
                  <Button variant="ghost" size="icon"><Plus className="h-4 w-4" /></Button>
                </CardHeader>
                <CardContent className="grid grid-cols-3 gap-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group">
                      <Image src="https://picsum.photos/400/225?random=1" layout="fill" objectFit="cover" alt="video thumbnail"/>
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Video className="h-8 w-8 text-white opacity-80 group-hover:opacity-100 transition-opacity"/>
                      </div>
                  </div>
                   <div className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group">
                      <Image src="https://picsum.photos/400/225?random=2" layout="fill" objectFit="cover" alt="video thumbnail"/>
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Video className="h-8 w-8 text-white opacity-80 group-hover:opacity-100 transition-opacity"/>
                      </div>
                  </div>
                   <div className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group">
                      <Image src="https://picsum.photos/400/225?random=3" layout="fill" objectFit="cover" alt="video thumbnail"/>
                       <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Video className="h-8 w-8 text-white opacity-80 group-hover:opacity-100 transition-opacity"/>
                      </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Ảnh về doanh nghiệp</CardTitle>
                  <Button variant="ghost" size="icon"><Plus className="h-4 w-4" /></Button>
                </CardHeader>
                <CardContent className="grid grid-cols-4 gap-4">
                  <Image src="https://picsum.photos/200?random=4" width={200} height={200} alt="company photo" className="rounded-lg object-cover aspect-square"/>
                  <Image src="https://picsum.photos/200?random=5" width={200} height={200} alt="company photo" className="rounded-lg object-cover aspect-square"/>
                  <Image src="https://picsum.photos/200?random=6" width={200} height={200} alt="company photo" className="rounded-lg object-cover aspect-square"/>
                  <Image src="https://picsum.photos/200?random=7" width={200} height={200} alt="company photo" className="rounded-lg object-cover aspect-square"/>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Lịch sử & các mốc sự kiện</CardTitle>
                   <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {history.map(item => (
                    <div key={item.year} className="flex items-start gap-4">
                      <p className="font-bold text-muted-foreground w-12">{item.year}</p>
                      <div className="border-l-2 border-primary pl-4">
                        <p className="font-semibold">{item.event}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
               <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Giấy phép & Chứng nhận</CardTitle>
                   <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                </CardHeader>
                <CardContent>
                   <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                      <li>Giấy phép kinh doanh số 12345-XYZ</li>
                      <li>Chứng nhận ISO 9001:2015</li>
                   </ul>
                </CardContent>
              </Card>
            </div>
            <div className="md:col-span-1 space-y-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Thông tin doanh nghiệp</CardTitle>
                      <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                       <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-muted-foreground"/> <span>Năm thành lập: 2015</span></div>
                       <div className="flex items-center gap-2"><Users className="h-4 w-4 text-muted-foreground"/> <span>Quy mô: 100-500 nhân viên</span></div>
                       <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-muted-foreground"/> <span>SĐT: 052-123-4567</span></div>
                       <div className="flex items-center gap-2"><Globe className="h-4 w-4 text-muted-foreground"/> <span>Website: globalsupport.jp</span></div>
                       <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-muted-foreground"/> <span>Địa chỉ: Aichi, Nhật Bản</span></div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Ngành nghề & Lĩnh vực</CardTitle>
                      <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                    </CardHeader>
                    <CardContent>
                        <p className="font-semibold text-sm mb-2">Ngành nghề chính</p>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">Sản xuất ô tô</Badge>
                            <Badge variant="outline">Chế biến thực phẩm</Badge>
                        </div>
                         <p className="font-semibold text-sm mt-4 mb-2">Lĩnh vực hoạt động</p>
                         <p className="text-sm text-muted-foreground">Chưa có lĩnh vực hoạt động. Nhấn vào đây để cập nhật</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Phúc lợi & Môi trường</CardTitle>
                      <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>Hỗ trợ nhà ở, ký túc xá</li>
                            <li>Bảo hiểm đầy đủ theo luật pháp</li>
                            <li>Các hoạt động ngoại khóa, du lịch công ty</li>
                        </ul>
                    </CardContent>
                </Card>
                <Button variant="outline" className="w-full">
                    <LogOut className="mr-2 h-4 w-4"/>
                    Đăng xuất
                </Button>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Việc làm của tôi</h2>
            <JobsList />
          </div>

        </div>
      </main>
    </div>
  );
}
