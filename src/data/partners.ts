/**
 * @fileoverview Mock data for partners (Unions and Support Organizations).
 */

import type { PartnerProfile } from '@/ai/schemas/find-matching-partners-schema';

export const allPartners: PartnerProfile[] = [
  {
    id: 'union-001',
    name: 'Nghiệp đoàn Global Support',
    type: 'Nghiệp đoàn (Kumiai)',
    specialties: ['Xây dựng', 'Cơ khí', 'Chế biến thực phẩm'],
    locations: ['Tokyo', 'Kanagawa', 'Saitama'],
  },
  {
    id: 'support-org-002',
    name: 'Tổ chức hỗ trợ Sakura',
    type: 'Cơ quan hỗ trợ (Shien Kikan)',
    specialties: ['Nông nghiệp', 'Hộ lý', 'Nhà hàng'],
    locations: ['Osaka', 'Hyogo', 'Kyoto', 'Toàn quốc'],
  },
  {
    id: 'union-003',
    name: 'Nghiệp đoàn Future Bridge',
    type: 'Nghiệp đoàn (Kumiai)',
    specialties: ['Chế biến thực phẩm', 'Dệt may', 'Lắp ráp điện tử'],
    locations: ['Aichi', 'Gifu', 'Shizuoka'],
  },
  {
    id: 'support-org-004',
    name: 'Tổ chức hỗ trợ Kaizen',
    type: 'Cơ quan hỗ trợ (Shien Kikan)',
    specialties: ['Cơ khí', 'Bảo dưỡng ô tô', 'Xây dựng'],
    locations: ['Fukuoka', 'Hiroshima', 'Toàn quốc'],
  },
  {
    id: 'union-005',
    name: 'Nghiệp đoàn Asahi',
    type: 'Nghiệp đoàn (Kumiai)',
    specialties: ['Hộ lý', 'Y tế', 'Chế biến thực phẩm'],
    locations: ['Hokkaido'],
  },
    {
    id: 'support-org-006',
    name: 'Tổ chức hỗ trợ Fuji',
    type: 'Cơ quan hỗ trợ (Shien Kikan)',
    specialties: ['Khách sạn', 'Nhà hàng', 'Dịch vụ'],
    locations: ['Tokyo', 'Kyoto', 'Osaka', 'Fukuoka'],
    },
];
