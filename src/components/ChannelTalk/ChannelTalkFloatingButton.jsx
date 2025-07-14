import React, { useState, useEffect } from 'react';
import { useChannelTalkContext } from '../../context/ChannelTalkContext';

const ChannelTalkFloatingButton = ({ 
  position = 'bottom-right',
  showOnScroll = false,
  scrollThreshold = 300 
}) => {
  const { openChat, isChannelTalkReady } = useChannelTalkContext();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (showOnScroll) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > scrollThreshold);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [showOnScroll, scrollThreshold]);

  const handleClick = () => {
    if (isChannelTalkReady) {
      openChat();
    }
  };

  const shouldShow = showOnScroll ? isScrolled : true;

  if (!shouldShow || !isChannelTalkReady) {
    return null;
  }

  return (
    <button
      onClick={handleClick}
      className={`channel-talk-floating-button ${position}`}
      title="채팅 상담"
    >
      💬
    </button>
  );
};

export default ChannelTalkFloatingButton;