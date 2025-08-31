
'use client';

import { useState, Suspense, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/language-context';
import { Sparkles, LoaderCircle, FileText, Upload, Mic, Award, CheckCircle, Info, Pencil, Paperclip, X, FileImage, FileType, Brain, ChevronRight, GraduationCap, Star, Briefcase, Building, Users, Handshake, Send, Search } from 'lucide-react';
import { generateJobPost } from '@/ai/flows/generate-job-post';
import { analyzeJobDocument } from '@/ai/flows/analyze-job-document';
import { findMatchingPartners } from '@/ai/flows/find-matching-partners';
import type { GenerateJobPostOutput } from '@/ai/schemas/generate-job-post-schema';
import type { FindMatchingPartnersOutput } from '@/ai/schemas/find-matching-partners-schema';
import { useToast } from "@/hooks/use-toast";
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { allPartners } from '@/data/partners';
import { MatchingPartnersResult } from '@/components/matching-partners-result';

type SessionState = 'idle' | 'loading_job' | 'job_completed' | 'loading_partners' | 'partners_completed';
type UploadedFile = {
  name: string;
  type: string;
  size: number;
  dataUri: string;
}
type VisaType = 'intern' | 'skilled' | 'engineer';
type Role = { title: string; description: string; icon: JSX.Element; }

function AiJobPostFormContent() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const resultCardRef = useRef<HTMLDivElement>(null);
  const actionFooterRef = useRef<HTMLDivElement>(null);


  const role = searchParams.get('role');
  const initialVisaType = searchParams.get('visaType');
  const initialVisaSubType = searchParams.get('visaSubType');
  
  const [state, setState] = useState<SessionState>('idle');
  const [description, setDescription] = useState('');
  const [jobPost, setJobPost] = useState<GenerateJobPostOutput | null>(null);
  const [matchingPartners, setMatchingPartners] = useState<FindMatchingPartnersOutput | null>(null);
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);

  const [roleDialogOpen, setRoleDialogOpen] = useState(false);
  const [visaDialogOpen, setVisaDialogOpen] = useState(false);
  const [visaSubTypeDialogOpen, setVisaSubTypeDialogOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [selectedVisaType, setSelectedVisaType] = useState<VisaType | null>(null);
  
  const userRoles = [
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: t.userRoles.hiringCompany.title,
      description: t.userRoles.hiringCompany.description,
    },
    {
      icon: <Users className="h-8 w-8 text-yellow-500" />,
      title: t.userRoles.supportOrg.title,
      description: t.userRoles.supportOrg.description,
    },
    {
      icon: <Handshake className="h-8 w-8 text-green-500" />,
      title: t.userRoles.union.title,
      description: t.userRoles.union.description,
    },
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: t.userRoles.sendingCompany.title,
      description: t.userRoles.sendingCompany.description,
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: t.userRoles.hakenCompany.title,
      description: t.userRoles.hakenCompany.description,
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: t.userRoles.yuryoShokai.title,
      description: t.userRoles.yuryoShokai.description,
    },
  ];

  const visaTypes = [
      {
        icon: <GraduationCap className="h-8 w-8 text-primary" />,
        title: t.visaTypes.intern.title,
        description: t.visaTypes.intern.description,
        type: 'intern' as VisaType,
      },
      {
        icon: <Star className="h-8 w-8 text-yellow-500" />,
        title: t.visaTypes.skilled.title,
        description: t.visaTypes.skilled.description,
        type: 'skilled' as VisaType,
      },
      {
        icon: <Briefcase className="h-8 w-8 text-green-500" />,
        title: t.visaTypes.engineer.title,
        description: t.visaTypes.engineer.description,
        type: 'engineer' as VisaType,
      },
  ]

  const visaSubTypes = {
    intern: [
      { title: t.visaSubTypes.intern.threeYear, href: "#"},
      { title: t.visaSubTypes.intern.oneYear, href: "#"},
      { title: t.visaSubTypes.intern.go, href: "#"},
    ],
    skilled: [
      { title: t.visaSubTypes.skilled.japan, href: "#"},
      { title: t.visaSubTypes.skilled.vietnam, href: "#"},
    ],
    engineer: [
      { title: t.visaSubTypes.engineer.japan, href: "#"},
      { title: t.visaSubTypes.engineer.vietnam, href: "#"},
    ],
  };
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedFile({
          name: file.name,
          type: file.type,
          size: file.size,
          dataUri: reader.result as string,
        });
        setDescription('');
         if (window.innerWidth < 768) {
          setTimeout(() => {
            actionFooterRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 100);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadCardClick = () => {
    fileInputRef.current?.click();
  };

  const removeFile = () => {
    setUploadedFile(null);
    if(fileInputRef.current) {
        fileInputRef.current.value = "";
    }
  }

  const suggestionCards = [
    {
      icon: <Upload className="w-8 h-8 text-green-500" />,
      title: t.ai_job_post_form.suggestions.s2_title,
      description: t.ai_job_post_form.suggestions.s2_desc,
      onClick: handleUploadCardClick
    },
    {
      icon: <Mic className="w-8 h-8 text-blue-500" />,
      title: t.ai_job_post_form.suggestions.s3_title,
      description: t.ai_job_post_form.suggestions.s3_desc,
      onClick: () => {} // Placeholder for voice input
    },
    {
      icon: <Pencil className="w-8 h-8 text-orange-500" />,
      title: t.ai_job_post_form.suggestions.s4_title,
      description: t.ai_job_post_form.suggestions.s4_desc,
      onClick: () => {} // Placeholder for manual entry
    }
  ];
  
  const handleGenerate = async () => {
    if (!description.trim() && !uploadedFile) {
      toast({
        title: t.ai_job_post_form.error.title,
        description: t.ai_job_post_form.error.description,
        variant: "destructive",
      })
      return;
    }
    setState('loading_job');
    setJobPost(null);

    if (window.innerWidth < 768) {
      resultCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    try {
      const result = await generateJobPost({ 
        description,
        role: role || selectedRole?.title || undefined,
        visaType: initialVisaType || visaTypes.find(v => v.type === selectedVisaType)?.title || undefined,
      });
      setJobPost(result);
      setState('job_completed');
    } catch (error) {
      console.error("Error generating job post:", error);
      toast({
        title: t.ai_job_post_form.error.apiTitle,
        description: t.ai_job_post_form.error.apiDescription,
        variant: "destructive",
      })
      setState('idle');
    }
  };

  const handleStartAnalysis = () => {
    if(!uploadedFile) return;
    setRoleDialogOpen(true);
  }

  const handleReset = () => {
    setState('idle');
    setDescription('');
    setJobPost(null);
    setMatchingPartners(null);
    removeFile();
  }

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    setRoleDialogOpen(false);
    setVisaDialogOpen(true);
  }

  const handleVisaTypeSelect = (type: VisaType) => {
    setSelectedVisaType(type);
    setVisaDialogOpen(false);
    setVisaSubTypeDialogOpen(true);
  }

  const handleVisaSubTypeSelect = async (subType: {title: string, href: string}) => {
    setVisaSubTypeDialogOpen(false);
    if (!uploadedFile || !selectedRole || !selectedVisaType) {
        toast({
            title: "Missing Information",
            description: "Something went wrong. Please start over.",
            variant: "destructive",
        });
        return;
    }

    setState('loading_job');
    setJobPost(null);

    if (window.innerWidth < 768) {
      resultCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    try {
        const result = await analyzeJobDocument({
            description: '', // Description is from the file, not the textarea
            documentDataUri: uploadedFile.dataUri,
            role: selectedRole.title,
            visaType: visaTypes.find(v => v.type === selectedVisaType)?.title,
            visaSubType: subType.title,
        });
        setJobPost(result);
        setState('job_completed');
    } catch (error) {
        console.error("Error analyzing job document:", error);
        toast({
            title: t.ai_job_post_form.error.apiTitle,
            description: t.ai_job_post_form.error.apiDescription,
            variant: "destructive",
        });
        setState('idle');
    }
  }

  const handleFindPartners = async () => {
    if (!jobPost) return;

    setState('loading_partners');
    setMatchingPartners(null);

    try {
      const result = await findMatchingPartners({
        jobPost,
        allPartners,
        language,
      });
      setMatchingPartners(result);
      setState('partners_completed');
    } catch (error) {
      console.error("Error finding matching partners:", error);
      toast({
        title: t.ai_job_post_form.error.apiTitle,
        description: t.ai_job_post_form.error.apiDescription,
        variant: "destructive",
      });
      setState('job_completed'); // Revert to previous state on error
    }
  }


  const hasSelections = role || initialVisaType || initialVisaSubType;

  const FileIcon = ({ type }: { type: string }) => {
    if (type.startsWith('image/')) {
        return <FileImage className="w-10 h-10 text-primary" />;
    }
    if (type === 'application/pdf') {
        return <FileText className="w-10 h-10 text-red-500" />;
    }
    if (type.includes('word')) {
        return <FileType className="w-10 h-10 text-blue-500" />;
    }
    return <Paperclip className="w-10 h-10 text-gray-500" />;
  };

  const isLoading = state === 'loading_job' || state === 'loading_partners';

  return (
    <section className="py-16 sm:py-24 bg-blue-50/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 text-primary p-3 rounded-lg mb-4">
            <Sparkles className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            {t.aiJobPost.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            {t.aiJobPost.subtitle}
          </p>
        </div>
        
        {hasSelections && (
          <Card className="mb-8 bg-blue-100/50 border-blue-200 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600"/>
                {t.ai_job_post_form.your_selections_title}
              </CardTitle>
              <div className="flex flex-wrap gap-2 pt-2">
                {role && <Badge variant="secondary">{role}</Badge>}
                {initialVisaType && <Badge variant="secondary">{initialVisaType}</Badge>}
                {initialVisaSubType && <Badge variant="secondary">{initialVisaSubType}</Badge>}
              </div>
            </CardHeader>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Card className="shadow-lg w-full flex flex-col">
              <CardHeader>
                <CardTitle>{t.ai_job_post_form.input.title}</CardTitle>
                <CardDescription>{t.ai_job_post_form.input.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {uploadedFile ? (
                   <div className="min-h-[200px] rounded-lg border-2 border-dashed border-gray-300 p-4 flex flex-col items-center justify-center text-center">
                      <FileIcon type={uploadedFile.type} />
                      <p className="font-semibold mt-4 break-all">{uploadedFile.name}</p>
                      <p className="text-sm text-muted-foreground">({(uploadedFile.size / 1024).toFixed(2)} KB)</p>
                      <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm" onClick={handleUploadCardClick}>{t.ai_job_post_form.upload.changeFile}</Button>
                          <Button variant="destructive" size="sm" onClick={removeFile}>{t.ai_job_post_form.upload.removeFile}</Button>
                      </div>
                  </div>
                ) : (
                  <Textarea
                    placeholder={t.aiJobPost.placeholder}
                    className="min-h-[200px] text-base"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={isLoading || !!uploadedFile}
                  />
                )}
                 <input 
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      accept="image/*,application/pdf,.doc,.docx"
                  />
                 <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4 text-center">{t.ai_job_post_form.suggestions.title}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {suggestionCards.map((card) => (
                        <Card key={card.title} className="text-center p-4 hover:shadow-xl transition-all duration-200 cursor-pointer hover:-translate-y-1" onClick={card.onClick}>
                          <div className="flex justify-center mb-3">{card.icon}</div>
                          <h5 className="font-semibold text-sm mb-1">{card.title}</h5>
                          <p className="text-xs text-muted-foreground">{card.description}</p>
                        </Card>
                      ))}
                    </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2" ref={actionFooterRef}>
                {(state === 'job_completed' || state === 'partners_completed') && (
                    <Button variant="outline" onClick={handleReset}>{t.ai_job_post_form.input.reset}</Button>
                )}
                {uploadedFile ? (
                  <Button size="lg" onClick={handleStartAnalysis} disabled={isLoading}>
                      {state === 'loading_job' ? (
                      <LoaderCircle className="animate-spin" />
                    ) : (
                      <Brain className="mr-2 h-4 w-4" />
                    )}
                      {t.ai_job_post_form.analyzeButton}
                  </Button>
                ) : (
                  <Button size="lg" onClick={handleGenerate} disabled={isLoading || !!uploadedFile}>
                    {state === 'loading_job' ? (
                      <LoaderCircle className="animate-spin" />
                    ) : (
                      <Sparkles className="mr-2 h-4 w-4" />
                    )}
                    {t.aiJobPost.submit}
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>
          
          <div className="space-y-4" ref={resultCardRef}>
             <Card className="shadow-lg flex flex-col w-full h-full">
                <CardHeader>
                  <CardTitle>{t.ai_job_post_form.output.title}</CardTitle>
                  <CardDescription>{t.ai_job_post_form.output.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  {state === 'loading_job' && (
                    <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                      <LoaderCircle className="h-12 w-12 animate-spin text-primary mb-4" />
                      <p className="text-lg">{t.ai_job_post_form.output.loading}</p>
                    </div>
                  )}

                  {state === 'idle' && (
                    <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground bg-gray-50 rounded-lg">
                      <Award className="h-12 w-12 text-yellow-400 mb-4" />
                      <p className="text-lg font-medium">{t.ai_job_post_form.output.idle.title}</p>
                      <p className="max-w-xs">{t.ai_job_post_form.output.idle.description}</p>
                    </div>
                  )}

                  {(state === 'job_completed' || state === 'loading_partners' || state === 'partners_completed') && jobPost && (
                    <div className="space-y-6 animate-in fade-in-50">
                      <div>
                        <h2 className="text-2xl font-bold font-headline text-primary">{jobPost.jobTitle}</h2>
                        <p className="text-muted-foreground font-medium">{jobPost.companyName} - {jobPost.location}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{t.ai_job_post_form.output.jobDescription}</h3>
                        <p className="text-gray-700 whitespace-pre-wrap">{jobPost.jobDescription}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{t.ai_job_post_form.output.requirements}</h3>
                        <ul className="space-y-2">
                          {jobPost.requirements.map((req, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{t.ai_job_post_form.output.benefits}</h3>
                        <ul className="space-y-2">
                          {jobPost.benefits.map((ben, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{ben}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </CardContent>
                {(state === 'job_completed' || state === 'loading_partners' || state === 'partners_completed') && jobPost && (
                  <CardFooter className="flex justify-end gap-2">
                    <Button
                      size="lg"
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      {t.ai_job_post_form.postJobButton}
                    </Button>
                    <Button size="lg" onClick={handleFindPartners} disabled={state === 'loading_partners'}>
                       {state === 'loading_partners' ? (
                        <LoaderCircle className="animate-spin" />
                      ) : (
                        <Search className="mr-2 h-4 w-4" />
                      )}
                      {t.ai_job_post_form.findPartnersButton}
                    </Button>
                  </CardFooter>
                )}
              </Card>

              {(state === 'loading_partners' || state === 'partners_completed') && (
                <MatchingPartnersResult 
                  state={state} 
                  partners={allPartners} 
                  matchingResult={matchingPartners} 
                />
              )}
          </div>
        </div>
      </div>
       <Dialog open={roleDialogOpen} onOpenChange={setRoleDialogOpen}>
            <DialogContent className="sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center">{t.userRoles.title}</DialogTitle>
                <DialogDescription className="text-center">
                  {t.userRoles.description}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                {userRoles.map((role) => (
                  <div key={role.title} onClick={() => handleRoleSelect(role)}>
                    <Card className="p-6 text-left hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer h-full flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/5 p-3 rounded-lg">
                          {role.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-base text-gray-800">
                            {role.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {role.description}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </Card>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>

       <Dialog open={visaDialogOpen} onOpenChange={setVisaDialogOpen}>
           <DialogContent className="sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center">{t.visaTypes.title}</DialogTitle>
                <DialogDescription className="text-center">
                  {t.visaTypes.description}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                {visaTypes.map((visa) => (
                  <div key={visa.title} onClick={() => handleVisaTypeSelect(visa.type)}>
                    <Card className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer h-full flex flex-col items-center">
                      <div className="bg-primary/5 p-3 rounded-lg mb-4">
                        {visa.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-base text-gray-800">
                          {visa.title}
                        </h3>
                         <p className="text-sm text-muted-foreground mt-1">
                          {visa.description}
                        </p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </DialogContent>
        </Dialog>

        <Dialog open={visaSubTypeDialogOpen} onOpenChange={setVisaSubTypeDialogOpen}>
           <DialogContent className="sm:max-w-xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center">{t.visaSubTypes.title}</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 gap-4 py-4">
                {selectedVisaType && visaSubTypes[selectedVisaType].map((subType) => (
                  <div onClick={() => handleVisaSubTypeSelect(subType)} key={subType.title}>
                    <Card className="p-4 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer">
                      <h3 className="font-semibold text-base text-gray-800">
                        {subType.title}
                      </h3>
                    </Card>
                  </div>
                ))}
              </div>
            </DialogContent>
        </Dialog>
    </section>
  );
}

export function AiJobPostForm() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AiJobPostFormContent />
    </Suspense>
  )
}
