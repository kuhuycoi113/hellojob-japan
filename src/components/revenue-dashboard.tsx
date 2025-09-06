'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useLanguage } from '@/contexts/language-context';
import {
  DollarSign,
  Users,
  TrendingUp,
  Banknote,
  Receipt,
  Download,
  MousePointerClick,
  Eye,
  ShoppingCart,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { Label } from './ui/label';
import { Switch } from './ui/switch';

const FunnelStep = ({ icon, title, value, colorClass }: { icon: React.ReactNode, title: string, value: string, colorClass: string }) => (
    <div className={`flex items-center p-4 rounded-lg bg-opacity-10 ${colorClass}`}>
        <div className={`mr-4 p-3 rounded-full bg-opacity-20 ${colorClass}`}>{icon}</div>
        <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
    </div>
)

export function RevenueDashboard() {
  const { t, language } = useLanguage();
  const revenue = t.shareCourse.revenue;
  const transactions = revenue.transactions.list;
  const chartData = revenue.chart.data;
  const [isTaxHandledByPlatform, setIsTaxHandledByPlatform] = useState(true);


  const statCards = [
    { title: revenue.stats.totalRevenue.title, value: revenue.stats.totalRevenue.value, change: revenue.stats.totalRevenue.change, icon: <DollarSign className="h-5 w-5 text-muted-foreground" /> },
    { title: revenue.stats.paidStudents.title, value: revenue.stats.paidStudents.value, change: revenue.stats.paidStudents.change, icon: <Users className="h-5 w-5 text-muted-foreground" /> },
    { title: revenue.stats.conversionRate.title, value: revenue.stats.conversionRate.value, change: revenue.stats.conversionRate.change, icon: <TrendingUp className="h-5 w-5 text-muted-foreground" /> },
    { title: revenue.stats.netRevenue.title, value: revenue.stats.netRevenue.value, change: revenue.stats.netRevenue.change, icon: <Banknote className="h-5 w-5 text-muted-foreground" /> },
  ];
  
  const funnelSteps = [
    { icon: <MousePointerClick className="w-8 h-8 text-blue-500" />, title: revenue.funnel.visits, value: "10,250", colorClass: "bg-blue-500" },
    { icon: <Eye className="w-8 h-8 text-indigo-500" />, title: revenue.funnel.freeViews, value: "4,870", colorClass: "bg-indigo-500" },
    { icon: <ShoppingCart className="w-8 h-8 text-purple-500" />, title: revenue.funnel.clicksToPay, value: "620", colorClass: "bg-purple-500" },
    { icon: <CheckCircle className="w-8 h-8 text-green-500" />, title: revenue.funnel.paidPurchases, value: "415", colorClass: "bg-green-500" },
    { icon: <XCircle className="w-8 h-8 text-red-500" />, title: revenue.funnel.abandonedCarts, value: "205", colorClass: "bg-red-500" },
  ]
  
  const formatCurrency = (value: number) => {
    if (language === 'vi') {
        return `${(value / 1000).toLocaleString('vi-VN')}kđ`;
    }
    if (language === 'ja') {
        return `${(value / 1000)}k円`;
    }
    return `$${(value / 1000)}k`;
  }

  const netPayout = isTaxHandledByPlatform ? revenue.payout.net.valueWithTax : revenue.payout.net.valueWithoutTax;

  return (
    <div className="container mx-auto px-4 max-w-7xl space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
            <h1 className="text-3xl font-bold font-headline text-gray-800">{revenue.title}</h1>
            <p className="mt-1 text-muted-foreground">{revenue.description}</p>
        </div>
        <Button variant="outline"><Download className="mr-2 h-4 w-4"/> {revenue.exportButton}</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => (
          <Card key={index} className="shadow-sm">
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

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <Card className="lg:col-span-3 shadow-sm">
          <CardHeader>
            <CardTitle>{revenue.chart.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false}/>
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={formatCurrency}/>
                <Tooltip
                    cursor={{fill: 'hsl(var(--muted))', radius: 'var(--radius)'}}
                    contentStyle={{
                        backgroundColor: 'hsl(var(--background))',
                        borderColor: 'hsl(var(--border))',
                        borderRadius: 'var(--radius)'
                    }}
                     formatter={(value: number) => {
                         if (language === 'vi') {
                            return `${value.toLocaleString('vi-VN')}đ`;
                        }
                        if (language === 'ja') {
                            return `${value.toLocaleString('ja-JP')}円`;
                        }
                        return `$${value.toLocaleString('en-US')}`;
                    }}
                />
                <Legend iconType="circle" iconSize={8}/>
                <Bar dataKey="revenue" name={revenue.chart.revenueLabel} fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2 shadow-sm">
           <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Receipt className="w-5 h-5 text-primary"/>
                {revenue.payout.title}
            </CardTitle>
          </CardHeader>
           <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 p-2 rounded-md bg-muted">
                  <Switch id="tax-handling" checked={isTaxHandledByPlatform} onCheckedChange={setIsTaxHandledByPlatform} />
                  <Label htmlFor="tax-handling" className="text-sm cursor-pointer">{revenue.payout.tax.toggle}</Label>
                </div>
                <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-900">
                    <p className="text-sm font-medium">{revenue.payout.nextPayout.title}</p>
                    <p className="text-2xl font-bold">{netPayout}</p>
                    <p className="text-xs">{revenue.payout.nextPayout.date}</p>
                </div>
                 <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span>{revenue.stats.totalRevenue.title}</span> <span>{revenue.stats.totalRevenue.value}</span></div>
                    <div className="flex justify-between"><span>{revenue.payout.fee.title}</span> <span className="text-red-600">{revenue.payout.fee.value}</span></div>
                    {isTaxHandledByPlatform && (
                      <div className="flex justify-between"><span>{revenue.payout.tax.title}</span> <span className="text-red-600">{revenue.payout.tax.value}</span></div>
                    )}
                    <hr className="my-2"/>
                    <div className="flex justify-between font-bold"><span>{revenue.payout.net.title}</span> <span>{netPayout}</span></div>
                 </div>
                 <Button className="w-full">{revenue.payout.historyButton}</Button>
           </CardContent>
        </Card>
      </div>

       <Card className="shadow-sm">
        <CardHeader>
            <CardTitle>{revenue.funnel.title}</CardTitle>
            <CardDescription>{revenue.funnel.description}</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {funnelSteps.map((step, index) => (
                <FunnelStep key={index} {...step} />
            ))}
        </CardContent>
       </Card>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>{revenue.transactions.title}</CardTitle>
          <CardDescription>{revenue.transactions.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{revenue.transactions.headers.student}</TableHead>
                <TableHead>{revenue.transactions.headers.course}</TableHead>
                <TableHead className="text-right">{revenue.transactions.headers.amount}</TableHead>
                <TableHead className="text-center">{revenue.transactions.headers.status}</TableHead>
                <TableHead>{revenue.transactions.headers.date}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((trx) => (
                <TableRow key={trx.id}>
                  <TableCell className="font-medium">{trx.student}</TableCell>
                  <TableCell>{trx.course}</TableCell>
                  <TableCell className="text-right">{trx.amount}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={trx.status === t.shareCourse.revenue.transactions.status.success ? 'default' : 'destructive'} className={trx.status === t.shareCourse.revenue.transactions.status.success ? 'bg-green-600' : ''}>
                      {trx.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{trx.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
