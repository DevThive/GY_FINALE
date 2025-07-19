import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showHeartAnimation, setShowHeartAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 로컬 스토리지에서 좋아요 상태 불러오기
  useEffect(() => {
    const likedStatus = localStorage.getItem('isLiked') === 'true';
    setIsLiked(likedStatus);
  }, []);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // 스크롤 후 모바일 메뉴 닫기
    }
  };

  const handleNavigation = (item) => {
    if (item.id === 'jnug') {
      // '정비글'은 해당 섹션으로 스크롤
      scrollToSection(item.id);
    } else {
      // 그 외 항목도 스크롤 이동
      scrollToSection(item.id);
    }
  };

  const handleCall = () => {
    // 실제 전화 연결 기능을 추가하려면 아래 주석 해제 (모바일에서만 작동)
    // window.location.href = 'tel:031-123-4567';

    toast({
      title: "📞 전화 연결",
      description: "🚧 전화 기능이 아직 구현되지 않았습니다—하지만 걱정하지 마세요! 다음 프롬프트에서 요청해 주세요! 🚀"
    });
  };

  // 좋아요 버튼 클릭 핸들러
  const handleLike = () => {
    const newLikeStatus = !isLiked;
    setIsLiked(newLikeStatus);
    localStorage.setItem('isLiked', newLikeStatus.toString());
    
    // 하트 애니메이션 표시
    if (newLikeStatus) {
      setShowHeartAnimation(true);
      setTimeout(() => setShowHeartAnimation(false), 1500);
    }
    toast({
      title: newLikeStatus ? "❤️ 좋아요!" : "💔 좋아요 취소",
      description: newLikeStatus 
        ? "고양모터스를 좋아해 주셔서 감사합니다!" 
        : "다시 좋아해 주실 날을 기다릴게요!"
    });
  };

  const navItems = [
    { name: '홈', id: 'home' },
    { name: '서비스', id: 'services' },
    { name: '고객 후기', id: 'reviews' },
    { name: '정비글', id: 'jnug' },
    { name: '연락처', id: 'contact' }
  ];

  // ... (기존 코드 유지)
};

export default Header;