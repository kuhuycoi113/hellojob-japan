// This is a new file.
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
  LineChart,
  Filter,
  MousePointerClick,
  Eye,
  ShoppingCart,
  CheckCircle,
  XCircle,
  Banknote,
  Receipt,
  Download,
} from 'lucide-react';
import { Button } from './ui/button';

const chartData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 6000 },
  { month: 'Jun', revenue: 5500 },
];

const transactions = [
  { id: 'TRX001', student: 'Nguyễn Văn A', course: 'Tiếng Nhật thương mại', amount: '2,000,000đ', status: 'Thành công', date: '2024-07-20' },
  { id: 'TRX002', student: 'Trần Thị B', course: 'Kỹ năng phỏng vấn', amount: '1,500,000đ', status: 'Thành công', date: '2024-07-19' },
  { id: 'TRX003', student: 'Lê Văn C', course: 'Tiếng Nhật thương mại', amount: '2,000,000đ', status: 'Thất bại', date: '2024-07-19' },
  { id: 'TRX004', student: 'Phạm Thị D', course: 'Văn hoá công sở Nhật', amount: '1,200,000đ', status: 'Thành công', date: '2024-07-18' },
];

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
  const { t } = useLanguage();
  const revenue = t.shareCourse.revenue;

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
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`}/>
                <Tooltip
                    contentStyle={{
                        backgroundColor: 'hsl(var(--background))',
                        borderColor: 'hsl(var(--border))',
                        borderRadius: 'var(--radius)'
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
                <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-900">
                    <p className="text-sm font-medium">{revenue.payout.nextPayout.title}</p>
                    <p className="text-2xl font-bold">12,540,000đ</p>
                    <p className="text-xs">{revenue.payout.nextPayout.date}</p>
                </div>
                 <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span>{revenue.stats.totalRevenue.title}</span> <span>25,080,000đ</span></div>
                    <div className="flex justify-between"><span>{revenue.payout.fee.title} (30%)</span> <span className="text-red-600">-7,524,000đ</span></div>
                    <div className="flex justify-between"><span>{revenue.payout.tax.title}</span> <span className="text-red-600">-2,508,000đ</span></div>
                    <hr className="my-2"/>
                    <div className="flex justify-between font-bold"><span>{revenue.payout.net.title}</span> <span>15,048,000đ</span></div>
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
                    <Badge variant={trx.status === 'Thành công' ? 'default' : 'destructive'} className={trx.status === 'Thành công' ? 'bg-green-600' : ''}>
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
