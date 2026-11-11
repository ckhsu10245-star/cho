import React from 'react';
import { Feather, Heart, Compass, Clock, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/mockData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-[#e8ded1] bg-[#faf8f5]/75 backdrop-blur-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0e9df] text-xs font-semibold text-[#8b5e3c] mb-3">
            <Feather className="w-3.5 h-3.5" />
            <span>소개 &amp; 가치관</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#2c2825] mb-4">
            조경희라는 사람에 대하여
          </h2>
          <p className="text-sm sm:text-base text-[#6b6055] leading-relaxed">
            속도에 휩쓸리지 않고 깊이를 바라보며, 일상에서 길어 올린 생각들을 통해 선한 영향력을 전하고자 합니다.
          </p>
        </div>

        {/* 3 Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PERSONAL_INFO.keywords.map((kw, idx) => (
            <div
              key={idx}
              className="bg-white/80 border border-[#e4dcd0] rounded-2xl p-6 hover:shadow-md hover:border-[#8b5e3c]/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#f2ede4] text-[#8b5e3c] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {idx === 0 && <Feather className="w-5 h-5" />}
                {idx === 1 && <Compass className="w-5 h-5" />}
                {idx === 2 && <Heart className="w-5 h-5" />}
              </div>
              <h3 className="font-serif font-bold text-lg text-[#2c2825] mb-2">
                {kw.title}
              </h3>
              <p className="text-sm text-[#6b6055] leading-relaxed">
                {kw.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Narrative & Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 bg-white/70 border border-[#e4dcd0] rounded-2xl p-6 sm:p-8 space-y-5 text-[#423a32] leading-relaxed">
            <h3 className="font-serif font-bold text-xl text-[#2c2825] pb-2 border-b border-[#e8ded1] flex items-center justify-between">
              <span>생각을 단단히 엮어 내일로 이어갑니다</span>
              <Sparkles className="w-4 h-4 text-amber-500" />
            </h3>
            <p className="text-sm sm:text-base">
              우리는 매일 수많은 생각과 감정, 사건 속을 통과합니다. 그 소용돌이 속에서 스스로의 중심을 지키고 다른 이들과 건강하게 호흡하는 방법은 ‘사유’와 ‘기록’이라고 믿습니다.
            </p>
            <p className="text-sm sm:text-base">
              어떤 일을 마주하든 겉으로 드러나는 현상 너머의 맥락을 살피고, 왜 이 일이 중요한지 본질적인 질문을 던지는 데 익숙합니다. 함께 일하는 사람들과의 신뢰, 투명하고 온기 있는 소통을 언제나 최우선 순위에 둡니다.
            </p>
            <p className="text-sm sm:text-base">
              이 공간은 그러한 저의 발자국이자 생각의 실험실입니다. 편안한 마음으로 둘러보시고, 언제든 반가운 인사나 생각을 남겨주세요.
            </p>

            {/* Interest Pills */}
            <div className="pt-4 border-t border-[#f0e9df]">
              <span className="text-xs font-semibold text-[#8b5e3c] block mb-2.5">
                관심사 및 취향 키워드
              </span>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.interests.map((interest, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-[#f2ede4] text-[#554a3e] border border-[#dfd5c6]"
                  >
                    #{interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Profile Summary Card */}
          <div className="lg:col-span-5 bg-[#f5efe6] border border-[#e2d8ca] rounded-2xl p-6 sm:p-7 space-y-6">
            <div>
              <div className="w-16 h-16 rounded-full bg-[#4a3f35] text-[#faf8f5] font-serif text-2xl font-bold flex items-center justify-center mb-4 shadow-sm">
                조
              </div>
              <h4 className="text-xl font-serif font-bold text-[#2c2825]">
                {PERSONAL_INFO.name}
              </h4>
              <p className="text-xs text-[#8c827a] font-medium mt-0.5">
                {PERSONAL_INFO.englishName}
              </p>
              <p className="text-sm text-[#61574d] mt-2">
                {PERSONAL_INFO.title}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#dfd5c6] text-xs text-[#52473c]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8b5e3c] shrink-0" />
                <span>위치: 대한민국</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#8b5e3c] shrink-0" />
                <span>선호 업무 방식: 체계적 준비, 유연한 협력, 사려 깊은 대화</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>이메일: {PERSONAL_INFO.email}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/60 border border-[#dfd5c6]">
              <span className="text-xs font-semibold text-[#8b5e3c] block mb-1">
                좌우명 (Motto)
              </span>
              <p className="text-xs sm:text-sm text-[#3d362e] italic font-serif">
                {PERSONAL_INFO.motto}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline / Milestones */}
        <div className="bg-white/80 border border-[#e4dcd0] rounded-2xl p-6 sm:p-8">
          <h3 className="font-serif font-bold text-xl text-[#2c2825] mb-6 flex items-center gap-2">
            <span>걸어온 여정 &amp; 주요 발자취</span>
          </h3>
          <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#e4dcd0]">
            {PERSONAL_INFO.timeline.map((item, idx) => (
              <div key={idx} className="relative pl-8 group">
                <div className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#8b5e3c] group-hover:bg-[#8b5e3c] transition-colors" />
                <span className="inline-block text-xs font-bold text-[#8b5e3c] uppercase tracking-wider mb-1">
                  {item.period}
                </span>
                <h4 className="text-base font-semibold text-[#2c2825] mb-1">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#665b50] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
