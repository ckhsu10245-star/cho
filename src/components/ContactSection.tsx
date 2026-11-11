import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, MapPin, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/mockData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    subject: '',
    messageText: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.senderName || !formData.senderEmail || !formData.messageText) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      setFormData({
        senderName: '',
        senderEmail: '',
        subject: '',
        messageText: '',
      });
      setTimeout(() => setSentSuccess(false), 4000);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-[#e8ded1] bg-[#fdfbf7]/75 backdrop-blur-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0e9df] text-xs font-semibold text-[#8b5e3c] mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>연락 &amp; 제안</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#2c2825] mb-4">
            편하게 대화를 건네주세요
          </h2>
          <p className="text-sm sm:text-base text-[#6b6055] leading-relaxed">
            새로운 기획, 프로젝트 협업 제안, 혹은 글에 대한 생각 나눔까지 언제나 환영합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info & Direct Email Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/80 border border-[#e4dcd0] rounded-2xl p-6 sm:p-7 shadow-xs">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8b5e3c] block mb-2">
                직접 연락하기
              </span>
              <h3 className="font-serif font-bold text-xl text-[#2c2825] mb-3">
                이메일로 바로 소통해요
              </h3>
              <p className="text-xs sm:text-sm text-[#665b50] leading-relaxed mb-6">
                가장 확실하고 빠른 연락 창구입니다. 메일을 주시면 소중히 읽고 답변드리겠습니다.
              </p>

              {/* Email Box with Copy */}
              <div className="p-3.5 rounded-xl bg-[#faf8f5] border border-[#dfd5c6] flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#8b5e3c] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[#2c2825] truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white border border-[#dfd5c6] hover:border-[#8b5e3c] text-xs font-medium text-[#4a3f35] flex items-center gap-1 transition-colors cursor-pointer shrink-0"
                  title="이메일 복사"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">복사됨</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>복사</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#4a3f35] text-[#faf8f5] text-xs font-medium hover:bg-[#342c25] transition-colors shadow-xs"
              >
                <span>기본 메일 앱에서 메일 쓰기</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Response & Location Info */}
            <div className="bg-[#f5efe6] border border-[#e2d8ca] rounded-2xl p-6 text-xs text-[#52473c] space-y-3">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#8b5e3c] mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-[#2c2825] block">회신 주기</span>
                  <span>보통 24~48시간 이내에 정성껏 확인하고 답장드립니다.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8b5e3c] mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-[#2c2825] block">활동 지역</span>
                  <span>대한민국 (온/오프라인 미팅 가능)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7 bg-white/80 border border-[#e4dcd0] rounded-2xl p-6 sm:p-8 shadow-xs">
            <h3 className="font-serif font-bold text-xl text-[#2c2825] mb-2">
              간편 문의 양식
            </h3>
            <p className="text-xs sm:text-sm text-[#7a6f66] mb-6">
              아래 양식을 작성해주시면 조경희 님에게 신속히 전달됩니다.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#5c5044] mb-1.5">
                    보내시는 분 이름 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={formData.senderName}
                    onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#faf8f5] border border-[#dfd5c6] rounded-xl focus:outline-hidden focus:border-[#8b5e3c] text-[#2c2825]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5c5044] mb-1.5">
                    회신받으실 이메일 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="example@email.com"
                    value={formData.senderEmail}
                    onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#faf8f5] border border-[#dfd5c6] rounded-xl focus:outline-hidden focus:border-[#8b5e3c] text-[#2c2825]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5c5044] mb-1.5">
                  문의 주제
                </label>
                <input
                  type="text"
                  placeholder="예: 프로젝트 제안, 커피챗 요청, 글에 대한 소감 등"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#faf8f5] border border-[#dfd5c6] rounded-xl focus:outline-hidden focus:border-[#8b5e3c] text-[#2c2825]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5c5044] mb-1.5">
                  메시지 내용 <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="내용을 자유롭게 적어주세요."
                  value={formData.messageText}
                  onChange={(e) => setFormData({ ...formData, messageText: e.target.value })}
                  className="w-full p-3.5 text-xs sm:text-sm bg-[#faf8f5] border border-[#dfd5c6] rounded-xl focus:outline-hidden focus:border-[#8b5e3c] text-[#2c2825] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#4a3f35] text-[#faf8f5] text-xs sm:text-sm font-medium hover:bg-[#342c25] disabled:opacity-50 transition-colors shadow-xs cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{isSending ? '전송하는 중...' : '메시지 전송하기'}</span>
              </button>

              {sentSuccess && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2 animate-in fade-in">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    메시지가 성공적으로 전달되었습니다! 기재해주신 이메일({formData.senderEmail || '주소'})로 곧 연락드리겠습니다.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
