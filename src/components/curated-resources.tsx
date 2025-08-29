import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const resources = [
  {
    title: 'Web Development Bootcamp',
    description:
      'Master front-end and back-end technologies to build modern web applications.',
    image: 'https://picsum.photos/600/400?random=1',
    hint: 'code laptop',
  },
  {
    title: 'Data Science & Machine Learning',
    description: 'Learn to analyze data, build predictive models, and drive business decisions.',
    image: 'https://picsum.photos/600/400?random=2',
    hint: 'data charts',
  },
  {
    title: 'Cloud Computing Essentials',
    description: 'Get certified in AWS, Azure, or Google Cloud to manage scalable infrastructures.',
    image: 'https://picsum.photos/600/400?random=3',
    hint: 'cloud server',
  },
  {
    title: 'Cybersecurity Fundamentals',
    description: 'Protect digital assets by learning the fundamentals of cybersecurity.',
    image: 'https://picsum.photos/600/400?random=4',
    hint: 'security lock',
  },
];

export function CuratedResources() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline">
            Advance Your Career
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore curated learning resources to gain in-demand skills and stay
            competitive in the job market.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource) => (
            <Card key={resource.title} className="flex flex-col overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                 <Image
                  src={resource.image}
                  alt={resource.title}
                  width={600}
                  height={400}
                  className="object-cover"
                  data-ai-hint={resource.hint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button variant="link" className="p-0 text-primary">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
