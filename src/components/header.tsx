import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Menu, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const VietnamFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="18"
    viewBox="0 0 900 600"
  >
    <rect width="900" height="600" fill="#da251d" />
    <path
      d="M450 115.6l81.3 249.4h262.2l-212.1 154.1 81.3 249.4L450 614.4l-212.1 154.1 81.3-249.4-212.1-154.1h262.2z"
      fill="#ff0"
    />
  </svg>
);

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-medium">
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-primary whitespace-nowrap"
          >
            Trang chủ
          </Link>
          <Link
            href="#"
            className="text-foreground/80 transition-colors hover:text-primary whitespace-nowrap"
          >
            Các bước
          </Link>
          <Link
            href="#"
            className="text-foreground/80 transition-colors hover:text-primary whitespace-nowrap"
          >
            Tuyển đúng người
          </Link>
          <Link
            href="#"
            className="text-foreground/80 transition-colors hover:text-primary whitespace-nowrap"
          >
            Đăng việc làm bằng AI
          </Link>
          <Link
            href="#"
            className="text-foreground/80 transition-colors hover:text-primary whitespace-nowrap"
          >
            E-learning
          </Link>
          <Link
            href="#"
            className="text-foreground/80 transition-colors hover:text-primary whitespace-nowrap"
          >
            Cẩm nang
          </Link>
          <Link
            href="#"
            className="text-foreground/80 transition-colors hover:text-primary whitespace-nowrap"
          >
            Giới thiệu
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2"
              >
                <VietnamFlag />
                <span>VN</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Ngôn ngữ</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Tiếng Việt</DropdownMenuItem>
              <DropdownMenuItem>日本語</DropdownMenuItem>
              <DropdownMenuItem>English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline">
            <Link href="#" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Hồ sơ của tôi
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Bảng điều khiển</DropdownMenuItem>
              <DropdownMenuItem>Tin tuyển dụng</DropdownMenuItem>
              <DropdownMenuItem>Hồ sơ ứng viên</DropdownMenuItem>
              <DropdownMenuItem>Cài đặt</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Đăng xuất</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
