
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Fuel, Calendar, Settings, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const VehicleShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const categories = ['전체', '세단', 'SUV', '해치백', '쿠페'];

  const vehicles = [
    {
      id: 1,
      name: '현대 아반떼',
      category: '세단',
      year: 2022,
      price: '1,850만원',
      mileage: '2.3만km',
      fuel: '가솔린',
      transmission: '자동',
      image: 'Modern Hyundai Avante sedan in metallic blue color'
    },
    {
      id: 2,
      name: '기아 쏘렌토',
      category: 'SUV',
      year: 2021,
      price: '2,650만원',
      mileage: '4.1만km',
      fuel: '디젤',
      transmission: '자동',
      image: 'Kia Sorento SUV in white color parked in showroom'
    },
    {
      id: 3,
      name: 'BMW 3시리즈',
      category: '세단',
      year: 2020,
      price: '3,200만원',
      mileage: '5.8만km',
      fuel: '가솔린',
      transmission: '자동',
      image: 'BMW 3 Series luxury sedan in dark gray metallic'
    },
    {
      id: 4,
      name: '현대 투싼',
      category: 'SUV',
      year: 2023,
      price: '2,980만원',
      mileage: '1.2만km',
      fuel: '하이브리드',
      transmission: '자동',
      image: 'Hyundai Tucson compact SUV in red color'
    },
    {
      id: 5,
      name: '기아 K5',
      category: '세단',
      year: 2022,
      price: '2,150만원',
      mileage: '3.5만km',
      fuel: '가솔린',
      transmission: '자동',
      image: 'Kia K5 sedan in pearl white color'
    },
    {
      id: 6,
      name: '벤츠 C클래스',
      category: '세단',
      year: 2021,
      price: '4,200만원',
      mileage: '4.7만km',
      fuel: '가솔린',
      transmission: '자동',
      image: 'Mercedes-Benz C-Class luxury sedan in silver'
    }
  ];

  const filteredVehicles = selectedCategory === '전체' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.category === selectedCategory);

  const handleViewDetails = (vehicleName) => {
    toast({
      title: `🚗 ${vehicleName} 상세보기`,
      description: "🚧 이 기능이 아직 구현되지 않았습니다—하지만 걱정하지 마세요! 다음 프롬프트에서 요청해 주세요! 🚀"
    });
  };

  const handleAddToWishlist = (vehicleName) => {
    toast({
      title: `❤️ ${vehicleName} 찜하기`,
      description: "🚧 이 기능이 아직 구현되지 않았습니다—하지만 걱정하지 마세요! 다음 프롬프트에서 요청해 주세요! 🚀"
    });
  };

  return (
    <section id="vehicles" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            엄선된 <span className="text-gradient">차량 목록</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            전문가가 직접 검수한 최고 품질의 차량들을 만나보세요. 
            모든 차량은 철저한 점검을 거쳐 안전성을 보장합니다.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Vehicle Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img  
                  alt={`${vehicle.name} 차량 이미지`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                 src="https://images.unsplash.com/photo-1678431031082-ffb73362a74b" />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button
                    onClick={() => handleViewDetails(vehicle.name)}
                    size="sm"
                    className="bg-white text-gray-800 hover:bg-gray-100"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    상세보기
                  </Button>
                  <Button
                    onClick={() => handleAddToWishlist(vehicle.name)}
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-800"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {vehicle.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{vehicle.name}</h3>
                
                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>{vehicle.year}년</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="w-4 h-4 text-blue-600" />
                    <span>{vehicle.mileage}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Fuel className="w-4 h-4 text-blue-600" />
                    <span>{vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4 text-blue-600" />
                    <span>{vehicle.transmission}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={() => handleViewDetails(vehicle.name)}
                  className="w-full btn-primary"
                >
                  상세 정보 보기
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Vehicles CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            onClick={() => toast({
              title: "🚗 더 많은 차량",
              description: "🚧 이 기능이 아직 구현되지 않았습니다—하지만 걱정하지 마세요! 다음 프롬프트에서 요청해 주세요! 🚀"
            })}
            size="lg" 
            className="btn-primary text-lg px-8 py-4"
          >
            더 많은 차량 보기
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default VehicleShowcase;
