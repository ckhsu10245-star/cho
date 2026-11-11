import React from 'react';
import { BookMarked, Coffee, Music, Trees, PenTool, Star, Quote } from 'lucide-react';
import { BookItem } from '../types';

interface BookshelfSectionProps {
  books: BookItem[];
}

export const BookshelfSection: React.FC<BookshelfSectionProps> = ({ books }) => {
  const tastes = [
    {
      icon: <Coffee className="w-4 h-4 text-amber-700" />,
      title: '아침 핸드드립 커피',
      desc: '원두를 직접 갈아 내리는 고요한 10분, 하루를 여는 가장 아끼는 리추얼입니다.',
    },
    {
      icon: <PenTool className="w-4 h-4 text-blue-700" />,
      title: '만년필과 노트',
      desc: '종이 위를 스치는 사각거림 속에서 머릿속 소음이 정돈되는 기분을 좋아합니다.',
    },
    {
      icon: <Trees className="w-4 h-4 text-emerald-700" />,
      title: '계절의 숲 산책',
      desc: '햇살과 바람, 나뭇잎이 부딪히는 소리를 들으며 걷다 보면 새로운 영감이 차오릅니다.',
    },
    {
      icon: <Music className="w-4 h-4 text-purple-700" />,
      title: '잔잔한 어쿠스틱 & 클래식',
      desc: '생각에 깊이를 더해주고 마음에 여백을 마련해 주는 플레이리스트를 즐겨 듣습니다.',
    },
  ];

  return (
    <section id="bookshelf" className="py-16 md:py-24 border-t border-[#e8ded1] bg-[#fdfbf7]/75 backdrop-blur-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0e9df] text-xs font-semibold text-[#8b5e3c] mb-3">
            <BookMarked className="w-3.5 h-3.5" />
            <span>서재 &amp; 취향</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#2c2825] mb-4">
            마음을 채우는 문장과 취향
          </h2>
          <p className="text-sm sm:text-base text-[#6b6055] leading-relaxed">
            나를 빚어낸 소중한 책들의 구절과, 일상을 지탱하는 온기 있는 취향들입니다.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white/80 border border-[#e4dcd0] rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#2c2825] group-hover:text-[#8b5e3c] transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-xs text-[#8c827a] font-medium">{book.author} 저</p>
                  </div>
                  <div className="flex gap-0.5 text-amber-500">
                    {Array.from({ length: book.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="my-3.5 p-3.5 rounded-xl bg-[#f8f4ee] border-l-3 border-[#8b5e3c]">
                  <p className="text-xs sm:text-sm text-[#4d443b] font-serif italic leading-relaxed">
                    {book.quote}
                  </p>
                </div>

                <p className="text-xs text-[#665b50] leading-relaxed mt-2">
                  <span className="font-semibold text-[#8b5e3c]">나의 단상: </span>
                  {book.thought}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Favorite Lifestyle Elements */}
        <div className="bg-[#f5efe6] border border-[#e2d8ca] rounded-2xl p-6 sm:p-8">
          <h3 className="font-serif font-bold text-lg sm:text-xl text-[#2c2825] mb-2 flex items-center gap-2">
            <span>일상을 채우는 소박한 기쁨들</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#7a6f66] mb-6">
            평범한 하루를 특별하게 물들이는 조경희의 작은 취향의 조각들입니다.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tastes.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/85 border border-[#dfd5c6] rounded-xl p-4.5 hover:border-[#8b5e3c] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#f0e9df] flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-[#2c2825] mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-[#6b6055] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
