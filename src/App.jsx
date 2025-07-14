
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ChannelTalkProvider } from './context/ChannelTalkContext';
import ChannelTalkController from './components/ChannelTalk/ChannelTalkController';
import ChannelTalkButton from './components/ChannelTalk/ChannelTalkButton';
import ChannelTalkFloatingButton from './components/ChannelTalk/ChannelTalkFloatingButton';
import ChannelTalkStatus from './components/ChannelTalk/ChannelTalkStatus';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
    // 사용자 정보 로드 (예: 로그인 상태 확인)
    const loadUser = async () => {
      try {
        const userData = localStorage.getItem('user');
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('사용자 정보 로드 실패:', error);
      }
    };

    loadUser();
  }, []);

  const handleLogin = () => {
    const userData = {
      name: '홍길동',
      email: 'hong@example.com',
      userId: '12345',
      phone: '010-1234-5678'
    };
    
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user');
  };

  return (
    <div className="min-h-screen bg-white">

    <ChannelTalkProvider>
      <div className="App">
        <header className="App-header">
          <h1>My App</h1>
          <nav>
            {!isLoggedIn ? (
              <button onClick={handleLogin}>로그인</button>
            ) : (
              <button onClick={handleLogout}>로그아웃</button>
            )}
            <ChannelTalkButton className="header-chat-button">
              채팅 상담
            </ChannelTalkButton>
          </nav>
        </header>

        <main>
          <section>
            <h2>메인 콘텐츠</h2>
            <p>웹사이트 내용입니다.</p>
            
            <div className="button-group">
              <ChannelTalkButton variant="primary" size="large">
                문의하기
              </ChannelTalkButton>
              <ChannelTalkButton variant="secondary" size="small">
                빠른 상담
              </ChannelTalkButton>
            </div>
          </section>

          <section>
            <h3>채널톡 상태</h3>
            <ChannelTalkStatus />
          </section>
        </main>

        <footer>
          <p>© 2024 My Company</p>
          <ChannelTalkButton className="footer-chat-button">
            고객센터
          </ChannelTalkButton>
        </footer>

        {/* 플로팅 버튼 */}
        <ChannelTalkFloatingButton 
          position="bottom-right"
          showOnScroll={true}
          scrollThreshold={200}
        />

        {/* 채널톡 컨트롤러 */}
        <ChannelTalkController
          userInfo={user}
          showOnPages={['/home', '/products', '/support']}
          hideOnPages={['/admin', '/login']}
          autoShow={true}
        />
      </div>
    </ChannelTalkProvider>

      <Helmet>
        <title>고양모터스 - 자동차 정비 및 검사 전문 센터</title>
        <meta name="description" content="고양모터스는 경기도 고양시 최고의 자동차 정비 및 검사 전문 센터입니다. 전문적인 정비, 정밀 검사, 고객 만족을 위한 최상의 서비스를 제공합니다." />
        <meta name="keywords" content="고양모터스, 자동차 정비, 자동차 검사, 카센터, 정비소, 고양시, 경기도" />
        <meta property="og:title" content="고양모터스 - 자동차 정비 및 검사 전문 센터" />
        <meta property="og:description" content="고양시 최고의 자동차 정비소에서 전문적인 차량 관리 서비스를 경험해보세요." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://goyangmotors.co.kr" />
        <html lang="ko" />
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
