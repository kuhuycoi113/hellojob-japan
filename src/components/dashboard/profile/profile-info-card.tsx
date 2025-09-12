// This is a new file.
import { Building, Globe, Phone, Users } from 'lucide-react';

interface InfoItem {
    icon: 'founded' | 'size' | 'phone' | 'website' | 'address';
    label: string;
    value: string;
}

const iconMap = {
    founded: <Building className="w-5 h-5 text-primary flex-shrink-0" />,
    size: <Users className="w-5 h-5 text-primary flex-shrink-0" />,
    phone: <Phone className="w-5 h-5 text-primary flex-shrink-0" />,
    website: <Globe className="w-5 h-5 text-primary flex-shrink-0" />,
    address: <Building className="w-5 h-5 text-primary flex-shrink-0" />,
};


export function ProfileInfoCard({ items }: { items: InfoItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.label} className="flex items-start gap-4">
          {iconMap[item.icon]}
          <div className="flex flex-col">
            <span className="font-semibold text-sm">{item.label}:</span>
            <span className="text-sm text-muted-foreground">{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
