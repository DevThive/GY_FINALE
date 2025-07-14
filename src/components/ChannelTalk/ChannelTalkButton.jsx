import React from 'react';
import { useChannelTalkContext } from '../../context/ChannelTalkContext';
import './ChannelTalk.css';

const ChannelTalkButton = ({ 
  className = '', 
  children = '상담하기',
  variant = 'primary',
  size = 'medium'
}) => {
  const { openChat, isChannelTalkReady } = useChannelTalkContext();

  const handleClick = () => {
    if (isChannelTalkReady) {
      openChat();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={!isChannelTalkReady}
      className={`channel-talk-button ${variant} ${size} ${className}`}
    >
      {children}
    </button>
  );
};

export default ChannelTalkButton;