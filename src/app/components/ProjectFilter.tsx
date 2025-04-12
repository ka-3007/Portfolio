import React, { useEffect } from 'react';

import { Project, projects } from '@/app/constants/projects';
import { Category, CategoryValueType } from '@/app/type/category';

interface ProjectFilterProps {
  activeCategory: CategoryValueType;
  setActiveCategory: (category: CategoryValueType) => void;
  setFiltered: (projects: Project[]) => void;
}

function ProjectFilter({ activeCategory, setActiveCategory, setFiltered }: ProjectFilterProps) {
  useEffect(() => {
    if (activeCategory === Category.ALL) {
      setFiltered(projects);
      return;
    }

    const filtered = projects.filter((projects) => projects.category.includes(activeCategory));
    setFiltered(filtered);
  }, [activeCategory, setFiltered]);

  return (
    <div className="flex flex-wrap gap-5 my-7 justify-start items-center">
      {Object.entries(Category).map(([key, value]) => (
        <button
          key={key}
          className={activeCategory === value ? 'bg-darkblue py-1 px-3 text-white rounded-lg' : ''}
          onClick={() => setActiveCategory(value)}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

export default ProjectFilter;
