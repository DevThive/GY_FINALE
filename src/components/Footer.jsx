import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  const handleSocialClick = (platform) => {
    toast({
      title: `📱 ${platform} 연결`,
      description: "🚧 이 기능이 아직 구현되지 않았습니다—하지만 걱정하지 마세요! 다음 프롬프트에서 요청해 주세요! 🚀"
    });
  };

  const handleLinkClick = (linkName) => {
    toast({
      title: `🔗 ${linkName}`,
      description: "🚧 이 기능이 아직 구현되지 않았습니다—하지만 걱정하지 마세요! 다음 프롬프트에서 요청해 주세요! 🚀"
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">GM</span>
                </div>
                <span className="text-xl font-bold">고양모터스</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                20년 경험의 신뢰할 수 있는 자동차 정비 및 검사 전문 센터로, 
                고객 만족을 최우선으로 하는 전문 서비스를 제공합니다.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, name: '페이스북' },
                  { icon: Instagram, name: '인스타그램' },
                  { icon: Youtube, name: '유튜브' }
                ].map((social, index) => (
                  <button
                    key={index}
                    onClick={() => handleSocialClick(social.name)}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-lg font-semibold mb-6 block">빠른 링크</span>
              <ul className="space-y-3">
                {[
                  '서비스 안내',
                  '고객 후기',
                  '오시는 길',
                  '회사 소개',
                  '이용약관'
                ].map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(link)}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-lg font-semibold mb-6 block">서비스</span>
              <ul className="space-y-3">
                {[
                  '전문 정비',
                  '정기 검사',
                  '정밀 진단',
                  '공조 시스템',
                  '오일/소모품',
                  '사후 관리'
                ].map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(service)}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-lg font-semibold mb-6 block">연락처</span>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">031-123-4567</p>
                    <p className="text-gray-300 text-sm">평일 09:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">info@goyangmotors.co.kr</p>
                    <p className="text-gray-300 text-sm">24시간 접수 가능</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <p className="text-white font-medium">경기 고양시 일산서구</p>
                    <p className="text-gray-300 text-sm">덕산로 196-51 1층</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              <p>&copy; 2025 고양모터스. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              {[
                '개인정보처리방침',
                '이용약관',
                '사업자정보'
              ].map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
          
          {/* Business Registration */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-400 text-xs">
            <p>사업자등록번호: 123-45-67890 | 대표: 김대표 | 통신판매업신고: 제2025-경기고양-0123호</p>
            <p className="mt-1">주소: 경기 고양시 일산서구 덕산로 196-51 1층 고양모터스 | 개인정보보호책임자: 박담당 (privacy@goyangmotors.co.kr)</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;