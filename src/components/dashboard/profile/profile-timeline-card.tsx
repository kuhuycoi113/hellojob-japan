// This is a new file.
interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export function ProfileTimelineCard({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-6 top-1 h-3 w-3 rounded-full bg-primary -translate-x-1/2"></div>
            <p className="font-bold text-lg text-primary">{item.year}</p>
            <h4 className="font-semibold text-gray-800 mt-1">{item.title}</h4>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
