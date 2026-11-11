import React, { useState } from 'react';
import { BookOpen, Search, ArrowRight, Heart, Calendar, Clock, Sparkles } from 'lucide-react';
import { Article } from '../types';

interface JournalSectionProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  onLikeArticle: (id: string) => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({
  articles,
  onSelectArticle,
  onLikeArticle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['전체', '생각과 일상', '배움과 일', '책과 영감'];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === '전체' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="journal" className="py-16 md:py-24 border-t border-[#e8ded1] bg-[#fdfbf7]/75 backdrop-blur-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0e9df] text-xs font-semibold text-[#8b5e3c] mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>기록과 생각</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#2c2825] mb-4">
            사색의 서랍을 열며
          </h2>
          <p className="text-sm sm:text-base text-[#6b6055] leading-relaxed">
            바쁜 일상 중 멈추어 서서 기록한 생각들과 배움의 흔적입니다.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#e8ded1]">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#4a3f35] text-[#faf8f5]'
                    : 'bg-[#f2ede4] text-[#6b6055] hover:bg-[#e8ded1] hover:text-[#2c2825]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#8c827a] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="제목, 내용, 태그 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-full text-xs bg-white border border-[#dfd5c6] focus:outline-hidden focus:border-[#8b5e3c] text-[#2c2825] placeholder-[#a69c92]"
            />
          </div>
        </div>

        {/* Articles List / Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white/50 border border-dashed border-[#dfd5c6] rounded-2xl">
            <p className="text-sm text-[#7a6f66]">검색 결과와 일치하는 글이 없습니다.</p>
            <button
              onClick={() => {
                setSelectedCategory('전체');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-[#8b5e3c] underline cursor-pointer"
            >
              전체 글 보기
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="bg-white/80 border border-[#e4dcd0] hover:border-[#8b5e3c] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all hover:shadow-md cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#8c827a] mb-3">
                    <span className="px-2 py-0.5 rounded-full bg-[#f2ede4] text-[#8b5e3c] font-medium text-[11px]">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#2c2825] mb-2.5 group-hover:text-[#8b5e3c] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#665b50] leading-relaxed line-clamp-3 mb-4">
                    {article.summary}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-[#faf8f5] text-[#8c827a] border border-[#e8ded1]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[#f0e9df] flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onLikeArticle(article.id);
                      }}
                      className="flex items-center gap-1 text-xs text-[#8c827a] hover:text-[#d94e4e] transition-colors cursor-pointer py-1"
                    >
                      <Heart className="w-3.5 h-3.5 group-hover/heart:fill-red-400" />
                      <span>{article.likes}</span>
                    </button>

                    <span className="text-xs font-medium text-[#8b5e3c] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      전문 읽기 <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
