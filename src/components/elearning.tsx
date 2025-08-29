import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const resources = [
  {
    title: 'Khóa học tiếng Nhật N3',
    description:
      'Chinh phục kỳ thi JLPT N3 với lộ trình học bài bản và hiệu quả.',
    image: 'https://picsum.photos/600/400?random=1',
    hint: 'learning japan',
  },
  {
    title: 'Kỹ năng làm việc tại công ty Nhật',
    description: 'Hiểu rõ văn hóa công sở, cách giao tiếp và làm việc chuyên nghiệp.',
    image: 'https://picsum.photos/600/400?random=2',
    hint: 'office meeting',
  },
  {
    title: 'Luyện phỏng vấn Tokutei Ginou',
    description: 'Tự tin trả lời các câu hỏi phỏng vấn và ghi điểm với nhà tuyển dụng.',
    image: 'https://picsum.photos/600/400?random=3',
    hint: 'job interview',
  },
];

export function Elearning() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            Nâng cao kỹ năng với E-Learning
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Đầu tư vào bản thân với các khóa học được thiết kế riêng, giúp bạn thăng tiến trong sự nghiệp tại Nhật.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <Card key={resource.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                 <Image
                  src={resource.image}
                  alt={resource.title}
                  width={600}
                  height={400}
                  className="object-cover"
                  data-ai-hint={resource.hint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl text-gray-800">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{resource.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
