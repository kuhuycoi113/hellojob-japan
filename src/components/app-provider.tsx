
'use client';

import { useAuth } from '@/contexts/auth-context';
import { PasswordGate } from '@/components/password-gate';
import { useEffect, useState } from 'react';
import { MobileFooter } from './mobile-footer';
import { LiveChatWidget } from './chatbot-widget';

export function AppProvider({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server to avoid hydration mismatch
  }
  
  if (!isAuthenticated) {
    return <PasswordGate />;
  }

  return (
    <>
      <div className="pt-16 md:pt-0 pb-20 md:pb-0">
        {children}
      </div>
      <MobileFooter />
      <LiveChatWidget />
    </>
  );
}
