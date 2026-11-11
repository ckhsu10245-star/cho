import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { JournalSection } from './components/JournalSection';
import { ProjectsSection } from './components/ProjectsSection';
import { BookshelfSection } from './components/BookshelfSection';
import { GuestbookSection } from './components/GuestbookSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ArticleModal } from './components/ArticleModal';
import { ARTICLES_DATA, PROJECTS_DATA, BOOKS_DATA, INITIAL_GUESTBOOK } from './data/mockData';
import { Article, GuestbookEntry } from './types';
import warmBgImage from './assets/images/warm_bg_aesthetic_1794375917764.jpg';
import { Sun, Sparkles, Sliders } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [bgWarmth, setBgWarmth] = useState<'soft' | 'warm' | 'cozy'>(() => {
    return (localStorage.getItem('ckh_bg_warmth') as 'soft' | 'warm' | 'cozy') || 'warm';
  });
  const [articles, setArticles] = useState<Article[]>(() => {
    const saved = localStorage.getItem('ckh_articles_likes');
    if (saved) {
      try {
        const parsedLikes = JSON.parse(saved);
        return ARTICLES_DATA.map((art) => ({
          ...art,
          likes: parsedLikes[art.id] !== undefined ? parsedLikes[art.id] : art.likes,
        }));
      } catch {
        return ARTICLES_DATA;
      }
    }
    return ARTICLES_DATA;
  });

  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const [guestbookEntries, setGuestbookEntries] = useState<GuestbookEntry[]>(() => {
    const saved = localStorage.getItem('ckh_guestbook_entries');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_GUESTBOOK;
      }
    }
    return INITIAL_GUESTBOOK;
  });

  // Keep guestbook in localStorage
  useEffect(() => {
    localStorage.setItem('ckh_guestbook_entries', JSON.stringify(guestbookEntries));
  }, [guestbookEntries]);

  // Keep articles likes in localStorage
  useEffect(() => {
    const likesMap: Record<string, number> = {};
    articles.forEach((a) => {
      likesMap[a.id] = a.likes;
    });
    localStorage.setItem('ckh_articles_likes', JSON.stringify(likesMap));
  }, [articles]);

  // Scrollspy to highlight active section in Navbar
  useEffect(() => {
    const sections = ['hero', 'about', 'journal', 'projects', 'bookshelf', 'guestbook', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 160;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleLikeArticle = (id: string) => {
    setArticles((prev) =>
      prev.map((art) => {
        if (art.id === id) {
          const updated = { ...art, likes: art.likes + 1 };
          if (selectedArticle && selectedArticle.id === id) {
            setSelectedArticle(updated);
          }
          return updated;
        }
        return art;
      })
    );
  };

  const handleAddGuestbookEntry = (name: string, message: string, emoji: string) => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}. ${String(today.getMonth() + 1).padStart(2, '0')}. ${String(today.getDate()).padStart(2, '0')}`;
    const newEntry: GuestbookEntry = {
      id: `gb-${Date.now()}`,
      name,
      message,
      emoji,
      date: formattedDate,
      likes: 0,
    };
    setGuestbookEntries((prev) => [newEntry, ...prev]);
  };

  const handleLikeGuestbookEntry = (id: string) => {
    setGuestbookEntries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, likes: item.likes + 1 } : item))
    );
  };

  const changeBgWarmth = (mode: 'soft' | 'warm' | 'cozy') => {
    setBgWarmth(mode);
    localStorage.setItem('ckh_bg_warmth', mode);
  };

  return (
    <div className="min-h-screen flex flex-col relative text-[#2c2825] selection:bg-amber-200 selection:text-amber-900">
      {/* Warm Background Image Layers */}
      <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden select-none">
        <img
          src={warmBgImage}
          alt="Warm Aesthetic Background"
          className={`w-full h-full object-cover object-center transition-all duration-700 ${
            bgWarmth === 'cozy'
              ? 'opacity-38 scale-105 filter blur-xs'
              : bgWarmth === 'soft'
              ? 'opacity-16 scale-100 filter blur-sm'
              : 'opacity-26 scale-100 filter blur-[0.5px]'
          }`}
        />
        {/* Soft Warm Tint Overlay */}
        <div
          className={`absolute inset-0 transition-colors duration-700 ${
            bgWarmth === 'cozy'
              ? 'bg-gradient-to-b from-[#faf5ee]/80 via-[#fdf8f3]/82 to-[#f4ebe0]/88'
              : bgWarmth === 'soft'
              ? 'bg-[#faf8f5]/92'
              : 'bg-gradient-to-b from-[#faf6f0]/85 via-[#fcf9f5]/87 to-[#f6efe5]/90'
          }`}
        />
      </div>

      {/* Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        <Hero onNavigate={handleNavigate} warmBgImage={warmBgImage} />
        <AboutSection />
        <JournalSection
          articles={articles}
          onSelectArticle={(art) => setSelectedArticle(art)}
          onLikeArticle={handleLikeArticle}
        />
        <ProjectsSection projects={PROJECTS_DATA} />
        <BookshelfSection books={BOOKS_DATA} />
        <GuestbookSection
          entries={guestbookEntries}
          onAddEntry={handleAddGuestbookEntry}
          onLikeEntry={handleLikeGuestbookEntry}
        />
        <ContactSection />
      </main>

      {/* Floating Warm Background Mood Control */}
      <div className="fixed bottom-5 left-5 z-40 hidden sm:flex items-center gap-1.5 p-1.5 rounded-full bg-white/85 backdrop-blur-md border border-[#e2d8ca] shadow-md text-xs text-[#5c5044]">
        <div className="flex items-center gap-1 pl-2 pr-1 text-[11px] font-medium text-[#8b5e3c]">
          <Sun className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
          <span>배경 온도:</span>
        </div>
        <button
          onClick={() => changeBgWarmth('soft')}
          className={`px-2.5 py-1 rounded-full transition-all cursor-pointer text-[11px] ${
            bgWarmth === 'soft'
              ? 'bg-[#4a3f35] text-white font-medium shadow-xs'
              : 'hover:bg-[#f2ede4] text-[#7a6f66]'
          }`}
        >
          은은함
        </button>
        <button
          onClick={() => changeBgWarmth('warm')}
          className={`px-2.5 py-1 rounded-full transition-all cursor-pointer text-[11px] ${
            bgWarmth === 'warm'
              ? 'bg-[#4a3f35] text-white font-medium shadow-xs'
              : 'hover:bg-[#f2ede4] text-[#7a6f66]'
          }`}
        >
          따뜻함
        </button>
        <button
          onClick={() => changeBgWarmth('cozy')}
          className={`px-2.5 py-1 rounded-full transition-all cursor-pointer text-[11px] ${
            bgWarmth === 'cozy'
              ? 'bg-[#4a3f35] text-white font-medium shadow-xs'
              : 'hover:bg-[#f2ede4] text-[#7a6f66]'
          }`}
        >
          포근함
        </button>
      </div>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Article Reading Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onLike={handleLikeArticle}
      />
    </div>
  );
}
