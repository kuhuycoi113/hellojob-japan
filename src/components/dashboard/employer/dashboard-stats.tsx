
// This is a new file.
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Users, UserCheck, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function DashboardStats() {
  const { t } = useLanguage();
  const stats = t.dashboard_employer.stats;
  const statCards = [
    {
      title: stats.activeJobs.title,
      value: stats.activeJobs.value,
      change: stats.activeJobs.change,
      icon: <Briefcase className="h-5 w-5 text-muted-foreground" />,
    },
    {
      title: stats.applications.title,
      value: stats.applications.value,
      change: stats.applications.change,
      icon: <Users className="h-5 w-5 text-muted-foreground" />,
    },
    {
      title: stats.interviews.title,
      value: stats.interviews.value,
      change: stats.interviews.change,
      icon: <Eye className="h-5 w-5 text-muted-foreground" />,
    },
    {
      title: stats.hires.title,
      value: stats.hires.value,
      change: stats.hires.change,
      icon: <UserCheck className="h-5 w-5 text-muted-foreground" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {statCards.map((card, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            {card.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground">{card.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
