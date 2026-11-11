import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/mockData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#e4dcd0] bg-[#f5efe6] py-12 text-[#665b50]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#dfd5c6]">
          {/* Brand info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="font-serif font-bold text-lg text-[#2c2825]">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-[#8c827a]">
                ({PERSONAL_INFO.englishName})
              </span>
            </div>
            <p className="text-xs text-[#7a6f66]">
              생각과 기록, 그리고 사람과 사람을 잇는 따뜻한 공간
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-[#2c2825] transition-colors cursor-pointer"
            >
              소개
            </button>
            <span className="text-[#c5baa9]">•</span>
            <button
              onClick={() => onNavigate('journal')}
              className="hover:text-[#2c2825] transition-colors cursor-pointer"
            >
              기록과 생각
            </button>
            <span className="text-[#c5baa9]">•</span>
            <button
              onClick={() => onNavigate('projects')}
              className="hover:text-[#2c2825] transition-colors cursor-pointer"
            >
              프로젝트
            </button>
            <span className="text-[#c5baa9]">•</span>
            <button
              onClick={() => onNavigate('bookshelf')}
              className="hover:text-[#2c2825] transition-colors cursor-pointer"
            >
              서재 &amp; 취향
            </button>
            <span className="text-[#c5baa9]">•</span>
            <button
              onClick={() => onNavigate('guestbook')}
              className="hover:text-[#2c2825] transition-colors cursor-pointer"
            >
              방명록
            </button>
            <span className="text-[#c5baa9]">•</span>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#2c2825] transition-colors cursor-pointer"
            >
              연락처
            </button>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#dfd5c6] text-xs font-medium text-[#4a3f35] hover:bg-[#faf8f5] hover:border-[#8b5e3c] transition-all cursor-pointer shadow-xs"
          >
            <span>위로</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8c827a] gap-2">
          <p>© 2026 조경희 (Cho Kyung-hee). All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>오늘도 찾아와 주셔서 진심으로 고맙습니다</span>
            <Heart className="w-3 h-3 text-[#d94e4e] fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
};
