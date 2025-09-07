
import type { Job } from '@/locales/translations';

const jobTitles = [
  "Công nhân xây dựng", "Kỹ sư cơ khí", "Nhân viên chế biến thực phẩm", "Hộ lý chăm sóc người cao tuổi", "Lập trình viên Java",
  "Thực tập sinh nông nghiệp", "Nhân viên lắp ráp điện tử", "Thợ hàn 3G", "Giám sát công trình", "Kỹ sư IT"
];

const companies = [
  "Công ty TNHH Shimizu", "Tập đoàn Takenaka", "Công ty CP Obayashi", "Công ty Xây dựng Kajima", "Công ty CP Taisei",
  "Công ty thực phẩm ABC", "Công ty cơ khí XYZ", "Viện dưỡng lão Sakura", "Công ty IT Softbank", "Công ty Nông nghiệp GreenFarm"
];

const locations = [
  "Tokyo, Japan", "Osaka, Japan", "Aichi, Japan", "Kanagawa, Japan", "Saitama, Japan",
  "Hokkaido, Japan", "Fukuoka, Japan", "Hyogo, Japan", "Chiba, Japan", "Shizuoka, Japan"
];

const statuses = ["Searching", "Completed"];

function getRandomElement<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomDate(start: Date, end: Date): string {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
}

export const mockJobs: Job[] = Array.from({ length: 20 }, (_, i) => {
    const status = getRandomElement(statuses);
    return {
        id: `job-${i + 1}`,
        title: getRandomElement(jobTitles),
        company: getRandomElement(companies),
        location: getRandomElement(locations),
        status,
        partners: Math.floor(Math.random() * 5).toString(),
        applications: Math.floor(Math.random() * 50).toString(),
        date_posted: generateRandomDate(new Date(2023, 0, 1), new Date()),
        salary: `${Math.floor(Math.random() * 10) + 18} vạn Yên`,
        image: `https://picsum.photos/400/225?random=job${i}`,
        tags: ['Kỹ năng đặc định', getRandomElement(['Xây dựng', 'Thực phẩm', 'Cơ khí'])]
    }
});
