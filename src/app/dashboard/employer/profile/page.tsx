
'use client';

import {
  Briefcase,
  Building,
  Calendar,
  Camera,
  ChevronDown,
  ChevronRight,
  Clock,
  Edit,
  FileText,
  Globe,
  Image as ImageIcon,
  LogOut,
  MapPin,
  Plus,
  Phone,
  Sparkles,
  Users,
  Video,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useLanguage } from '@/contexts/language-context';

export default function EmployerProfilePage() {
    const { t } = useLanguage();
    const profile = t.dashboard_employer.company_profile;

    const history = [
        {
        year: '2015',
        event: profile.history.event1_title,
        description: profile.history.event1_desc,
        },
        {
        year: '2018',
        event: profile.history.event2_title,
        description: profile.history.event2_desc,
        },
    ];

  return (
    <div className="flex w-full flex-col p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-7xl gap-6">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>{profile.companyIntroduction.title}</CardTitle>
                    <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                    </CardHeader>
                    <CardContent>
                    <p className="text-muted-foreground">{profile.companyIntroduction.placeholder}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>{profile.companyVideo.title}</CardTitle>
                    <Button variant="ghost" size="icon"><Plus className="h-4 w-4" /></Button>
                    </CardHeader>
                    <CardContent className="grid grid-cols-3 gap-4">
                    <div className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group">
                        <Image src="https://picsum.photos/400/225?random=1" layout="fill" objectFit="cover" alt="video thumbnail"/>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Video className="h-8 w-8 text-white opacity-80 group-hover:opacity-100 transition-opacity"/>
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group">
                        <Image src="https://picsum.photos/400/225?random=2" layout="fill" objectFit="cover" alt="video thumbnail"/>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Video className="h-8 w-8 text-white opacity-80 group-hover:opacity-100 transition-opacity"/>
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group">
                        <Image src="https://picsum.photos/400/225?random=3" layout="fill" objectFit="cover" alt="video thumbnail"/>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Video className="h-8 w-8 text-white opacity-80 group-hover:opacity-100 transition-opacity"/>
                        </div>
                    </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>{profile.companyPhotos.title}</CardTitle>
                    <Button variant="ghost" size="icon"><Plus className="h-4 w-4" /></Button>
                    </CardHeader>
                    <CardContent className="grid grid-cols-4 gap-4">
                    <Image src="https://picsum.photos/200?random=4" width={200} height={200} alt="company photo" className="rounded-lg object-cover aspect-square"/>
                    <Image src="https://picsum.photos/200?random=5" width={200} height={200} alt="company photo" className="rounded-lg object-cover aspect-square"/>
                    <Image src="https://picsum.photos/200?random=6" width={200} height={200} alt="company photo" className="rounded-lg object-cover aspect-square"/>
                    <Image src="https://picsum.photos/200?random=7" width={200} height={200} alt="company photo" className="rounded-lg object-cover aspect-square"/>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>{profile.history.title}</CardTitle>
                    <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                    {history.map(item => (
                        <div key={item.year} className="flex items-start gap-4">
                        <p className="font-bold text-muted-foreground w-12">{item.year}</p>
                        <div className="border-l-2 border-primary pl-4">
                            <p className="font-semibold">{item.event}</p>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        </div>
                    ))}
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>{profile.licenses.title}</CardTitle>
                    <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                    </CardHeader>
                    <CardContent>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>{profile.licenses.item1}</li>
                        <li>{profile.licenses.item2}</li>
                    </ul>
                    </CardContent>
                </Card>
                </div>
                <div className="md:col-span-1 space-y-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>{profile.companyInfo.title}</CardTitle>
                        <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                        <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-muted-foreground"/> <span>{profile.companyInfo.founded}: 2015</span></div>
                        <div className="flex items-center gap-2"><Users className="h-4 w-4 text-muted-foreground"/> <span>{profile.companyInfo.size}: 100-500 {profile.companyInfo.employees}</span></div>
                        <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-muted-foreground"/> <span>{profile.companyInfo.phone}: 052-123-4567</span></div>
                        <div className="flex items-center gap-2"><Globe className="h-4 w-4 text-muted-foreground"/> <span>{profile.companyInfo.website}: globalsupport.jp</span></div>
                        <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-muted-foreground"/> <span>{profile.companyInfo.address}: Aichi, Japan</span></div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>{profile.industryInfo.title}</CardTitle>
                        <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                        </CardHeader>
                        <CardContent>
                            <p className="font-semibold text-sm mb-2">{profile.industryInfo.mainIndustry}</p>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="outline">{profile.industryInfo.industry1}</Badge>
                                <Badge variant="outline">{profile.industryInfo.industry2}</Badge>
                            </div>
                            <p className="font-semibold text-sm mt-4 mb-2">{profile.industryInfo.fields}</p>
                            <p className="text-sm text-muted-foreground">{profile.industryInfo.placeholder}</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>{profile.benefits.title}</CardTitle>
                        <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                                <li>{profile.benefits.item1}</li>
                                <li>{profile.benefits.item2}</li>
                                <li>{profile.benefits.item3}</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Button variant="outline" className="w-full">
                        <LogOut className="mr-2 h-4 w-4"/>
                        {profile.logout}
                    </Button>
                </div>
            </div>
        </div>
    </div>
  );
}
