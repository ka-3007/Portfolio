'use client';

import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { AiFillBulb } from 'react-icons/ai';

import { Project } from '@/app/constants/projects';

import { Category, CategoryValueType } from '../type/category';

import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';

function Projects() {
  //フィルタ用
  const [activeCategory, setActiveCategory] = useState<CategoryValueType>(Category.ALL);
  const [filtered, setFiltered] = useState<Project[]>([]);
  const [visibleProjects, setVisibleProjects] = useState(9);
  const loadMoreProjects = () => {
    setVisibleProjects((preVisibleProjects) => preVisibleProjects + 6);
  };

  return (
    <section className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2">
            <span>
              <AiFillBulb className="w-4 h-4" />
            </span>
            開発実績
          </p>
        </div>

        {/* フィルター */}
        <ProjectFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          setFiltered={setFiltered}
        />

        {/* カード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filtered.slice(0, visibleProjects).map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </AnimatePresence>
        </div>

        {/* もっとみる */}
        {visibleProjects < filtered.length && (
          <div className="text-center mt-4">
            <button
              className="bg-darkblue text-white px-2 rounded-md py-1 hover:bg-darkblue/75"
              onClick={loadMoreProjects}
            >
              もっとみる
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
