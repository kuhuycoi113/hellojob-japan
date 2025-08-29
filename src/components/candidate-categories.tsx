import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Building, Handshake } from 'lucide-react';

const categories = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Thực tập sinh Kỹ năng',
    description: 'Chương trình tiếp nhận lao động trẻ để đào tạo kỹ năng, tay nghề trong môi trường làm việc thực tế tại Nhật Bản.',
  },
  {
    icon: <Handshake className="h-10 w-10 text-yellow-500" />,
    title: 'Kỹ năng đặc định',
    description: 'Dành cho lao động có kinh nghiệm và kỹ năng chuyên môn ở một số lĩnh vực nhất định, được làm việc dài hạn.',
  },
  {
    icon: <Building className="h-10 w-10 text-blue-500" />,
    title: 'Kỹ sư, Tri thức',
    description: 'Tuyển dụng các kỹ sư, chuyên gia có trình độ cao, bằng cấp chuyên ngành để làm việc trong các lĩnh vực kỹ thuật, công nghệ.',
  },
];

export function CandidateCategories() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            Đa dạng loại hình nhân lực
          </h2>
           <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Chúng tôi cung cấp các giải pháp nhân sự linh hoạt, phù hợp với mọi nhu cầu của doanh nghiệp.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((category) => (
            <Card key={category.title} className="text-center shadow-lg rounded-lg p-8">
              <CardHeader className="flex justify-center items-center">
                {category.icon}
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline text-xl mb-2 text-gray-800">{category.title}</CardTitle>
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
