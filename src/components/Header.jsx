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
      // '정비글'은 새로운 페이지로 이동
      window.location.href = '/jnug'; // 실제 '정비글' 페이지 경로로 변경해주세요
    } else {
      // 그 외 항목은 스크롤 이동
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
    { name: '연락처', id: 'contact' },
    { name: '정비글', id: 'jnug' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* 하트 애니메이션 효과 */}
      <AnimatePresence>
        {showHeartAnimation && (
          <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-50">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0] }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <Heart className="w-32 h-32 fill-red-500 text-red-500" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Like Button */}
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GM</span>
              </div>
              <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                고양모터스
              </span>
            </motion.div>
            
            {/* 좋아요 버튼 (로고 옆) */}
            <motion.button
              onClick={handleLike}
              whileTap={{ scale: 0.7 }}
              whileHover={{ scale: 1.1 }}
              className={`ml-3 flex items-center justify-center p-2 rounded-full transition-all duration-300 ${
                isLiked 
                  ? 'bg-red-100 text-red-500 shadow-md' 
                  : isScrolled ? 'bg-gray-100 text-gray-500 hover:bg-gray-200' : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <motion.div
                animate={isLiked ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 0.4 }}
              >
                <Heart 
                  className={`w-5 h-5 transition-all duration-300 ${isLiked ? 'fill-red-500 stroke-red-500' : 'fill-none'}`} 
                />
              </motion.div>
            </motion.button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8"> {/* md:flex로 변경 */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)} 
                className={`font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className={`w-4 h-4 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
              <span className={isScrolled ? 'text-gray-700' : 'text-white'}>
                031-123-4567
              </span>
            </div>
          
            <Button onClick={() => handleNavigation({id: 'contact'})} className="btn-primary"> {/* 정비 예약도 handleNavigation 사용 */}
              정비 예약
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)} 
                  className="text-left text-gray-700 font-medium hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                  <Phone className="w-4 h-4" />
                  <span>031-123-4567</span>
                </div>
                {/* 모바일 메뉴에도 "연락처" 버튼 추가 */}
                <Button onClick={handleCall} className="w-full btn-secondary mb-2">
                  연락처
                </Button>
                <Button onClick={() => handleNavigation({id: 'contact'})} className="w-full btn-primary"> {/* 정비 예약도 handleNavigation 사용 */}
                  정비 예약
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;