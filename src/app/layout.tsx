import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from '@/contexts/language-context';
import { MobileFooter } from '@/components/mobile-footer';
import { ChatbotWidget } from '@/components/chatbot-widget';
import { ChatProvider } from '@/contexts/chat-context';
import { UnlockedCandidatesProvider } from '@/contexts/unlocked-candidates-context';
import { RoleProvider } from '@/contexts/role-context';

export const metadata: Metadata = {
  title: 'HelloJob Recommender',
  description: 'AI-powered job matching to help you find your dream job.',
  icons: {
    icon: '/metadata/favicon.ico',
    shortcut: '/metadata/favicon.ico',
    apple: '/metadata/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider defaultLanguage="vi">
          <RoleProvider>
            <UnlockedCandidatesProvider>
              <ChatProvider>
                <div className="pt-16 md:pt-0 pb-20 md:pb-0">
                  {children}
                </div>
                <MobileFooter />
                <ChatbotWidget />
              </ChatProvider>
            </UnlockedCandidatesProvider>
          </RoleProvider>
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
