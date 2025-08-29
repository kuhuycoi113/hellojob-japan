"use client";

import React, { useState, useTransition, useRef } from "react";
import {
  matchJobsToResume,
  MatchJobsToResumeOutput,
} from "@/ai/flows/ai-job-matching";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  MapPin,
  Upload,
  Loader2,
  Briefcase,
  Bot,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const mockJobs = [
  {
    id: "swe-1",
    title: "Senior Software Engineer, Frontend",
    company: "InnovateTech",
    location: "San Francisco, CA",
    type: "Full-time",
    tags: ["React", "TypeScript", "Next.js"],
    description: "Lead the development of our next-generation user interfaces using React and TypeScript. Requires 5+ years of experience and a passion for building beautiful, scalable applications.",
  },
  {
    id: "pm-1",
    title: "Product Manager, AI Platforms",
    company: "DataDriven Inc.",
    location: "New York, NY",
    type: "Full-time",
    tags: ["Product", "AI", "SaaS"],
    description: "Define the roadmap and strategy for our AI-powered analytics platform. Strong background in SaaS and machine learning concepts is essential.",
  },
  {
    id: "ds-1",
    title: "Data Scientist",
    company: "QuantumLeap",
    location: "Austin, TX (Remote)",
    type: "Full-time",
    tags: ["Python", "Machine Learning", "SQL"],
    description: "Analyze large datasets to extract meaningful insights and build predictive models. Proficiency in Python, Scikit-learn, and SQL is required.",
  },
  {
    id: "uxd-1",
    title: "UX Designer",
    company: "CreativeMinds",
    location: "Los Angeles, CA",
    type: "Contract",
    tags: ["Figma", "User Research", "Prototyping"],
    description: "Design intuitive and engaging user experiences for our mobile and web applications. A strong portfolio showcasing your design process is a must.",
  },
    {
    id: "swe-2",
    title: "Backend Engineer (Go)",
    company: "ScaleFast",
    location: "Remote",
    type: "Full-time",
    tags: ["Go", "Microservices", "Kubernetes"],
    description: "Design and build scalable microservices using Go. Experience with distributed systems and cloud-native technologies is highly desirable.",
  },
  {
    id: "devops-1",
    title: "DevOps Engineer",
    company: "CloudNine",
    location: "Seattle, WA",
    type: "Full-time",
    tags: ["AWS", "Terraform", "CI/CD"],
    description: "Automate and manage our cloud infrastructure on AWS. Implement CI/CD pipelines and ensure the reliability and scalability of our services.",
  },
];

type Job = (typeof mockJobs)[0];

function JobCard({ job, isRecommended }: { job: Job; isRecommended: boolean }) {
  const [isApplying, setIsApplying] = useState(false);
  return (
    <>
      <Card className={`transition-all ${isRecommended ? "border-primary shadow-lg" : ""}`}>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="font-headline text-xl">{job.title}</CardTitle>
              <CardDescription className="flex items-center gap-4 mt-2">
                <span className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" /> {job.company}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> {job.location}
                </span>
              </CardDescription>
            </div>
            {isRecommended && <Badge variant="outline" className="border-primary text-primary">Recommended</Badge>}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-2">{job.description}</p>
          <div className="flex items-center gap-2 mt-4">
            <Briefcase className="h-4 w-4 text-muted-foreground" />
            <Badge variant="secondary">{job.type}</Badge>
            {job.tags.map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setIsApplying(true)} style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
            Apply Now
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isApplying} onOpenChange={setIsApplying}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="font-headline">Apply for {job.title}</DialogTitle>
            <DialogDescription>
              Submit your application to {job.company}.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">Name</Label>
              <Input id="name" defaultValue="Your Name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">Email</Label>
              <Input id="email" defaultValue="your.email@example.com" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="cover-letter" className="text-right">Cover Letter</Label>
              <Textarea id="cover-letter" placeholder="Briefly explain why you're a good fit." className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={() => setIsApplying(false)}>Submit Application</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}


export function JobListings() {
  const [isPending, startTransition] = useTransition();
  const [recommendedJobs, setRecommendedJobs] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeTab, setActiveTab] = useState("all");

  const jobStrings = mockJobs.map(
    (job) => `Title: ${job.title}, Company: ${job.company}, Location: ${job.location}, Description: ${job.description}`
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadedFileName(file.name);
    setError(null);
    setRecommendedJobs([]);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const resumeDataUri = reader.result as string;

      startTransition(async () => {
        try {
          const result: MatchJobsToResumeOutput = await matchJobsToResume({
            resumeDataUri,
            jobListings: jobStrings,
          });
          setRecommendedJobs(result.recommendedJobs);
          setActiveTab("recommended");
        } catch (e) {
          setError(
            "An error occurred while matching your resume. Please try again."
          );
          console.error(e);
        }
      });
    };

    reader.onerror = () => {
      setError("Failed to read the resume file.");
      console.error(reader.error);
    };
  };

  const recommendedJobDetails = mockJobs.filter(job => 
    recommendedJobs.some(rec => rec.includes(job.title) && rec.includes(job.company))
  );

  return (
    <section id="jobs" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold font-headline">
              Featured Job Openings
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Browse our curated list of jobs or upload your resume to find your perfect match.
            </p>
          </div>
          <div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.doc,.docx,.txt"
            />
            <Button
              size="lg"
              onClick={() => fileInputRef.current?.click()}
              disabled={isPending}
            >
              {isPending ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Upload className="mr-2 h-5 w-5" />
              )}
              {isPending ? "Analyzing Resume..." : "Upload Resume & AI Match"}
            </Button>
            {uploadedFileName && !isPending && (
              <p className="text-sm text-muted-foreground mt-2 text-center md:text-left">
                File: {uploadedFileName}
              </p>
            )}
          </div>
        </div>
        
        {error && (
            <Alert variant="destructive" className="mb-8">
                <AlertTitle>Matching Failed</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
            <TabsTrigger value="all">All Jobs</TabsTrigger>
            <TabsTrigger value="recommended" disabled={recommendedJobDetails.length === 0 && !isPending}>
              <Bot className="mr-2 h-4 w-4" /> Recommended for you
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mockJobs.map((job) => (
              <JobCard key={job.id} job={job} isRecommended={recommendedJobDetails.some(rec => rec.id === job.id)} />
            ))}
          </TabsContent>
          <TabsContent value="recommended" className="mt-8">
             {isPending ? (
                <div className="flex justify-center items-center py-20 flex-col gap-4">
                  <Loader2 className="h-12 w-12 animate-spin text-primary" />
                  <p className="text-lg text-muted-foreground">Finding your best matches...</p>
                </div>
             ) : recommendedJobDetails.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {recommendedJobDetails.map((job) => (
                        <JobCard key={job.id} job={job} isRecommended={true} />
                    ))}
                </div>
             ) : (
                <div className="text-center py-20 border-2 border-dashed rounded-lg">
                    <h3 className="text-xl font-semibold font-headline">No recommendations yet</h3>
                    <p className="text-muted-foreground mt-2">Upload your resume to see jobs tailored for you.</p>
                </div>
             )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
