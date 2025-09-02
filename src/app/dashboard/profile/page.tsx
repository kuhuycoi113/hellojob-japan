
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
  Save,
  X,
  PlusCircle,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/language-context';

type HistoryItem = {
    year: string;
    event: string;
    description: string;
};

export default function EmployerProfilePage() {
    const { t } = useLanguage();
    const profile = t.dashboard_employer.company_profile;

    const [isEditingIntro, setIsEditingIntro] = useState(false);
    const [isEditingHistory, setIsEditingHistory] = useState(false);
    const [isEditingLicenses, setIsEditingLicenses] = useState(false);
    const [isEditingCompanyInfo, setIsEditingCompanyInfo] = useState(false);
    const [isEditingIndustryInfo, setIsEditingIndustryInfo] = useState(false);
    const [isEditingBenefits, setIsEditingBenefits] = useState(false);

    // State for editable content
    const [introText, setIntroText] = useState(profile.companyIntroduction.placeholder);
    const [licensesText, setLicensesText] = useState(`${profile.licenses.item1}\n${profile.licenses.item2}`);
    const [benefitsText, setBenefitsText] = useState(`${profile.benefits.item1}\n${profile.benefits.item2}\n${profile.benefits.item3}`);
    const [industryFieldsText, setIndustryFieldsText] = useState(profile.industryInfo.placeholder);
    
    const [companyInfo, setCompanyInfo] = useState({
        founded: '2015',
        size: `100-500 ${profile.companyInfo.employees}`,
        phone: '052-123-4567',
        website: 'globalsupport.jp',
        address: 'Aichi, Japan'
    });

    const [history, setHistory] = useState<HistoryItem[]>([
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
    ]);

    const handleHistoryChange = (index: number, field: keyof HistoryItem, value: string) => {
        const newHistory = [...history];
        newHistory[index][field] = value;
        setHistory(newHistory);
    };

    const addHistoryItem = () => {
        setHistory([...history, { year: '', event: '', description: '' }]);
    };

    const removeHistoryItem = (index: number) => {
        const newHistory = history.filter((_, i) => i !== index);
        setHistory(newHistory);
    };

    const handleCompanyInfoChange = (field: keyof typeof companyInfo, value: string) => {
        setCompanyInfo(prev => ({...prev, [field]: value}));
    };

  return (
    <div className="flex w-full flex-col p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-7xl gap-6">
            <Card className="shadow-sm">
                <div className="relative h-48 w-full">
                <Image
                    src="https://picsum.photos/1200/300"
                    alt="Company Banner"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    data-ai-hint="office building modern"
                />
                <Button size="icon" variant="outline" className="absolute bottom-4 right-4 bg-black/50 text-white hover:bg-black/60 hover:text-white border-white/50">
                    <Camera className="h-4 w-4"/>
                </Button>
                <div className="absolute -bottom-12 left-6">
                    <div className="relative">
                        <Avatar className="h-24 w-24 border-4 border-card">
                            <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                            <AvatarFallback>TVC</AvatarFallback>
                        </Avatar>
                        <Button size="icon" variant="outline" className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-muted">
                            <Camera className="h-4 w-4"/>
                        </Button>
                    </div>
                </div>
                </div>
                <div className="flex justify-between items-start pt-16 p-6">
                    <div>
                        <CardTitle className="text-2xl">
                            Công ty phái cử TVC
                        </CardTitle>
                        <CardDescription>{profile.industry}</CardDescription>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <MapPin className="h-4 w-4" />
                            {profile.location}
                        </div>
                    </div>
                    <Button variant="outline">
                        <Edit className="mr-2 h-4 w-4" />
                        {profile.editProfile}
                    </Button>
                </div>
            </Card>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div className="md:col-span-2 space-y-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>{profile.companyIntroduction.title}</CardTitle>
                        <Button variant="ghost" size="icon" onClick={() => setIsEditingIntro(!isEditingIntro)}>
                           {isEditingIntro ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                        </Button>
                    </CardHeader>
                    <CardContent>
                    {isEditingIntro ? (
                        <Textarea value={introText} onChange={(e) => setIntroText(e.target.value)} className="min-h-[120px]" />
                    ) : (
                        <p className="text-muted-foreground whitespace-pre-wrap">{introText}</p>
                    )}
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>{profile.companyVideo.title}</CardTitle>
                    <Button variant="ghost" size="icon"><Plus className="h-4 w-4" /></Button>
                    </CardHeader>
                    <CardContent className="grid grid-cols-3 gap-4">
                    <div className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group">
                        <Image src="https://picsum.photos/400/225?random=1" layout="fill" objectFit="cover" alt="video thumbnail" data-ai-hint="office presentation"/>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Video className="h-8 w-8 text-white opacity-80 group-hover:opacity-100 transition-opacity"/>
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group">
                        <Image src="https://picsum.photos/400/225?random=2" layout="fill" objectFit="cover" alt="video thumbnail" data-ai-hint="factory tour"/>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Video className="h-8 w-8 text-white opacity-80 group-hover:opacity-100 transition-opacity"/>
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group">
                        <Image src="https://picsum.photos/400/225?random=3" layout="fill" objectFit="cover" alt="video thumbnail" data-ai-hint="team interview"/>
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
                    <Image src="https://picsum.photos/200?random=4" width={200} height={200} alt="company photo" className="rounded-lg object-cover aspect-square" data-ai-hint="office workspace"/>
                    <Image src="https://picsum.photos/200?random=5" width={200} height={200} alt="company photo" className="rounded-lg object-cover aspect-square" data-ai-hint="team members"/>
                    <Image src="https://picsum.photos/200?random=6" width={200} height={200} alt="company photo" className="rounded-lg object-cover aspect-square" data-ai-hint="product manufacturing"/>
                    <Image src="https://picsum.photos/200?random=7" width={200} height={200} alt="company photo" className="rounded-lg object-cover aspect-square" data-ai-hint="company event"/>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>{profile.history.title}</CardTitle>
                        <Button variant="ghost" size="icon" onClick={() => setIsEditingHistory(!isEditingHistory)}>
                            {isEditingHistory ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                        </Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                    {history.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                        {isEditingHistory ? (
                            <Input value={item.year} onChange={(e) => handleHistoryChange(index, 'year', e.target.value)} className="w-20" placeholder="Năm"/>
                        ) : (
                            <p className="font-bold text-muted-foreground w-12">{item.year}</p>
                        )}
                        <div className="flex-grow border-l-2 border-primary pl-4 relative">
                            {isEditingHistory ? (
                                <div className="space-y-2">
                                <Input value={item.event} onChange={(e) => handleHistoryChange(index, 'event', e.target.value)} className="font-semibold" placeholder="Sự kiện"/>
                                <Textarea value={item.description} onChange={(e) => handleHistoryChange(index, 'description', e.target.value)} className="text-sm" placeholder="Mô tả"/>
                                <Button variant="ghost" size="icon" className="absolute -top-2 -right-2 text-destructive" onClick={() => removeHistoryItem(index)}>
                                    <X className="w-4 h-4"/>
                                </Button>
                                </div>
                            ) : (
                            <>
                                <p className="font-semibold">{item.event}</p>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </>
                            )}
                        </div>
                        </div>
                    ))}
                    {isEditingHistory && (
                        <Button variant="outline" onClick={addHistoryItem}><PlusCircle className="mr-2 h-4 w-4"/> Thêm mốc thời gian</Button>
                    )}
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>{profile.licenses.title}</CardTitle>
                         <Button variant="ghost" size="icon" onClick={() => setIsEditingLicenses(!isEditingLicenses)}>
                            {isEditingLicenses ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                        </Button>
                    </CardHeader>
                    <CardContent>
                    {isEditingLicenses ? (
                        <Textarea className="min-h-[100px]" value={licensesText} onChange={(e) => setLicensesText(e.target.value)} />
                    ) : (
                        <ul className="list-disc pl-5 text-muted-foreground space-y-1 whitespace-pre-wrap">
                            {licensesText.split('\n').map((item, index) => item.trim() && <li key={index}>{item}</li>)}
                        </ul>
                    )}
                    </CardContent>
                </Card>
                </div>
                <div className="md:col-span-1 space-y-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>{profile.companyInfo.title}</CardTitle>
                         <Button variant="ghost" size="icon" onClick={() => setIsEditingCompanyInfo(!isEditingCompanyInfo)}>
                           {isEditingCompanyInfo ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                        </Button>
                        </CardHeader>
                        <CardContent className="space-y-3 text-sm">
                        <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-muted-foreground"/> 
                            <span className="font-medium">{profile.companyInfo.founded}: </span>
                            {isEditingCompanyInfo ? <Input value={companyInfo.founded} onChange={(e) => handleCompanyInfoChange('founded', e.target.value)} className="h-8"/> : <span className="text-muted-foreground">{companyInfo.founded}</span>}
                        </div>
                        <div className="flex items-center gap-2"><Users className="h-4 w-4 text-muted-foreground"/>
                           <span className="font-medium">{profile.companyInfo.size}: </span>
                           {isEditingCompanyInfo ? <Input value={companyInfo.size} onChange={(e) => handleCompanyInfoChange('size', e.target.value)} className="h-8"/> : <span className="text-muted-foreground">{companyInfo.size}</span>}
                        </div>
                        <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-muted-foreground"/> 
                            <span className="font-medium">{profile.companyInfo.phone}: </span>
                            {isEditingCompanyInfo ? <Input value={companyInfo.phone} onChange={(e) => handleCompanyInfoChange('phone', e.target.value)} className="h-8"/> : <span className="text-muted-foreground">{companyInfo.phone}</span>}
                        </div>
                        <div className="flex items-center gap-2"><Globe className="h-4 w-4 text-muted-foreground"/> 
                            <span className="font-medium">{profile.companyInfo.website}: </span>
                            {isEditingCompanyInfo ? <Input value={companyInfo.website} onChange={(e) => handleCompanyInfoChange('website', e.target.value)} className="h-8"/> : <span className="text-muted-foreground">{companyInfo.website}</span>}
                        </div>
                        <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-muted-foreground"/> 
                           <span className="font-medium">{profile.companyInfo.address}: </span>
                           {isEditingCompanyInfo ? <Input value={companyInfo.address} onChange={(e) => handleCompanyInfoChange('address', e.target.value)} className="h-8"/> : <span className="text-muted-foreground">{companyInfo.address}</span>}
                        </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>{profile.industryInfo.title}</CardTitle>
                         <Button variant="ghost" size="icon" onClick={() => setIsEditingIndustryInfo(!isEditingIndustryInfo)}>
                           {isEditingIndustryInfo ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                        </Button>
                        </CardHeader>
                        <CardContent>
                            <p className="font-semibold text-sm mb-2">{profile.industryInfo.mainIndustry}</p>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="outline">{profile.industryInfo.industry1}</Badge>
                                <Badge variant="outline">{profile.industryInfo.industry2}</Badge>
                                {isEditingIndustryInfo && <Button size="icon" variant="ghost" className="h-6 w-6"><PlusCircle className="w-4 h-4"/></Button>}
                            </div>
                            <p className="font-semibold text-sm mt-4 mb-2">{profile.industryInfo.fields}</p>
                            {isEditingIndustryInfo ? (
                                <Textarea value={industryFieldsText} onChange={(e) => setIndustryFieldsText(e.target.value)} />
                            ) : (
                               <p className="text-sm text-muted-foreground whitespace-pre-wrap">{industryFieldsText}</p>
                            )}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>{profile.benefits.title}</CardTitle>
                         <Button variant="ghost" size="icon" onClick={() => setIsEditingBenefits(!isEditingBenefits)}>
                           {isEditingBenefits ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                        </Button>
                        </CardHeader>
                        <CardContent>
                             {isEditingBenefits ? (
                                <Textarea className="min-h-[100px]" value={benefitsText} onChange={(e) => setBenefitsText(e.target.value)} />
                            ) : (
                                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 whitespace-pre-wrap">
                                    {benefitsText.split('\n').map((item, index) => item.trim() && <li key={index}>{item}</li>)}
                                </ul>
                            )}
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
