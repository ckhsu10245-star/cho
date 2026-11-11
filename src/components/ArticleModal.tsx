import React, { useState } from 'react';
import { X, Heart, Clock, Calendar, Tag, Share2, Check } from 'lucide-react';
import { Article } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onLike: (id: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onLike }) => {
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-[#faf8f5] w-full max-w-2xl rounded-2xl border border-[#e2d8ca] shadow-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e8ded1] bg-[#f4eee6]">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#e8ded1] text-[#8b5e3c]">
            {article.category}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg text-[#665b50] hover:bg-[#e8ded1] hover:text-[#2c2825] transition-colors cursor-pointer"
              title="링크 복사"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#665b50] hover:bg-[#e8ded1] hover:text-[#2c2825] transition-colors cursor-pointer"
              title="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex items-center gap-3 text-xs text-[#8c827a] mb-2.5">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                읽는 시간 {article.readTime}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2c2825] leading-snug">
              {article.title}
            </h2>
            <p className="mt-3 text-sm text-[#7a6f66] italic bg-[#f0e9df]/60 p-3.5 rounded-xl border border-[#e4dcd0]">
              {article.summary}
            </p>
          </div>

          {/* Article Body */}
          <div className="space-y-4 text-[#3d362e] text-base leading-relaxed font-normal">
            {article.content.map((paragraph, index) => (
              <p key={index} className="leading-relaxed text-[15px] sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-[#e8ded1] flex flex-wrap gap-2 items-center">
            <Tag className="w-3.5 h-3.5 text-[#8b5e3c]" />
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-md bg-[#f2ede4] text-[#6b6055]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#e8ded1] bg-[#f4eee6] flex items-center justify-between">
          <button
            onClick={() => onLike(article.id)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[#d94e4e] border border-[#f0c4c4] hover:bg-[#fff5f5] text-xs font-medium cursor-pointer transition-colors shadow-xs"
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>공감 {article.likes}</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-[#4a3f35] text-[#faf8f5] text-xs font-medium hover:bg-[#342c25] transition-colors cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
