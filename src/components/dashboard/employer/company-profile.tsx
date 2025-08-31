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
      <main className="flex flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Trang quản lý</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav className="grid gap-4 text-sm text-muted-foreground">
            <Link href="#" className="font-semibold text-primary">
              Hồ sơ công ty
            </Link>
            <Link href="/dashboard/employer/jobs">Việc làm của tôi</Link>
            <Link href="#">Ứng viên</Link>
            <Link href="#">Đối tác</Link>
            <Link href="#">Cài đặt</Link>
          </nav>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="relative h-48 w-full">
                  <Image
                    src="https://picsum.photos/1200/300"
                    alt="Company Banner"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                  <div className="absolute -bottom-12 left-6">
                    <Avatar className="h-24 w-24 border-4 border-white">
                      <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                      <AvatarFallback>GSU</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="pt-16 flex justify-between items-center">
                  <div>
                    <CardTitle className="text-2xl">
                      Global Support Union
                    </CardTitle>
                    <CardDescription>Sản xuất & Chế biến</CardDescription>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <MapPin className="h-4 w-4" />
                      Aichi, Nhật Bản
                    </div>
                  </div>
                  <Button variant="outline">
                    <Edit className="mr-2 h-4 w-4" />
                    Sửa hồ sơ
                  </Button>
                </div>
              </CardHeader>
            </Card>

            <JobsList />

          </div>
        </div>
      </main>
    </div>
  );
}
