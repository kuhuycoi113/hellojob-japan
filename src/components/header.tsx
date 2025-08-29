import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#jobs" className="text-foreground/60 transition-colors hover:text-foreground/80">Jobs</Link>
            <Link href="#resources" className="text-foreground/60 transition-colors hover:text-foreground/80">Resources</Link>
            <Link href="#" className="text-foreground/60 transition-colors hover:text-foreground/80">About</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex">Log In</Button>
          <Button style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
            Post a Job
          </Button>
        </div>
      </div>
    </header>
  );
}
