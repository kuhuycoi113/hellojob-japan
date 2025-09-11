
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
import { useLanguage } from '@/contexts/language-context';
import { cn } from '@/lib/utils';
import {
  Bot,
  Image as ImageIcon,
  LoaderCircle,
  MessageSquare,
  Paperclip,
  Phone,
  Video as VideoIcon,
  X,
  MessageSquareText,
  User,
  SendHorizonal,
} from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { CallScreen } from './call-screen';
import { useChat } from '@/contexts/chat-context';
import { Logo } from './logo';
import Image from 'next/image';

type Message = {
  role: 'user' | 'model';
  content: string;
  image?: string;
  video?: string;
};

function LiveChatWidgetContent() {
  const { t } = useLanguage();
  const { isOpen, setIsOpen } = useChat();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [inCall, setInCall] = useState(false);
  const [callType, setCallType] = useState<'video' | 'voice'>('video');
  const [isMounted, setIsMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);


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
    setInput('');
    setIsLoading(true);

    // Simulate advisor's response
    setTimeout(() => {
      const botMessage: Message = { role: 'model', content: "Cảm ơn bạn đã liên hệ! Tư vấn viên sẽ phản hồi bạn trong thời gian sớm nhất." };
      setMessages((prev) => [..._ , botMessage]);
      setIsLoading(false);
    }, 1500);
  };
  
  const startCall = (type: 'video' | 'voice') => {
    setCallType(type);
    setInCall(true);
  }

  const endCall = () => {
    setInCall(false);
  }

  const handleImageButtonClick = () => {
    imageInputRef.current?.click();
  }
  
  const handleVideoButtonClick = () => {
    videoInputRef.current?.click();
  }

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedImage(reader.result as string);
            setSelectedVideo(null); // Clear other selections
        };
        reader.readAsDataURL(file);
    }
  }
  
  const handleVideoSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedVideo(reader.result as string);
            setSelectedImage(null); // Clear other selections
        };
        reader.readAsDataURL(file);
    }
  }

  const handleSendMedia = () => {
    if (!selectedImage && !selectedVideo) return;

    const userMessage: Message = {
        role: 'user',
        content: input,
        image: selectedImage || undefined,
        video: selectedVideo || undefined
    };
    setMessages(prev => [...prev, userMessage]);
    
    // Reset inputs
    setInput('');
    setSelectedImage(null);
    setSelectedVideo(null);
    if(imageInputRef.current) imageInputRef.current.value = "";
    if(videoInputRef.current) videoInputRef.current.value = "";


    // Simulate response
    setIsLoading(true);
    setTimeout(() => {
      const botMessage: Message = { role: 'model', content: `Cảm ơn bạn đã gửi ${selectedImage ? 'ảnh' : 'video'}. Chúng tôi sẽ xem xét và phản hồi sớm.` };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  }
  
  const resetSelections = () => {
      setSelectedImage(null);
      setSelectedVideo(null);
      if(imageInputRef.current) imageInputRef.current.value = "";
      if(videoInputRef.current) videoInputRef.current.value = "";
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
              isOpen ? "w-0 p-0 opacity-0" : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle chat"
        >
         {isOpen ? <X className="h-8 w-8" /> : <MessageSquare className="h-8 w-8" />}
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
        <Card className="w-[380px] h-[600px] shadow-2xl rounded-2xl flex flex-col bg-white">
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
                    <VideoIcon className="h-5 w-5" />
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
                            'max-w-xs rounded-lg p-3 flex flex-col',
                            msg.role === 'model'
                            ? 'bg-muted rounded-bl-none'
                            : 'bg-primary text-primary-foreground rounded-br-none'
                        )}
                        >
                        {msg.role === 'model' && index > 0 && <p className="text-xs font-semibold text-gray-600 mb-1">Tư vấn viên Phạm Thị Dung</p>}
                        
                        {msg.image && (
                          <div className="relative w-48 h-32 mb-2 rounded-md overflow-hidden">
                              <Image src={msg.image} alt="Sent image" layout="fill" objectFit="cover" />
                          </div>
                        )}
                        {msg.video && (
                             <div className="relative w-48 h-32 mb-2 rounded-md overflow-hidden bg-black">
                                <video src={msg.video} controls className="w-full h-full" />
                            </div>
                        )}
                        {msg.content && <p className="text-sm">{msg.content}</p>}
                        </div>
                        {msg.role === 'user' && (
                        <Avatar className="h-9 w-9 border shrink-0">
                            <AvatarFallback>
                              <User className="h-5 w-5" />
                            </AvatarFallback>
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
              <CardFooter className="p-2 border-t bg-white rounded-b-2xl flex flex-col">
                  {(selectedImage || selectedVideo) && (
                    <div className="p-2 w-full flex items-center justify-between bg-muted rounded-md mb-2">
                        <div className="flex items-center gap-2">
                            <div className="relative w-10 h-10 rounded-md overflow-hidden bg-black">
                                {selectedImage ? (
                                     <Image src={selectedImage} alt="Preview" layout="fill" objectFit="cover"/>
                                ) : selectedVideo ? (
                                    <video src={selectedVideo} className="w-full h-full object-cover" />
                                ) : null}
                            </div>
                            <span className="text-xs text-muted-foreground">{selectedImage ? 'Image selected' : 'Video selected'}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={resetSelections}>
                                <X className="h-4 w-4" />
                            </Button>
                             <Button size="sm" onClick={handleSendMedia}>
                                Send
                                <SendHorizonal className="h-4 w-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                  )}
                 <div className="flex w-full items-center space-x-1 bg-muted/50 rounded-full p-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                        <Paperclip className="h-5 w-5 text-muted-foreground" />
                    </Button>
                     <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" onClick={handleVideoButtonClick}>
                        <VideoIcon className="h-5 w-5 text-muted-foreground" />
                        <input type="file" ref={videoInputRef} onChange={handleVideoSelect} accept="video/*" className="hidden" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" onClick={handleImageButtonClick}>
                        <ImageIcon className="h-5 w-5 text-muted-foreground" />
                        <input type="file" ref={imageInputRef} onChange={handleImageSelect} accept="image/*" className="hidden" />
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

export function LiveChatWidget() {
  return (
    <Suspense>
      <LiveChatWidgetContent />
    </Suspense>
  );
}

    
