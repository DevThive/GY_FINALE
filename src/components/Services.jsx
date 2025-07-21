
import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, ShieldCheck, Search, BatteryCharging, Wind, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: '전문 정비 서비스',
      description: '엔진, 브레이크, 서스펜션 등 차량의 핵심 부품을 전문적으로 정비합니다.',
      features: ['국산/수입차 전문', '엔진오일 교환', '하체 수리', '경정비 일체']
    },
    {
      icon: ShieldCheck,
      title: '자동차 정기 검사',
      description: '법정 정기 검사를 대행하고, 불합격 항목을 완벽하게 정비해 드립니다.',
      features: ['검사 대행', '배출가스 점검', '안전도 검사', '사전 점검 서비스']
    },
    {
      icon: Search,
      title: '정밀 진단',
      description: '최첨단 컴퓨터 진단 장비로 차량의 문제를 정확하게 파악합니다.',
      features: ['ECU 스캔', '센서 데이터 분석', '고장 코드 진단', '성능 분석']
    },
    {
      icon: BatteryCharging,
      title: '전기/전자 시스템',
      description: '배터리, 발전기, 시동모터 등 복잡한 전기 시스템을 점검 및 수리합니다.',
      features: ['배터리 교체', '블랙박스 설치', '전장 부품 수리', '경고등 점검']
    },
    {
      icon: Wind,
      title: '공조 시스템',
      description: '에어컨 및 히터 시스템을 점검하여 쾌적한 주행 환경을 보장합니다.',
      features: ['에어컨 가스 충전', '필터 교체', '냄새 제거', '히터 코어 수리']
    },
    {
      icon: Droplets,
      title: '오일 및 소모품',
      description: '차량 성능 유지를 위한 각종 오일류와 소모품을 정기적으로 교체합니다.',
      features: ['엔진/미션 오일', '브레이크액', '부동액', '타이어 교체']
    }
  ];

  const handleServiceInquiry = (serviceName) => {
     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    toast({
      title: `🔧 ${serviceName} 문의`,
      description: "아래 양식을 통해 문의사항을 남겨주세요."
    });
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            전문 <span className="text-gradient">정비 & 검사 서비스</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            차량의 안전과 성능 유지를 위한 모든 솔루션을 제공합니다.
            고객님의 차량을 최상의 상태로 유지해 드립니다.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg card-hover group border border-gray-100"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed h-20">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {/* <Button 
                onClick={() => handleServiceInquiry(service.title)}
                variant="outline" 
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                예약 문의
              </Button> */}
            </motion.div>
          ))}
        </div>

        {/* Service Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">정비 이용 절차</h3>
            <p className="text-blue-100 text-lg">간단한 4단계로 완성되는 전문 정비 서비스</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: '예약 신청', description: '온라인 또는 전화로 예약' },
              { step: '02', title: '차량 입고 및 진단', description: '차량 입고 후 정밀 진단' },
              { step: '03', title: '고객 상담 및 정비', description: '정비 내역 상담 후 작업 진행' },
              { step: '04', title: '출고 및 사후관리', description: '정비 완료 후 차량 출고' }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{process.step}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{process.title}</h4>
                <p className="text-blue-100 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            {/* <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
            >
              지금 예약하기
            </Button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
