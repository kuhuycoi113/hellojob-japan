import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const features = [
  {
    title: 'Sàng lọc kỹ lưỡng',
    description:
      'Mỗi ứng viên đều trải qua quy trình phỏng vấn, kiểm tra năng lực và đánh giá thái độ chuyên nghiệp.',
    image: 'https://picsum.photos/600/400?random=1',
    hint: 'job interview professional',
  },
  {
    title: 'Hồ sơ chi tiết',
    description: 'Cung cấp hồ sơ ứng viên đầy đủ thông tin, video giới thiệu và các chứng chỉ, bằng cấp đã xác thực.',
    image: 'https://picsum.photos/600/400?random=2',
    hint: 'resume document',
  },
  {
    title: 'Đào tạo chuyên sâu',
    description: 'Ứng viên được đào tạo bài bản về ngôn ngữ, văn hóa và kỹ năng làm việc tại Nhật Bản trước khi xuất cảnh.',
    image: 'https://picsum.photos/600/400?random=3',
    hint: 'classroom learning',
  },
];

export function CandidateQuality() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            Cam Kết Về Chất Lượng Ứng Viên
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Chúng tôi đảm bảo cung cấp nguồn nhân lực không chỉ giỏi chuyên môn mà còn phù hợp với văn hóa doanh nghiệp của bạn.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                 <Image
                  src={feature.image}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="object-cover"
                  data-ai-hint={feature.hint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl text-gray-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
