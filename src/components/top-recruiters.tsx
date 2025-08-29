import Image from 'next/image';

const logos = [
  { src: 'https://picsum.photos/150/50?random=1', alt: 'Company 1' },
  { src: 'https://picsum.photos/150/50?random=2', alt: 'Company 2' },
  { src: 'https://picsum.photos/150/50?random=3', alt: 'Company 3' },
  { src: 'https://picsum.photos/150/50?random=4', alt: 'Company 4' },
  { src: 'https://picsum.photos/150/50?random=5', alt: 'Company 5' },
];

export function TopRecruiters() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-gray-800">
            Các đối tác tuyển dụng hàng đầu
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Những công ty và nghiệp đoàn lớn uy tín tại Nhật Bản đang tìm kiếm những ứng viên như bạn.
          </p>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-8">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={50}
              className="object-contain"
              data-ai-hint="company logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
