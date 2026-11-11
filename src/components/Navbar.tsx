import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Sparkles, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/mockData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: '소개' },
    { id: 'journal', label: '기록과 생각' },
    { id: 'projects', label: '프로젝트' },
    { id: 'bookshelf', label: '서재 & 취향' },
    { id: 'guestbook', label: '방명록' },
    { id: 'contact', label: '연락처' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e7e1d8] shadow-xs py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Name */}
        <button
          onClick={() => handleItemClick('hero')}
          className="group text-left flex items-center gap-3 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-[#e8ded1] text-[#4a3f35] font-serif font-bold text-lg flex items-center justify-center border border-[#d6c7b2] group-hover:bg-[#4a3f35] group-hover:text-[#faf8f5] transition-colors">
            경희
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-lg tracking-tight text-[#2c2825] group-hover:text-[#8b5e3c] transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-[#8c827a] font-normal hidden sm:inline">
                {PERSONAL_INFO.englishName}
              </span>
            </div>
            <p className="text-[11px] text-[#7a6f66] leading-none">
              생각과 기록의 정원
            </p>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-[#f2ede4]/80 px-3 py-1.5 rounded-full border border-[#e2d8ca]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#4a3f35] text-[#faf8f5] shadow-xs'
                    : 'text-[#5c5248] hover:text-[#2c2825] hover:bg-[#e8ded1]/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Header Right Action */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={() => handleItemClick('contact')}
            className="flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-full bg-[#4a3f35] text-[#faf8f5] hover:bg-[#342c25] transition-colors cursor-pointer shadow-xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>이메일 보내기</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#4a3f35] hover:bg-[#e8ded1] transition-colors cursor-pointer"
          aria-label="메뉴 열기"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#faf8f5] border-b border-[#e2d8ca] px-5 py-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#4a3f35] text-[#faf8f5]'
                    : 'text-[#4a3f35] hover:bg-[#f0e9df]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 mt-2 border-t border-[#e8ded1] flex justify-between items-center">
              <span className="text-xs text-[#7a6f66]">연락처: {PERSONAL_INFO.email}</span>
              <button
                onClick={() => handleItemClick('contact')}
                className="text-xs bg-[#4a3f35] text-white px-3 py-1.5 rounded-full flex items-center gap-1"
              >
                문의하기 <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
