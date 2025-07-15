import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
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

  const navItems = [
    { name: '홈', id: 'home' },
    { name: '서비스', id: 'services' },
    { name: '고객 후기', id: 'reviews' },
    { name: '연락처', id: 'contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
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
            {/* 기존 전화번호 텍스트는 그대로 유지하거나 제거할 수 있습니다. */}
            <div className="flex items-center space-x-2 text-sm">
              <Phone className={`w-4 h-4 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
              <span className={isScrolled ? 'text-gray-700' : 'text-white'}>
                031-123-4567
              </span>
            </div>
            {/* 새로 추가된 "연락처" 버튼 */}
            <Button onClick={handleCall} className="btn-secondary"> {/* btn-secondary는 예시, 스타일은 직접 정의 */}
              연락처
            </Button>
            <Button onClick={() => scrollToSection('contact')} className="btn-primary">
              정비 예약
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
                  onClick={() => scrollToSection(item.id)}
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
                <Button onClick={() => scrollToSection('contact')} className="w-full btn-primary">
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