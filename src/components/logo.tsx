import { Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 text-xl font-bold font-headline text-primary", className)}>
      <Briefcase className="h-6 w-6" />
      <span>HelloJob</span>
    </div>
  );
}
