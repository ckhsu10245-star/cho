export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string[];
  category: '생각과 일상' | '배움과 일' | '책과 영감' | '기록';
  date: string;
  readTime: string;
  tags: string[];
  likes: number;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  period: string;
  tags: string[];
  highlights: string[];
  link?: string;
  category: '기획 & 운영' | '연구 & 분석' | '콘텐츠 & 브랜딩' | '개인 프로젝트';
}

export interface BookItem {
  id: string;
  title: string;
  author: string;
  quote: string;
  thought: string;
  rating: number;
  coverColor: string;
}

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  date: string;
  emoji: string;
  likes: number;
  isPrivate?: boolean;
}
