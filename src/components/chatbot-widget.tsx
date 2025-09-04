'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SendHorizonal, Bot, X, LoaderCircle, MessageSquareText } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { chatWithBot } from '@/ai/flows/ai-chatbot';
import { cn } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';

type Message = {
  role: 'user' | 'model';
  content: string;
};

type GenkitMessage = {
  role: 'user' | 'model' | 'tool';
  content: {
    text?: string;
    toolRequest?: any;
    toolResponse?: any;
  }[];
}

export function ChatbotWidget() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const userRole = searchParams.get('role') || 'Hiring Company';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    // Add initial greeting when chat opens for the first time
    if (isOpen && messages.length === 0) {
      setMessages([
        { role: 'model', content: t.chat.defaultGreeting }
      ]);
    }
  }, [isOpen, messages.length, t.chat.defaultGreeting]);


  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const genkitHistory: GenkitMessage[] = messages.map(msg => ({
        role: msg.role,
        content: [{ text: msg.content }],
      }));

      const response = await chatWithBot({ 
        question: currentInput,
        history: genkitHistory,
        userRole,
        advisorName: "HelloJob AI",
      });

      const botMessage: Message = { role: 'model', content: response.answer };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
       const errorMessage: Message = { role: 'model', content: t.chat.error };
       setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full h-16 w-16 shadow-lg bg-primary hover:bg-primary/90"
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
           <MessageSquareText className="h-8 w-8" />
        </Button>
      </div>

      <div className={cn(
        "fixed bottom-24 right-6 z-50 transition-all duration-300 ease-in-out",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}>
        <Card className="w-[380px] h-[500px] shadow-2xl rounded-2xl flex flex-col">
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar>
              <AvatarFallback className="bg-primary/10 text-primary"><Bot size={24}/></AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="font-headline text-xl text-gray-800">{t.chat.title}</CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-sm text-muted-foreground">{t.chat.statusOnline}</p>
              </div>
            </div>
             <Button
                variant="ghost"
                size="icon"
                className="ml-auto h-8 w-8 rounded-full"
                onClick={() => setIsOpen(false)}
            >
                <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-4 border-y space-y-6">
            {messages.map((msg, index) => (
              <div key={index} className={cn("flex items-start gap-3", msg.role === 'user' && 'justify-end')}>
                {msg.role === 'model' && (
                   <Avatar className="h-9 w-9 border">
                     <AvatarFallback className="bg-primary/10 text-primary"><Bot size={20}/></AvatarFallback>
                   </Avatar>
                )}
                <div className={cn("max-w-xs rounded-lg p-3", msg.role === 'model' ? 'bg-muted' : 'bg-primary text-primary-foreground')}>
                  <p className="text-sm">{msg.content}</p>
                </div>
                 {msg.role === 'user' && (
                   <Avatar className="h-9 w-9 border">
                     <AvatarFallback>You</AvatarFallback>
                   </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
               <div className="flex items-start gap-3">
                 <Avatar className="h-9 w-9 border">
                   <AvatarFallback className="bg-primary/10 text-primary"><Bot size={20}/></AvatarFallback>
                 </Avatar>
                 <div className="max-w-xs rounded-lg p-3 bg-muted flex items-center justify-center">
                    <LoaderCircle className="w-5 h-5 animate-spin text-muted-foreground"/>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>
          <CardFooter className="p-4">
            <div className="flex w-full items-center space-x-2">
              <Input
                type="text"
                placeholder={t.chat.placeholder}
                className="flex-1 text-base"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                disabled={isLoading}
              />
              <Button type="submit" onClick={handleSend} disabled={isLoading}>
                <SendHorizonal className="h-5 w-5" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
