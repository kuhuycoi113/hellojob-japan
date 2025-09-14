

'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from '@/components/ui/dialog';
import { DialogFooter } from '@/components/ui/dialog';
import { useState } from 'react';
import { Card, CardDescription, CardTitle } from './ui/card';
import { GraduationCap, Star, Briefcase, Plane, Users, Building, Handshake, BrainCircuit, HardHat, FastForward, UserPlus, ChevronRight, HandCoins, FileText, UserCheck } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useRouter } from 'next/navigation';
import { useRole } from '@/contexts/role-context';
import { useLanguage } from '@/contexts/language-context';
import { ScrollArea } from './ui/scroll-area';


export function Cta() {
  const { t } = useLanguage();
  const t_cta_flow = t.cta_flow;
  const router = useRouter();
  const { setUserRole } = useRole();

  const [dialog1Open, setDialog1Open] = useState(false);
  const [dialog2Open, setDialog2Open] = useState(false);
  const [dialog3Open, setDialog3Open] = useState(false);
  const [dialog4Open, setDialog4Open] = useState(false);
  const [dialog51Open, setDialog51Open] = useState(false);
  const [dialog52Open, setDialog52Open] = useState(false);
  const [dialog53Open, setDialog53Open] = useState(false);
  const [dialog61Open, setDialog61Open] = useState(false);
  const [dialog62Open, setDialog62Open] = useState(false);
  const [dialog63Open, setDialog63Open] = useState(false);
  const [dialog7Open, setDialog7Open] = useState(false);
  const [dialog7Caller, setDialog7Caller] = useState<string | null>(null);
  const [dialog8Open, setDialog8Open] = useState(false);
  const [feeAmount, setFeeAmount] = useState('');
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [dialog9Open, setDialog9Open] = useState(false);
  const [managementFeeAmount, setManagementFeeAmount] = useState('');

  const [currentFlow, setCurrentFlow] = useState<'quick' | 'ai_post' | null>(null);
  const [selectedVisa, setSelectedVisa] = useState<{ type: string; subType: string; industry: string } | null>(null);

  const openDialog7 = (caller: string, industry: string) => {
    setSelectedVisa(prev => ({ ...prev!, industry }));
    setDialog7Caller(caller);
    if (caller === '61') setDialog61Open(false);
    if (caller === '62') setDialog62Open(false);
    if (caller === '63') setDialog63Open(false);
    setDialog7Open(true);
  };

  const backFromDialog7 = () => {
    setDialog7Open(false);
    if (dialog7Caller === '61') setDialog61Open(true);
    if (dialog7Caller === '62') setDialog62Open(true);
    if (dialog7Caller === '63') setDialog63Open(true);
  };

  type Role = { title: string; description: string; icon: JSX.Element; }

  const userRoles: Role[] = [
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: t.userRoles.receivingCompany.title,
      description: t.userRoles.receivingCompany.description,
    },
    {
      icon: <Plane className="h-8 w-8 text-secondary" />,
      title: t.userRoles.sendingCompany.title,
      description: t.userRoles.sendingCompany.description,
    },
    {
      icon: <UserCheck className="h-8 w-8 text-accent" />,
      title: t.userRoles.supportOrg.title,
      description: t.userRoles.supportOrg.description,
    },
    {
      icon: <Handshake className="h-8 w-8 text-chart-1" />,
      title: t.userRoles.union.title,
      description: t.userRoles.union.description,
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-500" />,
      title: t.userRoles.yuryoShokai.title,
      description: t.userRoles.yuryoShokai.description,
    },
    {
      icon: <Briefcase className="h-8 w-8 text-purple-500" />,
      title: t.userRoles.hakenCompany.title,
      description: t.userRoles.hakenCompany.description,
    },
  ];

  const handleFeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, '');
    if (!isNaN(Number(rawValue))) {
        const formattedValue = Number(rawValue).toLocaleString('en-US');
        setFeeAmount(formattedValue);
    } else if (rawValue === '') {
        setFeeAmount('');
    }
  };
  
    const handleManagementFeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, '');
    if (!isNaN(Number(rawValue))) {
        const formattedValue = Number(rawValue).toLocaleString('en-US');
        setManagementFeeAmount(formattedValue);
    } else if (rawValue === '') {
        setManagementFeeAmount('');
    }
  };

  const handleFinishFlow = () => {
    setDialog8Open(false);
    setDialog9Open(false);

    if (selectedRole?.title === t.userRoles.receivingCompany.title) {
        setUserRole('support_org');
        router.push('/jobs');
    } else if (selectedRole?.title === t.userRoles.supportOrg.title) {
        setUserRole('sending_company');
        router.push('/jobs');
    } else {
        router.push('/jobs');
    }
  };

  const handleRoleSelectAndContinue = (role: Role) => {
    setSelectedRole(role);
    setDialog3Open(false);
    setDialog4Open(true);
  };
  
  const handleRegionSelect = (region: string) => {
    setDialog7Open(false);
    if (currentFlow === 'quick') {
      setDialog8Open(true);
    } else if (currentFlow === 'ai_post') {
      const params = new URLSearchParams();
      if (selectedRole) params.set('role', selectedRole.title);
      if (selectedVisa?.type) params.set('visaType', selectedVisa.type);
      if (selectedVisa?.subType) params.set('visaSubType', selectedVisa.subType);
      // 'industry' and 'region' are already part of the final step, no need to add again
      // The handler for selecting industry/region will add them.
      router.push(`/post-job-ai?${params.toString()}`);
    }
  };


  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-white">
          {t.cta.title}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
          {t.cta.subtitle}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/post-job-ai">{t.cta.postJob}</Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
             <Link href="/chat">{t.cta.contactUs}</Link>
          </Button>
          <Dialog open={dialog1Open} onOpenChange={setDialog1Open}>
            <DialogTrigger asChild>
              <Button size="lg" variant="outline">
                Test
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl">
              <DialogHeader className="text-center">
                <DialogTitle className="text-2xl font-bold font-headline">{t_cta_flow.dialog1_title}</DialogTitle>
                <DialogDescription>{t_cta_flow.dialog1_desc}</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                  <Card className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer" onClick={() => { setCurrentFlow('quick'); setDialog1Open(false); setDialog3Open(true); }}>
                      <div className="flex justify-center mb-4">
                          <div className="p-3 rounded-full bg-primary/10 text-primary"><FastForward className="w-8 h-8"/></div>
                      </div>
                      <h3 className="font-semibold text-lg text-gray-800">{t_cta_flow.dialog1_opt1_title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{t_cta_flow.dialog1_opt1_desc}</p>
                  </Card>
                   <Card className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer" onClick={() => { setDialog1Open(false); setDialog2Open(true); }}>
                       <div className="flex justify-center mb-4">
                          <div className="p-3 rounded-full bg-green-500/10 text-green-500"><FileText className="w-8 h-8"/></div>
                      </div>
                      <h3 className="font-semibold text-lg text-gray-800">{t_cta_flow.dialog1_opt2_title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{t_cta_flow.dialog1_opt2_desc}</p>
                  </Card>
              </div>
            </DialogContent>
          </Dialog>

           <Dialog open={dialog2Open} onOpenChange={setDialog2Open}>
              <DialogContent className="sm:max-w-xl">
                <DialogHeader className="text-center">
                  <DialogTitle className="text-2xl font-bold font-headline">{t_cta_flow.dialog2_title}</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                    <Card className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer" onClick={() => { setCurrentFlow('ai_post'); setDialog2Open(false); setDialog3Open(true); }}>
                        <div className="flex justify-center mb-4">
                            <div className="p-3 rounded-full bg-primary/10 text-primary"><BrainCircuit className="w-8 h-8"/></div>
                        </div>
                        <h3 className="font-semibold text-lg text-gray-800">{t_cta_flow.dialog2_opt1_title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{t_cta_flow.dialog2_opt1_desc}</p>
                    </Card>
                     <Card className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer" onClick={() => router.push('/post-job-ai')}>
                         <div className="flex justify-center mb-4">
                            <div className="p-3 rounded-full bg-secondary/10 text-secondary"><FileText className="w-8 h-8"/></div>
                        </div>
                        <h3 className="font-semibold text-lg text-gray-800">{t_cta_flow.dialog2_opt2_title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{t_cta_flow.dialog2_opt2_desc}</p>
                    </Card>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => { setDialog2Open(false); setDialog1Open(true); }}>{t_cta_flow.back_button}</Button>
                </DialogFooter>
              </DialogContent>
          </Dialog>

          <Dialog open={dialog3Open} onOpenChange={setDialog3Open}>
            <DialogContent className="sm:max-w-4xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center">{t.userRoles.title}</DialogTitle>
                <DialogDescription className="text-center">
                  {t.userRoles.description}
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="h-[60vh] sm:h-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4 pr-4 sm:pr-0">
                  {userRoles.map((role) => (
                    <Card key={role.title} className="p-4 sm:p-6 text-left hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer h-full flex items-center gap-4" onClick={() => handleRoleSelectAndContinue(role)}>
                        <div className="bg-primary/5 p-3 rounded-lg">
                          {role.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-base text-gray-800">
                            {role.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1 hidden sm:block">
                            {role.description}
                          </p>
                        </div>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
              <DialogFooter>
                <Button variant="outline" onClick={() => { setDialog3Open(false); setDialog1Open(true); }}>{t_cta_flow.back_button}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={dialog4Open} onOpenChange={setDialog4Open}>
            <DialogContent className="sm:max-w-4xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center">{t.visaTypes.title}</DialogTitle>
                <DialogDescription className="text-center">
                  {t.visaTypes.description}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                  <Card
                    className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer"
                    onClick={() => { setSelectedVisa({ type: t.visaTypes.intern.title, subType: '', industry: '' }); setDialog4Open(false); setDialog51Open(true); }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <HardHat className="w-8 h-8" />
                      </div>
                    </div>
                    <CardTitle className="font-semibold text-lg">{t.visaTypes.intern.title}</CardTitle>
                    <CardDescription>{t.visaTypes.intern.description}</CardDescription>
                  </Card>

                  <Card
                    className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer"
                    onClick={() => { setSelectedVisa({ type: t.visaTypes.skilled.title, subType: '', industry: '' }); setDialog4Open(false); setDialog52Open(true); }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="bg-yellow-400/10 text-yellow-500 p-3 rounded-full">
                        <UserCheck className="w-8 h-8" />
                      </div>
                    </div>
                    <CardTitle className="font-semibold text-lg">{t.visaTypes.skilled.title}</CardTitle>
                    <CardDescription>{t.visaTypes.skilled.description}</CardDescription>
                  </Card>

                  <Card
                    className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer"
                    onClick={() => { setSelectedVisa({ type: t.visaTypes.engineer.title, subType: '', industry: '' }); setDialog4Open(false); setDialog53Open(true); }}
                  >
                     <div className="flex justify-center mb-4">
                      <div className="bg-green-500/10 text-green-500 p-3 rounded-full">
                        <Briefcase className="w-8 h-8" />
                      </div>
                    </div>
                    <CardTitle className="font-semibold text-lg">{t.visaTypes.engineer.title}</CardTitle>
                    <CardDescription>{t.visaTypes.engineer.description}</CardDescription>
                  </Card>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => { setDialog4Open(false); setDialog3Open(true); }}>{t_cta_flow.back_button}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

           <Dialog open={dialog51Open} onOpenChange={setDialog51Open}>
              <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold font-headline text-center">{t_cta_flow.dialog5_1_title}</DialogTitle>
                  <DialogDescription className="text-center">
                    {t_cta_flow.dialog5_1_desc}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                    <Card
                      className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer flex flex-col items-center"
                      onClick={() => { setSelectedVisa(prev => ({...prev!, subType: t_cta_flow.dialog5_1_opt1_title})); setDialog51Open(false); setDialog61Open(true); }}
                    >
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-full bg-primary/10 text-primary">
                          <HardHat className="w-8 h-8" />
                        </div>
                      </div>
                      <CardTitle className="font-semibold text-base">{t_cta_flow.dialog5_1_opt1_title}</CardTitle>
                      <CardDescription>{t_cta_flow.dialog5_1_opt1_desc}</CardDescription>
                    </Card>
                    <Card
                      className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer flex flex-col items-center"
                      onClick={() => { setSelectedVisa(prev => ({...prev!, subType: t_cta_flow.dialog5_1_opt2_title})); setDialog51Open(false); setDialog61Open(true); }}
                    >
                      <div className="flex justify-center mb-4">
                        <div className="bg-accent/10 text-accent p-3 rounded-full">
                          <HardHat className="w-8 h-8" />
                        </div>
                      </div>
                      <CardTitle className="font-semibold text-base">{t_cta_flow.dialog5_1_opt2_title}</CardTitle>
                      <CardDescription>{t_cta_flow.dialog5_1_opt2_desc}</CardDescription>
                    </Card>
                    <Card
                      className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer flex flex-col items-center"
                      onClick={() => { setSelectedVisa(prev => ({...prev!, subType: t_cta_flow.dialog5_1_opt3_title})); setDialog51Open(false); setDialog61Open(true); }}
                    >
                      <div className="flex justify-center mb-4">
                        <div className="bg-chart-1/10 text-chart-1 p-3 rounded-full">
                          <HardHat className="w-8 h-8" />
                        </div>
                      </div>
                      <CardTitle className="font-semibold text-base">{t_cta_flow.dialog5_1_opt3_title}</CardTitle>
                      <CardDescription>{t_cta_flow.dialog5_1_opt3_desc}</CardDescription>
                    </Card>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => { setDialog51Open(false); setDialog4Open(true); }}>{t_cta_flow.back_button}</Button>
                </DialogFooter>
              </DialogContent>
          </Dialog>
          
          <Dialog open={dialog61Open} onOpenChange={setDialog61Open}>
              <DialogContent className="sm:max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold font-headline text-center">{t_cta_flow.dialog6_title}</DialogTitle>
                  <DialogDescription className="text-center">
                    {t_cta_flow.dialog6_desc}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 py-4">
                  {t_cta_flow.dialog6_industries_intern.map(industry => (
                    <Card key={industry} className="p-4 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer" onClick={() => openDialog7('61', industry)}>
                      <h3 className="font-semibold text-base text-gray-800">{industry}</h3>
                    </Card>
                  ))}
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => { setDialog61Open(false); setDialog51Open(true); }}>{t_cta_flow.back_button}</Button>
                </DialogFooter>
              </DialogContent>
          </Dialog>

          <Dialog open={dialog52Open} onOpenChange={setDialog52Open}>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center">{t_cta_flow.dialog5_2_title}</DialogTitle>
                <DialogDescription className="text-center">
                  {t_cta_flow.dialog5_2_desc}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                <Card
                  className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer flex flex-col items-center"
                  onClick={() => { setSelectedVisa(prev => ({...prev!, subType: t_cta_flow.dialog5_2_opt1_title})); setDialog52Open(false); setDialog62Open(true); }}
                >
                  <div className="flex justify-center mb-4">
                      <div className="bg-primary/10 text-primary p-3 rounded-full">
                          <Users className="w-8 h-8" />
                      </div>
                  </div>
                  <CardTitle className="font-semibold text-base">{t_cta_flow.dialog5_2_opt1_title}</CardTitle>
                  <CardDescription>{t_cta_flow.dialog5_2_opt1_desc}</CardDescription>
                </Card>
                <Card
                  className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer flex flex-col items-center"
                  onClick={() => { setSelectedVisa(prev => ({...prev!, subType: t_cta_flow.dialog5_2_opt2_title})); setDialog52Open(false); setDialog62Open(true); }}
                >
                   <div className="flex justify-center mb-4">
                      <div className="bg-secondary/10 text-secondary p-3 rounded-full">
                          <Plane className="w-8 h-8" />
                      </div>
                  </div>
                  <CardTitle className="font-semibold text-base">{t_cta_flow.dialog5_2_opt2_title}</CardTitle>
                  <CardDescription>{t_cta_flow.dialog5_2_opt2_desc}</CardDescription>
                </Card>
                <Card
                  className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer flex flex-col items-center"
                  onClick={() => { setSelectedVisa(prev => ({...prev!, subType: t_cta_flow.dialog5_2_opt3_title})); setDialog52Open(false); setDialog62Open(true); }}
                >
                   <div className="flex justify-center mb-4">
                      <div className="bg-yellow-500/10 text-yellow-500 p-3 rounded-full">
                          <UserPlus className="w-8 h-8" />
                      </div>
                  </div>
                  <CardTitle className="font-semibold text-base">{t_cta_flow.dialog5_2_opt3_title}</CardTitle>
                  <CardDescription>{t_cta_flow.dialog5_2_opt3_desc}</CardDescription>
                </Card>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => { setDialog52Open(false); setDialog4Open(true); }}>{t_cta_flow.back_button}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

           <Dialog open={dialog62Open} onOpenChange={setDialog62Open}>
              <DialogContent className="sm:max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold font-headline text-center">{t_cta_flow.dialog6_title}</DialogTitle>
                  <DialogDescription className="text-center">
                    {t_cta_flow.dialog6_desc}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 py-4">
                  {t_cta_flow.dialog6_industries_skilled.map(industry => (
                    <Card key={industry} className="p-4 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer" onClick={() => openDialog7('62', industry)}>
                      <h3 className="font-semibold text-base text-gray-800">{industry}</h3>
                    </Card>
                  ))}
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => { setDialog62Open(false); setDialog52Open(true); }}>{t_cta_flow.back_button}</Button>
                </DialogFooter>
              </DialogContent>
          </Dialog>

          <Dialog open={dialog53Open} onOpenChange={setDialog53Open}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center">{t_cta_flow.dialog5_3_title}</DialogTitle>
                <DialogDescription className="text-center">
                  {t_cta_flow.dialog5_3_desc}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                <Card
                  className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => { setSelectedVisa(prev => ({...prev!, subType: t_cta_flow.dialog5_3_opt1_title})); setDialog53Open(false); setDialog63Open(true); }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                      <Users className="w-8 h-8" />
                    </div>
                  </div>
                  <CardTitle className="font-semibold text-base">{t_cta_flow.dialog5_3_opt1_title}</CardTitle>
                  <CardDescription>{t_cta_flow.dialog5_3_opt1_desc}</CardDescription>
                </Card>
                <Card
                  className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => { setSelectedVisa(prev => ({...prev!, subType: t_cta_flow.dialog5_3_opt2_title})); setDialog53Open(false); setDialog63Open(true); }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                      <Plane className="w-8 h-8" />
                    </div>
                  </div>
                  <CardTitle className="font-semibold text-base">{t_cta_flow.dialog5_3_opt2_title}</CardTitle>
                  <CardDescription>{t_cta_flow.dialog5_3_opt2_desc}</CardDescription>
                </Card>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => {
                    setDialog53Open(false);
                    setDialog4Open(true);
                  }}
                >
                  {t_cta_flow.back_button}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={dialog63Open} onOpenChange={setDialog63Open}>
              <DialogContent className="sm:max-w-5xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold font-headline text-center">{t_cta_flow.dialog6_title}</DialogTitle>
                  <DialogDescription className="text-center">
                    {t_cta_flow.dialog6_desc}
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[60vh]">
                  <div className="grid grid-cols-3 gap-4 py-4 pr-4">
                    {t_cta_flow.dialog6_industries_engineer.map(industry => (
                      <Card key={industry} className="p-4 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer" onClick={() => openDialog7('63', industry)}>
                        <h3 className="font-semibold text-base text-gray-800">{industry}</h3>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
                <DialogFooter>
                  <Button variant="outline" onClick={() => { setDialog63Open(false); setDialog53Open(true); }}>{t_cta_flow.back_button}</Button>
                </DialogFooter>
              </DialogContent>
          </Dialog>
          
          <Dialog open={dialog7Open} onOpenChange={setDialog7Open}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center">{t_cta_flow.dialog7_title}</DialogTitle>
                <DialogDescription className="text-center">{t_cta_flow.dialog7_desc}</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-3 gap-4 py-4">
                  {t_cta_flow.dialog7_regions.map(region => (
                    <Card key={region} className="p-4 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer" onClick={() => handleRegionSelect(region)}>
                      <h3 className="font-semibold text-base text-gray-800">{region}</h3>
                    </Card>
                  ))}
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={backFromDialog7}>{t_cta_flow.back_button}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={dialog8Open} onOpenChange={setDialog8Open}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold font-headline text-center flex items-center justify-center gap-2">
                      <HandCoins className="h-6 w-6 text-primary" />
                      {t_cta_flow.dialog8_title}
                    </DialogTitle>
                </DialogHeader>
                <div className="py-4">
                    <Label htmlFor="fee">{t_cta_flow.dialog8_label}</Label>
                    <div className="relative mt-1">
                        <Input
                            id="fee"
                            value={feeAmount}
                            onChange={handleFeeChange}
                            placeholder={t_cta_flow.dialog8_placeholder}
                            className="pr-12 text-right"
                        />
                        <span className="absolute inset-y-0 right-4 flex items-center text-muted-foreground">
                            JPY
                        </span>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => { setDialog8Open(false); setDialog7Open(true); }}>{t_cta_flow.back_button}</Button>
                    <Button onClick={() => { setDialog8Open(false); setDialog9Open(true); }}>{t_cta_flow.continue_button}</Button>
                </DialogFooter>
            </DialogContent>
          </Dialog>
          
          <Dialog open={dialog9Open} onOpenChange={setDialog9Open}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold font-headline text-center flex items-center justify-center gap-2">
                        <HandCoins className="h-6 w-6 text-primary" />
                        {t_cta_flow.dialog9_title}
                    </DialogTitle>
                </DialogHeader>
                <div className="py-4">
                    <Label htmlFor="management-fee">{t_cta_flow.dialog9_label}</Label>
                    <div className="relative mt-1">
                        <Input
                            id="management-fee"
                            value={managementFeeAmount}
                            onChange={handleManagementFeeChange}
                            placeholder={t_cta_flow.dialog9_placeholder}
                            className="pr-12 text-right"
                        />
                        <span className="absolute inset-y-0 right-4 flex items-center text-muted-foreground">
                            JPY
                        </span>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => { setDialog9Open(false); setDialog8Open(true); }}>{t_cta_flow.back_button}</Button>
                    <Button onClick={handleFinishFlow}>{t_cta_flow.save_button}</Button>
                </DialogFooter>
            </DialogContent>
          </Dialog>

        </div>
      </div>
    </section>
  );
}
