import React, { createContext, useContext, useEffect, useState } from 'react';

const ChannelTalkContext = createContext();

export const useChannelTalkContext = () => {
  const context = useContext(ChannelTalkContext);
  if (!context) {
    throw new Error('useChannelTalkContext must be used within a ChannelTalkProvider');
  }
  return context;
};

export const ChannelTalkProvider = ({ children }) => {
  const [isChannelTalkReady, setIsChannelTalkReady] = useState(false);
  const [user, setUser] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const pluginKey = process.env.REACT_APP_CHANNEL_PLUGIN_KEY;

  useEffect(() => {
    if (!pluginKey) {
      console.warn('채널톡 플러그인 키가 설정되지 않았습니다.');
      return;
    }

    // 채널톡 스크립트 로드
    const loadChannelTalk = () => {
      if (window.ChannelIO) {
        return;
      }

      const script = document.createElement('script');
      script.innerHTML = `
        (function(){var w=window;if(w.ChannelIO){return;}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";s.charset="UTF-8";var x=document.getElementsByTagName("script")[0];x.parentNode.insertBefore(s,x);}if(document.readyState==="complete"){l();}else if(window.attachEvent){window.attachEvent("onload",l);}else{window.addEventListener("DOMContentLoaded",l,false);window.addEventListener("load",l,false);}})();
      `;
      document.head.appendChild(script);

      // 채널톡 초기화 및 이벤트 리스너
      setTimeout(() => {
        if (window.ChannelIO) {
          window.ChannelIO('boot', {
            pluginKey: pluginKey,
            language: 'ko'
          });

          // 이벤트 리스너 설정
          window.ChannelIO('onReady', () => {
            console.log('채널톡이 준비되었습니다.');
            setIsChannelTalkReady(true);
          });

          window.ChannelIO('onChatStart', () => {
            console.log('채팅이 시작되었습니다.');
          });

          window.ChannelIO('onMessage', (message) => {
            console.log('새 메시지:', message);
          });
        }
      }, 1000);
    };

    loadChannelTalk();
  }, [pluginKey]);

  const updateUser = (userInfo) => {
    if (window.ChannelIO && isChannelTalkReady) {
      window.ChannelIO('updateUser', {
        profile: userInfo
      });
      setUser(userInfo);
    }
  };

  const clearUser = () => {
    if (window.ChannelIO && isChannelTalkReady) {
      window.ChannelIO('clearUser');
      setUser(null);
    }
  };

  const showChat = () => {
    if (window.ChannelIO && isChannelTalkReady) {
      window.ChannelIO('show');
      setIsVisible(true);
    }
  };

  const hideChat = () => {
    if (window.ChannelIO && isChannelTalkReady) {
      window.ChannelIO('hide');
      setIsVisible(false);
    }
  };

  const openChat = () => {
    if (window.ChannelIO && isChannelTalkReady) {
      window.ChannelIO('open');
    }
  };

  const closeChat = () => {
    if (window.ChannelIO && isChannelTalkReady) {
      window.ChannelIO('close');
    }
  };

  const value = {
    isChannelTalkReady,
    user,
    isVisible,
    updateUser,
    clearUser,
    showChat,
    hideChat,
    openChat,
    closeChat
  };

  return (
    <ChannelTalkContext.Provider value={value}>
      {children}
    </ChannelTalkContext.Provider>
  );
};