// Placeholder page for finding candidates for a specific job
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function FindCandidatesPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto py-12">
        <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
                <CardTitle>Find Candidates</CardTitle>
                <CardDescription>
                    This is where you would find candidates for job ID: {params.id}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>This functionality is under construction.</p>
                <Button asChild className="mt-4">
                    <Link href="/dashboard/jobs">Go Back to Jobs List</Link>
                </Button>
            </CardContent>
        </Card>
    </div>
  );
}
