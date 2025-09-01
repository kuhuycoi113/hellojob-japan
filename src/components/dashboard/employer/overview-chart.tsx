
// This is a new file.
'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';

const data = [
  { name: 'Tuần 1', applications: 40, hires: 2 },
  { name: 'Tuần 2', applications: 30, hires: 1 },
  { name: 'Tuần 3', applications: 20, hires: 5 },
  { name: 'Tuần 4', applications: 27, hires: 3 },
  { name: 'Tuần 5', applications: 18, hires: 1 },
];

export function OverviewChart() {
  const { t } = useLanguage();
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{t.dashboard_employer.overview_chart.title}</CardTitle>
        <CardDescription>{t.dashboard_employer.overview_chart.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                borderColor: 'hsl(var(--border))',
              }}
            />
            <Legend />
            <Bar dataKey="applications" name={t.dashboard_employer.overview_chart.applications} fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="hires" name={t.dashboard_employer.overview_chart.hires} fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
