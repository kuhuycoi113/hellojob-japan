import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from '@/contexts/language-context';
import { MobileFooter } from '@/components/mobile-footer';

export const metadata: Metadata = {
  title: 'HelloJob Recommender',
  description: 'AI-powered job matching to help you find your dream job.',
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
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider defaultLanguage="vi">
          <div className="pt-16 md:pt-0 pb-20 md:pb-0">
            {children}
          </div>
          <MobileFooter />
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
