// This is a new file.
'use client';

import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/locales/translations';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, MapPin, Users, Calendar, DollarSign, Briefcase, FileText, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function JobDetail({ jobId }: { jobId: string }) {
  const { t, language } = useLanguage();
  
  const allOpportunities = [
      ...translations.vi.dashboard_partner.newOpportunities.opportunities,
      ...translations.en.dashboard_partner.newOpportunities.opportunities,
      ...translations.ja.dashboard_partner.newOpportunities.opportunities
  ];

  const job = t.dashboard_partner.newOpportunities.opportunities.find(j => j.id === jobId);

  if (!job) {
    // Basic handling if job not found, can be improved with a proper 404 page
    return notFound();
  }

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4">
        <div className="mb-6">
            <Button asChild variant="outline">
                <Link href="/dashboard/partner">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Quay lại danh sách
                </Link>
            </Button>
        </div>

      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
                <Badge variant="secondary" className="mb-2">{job.visa}</Badge>
                <CardTitle className="text-3xl font-bold font-headline">{job.title}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">{job.company}</CardDescription>
            </div>
            <div className="flex gap-2 flex-shrink-0">
                <Button variant="destructive">Từ chối</Button>
                <Button className="bg-green-600 hover:bg-green-700">Chấp nhận</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary"/><span className="font-semibold">Địa điểm:</span> {job.location}</div>
                <div className="flex items-center gap-2"><Users className="w-5 h-5 text-primary"/><span className="font-semibold">Số lượng:</span> {job.quantity}</div>
                <div className="flex items-center gap-2"><Briefcase className="w-5 h-5 text-primary"/><span className="font-semibold">Loại visa:</span> {job.visa}</div>
                <div className="flex items-center gap-2"><Calendar className="w-5 h-5 text-primary"/><span className="font-semibold">Hạn nộp:</span> {job.expires}</div>
            </div>

            <div className="prose prose-blue max-w-none">
                <h3 className="text-xl font-bold font-headline">Mô tả công việc</h3>
                <p>{job.description}</p>
            </div>

             <div>
                <h3 className="text-xl font-bold font-headline mb-4">Yêu cầu công việc</h3>
                <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"/>Có kinh nghiệm làm việc trong ngành hộ lý ít nhất 1 năm.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"/>Trình độ tiếng Nhật tương đương N4 trở lên.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"/>Có sức khỏe tốt, không mắc các bệnh truyền nhiễm.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"/>Có tinh thần trách nhiệm, yêu thích công việc chăm sóc người cao tuổi.</li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-bold font-headline mb-4">Phúc lợi</h3>
                <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"/>Lương cơ bản từ 180,000 JPY/tháng, chưa tính tăng ca.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"/>Hỗ trợ nhà ở, ký túc xá gần nơi làm việc.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"/>Đóng bảo hiểm đầy đủ theo quy định của pháp luật Nhật Bản.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"/>Có cơ hội được đào tạo nâng cao tay nghề và gia hạn visa.</li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-bold font-headline mb-4">Thông tin thêm</h3>
                <p className="text-muted-foreground">Vui lòng xem xét kỹ các yêu cầu và phúc lợi trước khi chấp nhận cơ hội hợp tác này. Nếu có bất kỳ câu hỏi nào, xin vui lòng liên hệ trực tiếp với Trung tâm chăm sóc Fukushi.</p>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
