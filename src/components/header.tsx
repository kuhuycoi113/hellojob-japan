import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { ChevronDown, Globe, LayoutGrid } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#" className="text-foreground transition-colors hover:text-primary">Trang chủ</Link>
            <Link href="#" className="text-foreground/80 transition-colors hover:text-primary">Tìm ứng viên</Link>
            <Link href="#" className="text-foreground/80 transition-colors hover:text-primary">Đăng tin tuyển dụng</Link>
            <Link href="#" className="text-foreground/80 transition-colors hover:text-primary">Về chúng tôi</Link>
            <Link href="#" className="text-foreground/80 transition-colors hover:text-primary">Bảng giá</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span>JP</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button>Đăng nhập</Button>
          <Button variant="outline">Đăng ký</Button>
        </div>
      </div>
    </header>
  );
}