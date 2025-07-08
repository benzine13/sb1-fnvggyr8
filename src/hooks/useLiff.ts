import { useState, useEffect } from 'react';
import liff from '@line/liff';
import type { LiffProfile, LiffData } from '../types/liff';

export const useLiff = () => {
  const [isLiffReady, setIsLiffReady] = useState(false);
  const [profile, setProfile] = useState<LiffProfile | null>(null);
  const [liffData, setLiffData] = useState<LiffData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const initLiff = async () => {
      try {
        // Initialize LIFF with your LIFF ID
        // Replace 'YOUR_LIFF_ID' with your actual LIFF ID
        await liff.init({ liffId: '2007430210-KZeZW2oY' });
        
        setIsLiffReady(true);
        setIsLoggedIn(liff.isLoggedIn());
        
        if (liff.isLoggedIn()) {
          const userProfile = await liff.getProfile();
          setProfile(userProfile);
          
          const context = liff.getContext();
          const language = liff.getLanguage();
          setLiffData({
            language,
            context: context as any
          });
        }
      } catch (err) {
        console.error('LIFF initialization failed:', err);
        setError('Failed to initialize LIFF');
      }
    };

    initLiff();
  }, []);

  const login = () => {
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  };

  const logout = () => {
    if (liff.isLoggedIn()) {
      liff.logout();
      setProfile(null);
      setIsLoggedIn(false);
    }
  };

  const sendMessage = (message: string) => {
    if (liff.isApiAvailable('sendMessages')) {
      liff.sendMessages([
        {
          type: 'text',
          text: message,
        },
      ]);
    }
  };

  const shareTargetPicker = (messages: any[]) => {
    if (liff.isApiAvailable('shareTargetPicker')) {
      liff.shareTargetPicker(messages);
    } else {
      alert('Share Target Picker is not available in this environment');
    }
  };

  const openWindow = (url: string) => {
    liff.openWindow({
      url,
      external: true,
    });
  };

  const closeWindow = () => {
    liff.closeWindow();
  };

  return {
    isLiffReady,
    profile,
    liffData,
    error,
    isLoggedIn,
    login,
    logout,
    sendMessage,
    shareTargetPicker,
    openWindow,
    closeWindow,
  };
};