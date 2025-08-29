import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Cta() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-headline text-primary">
              Ginou 2 - Lao động lành nghề tại Nhật thu nhập bao nhiêu?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Khám phá lộ trình phát triển sự nghiệp để trở thành lao động tay nghề cao và đạt được mức thu nhập mơ ước.
            </p>
            <Button size="lg" className="mt-8" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
              Xem ngay lộ trình
            </Button>
          </div>
          <div className="flex items-center justify-center p-8">
            <Image
              src="https://picsum.photos/600/600"
              alt="Skilled labor in Japan"
              width={600}
              height={600}
              className="rounded-lg object-cover"
              data-ai-hint="worker japan"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
