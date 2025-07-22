import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Jnug from '@/components/Jnug';
// import { ChannelTalkProvider } from './context/ChannelTalkContext';
// import ChannelTalkController from './components/ChannelTalk/ChannelTalkController';
// import ChannelTalkButton from './components/ChannelTalk/ChannelTalkButton';
// import ChannelTalkFloatingButton from './components/ChannelTalk/ChannelTalkFloatingButton';
// import ChannelTalkStatus from './components/ChannelTalk/ChannelTalkStatus';
import { Toaster } from '@/components/ui/toaster';

function App() {
  // const [user, setUser] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
   

  return (
    <div className="min-h-screen bg-white">

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