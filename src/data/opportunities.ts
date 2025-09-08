// This is a new file.
export type Opportunity = {
    id: string;
    title: string;
    company: string;
    visa: string;
    expires: string;
    requirements: string[];
}

// Set expiry time to 15 minutes from now for all opportunities
const expiryDate = new Date();
expiryDate.setMinutes(expiryDate.getMinutes() + 15);

export const opportunities: Opportunity[] = [
    {
        id: 'OPP001',
        title: 'Tuyển 05 Kỹ sư cơ khí',
        company: 'Một công ty sản xuất linh kiện ô tô tại Aichi',
        visa: 'Kỹ sư',
        expires: expiryDate.toISOString(),
        requirements: ['Tiếng Nhật N3 trở lên', 'Có kinh nghiệm 3 năm', 'Sử dụng thành thạo AutoCAD'],
    },
    {
        id: 'OPP002',
        title: 'Tuyển 10 TTS Chế biến thực phẩm',
        company: 'Một nhà máy thực phẩm lớn tại Hokkaido',
        visa: 'Thực tập sinh',
        expires: expiryDate.toISOString(),
        requirements: ['Không yêu cầu kinh nghiệm', 'Chăm chỉ, sức khỏe tốt', 'Nữ, tuổi từ 18-28'],
    },
    {
        id: 'OPP003',
        title: 'Tuyển 03 Nhân viên hộ lý',
        company: 'Một viện dưỡng lão tại Osaka',
        visa: 'Kỹ năng đặc định',
        expires: expiryDate.toISOString(),
        requirements: ['Có chứng chỉ N4 hoặc tương đương', 'Đã hoàn thành khóa đào tạo hộ lý', 'Kiên nhẫn, yêu thương người già'],
    },
    {
        id: 'OPP004',
        title: 'Tuyển 08 Công nhân xây dựng',
        company: 'Một công ty xây dựng tại Tokyo',
        visa: 'Kỹ năng đặc định',
        expires: expiryDate.toISOString(),
        requirements: ['Có kinh nghiệm làm giàn giáo', 'Sức khỏe tốt, không sợ độ cao', 'Có thể làm việc ngoài trời'],
    },
    {
        id: 'OPP005',
        title: 'Tuyển 02 Kỹ sư IT (PHP)',
        company: 'Một công ty phần mềm tại Fukuoka',
        visa: 'Kỹ sư',
        expires: expiryDate.toISOString(),
        requirements: ['Thành thạo PHP & Laravel', 'Kinh nghiệm làm việc với MySQL', 'Giao tiếp tiếng Anh hoặc tiếng Nhật'],
    },
];
