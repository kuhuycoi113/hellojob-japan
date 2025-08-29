import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Award, Building } from 'lucide-react';

const paths = [
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: 'Lộ trình rõ ràng',
    description: 'Xem lộ trình phát triển sự nghiệp (SWR) để định hướng con đường từ thực tập sinh đến',
  },
  {
    icon: <Award className="h-10 w-10 text-yellow-500" />,
    title: 'Nâng cao kỹ năng',
    description: 'Tham gia các khóa học E-learning miễn phí về tiếng Nhật, văn hóa và kỹ năng làm việc để',
  },
  {
    icon: <Building className="h-10 w-10 text-blue-500" />,
    title: 'Việc làm chất lượng',
    description: 'Tiếp cận hàng ngàn công việc chất lượng cao từ các nhà tuyển dụng hàng đầu trên khắp',
  },
];

export function DevelopmentPath() {
  return (
    <section className="py-16 sm:py-24 bg-white -mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            Con đường phát triển của bạn tại Nhật Bản
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {paths.map((path) => (
            <Card key={path.title} className="text-center shadow-lg rounded-lg p-8">
              <CardHeader className="flex justify-center items-center">
                {path.icon}
              </CardHeader>
              <CardContent>
                <CardTitle className="font-headline text-xl mb-2 text-gray-800">{path.title}</CardTitle>
                <p className="text-muted-foreground">{path.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
