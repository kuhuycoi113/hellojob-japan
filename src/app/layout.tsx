
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from '@/contexts/language-context';
import { MobileFooter } from '@/components/mobile-footer';
import { LiveChatWidget } from '@/components/chatbot-widget';
import { ChatProvider } from '@/contexts/chat-context';
import { UnlockedCandidatesProvider } from '@/contexts/unlocked-candidates-context';
import { RoleProvider } from '@/contexts/role-context';
import { AuthProvider } from '@/contexts/auth-context';
import { AppProvider } from '@/components/app-provider';


// Metadata needs to be defined outside the component
export const metadata = {
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
        <AuthProvider>
          <LanguageProvider defaultLanguage="vi">
            <RoleProvider>
              <UnlockedCandidatesProvider>
                <ChatProvider>
                  <AppProvider>{children}</AppProvider>
                </ChatProvider>
              </UnlockedCandidatesProvider>
            </RoleProvider>
          </LanguageProvider>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
