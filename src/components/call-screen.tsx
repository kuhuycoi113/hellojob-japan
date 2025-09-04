'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Mic, MicOff, PhoneOff, Video, VideoOff } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';


interface CallScreenProps {
  onEndCall: () => void;
  callType: 'video' | 'voice';
}

export function CallScreen({ onEndCall, callType }: CallScreenProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoEnabled, setIsVideoEnabled] = useState(callType === 'video');
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [hasPermission, setHasPermission] = useState(true);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
        setStream(mediaStream);
        setHasPermission(true);

        if (callType === 'voice') {
            mediaStream.getVideoTracks().forEach(track => {
                track.enabled = false;
                setIsVideoEnabled(false);
            });
        }
      } catch (err) {
        console.error('Error accessing media devices.', err);
        setHasPermission(false);
        toast({
            variant: "destructive",
            title: t.callScreen.permissionError.title,
            description: t.callScreen.permissionError.description
        })
      }
    };

    getMedia();

    return () => {
      stream?.getTracks().forEach((track) => track.stop());
    };
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleVideo = () => {
    if (stream) {
      stream.getVideoTracks().forEach((track) => {
        track.enabled = !isVideoEnabled;
      });
      setIsVideoEnabled(!isVideoEnabled);
    }
  };

  const toggleAudio = () => {
    if (stream) {
      stream.getAudioTracks().forEach((track) => {
        track.enabled = !isAudioEnabled;
      });
      setIsAudioEnabled(!isAudioEnabled);
    }
  };

  const handleEndCall = () => {
     stream?.getTracks().forEach((track) => track.stop());
     onEndCall();
  }

  return (
    <div className="relative flex flex-col h-full bg-slate-900 text-white">
      <div className="relative flex-grow">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className={cn("w-full h-full object-cover", !isVideoEnabled && "hidden")}
        />
         { !isVideoEnabled && (
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-800 gap-4">
                 <Avatar className="h-32 w-32 border-4 border-slate-700">
                    <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                    <AvatarFallback>TV</AvatarFallback>
                </Avatar>
                <div className="text-center">
                    <p className="text-2xl font-bold">{t.chat.title}</p>
                    <p className="text-slate-400">{t.callScreen.connecting}</p>
                </div>
            </div>
         )}
      </div>

       {!hasPermission && (
            <div className="absolute inset-0 flex items-center justify-center p-4">
                <Alert variant="destructive" className="max-w-sm">
                    <AlertTitle>{t.callScreen.permissionError.title}</AlertTitle>
                    <AlertDescription>
                       {t.callScreen.permissionError.description}
                    </AlertDescription>
                </Alert>
            </div>
        )}

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
        <div className="flex justify-center items-center gap-4">
          <Button
            onClick={toggleAudio}
            variant="secondary"
            size="icon"
            className="rounded-full h-12 w-12 bg-white/20 hover:bg-white/30 text-white"
          >
            {isAudioEnabled ? <Mic /> : <MicOff />}
          </Button>
          <Button
            onClick={toggleVideo}
            variant="secondary"
            size="icon"
            className="rounded-full h-12 w-12 bg-white/20 hover:bg-white/30 text-white"
            disabled={callType === 'voice'}
          >
            {isVideoEnabled ? <Video /> : <VideoOff />}
          </Button>
          <Button
            onClick={handleEndCall}
            variant="destructive"
            size="icon"
            className="rounded-full h-12 w-12"
          >
            <PhoneOff />
          </Button>
        </div>
      </div>
    </div>
  );
}
