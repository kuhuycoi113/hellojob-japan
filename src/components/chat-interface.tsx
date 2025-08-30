'use client';

import { useSearchParams } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/language-context';
import { SendHorizonal, Bot } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ChatInterface() {
  const searchParams = useSearchParams();
  const { t } = useLanguage();
  const role = searchParams.get('role');
  
  const [initialMessage, setInitialMessage] = useState('');

  useEffect(() => {
    if (role) {
      setInitialMessage(t.chat.greeting.replace('{role}', role));
    } else {
      setInitialMessage(t.chat.defaultGreeting);
    }
  }, [role, t]);


  return (
    <Card className="w-full max-w-2xl shadow-2xl rounded-2xl">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/150?u=chatbot" />
          <AvatarFallback>CB</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="font-headline text-xl text-gray-800">{t.chat.title}</CardTitle>
          <div className="flex items-center gap-2 mt-1">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-sm text-muted-foreground">{t.chat.statusOnline}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[450px] overflow-y-auto p-4 border-y space-y-6">
        {/* Chat Messages */}
        <div className="flex items-start gap-3">
          <Avatar className="h-9 w-9 border">
            <AvatarImage src="https://i.pravatar.cc/150?u=chatbot" />
            <AvatarFallback><Bot size={20}/></AvatarFallback>
          </Avatar>
          <div className="max-w-xs md:max-w-md rounded-lg bg-primary/10 p-3">
            <p className="text-sm text-gray-800">
             {initialMessage}
            </p>
          </div>
        </div>
        
      </CardContent>
      <CardFooter className="p-4">
        <div className="flex w-full items-center space-x-2">
          <Input 
            type="text" 
            placeholder={t.chat.placeholder} 
            className="flex-1 text-base"
            />
          <Button type="submit">
            <SendHorizonal className="h-5 w-5" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
