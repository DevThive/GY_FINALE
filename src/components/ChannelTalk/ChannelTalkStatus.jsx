import React from 'react';
import { useChannelTalkContext } from '../../context/ChannelTalkContext';

const ChannelTalkStatus = () => {
  const { isChannelTalkReady, user, isVisible } = useChannelTalkContext();

  if (!isChannelTalkReady) {
    return <div>채널톡 로딩 중...</div>;
  }

  return (
    <div className="channel-talk-status">
      <div>상태: {isChannelTalkReady ? '준비완료' : '로딩중'}</div>
      <div>표시: {isVisible ? '보임' : '숨김'}</div>
      {user && (
        <div>사용자: {user.name || user.email || '익명'}</div>
      )}
    </div>
  );
};

export default ChannelTalkStatus;