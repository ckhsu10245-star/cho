import React, { useState } from 'react';
import { Sparkles, Copy, Check, ArrowDown, BookOpen, MessageSquare, Mail, Heart, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO, DAILY_QUOTES } from '../data/mockData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  warmBgImage?: string;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, warmBgImage }) => {
  const [lang, setLang] = useState<'en' | 'ko'>('en');
  const [copied, setCopied] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const nextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % DAILY_QUOTES.length);
  };

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-34 md:pb-24 overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0e9df]/90 backdrop-blur-xs border border-[#dfd5c6] text-xs text-[#5c5044] mb-6 shadow-xs animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{PERSONAL_INFO.status}</span>
        </div>

        {/* Main Title in English (with toggle option) */}
        <div className="mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[11px] text-[#8c827a]">Language:</span>
            <div className="inline-flex rounded-full bg-[#f0e9df]/80 p-0.5 border border-[#dfd5c6] text-[11px]">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-0.5 rounded-full font-medium transition-colors cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#4a3f35] text-white shadow-xs'
                    : 'text-[#6b6055] hover:text-[#2c2825]'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLang('ko')}
                className={`px-2.5 py-0.5 rounded-full font-medium transition-colors cursor-pointer ${
                  lang === 'ko'
                    ? 'bg-[#4a3f35] text-white shadow-xs'
                    : 'text-[#6b6055] hover:text-[#2c2825]'
                }`}
              >
                한국어
              </button>
            </div>
          </div>

          {lang === 'en' ? (
            <div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#2c2825] tracking-tight leading-[1.2] mb-3">
                Hello, <br className="hidden sm:inline" />
                I'm <span className="underline decoration-[#c8b39b] decoration-wavy decoration-2 underline-offset-8">Kyung-hee Cho</span>, <br className="hidden md:inline" />
                reflecting and documenting.
              </h1>
              <p className="text-xs sm:text-sm text-[#8c827a] font-normal tracking-wide">
                (사유하고 기록하는 조경희입니다.)
              </p>
            </div>
          ) : (
            <div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#2c2825] tracking-tight leading-[1.25] mb-3">
                안녕하세요, <br className="hidden sm:inline" />
                사유하고 기록하는 <span className="underline decoration-[#c8b39b] decoration-wavy decoration-2 underline-offset-8">조경희</span>입니다.
              </h1>
              <p className="text-xs sm:text-sm text-[#8c827a] font-normal tracking-wide">
                (Hello, I'm Kyung-hee Cho, reflecting and documenting.)
              </p>
            </div>
          )}
        </div>

        <p className="text-base sm:text-lg text-[#61574d] max-w-2xl mx-auto leading-relaxed mb-8">
          {lang === 'en'
            ? 'Gathering scattered thoughts into meaningful contexts, and sharing warmth through writing and thoughtful projects.'
            : '흩어지는 생각의 조각을 모아 단단한 맥락으로 엮고, 글과 프로젝트를 통해 사람과 사람 사이의 따뜻한 온기를 나눕니다.'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => onNavigate('journal')}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#4a3f35] text-[#faf8f5] font-medium text-sm hover:bg-[#342c25] transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-amber-200" />
            <span>기록과 생각 읽기</span>
          </button>

          <button
            onClick={() => onNavigate('guestbook')}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/85 backdrop-blur-xs text-[#4a3f35] border border-[#d6c7b2] font-medium text-sm hover:bg-[#e8ded1] transition-all cursor-pointer shadow-xs"
          >
            <MessageSquare className="w-4 h-4 text-[#8b5e3c]" />
            <span>방명록 남기기</span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-white/90 backdrop-blur-xs text-[#5c5044] border border-[#e2d8ca] font-medium text-sm hover:border-[#8b5e3c] hover:text-[#2c2825] transition-all cursor-pointer shadow-xs"
            title="이메일 주소 복사하기"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-medium">복사되었습니다!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-[#8c827a]" />
                <span>{PERSONAL_INFO.email}</span>
                <Copy className="w-3.5 h-3.5 text-[#8c827a]" />
              </>
            )}
          </button>
        </div>

        {/* Warm Visual Mood Frame */}
        {warmBgImage && (
          <div className="relative max-w-2xl mx-auto mb-8 rounded-2xl overflow-hidden border border-[#dfd5c6] shadow-md group">
            <div className="relative h-48 sm:h-64 w-full overflow-hidden">
              <img
                src={warmBgImage}
                alt="조경희의 따뜻한 사색의 공간"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 sm:p-6 text-left">
                <div>
                  <span className="text-[11px] font-medium tracking-wider uppercase text-amber-200">
                    Warmth &amp; Contemplation
                  </span>
                  <p className="text-white font-serif text-sm sm:text-base font-semibold drop-shadow-xs">
                    “햇살이 머무는 테이블 위, 따뜻한 한 잔과 함께 피어나는 사유들”
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Daily Quote Card */}
        <div className="bg-white/80 backdrop-blur-sm border border-[#e2d8ca] rounded-2xl p-5 sm:p-6 text-left relative max-w-2xl mx-auto shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8b5e3c]">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              오늘의 한 줄 사유
            </span>
            <button
              onClick={nextQuote}
              className="text-xs text-[#7a6f66] hover:text-[#2c2825] flex items-center gap-1 px-2 py-1 rounded-md hover:bg-[#e8ded1]/50 transition-colors cursor-pointer"
              title="다른 문장 보기"
            >
              <RefreshCw className="w-3 h-3" />
              <span>다음 문장</span>
            </button>
          </div>
          <blockquote className="text-sm sm:text-base text-[#3d362e] font-serif italic leading-relaxed">
            {DAILY_QUOTES[quoteIndex].text}
          </blockquote>
          <p className="text-right text-xs text-[#8c827a] mt-2 font-medium">
            — {DAILY_QUOTES[quoteIndex].author}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => onNavigate('about')}
            className="text-[#8c827a] hover:text-[#4a3f35] transition-colors flex flex-col items-center gap-1 cursor-pointer group"
          >
            <span className="text-xs font-medium">소개 살펴보기</span>
            <ArrowDown className="w-4 h-4 animate-bounce group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
