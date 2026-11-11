import React, { useState } from 'react';
import { MessageSquare, Heart, Send, Sparkles, Smile, User, ThumbsUp } from 'lucide-react';
import { GuestbookEntry } from '../types';

interface GuestbookSectionProps {
  entries: GuestbookEntry[];
  onAddEntry: (name: string, message: string, emoji: string) => void;
  onLikeEntry: (id: string) => void;
}

export const GuestbookSection: React.FC<GuestbookSectionProps> = ({
  entries,
  onAddEntry,
  onLikeEntry,
}) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('✨');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const emojiOptions = ['✨', '🌸', '☕', '🌿', '💌', '💡', '🌱', '☀️'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      onAddEntry(name.trim(), message.trim(), selectedEmoji);
      setName('');
      setMessage('');
      setIsSubmitting(false);
      setShowSuccessToast(true);
      setTimeout(() => setShowSuccessToast(false), 3000);
    }, 250);
  };

  return (
    <section id="guestbook" className="py-16 md:py-24 border-t border-[#e8ded1] bg-[#faf8f5]/75 backdrop-blur-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0e9df] text-xs font-semibold text-[#8b5e3c] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>방명록 &amp; 교류</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#2c2825] mb-4">
            따뜻한 흔적을 남겨주세요
          </h2>
          <p className="text-sm sm:text-base text-[#6b6055] leading-relaxed">
            조경희의 공간에 방문해 주셔서 감사합니다. 가벼운 안부나 다정한 응원의 한마디는 큰 힘이 됩니다.
          </p>
        </div>

        {/* Guestbook Form */}
        <div className="bg-white/90 border border-[#e4dcd0] rounded-2xl p-6 sm:p-7 shadow-xs mb-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Name */}
              <div className="flex-1">
                <label className="block text-xs font-semibold text-[#5c5044] mb-1.5">
                  이름 / 닉네임 <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#8c827a] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="방문자님의 이름"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-[#faf8f5] border border-[#dfd5c6] rounded-xl focus:outline-hidden focus:border-[#8b5e3c] text-[#2c2825]"
                    maxLength={30}
                  />
                </div>
              </div>

              {/* Emoji Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#5c5044] mb-1.5">
                  표정 아이콘 선택
                </label>
                <div className="flex items-center gap-1.5 p-1 bg-[#faf8f5] border border-[#dfd5c6] rounded-xl">
                  {emojiOptions.map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setSelectedEmoji(emoji)}
                      className={`w-7 h-7 flex items-center justify-center text-sm rounded-lg transition-all cursor-pointer ${
                        selectedEmoji === emoji
                          ? 'bg-[#4a3f35] text-white scale-110 shadow-xs'
                          : 'hover:bg-[#e8ded1]'
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-[#5c5044] mb-1.5">
                남기고 싶은 이야기 <span className="text-rose-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                placeholder="경희 님에게 전하고 싶은 따뜻한 한 줄, 감상, 혹은 가벼운 안부를 남겨주세요."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 text-xs sm:text-sm bg-[#faf8f5] border border-[#dfd5c6] rounded-xl focus:outline-hidden focus:border-[#8b5e3c] text-[#2c2825] resize-none"
                maxLength={300}
              />
            </div>

            {/* Submit Bar */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-[#8c827a]">
                작성하신 글은 방명록에 소중히 보관됩니다.
              </span>
              <button
                type="submit"
                disabled={isSubmitting || !name.trim() || !message.trim()}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#4a3f35] text-[#faf8f5] text-xs font-medium hover:bg-[#342c25] disabled:opacity-50 transition-colors shadow-xs cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? '등록 중...' : '방명록 남기기'}</span>
              </button>
            </div>
          </form>

          {showSuccessToast && (
            <div className="mt-3 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-in fade-in">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>방명록이 따뜻하게 등록되었습니다. 감사합니다!</span>
            </div>
          )}
        </div>

        {/* Existing Entries List */}
        <div className="space-y-3.5">
          <div className="flex items-center justify-between px-1 mb-2">
            <span className="text-xs font-bold text-[#5c5044]">
              남겨진 이야기 ({entries.length}개)
            </span>
          </div>

          {entries.length === 0 ? (
            <div className="text-center py-10 bg-white/60 rounded-2xl border border-dashed border-[#dfd5c6]">
              <p className="text-xs text-[#7a6f66]">아직 등록된 방명록이 없습니다. 첫 번째 다정한 글을 남겨보세요!</p>
            </div>
          ) : (
            entries.map((entry) => (
              <div
                key={entry.id}
                className="bg-white/80 border border-[#e4dcd0] rounded-xl p-4.5 sm:p-5 flex items-start justify-between gap-4 hover:shadow-xs transition-shadow"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#f2ede4] border border-[#dfd5c6] flex items-center justify-center text-lg shrink-0">
                    {entry.emoji || '✨'}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-xs sm:text-sm text-[#2c2825]">
                        {entry.name}
                      </span>
                      <span className="text-[11px] text-[#8c827a]">
                        {entry.date}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4d443b] leading-relaxed whitespace-pre-wrap">
                      {entry.message}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onLikeEntry(entry.id)}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#faf8f5] hover:bg-[#ffebeb] border border-[#e8ded1] text-xs text-[#7a6f66] hover:text-[#d94e4e] transition-colors cursor-pointer shrink-0"
                  title="공감하기"
                >
                  <Heart className="w-3.5 h-3.5 hover:fill-current" />
                  <span>{entry.likes}</span>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
