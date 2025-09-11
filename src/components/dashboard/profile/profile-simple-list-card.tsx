// This is a new file.
import { CheckCircle } from 'lucide-react';

export function ProfileSimpleListCard({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
          <span className="text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}
