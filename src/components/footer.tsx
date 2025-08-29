import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 pr-8">
            <Logo />
            <p className="mt-4 text-muted-foreground">
              Giải pháp nhân sự toàn diện, kết nối Doanh nghiệp Nhật Bản với nguồn nhân lực chất lượng cao từ Việt Nam.
            </p>
            <div className="mt-6 flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold font-headline">Dành cho Nhà tuyển dụng</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Đăng tin tuyển dụng</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Tìm kiếm hồ sơ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Bảng giá</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Câu hỏi thường gặp</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold font-headline">Về HelloJob</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Về chúng tôi</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Liên hệ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Chính sách bảo mật</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-1">
             <h3 className="font-semibold font-headline">Bản tin</h3>
             <p className="mt-4 text-sm text-muted-foreground">Nhận thông tin mới nhất về thị trường lao động và các xu hướng tuyển dụng.</p>
             <form className="mt-4 flex gap-2">
                <Input type="email" placeholder="Email của bạn" className="flex-1" />
                <Button type="submit" variant="secondary">Đăng ký</Button>
             </form>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HelloJob. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}