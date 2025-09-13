
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
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
import { GraduationCap, Star, Briefcase, Plane, Users, Building, Handshake, BrainCircuit, Edit, FastForward } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useRouter } from 'next/navigation';
import { useRole } from '@/contexts/role-context';


export function Cta() {
  const { t } = useLanguage();
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


  const openDialog7 = (caller: string) => {
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
      icon: <Building className="h-8 w-8 text-indigo-500" />,
      title: t.userRoles.receivingCompany.title,
      description: t.userRoles.receivingCompany.description,
    },
    {
      icon: <Building className="h-8 w-8 text-blue-500" />,
      title: t.userRoles.sendingCompany.title,
      description: t.userRoles.sendingCompany.description,
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
      title: t.userRoles.yuryoShokai.title,
      description: t.userRoles.yuryoShokai.description,
    },
    {
      icon: <Building className="h-8 w-8 text-purple-500" />,
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
            <DialogContent>
              <DialogHeader className="text-center">
                <DialogTitle className="text-2xl font-bold font-headline">Chọn phương thức tạo hồ sơ</DialogTitle>
                <DialogDescription>Bạn muốn tạo hồ sơ để làm gì?</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                  <Card className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer" onClick={() => { setDialog1Open(false); setDialog3Open(true); }}>
                      <div className="flex justify-center mb-4">
                          <div className="p-3 rounded-full bg-primary/10 text-primary"><FastForward className="w-8 h-8"/></div>
                      </div>
                      <h3 className="font-semibold text-lg text-gray-800">Tạo nhanh</h3>
                      <p className="text-sm text-muted-foreground mt-1">Chỉ vào thao tác đơn giản bạn sẽ đăng tải được việc làm nhanh chóng</p>
                  </Card>
                   <Card className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer" onClick={() => { setDialog1Open(false); setDialog2Open(true); }}>
                       <div className="flex justify-center mb-4">
                          <div className="p-3 rounded-full bg-green-500/10 text-green-500"><Edit className="w-8 h-8"/></div>
                      </div>
                      <h3 className="font-semibold text-lg text-gray-800">Tạo chi tiết</h3>
                      <p className="text-sm text-muted-foreground mt-1">Để hoàn thiện hồ sơ và sẵn sàng ứng tuyển vào công việc mơ ước.</p>
                  </Card>
              </div>
            </DialogContent>
          </Dialog>

           <Dialog open={dialog2Open} onOpenChange={setDialog2Open}>
              <DialogContent>
                <DialogHeader className="text-center">
                  <DialogTitle className="text-2xl font-bold font-headline">Bạn muốn tạo hồ sơ chi tiết bằng cách nào?</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                    <Card className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer">
                        <div className="flex justify-center mb-4">
                            <div className="p-3 rounded-full bg-primary/10 text-primary"><BrainCircuit className="w-8 h-8"/></div>
                        </div>
                        <h3 className="font-semibold text-lg text-gray-800">Dùng AI</h3>
                        <p className="text-sm text-muted-foreground mt-1">Tải lên CV, AI sẽ tự động điền thông tin.</p>
                    </Card>
                     <Card className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer">
                         <div className="flex justify-center mb-4">
                            <div className="p-3 rounded-full bg-green-500/10 text-green-500"><Edit className="w-8 h-8"/></div>
                        </div>
                        <h3 className="font-semibold text-lg text-gray-800">Thủ công</h3>
                        <p className="text-sm text-muted-foreground mt-1">Tự điền thông tin vào biểu mẫu chi tiết.</p>
                    </Card>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => { setDialog2Open(false); setDialog1Open(true); }}>Quay lại</Button>
                </DialogFooter>
              </DialogContent>
          </Dialog>

          <Dialog open={dialog3Open} onOpenChange={setDialog3Open}>
              <DialogContent className="sm:max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold font-headline text-center">Bạn là ai?</DialogTitle>
                  <DialogDescription className="text-center">
                    Hãy cho chúng tôi biết vai trò của bạn để có trải nghiệm tốt nhất.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
                  {userRoles.map((role) => (
                    <Card key={role.title} className="p-6 text-left hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer h-full flex items-center gap-4" onClick={() => handleRoleSelectAndContinue(role)}>
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
                    </Card>
                  ))}
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => { setDialog3Open(false); setDialog1Open(true); }}>Quay lại</Button>
                </DialogFooter>
              </DialogContent>
          </Dialog>

          <Dialog open={dialog4Open} onOpenChange={setDialog4Open}>
            <DialogContent className="sm:max-w-4xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center">Chọn loại hình lao động</DialogTitle>
                <DialogDescription className="text-center">
                  Hãy chọn loại hình phù hợp nhất với trình độ và mong muốn của bạn.
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                  <Card
                    className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer"
                    onClick={() => { setDialog4Open(false); setDialog51Open(true); }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <GraduationCap className="w-8 h-8" />
                      </div>
                    </div>
                    <CardTitle className="font-semibold text-lg">{t.visaTypes.intern.title}</CardTitle>
                    <CardDescription>{t.visaTypes.intern.description}</CardDescription>
                  </Card>

                  <Card
                    className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer"
                    onClick={() => { setDialog4Open(false); setDialog52Open(true); }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="bg-yellow-400/10 text-yellow-500 p-3 rounded-full">
                        <Star className="w-8 h-8" />
                      </div>
                    </div>
                    <CardTitle className="font-semibold text-lg">{t.visaTypes.skilled.title}</CardTitle>
                    <CardDescription>{t.visaTypes.skilled.description}</CardDescription>
                  </Card>

                  <Card
                    className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer"
                    onClick={() => { setDialog4Open(false); setDialog53Open(true); }}
                  >
                     <div className="flex justify-center mb-4">
                      <div className="bg-green-400/10 text-green-500 p-3 rounded-full">
                        <Briefcase className="w-8 h-8" />
                      </div>
                    </div>
                    <CardTitle className="font-semibold text-lg">{t.visaTypes.engineer.title}</CardTitle>
                    <CardDescription>{t.visaTypes.engineer.description}</CardDescription>
                  </Card>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => { setDialog4Open(false); setDialog3Open(true); }}>Quay lại</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

           <Dialog open={dialog51Open} onOpenChange={setDialog51Open}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold font-headline text-center">Chọn loại Thực tập sinh kỹ năng</DialogTitle>
                  <DialogDescription className="text-center">
                    Chọn loại hình chi tiết để tiếp tục.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                    <Card
                      className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer"
                      onClick={() => { setDialog51Open(false); setDialog61Open(true); }}
                    >
                      <CardTitle className="font-semibold text-base">Thực tập sinh 3 năm</CardTitle>
                      <CardDescription>Chương trình phổ thông nhất</CardDescription>
                    </Card>
                    <Card
                      className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer"
                      onClick={() => { setDialog51Open(false); setDialog61Open(true); }}
                    >
                      <CardTitle className="font-semibold text-base">Thực tập sinh 1 năm</CardTitle>
                      <CardDescription>Chương trình ngắn hạn</CardDescription>
                    </Card>
                    <Card
                      className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer"
                      onClick={() => { setDialog51Open(false); setDialog61Open(true); }}
                    >
                      <CardTitle className="font-semibold text-base">Thực tập sinh 3 Go</CardTitle>
                      <CardDescription>Dành cho người có kinh nghiệm</CardDescription>
                    </Card>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => { setDialog51Open(false); setDialog4Open(true); }}>Quay lại</Button>
                </DialogFooter>
              </DialogContent>
          </Dialog>
          
          <Dialog open={dialog61Open} onOpenChange={setDialog61Open}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold font-headline text-center">Chọn ngành nghề mong muốn</DialogTitle>
                  <DialogDescription className="text-center">
                    Lựa chọn ngành nghề bạn quan tâm nhất để chúng tôi gợi ý việc làm chính xác hơn.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 py-4">
                  <Button onClick={() => openDialog7('61')}>Ngư nghiệp</Button>
                  <Button onClick={() => openDialog7('61')}>Nông nghiệp</Button>
                  <Button onClick={() => openDialog7('61')}>Thực phẩm</Button>
                  <Button onClick={() => openDialog7('61')}>Sản xuất, dịch vụ tổng hợp</Button>
                  <Button onClick={() => openDialog7('61')}>Cơ khí, kim loại</Button>
                  <Button onClick={() => openDialog7('61')}>Xây dựng</Button>
                  <Button onClick={() => openDialog7('61')}>May mặc</Button>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => { setDialog61Open(false); setDialog51Open(true); }}>Quay lại</Button>
                </DialogFooter>
              </DialogContent>
          </Dialog>

          <Dialog open={dialog52Open} onOpenChange={setDialog52Open}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center">Chọn loại Kỹ năng đặc định</DialogTitle>
                <DialogDescription className="text-center">
                  Chọn loại hình chi tiết để tiếp tục.
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                <Card
                  className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => { setDialog52Open(false); setDialog62Open(true); }}
                >
                  <CardTitle className="font-semibold text-base">Đặc định đầu Nhật</CardTitle>
                  <CardDescription>Dành cho người đang ở Nhật</CardDescription>
                </Card>
                <Card
                  className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => { setDialog52Open(false); setDialog62Open(true); }}
                >
                  <CardTitle className="font-semibold text-base">Đặc định đầu Việt</CardTitle>
                  <CardDescription>Dành cho người ở Việt Nam</CardDescription>
                </Card>
                <Card
                  className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => { setDialog52Open(false); setDialog62Open(true); }}
                >
                  <CardTitle className="font-semibold text-base">Đặc định đi mới</CardTitle>
                  <CardDescription>Lần đầu đăng ký</CardDescription>
                </Card>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => { setDialog52Open(false); setDialog4Open(true); }}>Quay lại</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

           <Dialog open={dialog62Open} onOpenChange={setDialog62Open}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold font-headline text-center">Chọn ngành nghề mong muốn</DialogTitle>
                  <DialogDescription className="text-center">
                    Lựa chọn ngành nghề bạn quan tâm nhất để chúng tôi gợi ý việc làm chính xác hơn.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 py-4">
                  {[
                    'Ngư nghiệp', 'Nông nghiệp', 'Nhà hàng', 'Thực phẩm',
                    'Sản xuất, dịch vụ tổng hợp', 'Điện, điện tử', 'Chế tạo Vật liệu',
                    'Cơ khí, chế tạo máy', 'Ô tô', 'Hàng không', 'Vận tải',
                    'Xây dựng', 'Vệ sinh toà nhà', 'Lưu trú, khách sạn', 'Điều dưỡng'
                  ].map(industry => (
                    <Card key={industry} className="p-4 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer" onClick={() => openDialog7('62')}>
                      <h3 className="font-semibold text-base text-gray-800">{industry}</h3>
                    </Card>
                  ))}
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => { setDialog62Open(false); setDialog52Open(true); }}>Quay lại</Button>
                </DialogFooter>
              </DialogContent>
          </Dialog>

          <Dialog open={dialog53Open} onOpenChange={setDialog53Open}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center">Chọn loại Kỹ sư, tri thức</DialogTitle>
                <DialogDescription className="text-center">
                  Chọn loại hình chi tiết để tiếp tục.
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                <Card
                  className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => {
                    setDialog53Open(false);
                    setDialog63Open(true);
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                      <Users className="w-8 h-8" />
                    </div>
                  </div>
                  <CardTitle className="font-semibold text-base">Kỹ sư đầu Nhật</CardTitle>
                  <CardDescription>Dành cho kỹ sư đang ở Nhật</CardDescription>
                </Card>
                <Card
                  className="p-6 text-center hover:bg-accent/10 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => {
                    setDialog53Open(false);
                    setDialog63Open(true);
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                      <Plane className="w-8 h-8" />
                    </div>
                  </div>
                  <CardTitle className="font-semibold text-base">Kỹ sư đầu Việt</CardTitle>
                  <CardDescription>Dành cho kỹ sư ở Việt Nam</CardDescription>
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
                  Quay lại
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={dialog63Open} onOpenChange={setDialog63Open}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Chọn ngành nghề mong muốn</DialogTitle>
                  <DialogDescription>
                    Lựa chọn ngành nghề bạn quan tâm nhất để chúng tôi gợi ý việc làm chính xác hơn.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 py-4">
                  <Button onClick={() => openDialog7('63')}>Nông lâm ngư nghiệp</Button>
                  <Button onClick={() => openDialog7('63')}>Thực phẩm</Button>
                  <Button onClick={() => openDialog7('63')}>Sản xuất, chế tạo, công nghệ</Button>
                  <Button onClick={() => openDialog7('63')}>Cơ khí, máy móc</Button>
                  <Button onClick={() => openDialog7('63')}>Công nghệ ô tô</Button>
                  <Button onClick={() => openDialog7('63')}>Vận chuyển hàng hóa</Button>
                  <Button onClick={() => openDialog7('63')}>Xây dựng</Button>
                  <Button onClick={() => openDialog7('63')}>Khách sạn, lưu trú</Button>
                  <Button onClick={() => openDialog7('63')}>Y tế, điều dưỡng</Button>
                  <Button onClick={() => openDialog7('63')}>Kinh doanh, kinh tế</Button>
                  <Button onClick={() => openDialog7('63')}>Tài chính, kể toán, bảo hiểm</Button>
                  <Button onClick={() => openDialog7('63')}>Báo chí, truyền thông, marketing</Button>
                  <Button onClick={() => openDialog7('63')}>Công nghệ thông tin</Button>
                  <Button onClick={() => openDialog7('63')}>Nghiên cứu, phân tích</Button>
                  <Button onClick={() => openDialog7('63')}>Giáo dục, đào tạo</Button>
                  <Button onClick={() => openDialog7('63')}>Hành chính, văn phòng</Button>
                  <Button onClick={() => openDialog7('63')}>Pháp lý</Button>
                  <Button onClick={() => openDialog7('63')}>Nghệ thuật, nghệ sĩ</Button>
                  <Button onClick={() => openDialog7('63')}>Thể dục thể thao</Button>
                  <Button onClick={() => openDialog7('63')}>Nghề có kỹ năng chuyên nghiệp</Button>
                  <Button onClick={() => openDialog7('63')}>Việc làm bán chuyên nghiệp</Button>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => { setDialog63Open(false); setDialog53Open(true); }}>Quay lại</Button>
                </DialogFooter>
              </DialogContent>
          </Dialog>
          
          <Dialog open={dialog7Open} onOpenChange={setDialog7Open}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-headline text-center">Chọn khu vực làm việc</DialogTitle>
                <DialogDescription className="text-center">Lựa chọn khu vực bạn muốn làm việc tại Nhật Bản.</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-3 gap-4 py-4">
                  <Button onClick={() => { setDialog7Open(false); setDialog8Open(true); }}>Hokkaido</Button>
                  <Button onClick={() => { setDialog7Open(false); setDialog8Open(true); }}>Tohoku</Button>
                  <Button onClick={() => { setDialog7Open(false); setDialog8Open(true); }}>Kanto</Button>
                  <Button onClick={() => { setDialog7Open(false); setDialog8Open(true); }}>Chubu</Button>
                  <Button onClick={() => { setDialog7Open(false); setDialog8Open(true); }}>Kansai</Button>
                  <Button onClick={() => { setDialog7Open(false); setDialog8Open(true); }}>Chugoku</Button>
                  <Button onClick={() => { setDialog7Open(false); setDialog8Open(true); }}>Shikoku</Button>
                  <Button onClick={() => { setDialog7Open(false); setDialog8Open(true); }}>Kyushu</Button>
                  <Button onClick={() => { setDialog7Open(false); setDialog8Open(true); }}>Okinawa</Button>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={backFromDialog7}>Quay lại</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={dialog8Open} onOpenChange={setDialog8Open}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold font-headline text-center">Nhập phí giới thiệu bạn mong muốn</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                    <Label htmlFor="fee">Phí giới thiệu</Label>
                    <div className="relative mt-1">
                        <Input
                            id="fee"
                            value={feeAmount}
                            onChange={handleFeeChange}
                            placeholder="Ví dụ: 100,000"
                            className="pr-12 text-right"
                        />
                        <span className="absolute inset-y-0 right-4 flex items-center text-muted-foreground">
                            JPY
                        </span>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => { setDialog8Open(false); setDialog7Open(true); }}>Quay lại</Button>
                    <Button onClick={() => { setDialog8Open(false); setDialog9Open(true); }}>Tiếp tục</Button>
                </DialogFooter>
            </DialogContent>
          </Dialog>
          
          <Dialog open={dialog9Open} onOpenChange={setDialog9Open}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold font-headline text-center">Nhập phí quản lý bạn mong muốn</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                    <Label htmlFor="management-fee">Phí quản lý</Label>
                    <div className="relative mt-1">
                        <Input
                            id="management-fee"
                            value={managementFeeAmount}
                            onChange={handleManagementFeeChange}
                            placeholder="Ví dụ: 20,000"
                            className="pr-12 text-right"
                        />
                        <span className="absolute inset-y-0 right-4 flex items-center text-muted-foreground">
                            JPY
                        </span>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => { setDialog9Open(false); setDialog8Open(true); }}>Quay lại</Button>
                    <Button onClick={handleFinishFlow}>Lưu và xem việc làm phù hợp</Button>
                </DialogFooter>
            </DialogContent>
          </Dialog>

        </div>
      </div>
    </section>
  );
}
