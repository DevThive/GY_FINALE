import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Calendar, Tool, MessageCircle, ThumbsUp, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Jnug = () => {
  // 게시글 상태 관리
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPost, setCurrentPost] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '엔진',
    images: []
  });

  // 예시 게시글 데이터 (실제로는 API에서 가져올 것)
  useEffect(() => {
    // 실제 구현에서는 API 호출로 대체
    const dummyPosts = [
      {
        id: 1,
        title: '엔진 오일 교체 방법 및 주기',
        content: '엔진 오일은 자동차의 심장인 엔진을 보호하는 중요한 역할을 합니다. 일반적으로 5,000km~10,000km마다 교체하는 것이 좋습니다. 교체 방법은 다음과 같습니다...',
        category: '엔진',
        author: '정비사 김철수',
        date: '2025-07-15',
        likes: 24,
        comments: 8,
        images: ['engine_oil1.jpg', 'engine_oil2.jpg']
      },
      {
        id: 2,
        title: '브레이크 패드 마모 확인 방법',
        content: '브레이크 패드는 안전과 직결되는 중요한 부품입니다. 브레이크에서 소음이 나거나 제동력이 떨어진다면 점검이 필요합니다...',
        category: '브레이크',
        author: '정비사 박영희',
        date: '2025-07-10',
        likes: 18,
        comments: 5,
        images: ['brake_pad.jpg']
      },
      {
        id: 3,
        title: '에어컨 필터 교체 및 관리법',
        content: '에어컨 필터는 차량 내부로 들어오는 공기를 정화하는 역할을 합니다. 계절이 바뀌기 전에 교체하는 것이 좋습니다...',
        category: '냉각',
        author: '정비사 이민수',
        date: '2025-07-05',
        likes: 15,
        comments: 3,
        images: ['ac_filter.jpg']
      },
    ];
    setPosts(dummyPosts);
  }, []);

  // 필터링된 게시글
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 모달 열기
  const openModal = (post = null) => {
    if (post) {
      setFormData({
        title: post.title,
        content: post.content,
        category: post.category,
        images: post.images
      });
      setCurrentPost(post);
    } else {
      setFormData({
        title: '',
        content: '',
        category: '엔진',
        images: []
      });
      setCurrentPost(null);
    }
    setIsModalOpen(true);
  };

  // 게시글 저장
  const handleSavePost = () => {
    if (!formData.title || !formData.content) {
      toast({
        title: "입력 오류",
        description: "제목과 내용을 모두 입력해주세요.",
        variant: "destructive"
      });
      return;
    }

    if (currentPost) {
      // 게시글 수정
      const updatedPosts = posts.map(post => 
        post.id === currentPost.id ? {...post, ...formData} : post
      );
      setPosts(updatedPosts);
      toast({
        title: "게시글 수정 완료",
        description: "게시글이 성공적으로 수정되었습니다."
      });
    } else {
      // 새 게시글 추가
      const newPost = {
        id: posts.length + 1,
        ...formData,
        author: '정비사 김철수', // 실제로는 로그인된 사용자 정보 사용
        date: new Date().toISOString().split('T')[0],
        likes: 0,
        comments: 0
      };
      setPosts([newPost, ...posts]);
      toast({
        title: "게시글 등록 완료",
        description: "새 게시글이 성공적으로 등록되었습니다."
      });
    }
    setIsModalOpen(false);
  };

  // 게시글 상세 보기
  const viewPostDetail = (post) => {
    setCurrentPost(post);
    setIsDetailView(true);
  };

  // 좋아요 기능
  const handleLike = (postId) => {
    const updatedPosts = posts.map(post => 
      post.id === postId ? {...post, likes: post.likes + 1} : post
    );
    setPosts(updatedPosts);
    toast({
      title: "좋아요",
      description: "게시글에 좋아요를 표시했습니다."
    });
  };

  // 이미지 업로드 처리
  const handleImageUpload = (e) => {
    // 실제 구현에서는 이미지 업로드 로직 추가
    toast({
      title: "이미지 업로드",
      description: "이미지가 업로드되었습니다."
    });
    setFormData({
      ...formData,
      images: [...formData.images, "new_image.jpg"]
    });
  };

  // 입력 필드 변경 처리
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <section id="jnug" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">정비 노하우</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            고양모터스의 전문 정비사들이 알려드리는 차량 관리 팁과 정비 노하우를 확인하세요.
            직접 정비를 하시는 분들에게 도움이 될 정보를 공유합니다.
          </p>
        </motion.div>

        {/* 검색 및 글쓰기 버튼 */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
          <Button 
            onClick={() => openModal()} 
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center"
          >
            <Plus className="w-5 h-5 mr-2" />
            정비글 작성
          </Button>
        </div>

        {/* 게시글 목록 */}
        {!isDetailView ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <motion.div
                key={post.id}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  {post.images && post.images.length > 0 ? (
                    <img 
                      src={`/images/${post.images[0]}`} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x200?text=고양모터스';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <Tool className="w-16 h-16 text-gray-400" />
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-1">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.content}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <div className="flex space-x-3">
                      <div className="flex items-center text-gray-500">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <Button 
                      onClick={() => viewPostDetail(post)} 
                      variant="ghost" 
                      className="text-blue-600 hover:text-blue-800"
                    >
                      자세히 보기
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* 게시글 상세 보기 */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <Button 
                  onClick={() => setIsDetailView(false)} 
                  variant="outline" 
                  className="text-gray-600"
                >
                  목록으로
                </Button>
                <div className="flex space-x-2">
                  <Button 
                    onClick={() => openModal(currentPost)} 
                    variant="outline" 
                    className="text-blue-600 border-blue-600"
                  >
                    수정
                  </Button>
                  <Button 
                    onClick={() => handleLike(currentPost.id)} 
                    className="bg-red-50 text-red-600 hover:bg-red-100 border border-red-200"
                  >
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    좋아요 {currentPost?.likes}
                  </Button>
                </div>
              </div>
              
              <div className="mb-6">
                <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {currentPost?.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentPost?.title}</h1>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-3">{currentPost?.author}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{currentPost?.date}</span>
                </div>
              </div>
              
              {currentPost?.images && currentPost.images.length > 0 && (
                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentPost.images.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden bg-gray-100 h-64">
                      <img 
                        src={`/images/${image}`} 
                        alt={`${currentPost.title} 이미지 ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/800x600?text=고양모터스';
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
              
              <div className="prose max-w-none mb-8">
                <p className="text-gray-700 whitespace-pre-line">{currentPost?.content}</p>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold mb-4">댓글 {currentPost?.comments}</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <textarea
                    placeholder="댓글을 작성해주세요"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                    rows="3"
                  ></textarea>
                  <div className="flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      댓글 작성
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-500 text-center py-4">아직 댓글이 없습니다. 첫 댓글을 작성해보세요!</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* 게시글 작성/수정 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {currentPost ? '정비글 수정' : '새 정비글 작성'}
                </h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">카테고리</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="엔진">엔진</option>
                    <option value="브레이크">브레이크</option>
                    <option value="냉각">냉각</option>
                    <option value="전기">전기</option>
                    <option value="타이어">타이어</option>
                    <option value="기타">기타</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">제목</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="제목을 입력하세요"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">내용</label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    placeholder="내용을 입력하세요"
                    rows="10"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">이미지 업로드</label>
                  <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-gray-50" onClick={handleImageUpload}>
                    <div className="text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="mt-1 text-sm text-gray-600">
                        이미지를 업로드하려면 클릭하세요
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        PNG, JPG, GIF 최대 10MB
                      </p>
                    </div>
                  </div>
                  
                  {formData.images.length > 0 && (
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {formData.images.map((image, index) => (
                        <div key={index} className="relative">
                          <img 
                            src={`/images/${image}`} 
                            alt={`업로드 이미지 ${index + 1}`}
                            className="h-20 w-full object-cover rounded"
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/100?text=이미지';
                            }}
                          />
                          <button 
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 w-5 h-5 flex items-center justify-center text-xs"
                            onClick={(e) => {
                              e.stopPropagation();
                              setFormData({
                                ...formData,
                                images: formData.images.filter((_, i) => i !== index)
                              });
                            }}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex justify-end mt-6 space-x-3">
                <Button 
                  onClick={() => setIsModalOpen(false)} 
                  variant="outline" 
                  className="text-gray-700"
                >
                  취소
                </Button>
                <Button 
                  onClick={handleSavePost} 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {currentPost ? '수정하기' : '등록하기'}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Jnug;