import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Search } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-headline tracking-tight">
          Find Your Next Opportunity with AI
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          HelloJob uses advanced AI to match your resume with the perfect job.
          Stop searching endlessly and start getting noticed.
        </p>
        <div className="mt-10 max-w-2xl mx-auto">
          <form className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-4 items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Job title, skills, or company"
                className="pl-10 h-12 text-base"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="City, state, or zip code"
                className="pl-10 h-12 text-base"
              />
            </div>
            <Button type="submit" size="lg" className="h-12 w-full sm:w-auto text-base">
              Find Jobs
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
