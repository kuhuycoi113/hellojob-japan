
'use client';

import { useState, Suspense, useRef, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/language-context';
import { Sparkles, LoaderCircle, FileText, Upload, Mic, Award, CheckCircle, Info, Pencil, Paperclip, X, FileImage, FileType, Brain, ChevronRight, GraduationCap, Star, Briefcase, Building, Users, Handshake, Send, Search, MicOff, Edit } from 'lucide-react';
import { generateJobPost } from '@/ai/flows/generate-job-post';
import { analyzeJobDocument } from '@/ai/flows/analyze-job-document';
import { findMatchingPartners } from '@/ai/flows/find-matching-partners';
import { translateJobPost } from '@/ai/flows/translate-job-post';
import type { GenerateJobPostOutput } from '@/ai/schemas/generate-job-post-schema';
import type { FindMatchingPartnersOutput } from '@/ai/schemas/find-matching-partners-schema';
import { useToast } from "@/hooks/use-toast";
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { allPartners } from '@/data/partners';
import { MatchingPartnersResult } from '@/components/matching-partners-result';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';


type SessionState = 'idle' | 'loading_job' | 'job_completed' | 'loading_partners' | 'partners_completed' | 'translating';
type UploadedFile = {
  name: string;
  type: string;
  size: number;
  dataUri: string;
}
type VisaType = 'intern' | 'skilled' | 'engineer';
type Role = { title: string; description: string; icon: JSX.Element; }

// Add SpeechRecognition types for window object
declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}

function AiJobPostFormContent() {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const resultCardRef = useRef<HTMLDivElement>(null);
  const actionFooterRef = useRef<HTMLDivElement>(null);


  const role = searchParams.get('role');
  const initialVisaType = searchParams.get('visaType');
  const initialVisaSubType = searchParams.get('visaSubType');
  
  const [state, setState] = useState<SessionState>('idle');
  const [description, setDescription] = useState('');
  const [jobPost, setJobPost] = useState<GenerateJobPostOutput | null>(null);
  const [editableJobPost, setEditableJobPost] = useState<GenerateJobPostOutput | null>(null);

  const [matchingPartners, setMatchingPartners] = useState<FindMatchingPartnersOutput | null>(null);
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);

  const [roleDialogOpen, setRoleDialogOpen] = useState(false);
  const [visaDialogOpen, setVisaDialogOpen] = useState(false);
  const [visaSubTypeDialogOpen, setVisaSubTypeDialogOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [selectedVisaType, setSelectedVisaType] = useState<VisaType | null>(null);
  const [voiceDescription, setVoiceDescription] = useState('');
  
  // States for Speech Recognition
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);


  // New function to check for the special flow condition
  const shouldRedirectToCandidateSearch = (currentRole: string, currentVisaSubType: string) => {
    const isMatchingRole = currentRole === t.userRoles.supportOrg.title || currentRole === t.userRoles.union.title;
    const isMatchingVisa = currentVisaSubType === t.visaSubTypes.skilled.japan || currentVisaSubType === t.visaSubTypes.engineer.japan;
    return isMatchingRole && isMatchingVisa;
  }
  
  const handleJobCreationSuccess = (result: GenerateJobPostOutput) => {
    const currentRole = role || selectedRole?.title || '';
    const currentVisaSubType = initialVisaSubType || ''; // Assuming this state is managed

    if (shouldRedirectToCandidateSearch(currentRole, currentVisaSubType)) {
        try {
            localStorage.setItem('latestJobPost', JSON.stringify(result));
            // Simulate a job ID for the URL, in a real app this would come from the backend.
            const pseudoJobId = `job-${Date.now()}`;
            router.push(`/dashboard/jobs/${pseudoJobId}/find-candidates`);
        } catch (error) {
             console.error("Failed to save job post to localStorage", error);
             toast({
                title: "Lỗi điều hướng",
                description: "Không thể lưu thông tin việc làm để chuyển trang. Vui lòng thử lại.",
                variant: "destructive"
             })
             // Fallback to normal flow if localStorage fails
             setJobPost(result);
             setEditableJobPost(JSON.parse(JSON.stringify(result)));
             setState('job_completed');
        }
    } else {
        setJobPost(result);
        setEditableJobPost(JSON.parse(JSON.stringify(result)));
        setState('job_completed');
    }
  }


  const performAiAnalysis = async (role: string, visaType: string, visaSubType: string, description: string, documentUri?: string) => {
    setState('loading_job');
    setJobPost(null);
    setEditableJobPost(null);

    if (window.innerWidth < 768) {
      resultCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    try {
      let result;
      if (documentUri) {
        result = await analyzeJobDocument({
            description: '',
            documentDataUri: documentUri,
            role: role,
            visaType: visaType,
            visaSubType: visaSubType,
        });
      } else {
        // Pass existing job post for refinement
        const refineDescription = `${JSON.stringify(editableJobPost)}\n\nUser request: ${description}`;

        result = await generateJobPost({
            description: jobPost ? refineDescription : description,
            role: role,
            visaType: visaType,
            visaSubType: visaSubType,
        });
      }
      
      handleJobCreationSuccess(result);

      if (documentUri) {
        // After analyzing a file, clear it to allow text input for refinement
        setUploadedFile(null);
        setDescription('');
      }
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

  // Effect to handle translation on language change
  useEffect(() => {
    const handleTranslate = async () => {
      if (jobPost && editableJobPost && (state === 'job_completed' || state === 'partners_completed')) {
        setState('translating');
        try {
          const targetLanguage = language === 'vi' ? 'Vietnamese' : language === 'ja' ? 'Japanese' : 'English';
          const translatedPost = await translateJobPost({
            jobPost: editableJobPost,
            targetLanguage: targetLanguage,
          });
          setEditableJobPost(translatedPost);
          setJobPost(translatedPost);
        } catch (error) {
          console.error("Error translating job post:", error);
          toast({
            title: "Translation Error",
            description: "Could not translate the job post.",
            variant: "destructive",
          });
        } finally {
          setState('job_completed');
        }
      }
    };
    handleTranslate();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);


  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("Speech Recognition API is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = language === 'ja' ? 'ja-JP' : language === 'en' ? 'en-US' : 'vi-VN';

    let finalTranscript = '';
    recognition.onresult = (event) => {
      let interimTranscript = '';
      finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
      setDescription(finalTranscript + interimTranscript);
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
            toast({
                title: "Lỗi nhận dạng giọng nói",
                description: "Vui lòng cấp quyền truy cập micro để sử dụng tính năng này.",
                variant: "destructive",
            });
        }
        setIsListening(false);
    };

    recognition.onend = () => {
        setIsListening(false);
        if (finalTranscript.trim()) {
            setVoiceDescription(finalTranscript.trim());
            setDescription(finalTranscript.trim())
            setRoleDialogOpen(true);
        }
    }
    
    recognitionRef.current = recognition;

    return () => {
        recognition.stop();
    }
  }, [language, toast]);

  const handleToggleListening = () => {
    if (!recognitionRef.current) {
         toast({
            title: "Tính năng không được hỗ trợ",
            description: "Trình duyệt của bạn không hỗ trợ nhận dạng giọng nói.",
            variant: "destructive",
        });
        return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setVoiceDescription('');
      setDescription(''); // Clear previous text
      recognitionRef.current.start();
      setIsListening(true);
    }
  };


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
      icon: isListening ? <MicOff className="w-8 h-8 text-red-500" /> : <Mic className="w-8 h-8 text-blue-500" />,
      title: t.ai_job_post_form.suggestions.s3_title,
      description: isListening ? t.ai_job_post_form.suggestions.s3_listening : t.ai_job_post_form.suggestions.s3_desc,
      onClick: handleToggleListening,
      className: isListening ? "border-red-500 bg-red-50" : ""
    },
    {
      icon: <Pencil className="w-8 h-8 text-orange-500" />,
      title: t.ai_job_post_form.suggestions.s4_title,
      description: t.ai_job_post_form.suggestions.s4_desc,
      onClick: () => {} // Placeholder for manual entry
    }
  ];
  
  const handleGenerate = async () => {
    if (!description.trim() && !uploadedFile && !jobPost) {
      toast({
        title: t.ai_job_post_form.error.title,
        description: t.ai_job_post_form.error.description,
        variant: "destructive",
      })
      return;
    }
    
    // Determine the context for the AI call
    const currentRole = role || selectedRole?.title || '';
    const currentVisaType = initialVisaType || visaTypes.find(v => v.type === selectedVisaType)?.title || '';
    // For simplicity, we assume subtype is part of the initial flow and don't re-ask
    const currentVisaSubType = initialVisaSubType || '';

    let refineDescription = description;
    if (jobPost) {
        // If there's an existing job post, we're in a refinement loop.
        // We combine the existing post with the new user request.
        const currentPostState = JSON.stringify(editableJobPost);
        refineDescription = `Given the following job post:\n${currentPostState}\n\nPlease refine it with this request: ${description}`;
    }

    setState('loading_job');
    if (window.innerWidth < 768) {
      resultCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    try {
      const result = await generateJobPost({
        description: refineDescription,
        role: currentRole,
        visaType: currentVisaType,
        visaSubType: currentVisaSubType,
      });

      handleJobCreationSuccess(result);
      setDescription(''); // Clear textarea after successful refinement
    } catch (error) {
      console.error("Error generating job post:", error);
      toast({
        title: t.ai_job_post_form.error.apiTitle,
        description: t.ai_job_post_form.error.apiDescription,
        variant: "destructive",
      });
      // Revert to the previous completed state on error
      setState(jobPost ? 'job_completed' : 'idle');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleGenerate();
    }
  };
  
  const handleStartAnalysis = () => {
    if(!uploadedFile && !voiceDescription) return;
    setRoleDialogOpen(true);
  }

  const handleReset = () => {
    setState('idle');
    setDescription('');
    setVoiceDescription('');
    setJobPost(null);
    setEditableJobPost(null);
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
    if (!selectedRole || !selectedVisaType) {
        toast({
            title: "Missing Information",
            description: "Something went wrong. Please start over.",
            variant: "destructive",
        });
        return;
    }

    if (!uploadedFile && !voiceDescription) {
        toast({
            title: "Missing Content",
            description: "No file or voice description to analyze.",
            variant: "destructive"
        });
        return;
    }
    
    await performAiAnalysis(
      selectedRole.title,
      visaTypes.find(v => v.type === selectedVisaType)!.title,
      subType.title,
      voiceDescription,
      uploadedFile?.dataUri,
    );
  }

  const handleFindPartners = async () => {
    if (!editableJobPost) return;

    setState('loading_partners');
    setMatchingPartners(null);

    try {
      const result = await findMatchingPartners({
        jobPost: editableJobPost,
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

  const handleEdit = <K extends keyof GenerateJobPostOutput>(field: K, value: GenerateJobPostOutput[K]) => {
    if (editableJobPost) {
        setEditableJobPost({ ...editableJobPost, [field]: value });
    }
  };

  const handleListItemEdit = (
    field: 'requirements' | 'benefits',
    index: number,
    value: string
  ) => {
    if (editableJobPost) {
      const newList = [...editableJobPost[field]];
      newList[index] = value;
      setEditableJobPost({ ...editableJobPost, [field]: newList });
    }
  };

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

  const isLoading = state === 'loading_job' || state === 'loading_partners' || state === 'translating';
  const showAnalyzeButton = uploadedFile && !jobPost;
  const showGenerateButton = !uploadedFile || jobPost;

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
                    placeholder={isListening ? t.ai_job_post_form.suggestions.s3_listening : (jobPost ? t.ai_job_post_form.input.refinePlaceholder : t.aiJobPost.placeholder)}
                    className="min-h-[200px] text-base"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isLoading || !!uploadedFile || isListening}
                  />
                )}
                 <input 
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      accept="image/*,application/pdf,.doc,.docx"
                  />
                {!jobPost && (
                    <div className="mt-6">
                        <h4 className="text-lg font-semibold text-gray-700 mb-4 text-center">{t.ai_job_post_form.suggestions.title}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {suggestionCards.map((card) => (
                            <Card key={card.title} className={cn("text-center p-4 hover:shadow-xl transition-all duration-200 cursor-pointer hover:-translate-y-1", card.className)} onClick={card.onClick}>
                            <div className="flex justify-center mb-3">{card.icon}</div>
                            <h5 className="font-semibold text-sm mb-1">{card.title}</h5>
                            <p className="text-xs text-muted-foreground">{card.description}</p>
                            </Card>
                        ))}
                        </div>
                    </div>
                 )}
              </CardContent>
              <CardFooter className="flex justify-end gap-2" ref={actionFooterRef}>
                {(state === 'job_completed' || state === 'partners_completed') && (
                    <Button variant="outline" onClick={handleReset}>{t.ai_job_post_form.input.reset}</Button>
                )}
                {showAnalyzeButton && (
                  <Button size="lg" onClick={handleStartAnalysis} disabled={isLoading}>
                      {state === 'loading_job' ? (
                      <LoaderCircle className="animate-spin" />
                    ) : (
                      <Brain className="mr-2 h-4 w-4" />
                    )}
                      {t.ai_job_post_form.analyzeButton}
                  </Button>
                )}
                {showGenerateButton && (
                  <Button size="lg" onClick={handleGenerate} disabled={isLoading || !!uploadedFile}>
                    {state === 'loading_job' ? (
                      <LoaderCircle className="animate-spin" />
                    ) : (
                      <Sparkles className="mr-2 h-4 w-4" />
                    )}
                    {jobPost ? t.ai_job_post_form.refineButton : t.aiJobPost.submit}
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>
          
          <div className="space-y-4" ref={resultCardRef}>
             <Card className="shadow-lg flex flex-col w-full min-h-[500px]">
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

                  {state === 'translating' && (
                    <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                      <LoaderCircle className="h-12 w-12 animate-spin text-primary mb-4" />
                      <p className="text-lg">Translating...</p>
                    </div>
                  )}

                  {state === 'idle' && (
                    <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground bg-gray-50 rounded-lg">
                      <Award className="h-12 w-12 text-yellow-400 mb-4" />
                      <p className="text-lg font-medium">{t.ai_job_post_form.output.idle.title}</p>
                      <p className="max-w-xs">{t.ai_job_post_form.output.idle.description}</p>
                    </div>
                  )}

                  {(state === 'job_completed' || state === 'loading_partners' || state === 'partners_completed') && editableJobPost && (
                    <div className="space-y-6 animate-in fade-in-50">
                        <div className='space-y-2'>
                           <Label htmlFor="jobTitle" className="text-lg font-semibold flex items-center gap-2">
                             <Edit className="w-4 h-4 text-muted-foreground"/>
                             Job Title
                           </Label>
                           <Input 
                                id="jobTitle" 
                                value={editableJobPost.jobTitle} 
                                onChange={(e) => handleEdit('jobTitle', e.target.value)}
                                className="text-2xl font-bold font-headline text-primary h-auto p-2"
                            />
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor="companyName" className="font-medium flex items-center gap-2">
                                Company & Location
                            </Label>
                            <div className="flex gap-2">
                                <Input id="companyName" value={editableJobPost.companyName} onChange={(e) => handleEdit('companyName', e.target.value)} />
                                <Input id="location" value={editableJobPost.location} onChange={(e) => handleEdit('location', e.target.value)} />
                            </div>
                        </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Edit className="w-4 h-4 text-muted-foreground"/>{t.ai_job_post_form.output.jobDescription}</h3>
                         <Textarea 
                            value={editableJobPost.jobDescription} 
                            onChange={(e) => handleEdit('jobDescription', e.target.value)}
                            className="text-gray-700 min-h-[150px]"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Edit className="w-4 h-4 text-muted-foreground"/>{t.ai_job_post_form.output.requirements}</h3>
                        <div className="space-y-2">
                          {editableJobPost.requirements.map((req, i) => (
                             <div key={i} className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                <Input value={req} onChange={(e) => handleListItemEdit('requirements', i, e.target.value)} />
                             </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><Edit className="w-4 h-4 text-muted-foreground"/>{t.ai_job_post_form.output.benefits}</h3>
                        <div className="space-y-2">
                           {editableJobPost.benefits.map((ben, i) => (
                             <div key={i} className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                <Input value={ben} onChange={(e) => handleListItemEdit('benefits', i, e.target.value)} />
                             </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
                {(state === 'job_completed' || state === 'loading_partners' || state === 'partners_completed') && editableJobPost && (
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
