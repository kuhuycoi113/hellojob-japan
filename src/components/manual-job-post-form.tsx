

'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/language-context';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight, FileSignature } from 'lucide-react';

const TOTAL_STEPS = 3;

export function ManualJobPostForm() {
  const { t } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    jobTitle: '',
    industry: '',
    location: '',
    visaType: '',
    salary: '',
    gender: 'any',
    ageRange: '',
    description: '',
    requirements: '',
    benefits: '',
    role: '',
    visaSubType: '',
    region: '',
  });

  useEffect(() => {
    const role = searchParams.get('role') || '';
    const visaType = searchParams.get('visaType') || '';
    const visaSubType = searchParams.get('visaSubType') || '';
    const industry = searchParams.get('industry') || '';
    const region = searchParams.get('region') || '';
    
    setFormData(prev => ({
        ...prev,
        role,
        visaType,
        visaSubType,
        industry,
        region,
        location: region, // Set location from region
    }));

  }, [searchParams]);

  const handleNext = () => {
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
    } else {
      // Handle final submission
      console.log('Final Form Data:', formData);
      router.push('/dashboard/jobs'); // Or a success page
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const progress = (step / TOTAL_STEPS) * 100;
  
  const industries = ["Nông nghiệp", "Xây dựng", "Thực phẩm", "Cơ khí", "Hộ lý", "Dệt may", "Điện tử"];
  const visaTypes = ["Thực tập sinh kỹ năng", "Kỹ năng đặc định", "Kỹ sư, tri thức"];


  return (
    <div className="container mx-auto max-w-3xl">
       <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 text-primary p-3 rounded-lg mb-4">
            <FileSignature className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            Đăng tin tuyển dụng
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Điền đầy đủ thông tin chi tiết để tìm kiếm ứng viên phù hợp nhất.
          </p>
        </div>

      <Card className="shadow-2xl">
        <CardHeader>
          <Progress value={progress} className="mb-4" />
          <CardTitle>Bước {step}/{TOTAL_STEPS}: {
            step === 1 ? 'Thông tin cơ bản' : step === 2 ? 'Chi tiết công việc' : 'Mô tả chi tiết'
          }</CardTitle>
          <CardDescription>
             {
                step === 1 ? 'Hãy bắt đầu với những thông tin chính về vị trí bạn đang tuyển dụng.' 
                : step === 2 ? 'Cung cấp các chi tiết về loại visa, lương và yêu cầu ứng viên.' 
                : 'Cung cấp mô tả chi tiết để thu hút ứng viên phù hợp.'
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in-50">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Tên công việc</Label>
                  <Input id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Ví dụ: Kỹ sư cơ khí" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="industry">Ngành nghề</Label>
                    <Select name="industry" onValueChange={handleSelectChange('industry')} value={formData.industry}>
                        <SelectTrigger id="industry">
                            <SelectValue placeholder="Chọn ngành nghề" />
                        </SelectTrigger>
                        <SelectContent>
                            {industries.map(ind => <SelectItem key={ind} value={ind}>{ind}</SelectItem>)}
                        </SelectContent>
                    </Select>
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="location">Địa điểm</Label>
                  <Input id="location" name="location" value={formData.location} onChange={handleChange} placeholder="Ví dụ: Tokyo, Nhật Bản" />
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4 animate-in fade-in-50">
                <div className="space-y-2">
                    <Label htmlFor="visaType">Loại Visa</Label>
                    <Select name="visaType" onValueChange={handleSelectChange('visaType')} value={formData.visaType}>
                        <SelectTrigger id="visaType">
                            <SelectValue placeholder="Chọn loại visa" />
                        </SelectTrigger>
                        <SelectContent>
                             {visaTypes.map(visa => <SelectItem key={visa} value={visa}>{visa}</SelectItem>)}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary">Mức lương (JPY/tháng)</Label>
                  <Input id="salary" name="salary" value={formData.salary} onChange={handleChange} placeholder="Ví dụ: 200,000" />
                </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="gender">Yêu cầu giới tính</Label>
                        <Select name="gender" onValueChange={handleSelectChange('gender')} value={formData.gender}>
                            <SelectTrigger id="gender">
                                <SelectValue placeholder="Chọn giới tính" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="any">Bất kỳ</SelectItem>
                                <SelectItem value="male">Nam</SelectItem>
                                <SelectItem value="female">Nữ</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="ageRange">Yêu cầu độ tuổi</Label>
                        <Input id="ageRange" name="ageRange" value={formData.ageRange} onChange={handleChange} placeholder="Ví dụ: 20-35" />
                    </div>
                 </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-4 animate-in fade-in-50">
                <div className="space-y-2">
                  <Label htmlFor="description">Mô tả công việc</Label>
                  <Textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Mô tả chi tiết về công việc..." className="min-h-[120px]" />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="requirements">Yêu cầu kỹ năng (mỗi yêu cầu một dòng)</Label>
                  <Textarea id="requirements" name="requirements" value={formData.requirements} onChange={handleChange} placeholder="- Tiếng Nhật N3&#10;- Có kinh nghiệm 2 năm..." className="min-h-[120px]" />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="benefits">Quyền lợi (mỗi quyền lợi một dòng)</Label>
                  <Textarea id="benefits" name="benefits" value={formData.benefits} onChange={handleChange} placeholder="- Hỗ trợ nhà ở&#10;- Thưởng 2 lần/năm..." className="min-h-[120px]" />
                </div>
              </div>
            )}
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          {step > 1 ? (
            <Button variant="outline" onClick={handleBack}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Quay lại
            </Button>
          ) : ( <div></div> )}
          <Button onClick={handleNext}>
            {step === TOTAL_STEPS ? 'Đăng việc làm' : 'Tiếp theo'}
            {step < TOTAL_STEPS && <ChevronRight className="ml-2 h-4 w-4" />}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
