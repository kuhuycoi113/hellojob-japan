// This is a new file.
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import { Plus } from 'lucide-react';

interface ProfileSectionProps {
  title: string;
  children: React.ReactNode;
  actionType?: 'edit' | 'add';
}

export function ProfileSection({ title, children, actionType = 'edit' }: ProfileSectionProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-headline text-xl">{title}</CardTitle>
        <Button variant="ghost" size="icon">
          {actionType === 'edit' ? (
            <Pencil className="h-5 w-5 text-muted-foreground" />
          ) : (
            <Plus className="h-5 w-5 text-muted-foreground" />
          )}
        </Button>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
