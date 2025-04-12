import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

export type ProjectCardProps = {
  name: string; // プロジェクト名
  githubUrl?: string; // GitHub URL (省略可能)
  image: string; // 画像URL
  skills: string[]; // 使用技術の配列
  projectUrl: string; // プロジェクトURL
  deployed: boolean; // デプロイされているかどうか
};

function ProjectCard({ name, githubUrl, image, skills, projectUrl, deployed }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-4 p-4 border border-gray-200 rounded-lg bg-whitesmoke shadow-md"
    >
      <div className="h-[250px] flex items-center justify-center bg-white">
        <Image src={image} alt="サンプル画像" width={600} height={400} className="object-contain w-full h-full" />
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
          <a
            href={githubUrl}
            target="_blank"
            className="text-darkblue p-1
        rounded-full text-lg"
          >
            <AiFillGithub />
          </a>
        )}

        {deployed ? (
          <a
            href={projectUrl}
            target="_blank"
            className="text-darkblue p-1
          rounded-full text-2xl"
          >
            <AiFillEye />
          </a>
        ) : null}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
