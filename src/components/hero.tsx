import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-20 sm:py-32 bg-primary/90 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-headline tracking-tight">
          Tìm việc làm tại Nhật Bản
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-white/90">
          Chúng tôi không chỉ cung cấp việc làm, mà còn đào tạo tư duy và xây dựng lộ trình phát triển sự nghiệp (SWR) rõ ràng, giúp bạn từ lao động phổ thông trở thành chuyên gia lành nghề.
        </p>
        <div className="mt-10 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <form className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_auto] gap-4 items-center">
            <div className="text-left text-gray-500">
              <label className="text-sm font-medium">Loại hình, kỹ năng</label>
              <Select>
                <SelectTrigger className="w-full border-0 border-b rounded-none text-gray-900">
                  <SelectValue placeholder="Chọn loại hình" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Toàn thời gian</SelectItem>
                  <SelectItem value="part-time">Bán thời gian</SelectItem>
                  <SelectItem value="contract">Hợp đồng</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-left text-gray-500">
              <label className="text-sm font-medium">Ngành nghề</label>
              <Select>
                <SelectTrigger className="w-full border-0 border-b rounded-none text-gray-900">
                  <SelectValue placeholder="Tất cả ngành nghề" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="it">Công nghệ thông tin</SelectItem>
                  <SelectItem value="manufacturing">Sản xuất</SelectItem>
                  <SelectItem value="construction">Xây dựng</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-left text-gray-500">
              <label className="text-sm font-medium">Địa điểm, khu vực</label>
              <Select>
                <SelectTrigger className="w-full border-0 border-b rounded-none text-gray-900">
                  <SelectValue placeholder="Toàn quốc Nhật Bản" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tokyo">Tokyo</SelectItem>
                  <SelectItem value="osaka">Osaka</SelectItem>
                  <SelectItem value="nagoya">Nagoya</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" size="lg" className="h-12 w-full sm:w-auto text-base">
              <Search className="mr-2 h-5 w-5" />
              Tìm kiếm
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
