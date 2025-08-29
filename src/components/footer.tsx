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
              Your personal AI-powered career assistant to help you find and land your dream job.
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
            <h3 className="font-semibold font-headline">Candidates</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Find Jobs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">AI Match</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Resources</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold font-headline">Employers</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Post a Job</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Search Resumes</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Pricing</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-1">
             <h3 className="font-semibold font-headline">Newsletter</h3>
             <p className="mt-4 text-sm text-muted-foreground">Stay up to date with the latest job market trends.</p>
             <form className="mt-4 flex gap-2">
                <Input type="email" placeholder="Your email" className="flex-1" />
                <Button type="submit" variant="secondary">Subscribe</Button>
             </form>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HelloJob Recommender. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
