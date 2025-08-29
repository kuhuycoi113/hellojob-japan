import { Button } from '@/components/ui/button';

export function Cta() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-white">
          Sẵn sàng tìm kiếm nhân tài cho doanh nghiệp của bạn?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
          Đăng tin tuyển dụng ngay hôm nay để tiếp cận hàng ngàn ứng viên tiềm năng hoặc liên hệ với chúng tôi để được tư vấn.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
            Đăng tin ngay
          </Button>
          <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
            Liên hệ tư vấn
          </Button>
        </div>
      </div>
    </section>
  );
}