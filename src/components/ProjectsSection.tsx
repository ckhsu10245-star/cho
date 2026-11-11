import React, { useState } from 'react';
import { Layers, Calendar, CheckCircle, Tag, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const categories = ['전체', '기획 & 운영', '연구 & 분석', '콘텐츠 & 브랜딩', '개인 프로젝트'];

  const filteredProjects = projects.filter((p) =>
    selectedCategory === '전체' ? true : p.category === selectedCategory
  );

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-[#e8ded1] bg-[#faf8f5]/75 backdrop-blur-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0e9df] text-xs font-semibold text-[#8b5e3c] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>프로젝트 &amp; 활동</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#2c2825] mb-4">
            손끝으로 일궈낸 작업들
          </h2>
          <p className="text-sm sm:text-base text-[#6b6055] leading-relaxed">
            아이디어를 구체적인 구조로 빚어내고, 더 나은 가치를 만들기 위해 헌신한 프로젝트들입니다.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#4a3f35] text-[#faf8f5]'
                  : 'bg-[#f2ede4] text-[#6b6055] hover:bg-[#e8ded1] hover:text-[#2c2825]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/80 border border-[#e4dcd0] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md hover:border-[#8b5e3c]/60 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#8c827a] mb-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#f2ede4] text-[#8b5e3c] font-medium text-[11px]">
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1 text-[#8c827a]">
                    <Calendar className="w-3 h-3" />
                    {project.period}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#2c2825] group-hover:text-[#8b5e3c] transition-colors mb-1.5">
                  {project.title}
                </h3>
                <p className="text-xs text-[#8b5e3c] font-medium mb-3">
                  {project.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#5c5248] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="bg-[#faf8f5] p-3.5 rounded-xl border border-[#ece4d9] mb-4 space-y-1.5">
                  <span className="text-[11px] font-bold text-[#7a6f66] uppercase tracking-wider block">
                    주요 성과 및 역할: {project.role}
                  </span>
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-[#4d443b]">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#f0e9df]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-[#f2ede4] text-[#6b6055]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
