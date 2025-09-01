
// This is a new file.
'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';

export function RecentApplications() {
  const { t } = useLanguage();
  const applications = t.dashboard_employer.recent_applications.applications;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{t.dashboard_employer.recent_applications.title}</CardTitle>
        <CardDescription>
          {t.dashboard_employer.recent_applications.description.replace('{count}', applications.length.toString())}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        {applications.map((app, index) => (
            <div key={index} className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src={`https://i.pravatar.cc/150?u=a${index}`} alt="Avatar" />
                    <AvatarFallback>{app.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">{app.name}</p>
                    <p className="text-sm text-muted-foreground">{app.email}</p>
                </div>
                <div className="ml-auto font-medium">{app.salary}</div>
            </div>
        ))}
      </CardContent>
    </Card>
  );
}
