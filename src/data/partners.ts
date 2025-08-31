/**
 * @fileoverview Mock data for partners (Unions and Support Organizations).
 */

import type { PartnerProfile } from '@/ai/schemas/find-matching-partners-schema';

export const allPartners: PartnerProfile[] = [
  {
    id: 'union-001',
    name: 'Nghiệp đoàn Global Support',
    name_ja: 'グローバルサポート協同組合',
    type: 'Nghiệp đoàn (Kumiai)',
    type_ja: '協同組合',
    specialties: ['Xây dựng', 'Cơ khí', 'Chế biến thực phẩm'],
    specialties_ja: ['建設', '機械加工', '食品加工'],
    locations: ['Tokyo', 'Kanagawa', 'Saitama'],
  },
  {
    id: 'support-org-002',
    name: 'Tổ chức hỗ trợ Sakura',
    name_ja: '登録支援機関さくら',
    type: 'Cơ quan hỗ trợ (Shien Kikan)',
    type_ja: '登録支援機関',
    specialties: ['Nông nghiệp', 'Hộ lý', 'Nhà hàng'],
    specialties_ja: ['農業', '介護', '外食'],
    locations: ['Osaka', 'Hyogo', 'Kyoto', 'Toàn quốc'],
  },
  {
    id: 'union-003',
    name: 'Nghiệp đoàn Future Bridge',
    name_ja: 'みらいブリッジ事業協同組合',
    type: 'Nghiệp đoàn (Kumiai)',
    type_ja: '協同組合',
    specialties: ['Chế biến thực phẩm', 'Dệt may', 'Lắp ráp điện tử'],
    specialties_ja: ['食品加工', '繊維', '電子組立'],
    locations: ['Aichi', 'Gifu', 'Shizuoka'],
  },
  {
    id: 'support-org-004',
    name: 'Tổ chức hỗ trợ Kaizen',
    name_ja: '登録支援機関カイゼン',
    type: 'Cơ quan hỗ trợ (Shien Kikan)',
    type_ja: '登録支援機関',
    specialties: ['Cơ khí', 'Bảo dưỡng ô tô', 'Xây dựng'],
    specialties_ja: ['機械加工', '自動車整備', '建設'],
    locations: ['Fukuoka', 'Hiroshima', 'Toàn quốc'],
  },
  {
    id: 'union-005',
    name: 'Nghiệp đoàn Asahi',
    name_ja: '朝日事業協同組合',
    type: 'Nghiệp đoàn (Kumiai)',
    type_ja: '協同組合',
    specialties: ['Hộ lý', 'Y tế', 'Chế biến thực phẩm'],
    specialties_ja: ['介護', '医療', '食品加工'],
    locations: ['Hokkaido'],
  },
    {
    id: 'support-org-006',
    name: 'Tổ chức hỗ trợ Fuji',
    name_ja: '登録支援機関ふじ',
    type: 'Cơ quan hỗ trợ (Shien Kikan)',
    type_ja: '登録支援機関',
    specialties: ['Khách sạn', 'Nhà hàng', 'Dịch vụ'],
    specialties_ja: ['宿泊', '外食', 'サービス'],
    locations: ['Tokyo', 'Kyoto', 'Osaka', 'Fukuoka'],
    },
];
