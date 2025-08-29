import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, FileText, Users } from 'lucide-react';

const reasons = [
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: 'Tìm kiếm & Sàng lọc',
    description: 'Hệ thống tìm kiếm thông minh giúp bạn nhanh chóng tìm thấy ứng viên phù hợp với các tiêu chí khắt khe nhất.',
  },
  {
    icon: <FileText className="h-10 w-10 text-yellow-500" />,
    title: 'Quản lý Hồ sơ',
    description: 'Dễ dàng quản lý, so sánh và theo dõi hồ sơ ứng viên trong suốt quá trình tuyển dụng.',
  },
  {
    icon: <Users className="h-10 w-10 text-blue-500" />,
    title: 'Hỗ trợ Toàn diện',
    description: 'Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn trong mọi bước của quy trình tuyển dụng và pháp lý.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-white -mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            Tại sao chọn HelloJob?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Chúng tôi đơn giản hóa quy trình tuyển dụng, giúp bạn tiết kiệm thời gian và chi phí.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason) => (
            <Card key={reason.title} className="text-center shadow-lg rounded-lg p-8">
              <CardHeader className="flex justify-center items-center">
                {reason.icon}
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline text-xl mb-2 text-gray-800">{reason.title}</CardTitle>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}