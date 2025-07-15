
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: '김민수',
      location: '고양시 일산동구',
      rating: 5,
      date: '2024년 1월',
      vehicle: '현대 아반떼',
      review: '정말 친절하고 전문적인 서비스를 받았습니다. 차량 상태도 설명해주신 것보다 훨씬 좋았고, 사후 관리도 완벽했어요. 다음에도 꼭 이용하겠습니다.',
      avatar: 'Professional Korean businessman in his 30s smiling'
    },
    {
      id: 2,
      name: '박지영',
      location: '고양시 덕양구',
      rating: 5,
      date: '2024년 2월',
      vehicle: '기아 쏘렌토',
      review: '처음 중고차를 구매하는데 걱정이 많았는데, 직원분들이 하나하나 자세히 설명해주셔서 안심하고 구매할 수 있었습니다. 가격도 합리적이었어요.',
      avatar: 'Professional Korean businesswoman in her 20s smiling'
    },
    {
      id: 3,
      name: '이성호',
      location: '파주시',
      rating: 5,
      date: '2024년 3월',
      vehicle: 'BMW 3시리즈',
      review: '고급 차량임에도 불구하고 정말 꼼꼼하게 관리된 상태였습니다. 전문적인 검수와 정비 서비스 덕분에 새 차 같은 느낌이에요. 강력 추천합니다!',
      avatar: 'Professional Korean businessman in his 40s smiling'
    },
    {
      id: 4,
      name: '최은미',
      location: '고양시 일산서구',
      rating: 5,
      date: '2024년 3월',
      vehicle: '현대 투싼',
      review: '가족용 SUV를 찾고 있었는데 딱 맞는 차량을 추천해주셨어요. 아이들 안전을 위한 옵션들도 자세히 설명해주시고, 정말 만족스러운 구매였습니다.',
      avatar: 'Professional Korean woman in her 30s with friendly smile'
    },
    {
      id: 5,
      name: '정우진',
      location: '의정부시',
      rating: 5,
      date: '2024년 4월',
      vehicle: '기아 K5',
      review: '온라인으로 먼저 상담받고 방문했는데, 실제로 보니 기대 이상이었습니다. 투명한 가격 정책과 신속한 처리 과정이 인상적이었어요.',
      avatar: 'Professional Korean businessman in his 20s smiling confidently'
    },
    {
      id: 6,
      name: '한소영',
      location: '고양시 일산동구',
      rating: 5,
      date: '2024년 4월',
      vehicle: '벤츠 C클래스',
      review: '럭셔리 차량 구매가 처음이었는데, 전문적인 상담과 세심한 관리 덕분에 만족스러운 구매를 할 수 있었습니다. 사후 서비스도 훌륭해요.',
      avatar: 'Elegant Korean businesswoman in her 30s with professional smile'
    }
  ];

  const handleWriteReview = () => {
    toast({
      title: "✍️ 후기 작성",
      description: "🚧 이 기능이 아직 구현되지 않았습니다—하지만 걱정하지 마세요! 다음 프롬프트에서 요청해 주세요! 🚀"
    });
  };

  const handleLikeReview = (reviewerName) => {
    toast({
      title: `👍 ${reviewerName}님 후기 좋아요`,
      description: "🚧 이 기능이 아직 구현되지 않았습니다—하지만 걱정하지 마세요! 다음 프롬프트에서 요청해 주세요! 🚀"
    });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            고객 <span className="text-gradient">후기</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            실제 고객들이 경험한 고양모터스의 서비스를 확인해보세요. 
            진실된 후기가 저희의 품질을 증명합니다.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: '4.9/5.0', label: '평균 평점' },
              { number: '2,500+', label: '총 후기 수' },
              { number: '98%', label: '재구매 의향' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />

              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img  
                    alt={`${review.name} 고객 프로필`}
                    className="w-full h-full object-cover"
                   src="https://images.unsplash.com/photo-1691398495617-18457fbf826d" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>

              {/* Vehicle */}
              <div className="bg-blue-50 rounded-lg px-3 py-2 mb-4 inline-block">
                <span className="text-sm font-medium text-blue-700">구매 차량: {review.vehicle}</span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-4">{review.review}</p>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button
                  onClick={() => handleLikeReview(review.name)}
                  className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">도움됨</span>
                </button>
                <span className="text-xs text-gray-400">검증된 구매 후기</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">당신의 경험을 공유해주세요</h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            고양모터스에서의 경험을 다른 고객들과 공유하고, 
            더 나은 서비스 개선에 도움을 주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button 
              onClick={handleWriteReview}
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
            >
              후기 작성하기
            </Button> */}
            <Button 
              onClick={() => toast({
                title: "📋 더 많은 후기",
                description: "🚧 이 기능이 아직 구현되지 않았습니다—하지만 걱정하지 마세요! 다음 프롬프트에서 요청해 주세요! 🚀"
              })}
              variant="outline" 
              className="border-white text-black hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
            >
              더 많은 후기 보기
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
