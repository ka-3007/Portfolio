import { motion } from 'framer-motion';
import { useSetAtom } from 'jotai';
import Image from 'next/image';
import React, { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import { showProjectDetailState } from '../jotai/atom';

import ProjectModal from './ProjectModal';

export type ProjectCardProps = {
  name: string;
  githubUrl?: string;
  image: string;
  skills: string[];
  projectUrl: string;
  description: string;
  detailImages?: string[];
  period: string;
};

function ProjectCard({
  name,
  githubUrl,
  image,
  skills,
  projectUrl,
  description,
  detailImages,
  period,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const setShowProjectDetail = useSetAtom(showProjectDetailState);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-4 p-4 border border-gray-200 rounded-lg bg-whitesmoke shadow-md"
    >
      <div className="h-[200px] flex items-center justify-center bg-white cursor-pointer">
        <Image
          src={image}
          alt="サンプル画像"
          width={600}
          height={400}
          className="object-contain w-full h-full"
          onClick={() => {
            setIsOpen(true);
            setShowProjectDetail(true);
          }}
        />
      </div>

      <h3 className="ml-2 mt-2">{name}</h3>

      {/* 使用技術セクション */}
      {skills?.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2 text-xs text-white">
          {skills.map((skill, index) => (
            <span key={index} className="bg-darkblue px-2 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      )}
      <div className="flex gap-2 items-center w-full m-1">
        {githubUrl && (
          <a href={githubUrl} target="_blank" className="text-darkblue p-1 rounded-full text-lg">
            <AiFillGithub />
          </a>
        )}

        <a
          href={projectUrl}
          target="_blank"
          className="text-darkblue p-1
          rounded-full text-2xl"
        >
          <AiFillEye />
        </a>
      </div>

      <ProjectModal
        name={name}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        projectUrl={projectUrl}
        githubUrl={githubUrl}
        description={description}
        detailImages={detailImages}
        skills={skills}
        period={period}
        setShowProjectDetail={setShowProjectDetail}
      />
    </motion.div>
  );
}

export default ProjectCard;
