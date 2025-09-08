'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { chatWithBot } from '@/ai/flows/ai-chatbot';
import { useLanguage } from '@/contexts/language-context';
import { cn } from '@/lib/utils';
import {
  Bot,
  Image as ImageIcon,
  LoaderCircle,
  MessageSquare,
  Paperclip,
  Phone,
  SendHorizonal,
  Video,
  X,
  MessageSquareText,
} from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { CallScreen } from './call-screen';
import { useChat } from '@/contexts/chat-context';
import { Logo } from './logo';

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
};

function ChatbotWidgetContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const { isOpen, setIsOpen } = useChat();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const userRole = searchParams.get('role') || 'Hiring Company';
  const [inCall, setInCall] = useState(false);
  const [callType, setCallType] = useState<'video' | 'voice'>('video');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessage: Message = { role: 'model', content: "Xin chào, tôi là Phạm Thị Dung. Tôi có thể giúp gì cho bạn?" };
      setMessages([initialMessage]);
    }
  }, [isOpen, messages.length]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const genkitHistory: GenkitMessage[] = messages.map((msg) => ({
        role: msg.role,
        content: [{ text: msg.content }],
      }));

      const response = await chatWithBot({
        question: currentInput,
        history: genkitHistory,
        userRole,
        advisorName: 'HelloJob AI',
      });

      const botMessage: Message = { role: 'model', content: response.answer };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage: Message = {
        role: 'model',
        content: t.chat.error,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const startCall = (type: 'video' | 'voice') => {
    setCallType(type);
    setInCall(true);
  }

  const endCall = () => {
    setInCall(false);
  }

  if (!isMounted) {
    return null;
  }


  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <Button
          size="lg"
          className={cn(
              "rounded-full h-16 w-16 shadow-lg transition-all duration-300",
              isOpen ? "bg-secondary text-secondary-foreground hover:bg-secondary/90 w-0 p-0 border-none" : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle chat"
        >
         {isOpen ? <X className="h-8 w-8" /> : <MessageSquareText className="h-8 w-8" />}
        </Button>
      </div>

      <div
        className={cn(
          'fixed bottom-24 right-6 z-50 transition-all duration-300 ease-in-out',
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        )}
      >
        <Card className="w-[380px] h-[500px] shadow-2xl rounded-2xl flex flex-col bg-white">
          {inCall ? (
            <CallScreen onEndCall={endCall} callType={callType} />
          ) : (
            <>
              <CardHeader className="flex flex-row items-center justify-between gap-4 bg-primary text-primary-foreground rounded-t-2xl">
                <div className="flex flex-col">
                   <Logo className="text-white" />
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
                      <p className="text-sm">
                        Đang hoạt động
                      </p>
                    </div>
                </div>
                <div className="flex items-center">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-white/80 hover:text-white rounded-full" onClick={() => startCall('voice')}>
                    <Phone className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-white/80 hover:text-white rounded-full" onClick={() => startCall('video')}>
                    <Video className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-white/80 hover:text-white rounded-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-6">
                 {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={cn(
                        'flex items-end gap-3',
                        msg.role === 'user' && 'justify-end'
                        )}
                    >
                        {msg.role === 'model' && (
                        <Avatar className="h-9 w-9 border shrink-0">
                            <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Tư vấn viên Phạm Thị Dung" />
                            <AvatarFallback>PD</AvatarFallback>
                        </Avatar>
                        )}
                        <div
                        className={cn(
                            'max-w-xs rounded-lg p-3',
                            msg.role === 'model'
                            ? 'bg-muted rounded-bl-none'
                            : 'bg-primary text-primary-foreground rounded-br-none'
                        )}
                        >
                        {msg.role === 'model' && index > 0 && <p className="text-xs font-semibold text-gray-600 mb-1">Tư vấn viên Phạm Thị Dung</p>}
                        <p className="text-sm">{msg.content}</p>
                        </div>
                        {msg.role === 'user' && (
                        <Avatar className="h-9 w-9 border shrink-0">
                            <AvatarFallback>You</AvatarFallback>
                        </Avatar>
                        )}
                    </div>
                    ))}
                {isLoading && (
                  <div className="flex items-start gap-3">
                    <Avatar className="h-9 w-9 border">
                       <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Tư vấn viên Phạm Thị Dung" />
                       <AvatarFallback>PD</AvatarFallback>
                    </Avatar>
                    <div className="max-w-xs rounded-lg p-3 bg-muted flex items-center justify-center">
                      <LoaderCircle className="w-5 h-5 animate-spin text-muted-foreground" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>
              <CardFooter className="p-2 border-t bg-white rounded-b-2xl">
                 <div className="flex w-full items-center space-x-1 bg-muted/50 rounded-full p-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                        <Paperclip className="h-5 w-5 text-muted-foreground" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                        <ImageIcon className="h-5 w-5 text-muted-foreground" />
                    </Button>
                    <Input
                        type="text"
                        placeholder="Nhập câu hỏi của bạn ở đây..."
                        className="flex-1 text-sm border-none focus-visible:ring-0 shadow-none bg-transparent"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        disabled={isLoading}
                    />
                    <Button
                        type="submit"
                        onClick={handleSend}
                        disabled={isLoading || !input.trim()}
                        size="icon"
                        className="h-8 w-8 shrink-0 rounded-full"
                    >
                        {isLoading ? (
                        <LoaderCircle className="h-5 w-5 animate-spin" />
                        ) : (
                        <SendHorizonal className="h-5 w-5" />
                        )}
                        <span className="sr-only">Send</span>
                    </Button>
                </div>
              </CardFooter>
            </>
          )}
        </Card>
      </div>
    </>
  );
}

export function ChatbotWidget() {
  return (
    <Suspense>
      <ChatbotWidgetContent />
    </Suspense>
  );
}
