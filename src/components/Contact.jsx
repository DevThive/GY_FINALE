import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "📧 문의 접수 완료",
      description: "🚧 이 기능이 아직 구현되지 않았습니다—하지만 걱정하지 마세요! 다음 프롬프트에서 요청해 주세요! 🚀"
    });
  };

  const handleDirectContact = (method) => {
    toast({
      title: `📞 ${method} 연결`,
      description: "🚧 이 기능이 아직 구현되지 않았습니다—하지만 걱정하지 마세요! 다음 프롬프트에서 요청해 주세요! 🚀"
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: '전화 상담',
      content: '031-123-4567',
      description: '평일 09:00 - 18:00',
      action: () => handleDirectContact('전화')
    },
    {
      icon: MessageCircle,
      title: '카카오톡 상담',
      content: '@고양모터스',
      description: '실시간 채팅 상담',
      action: () => handleDirectContact('카카오톡')
    },
    {
      icon: Mail,
      title: '이메일 문의',
      content: 'info@goyangmotors.co.kr',
      description: '24시간 접수 가능',
      action: () => handleDirectContact('이메일')
    },
    {
      icon: MapPin,
      title: '매장 방문',
      content: '경기 고양시 일산서구 덕산로 196-51',
      description: '1층 고양모터스',
      action: () => handleDirectContact('매장 안내')
    }
  ];

  const businessHours = [
    { day: '평일', time: '09:00 - 18:00' },
    { day: '토요일', time: '09:00 - 17:00' },
    { day: '일요일', time: '10:00 - 16:00' },
    { day: '공휴일', time: '휴무' }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            연락처 및 <span className="text-gradient">위치</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            궁금한 점이 있으시거나 상담을 원하시면 언제든지 연락주세요. 
            전문 상담사가 친절하게 도와드리겠습니다.
          </p>
        </motion.div>

        <div className="grid lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 card-hover cursor-pointer"
                  onClick={info.action}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{info.title}</h3>
                  <p className="text-blue-600 font-medium mb-1">{info.content}</p>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6" />
                <h3 className="text-xl font-semibold">영업시간</h3>
              </div>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-blue-100">{schedule.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <p className="text-sm text-blue-100">
                  💡 점심시간: 12:00 - 13:00 (전화 상담 가능)
                </p>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 bg-gray-100 rounded-2xl h-64 flex items-center justify-center"
            >
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p className="font-medium">매장 위치</p>
                <p className="text-sm">경기 고양시 일산서구 덕산로 196-51 1층 고양모터스</p>
                <Button 
                  onClick={() => handleDirectContact('지도')}
                  className="mt-4 btn-primary"
                >
                  지도에서 보기
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">온라인 상담 신청</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      연락처 *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                      placeholder="010-1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    상담 분야 *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  >
                    <option value="">선택해주세요</option>
                    <option value="service">정비 서비스</option>
                    <option value="inspection">자동차 검사</option>
                    <option value="other">기타 문의</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    문의 내용 *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
                    placeholder="궁금한 점이나 상담받고 싶은 내용을 자세히 적어주세요."
                  />
                </div>

                <Button type="submit" className="w-full btn-primary text-lg py-4">
                  <Send className="w-5 h-5 mr-2" />
                  상담 신청하기
                </Button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>📞 빠른 상담:</strong> 급하신 경우 031-123-4567로 직접 연락주세요. 
                  전문 상담사가 즉시 도움을 드리겠습니다.
                </p>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;