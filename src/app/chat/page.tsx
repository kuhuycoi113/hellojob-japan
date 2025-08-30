import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ChatInterface } from '@/components/chat-interface';
import { Suspense } from 'react';

export default function ChatPage() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50/50">
      <Header />
      <main className="flex flex-1 items-center justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <ChatInterface />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
