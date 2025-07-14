import { useEffect, useCallback } from 'react';

const useChannelTalk = () => {
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

      // 채널톡 초기화
      setTimeout(() => {
        if (window.ChannelIO) {
          window.ChannelIO('boot', {
            pluginKey: pluginKey,
            language: 'ko'
          });
        }
      }, 1000);
    };

    loadChannelTalk();
  }, [pluginKey]);

  const updateUser = useCallback((userInfo) => {
    if (window.ChannelIO) {
      window.ChannelIO('updateUser', {
        profile: userInfo
      });
    }
  }, []);

  const showChat = useCallback(() => {
    if (window.ChannelIO) {
      window.ChannelIO('show');
    }
  }, []);

  const hideChat = useCallback(() => {
    if (window.ChannelIO) {
      window.ChannelIO('hide');
    }
  }, []);

  const openChat = useCallback(() => {
    if (window.ChannelIO) {
      window.ChannelIO('open');
    }
  }, []);

  const closeChat = useCallback(() => {
    if (window.ChannelIO) {
      window.ChannelIO('close');
    }
  }, []);

  return {
    updateUser,
    showChat,
    hideChat,
    openChat,
    closeChat
  };
};

export default useChannelTalk;