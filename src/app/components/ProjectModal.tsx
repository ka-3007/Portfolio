import CloseIcon from '@mui/icons-material/Close';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import type { SetStateAction } from 'jotai';

interface ProjectModalProps {
  name: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  projectUrl: string;
  githubUrl?: string;
  description: string;
  detailImages?: string[];
  skills: string[];
  period: string;
  setShowProjectDetail: (update: SetStateAction<boolean>) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  name,
  isOpen,
  setIsOpen,
  projectUrl,
  githubUrl,
  description,
  detailImages,
  skills,
  period,
  setShowProjectDetail,
}) => {
  const [selectedImage, setSelectedImage] = useState(detailImages && detailImages[0]);

  // if (!isOpen) return null;

  const handleClickOpen = () => {
    setIsOpen(true);
    setShowProjectDetail(true);
  };

  const handleClickClose = () => {
    setIsOpen(false);
    setShowProjectDetail(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleClickClose}
        >
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={handleClickClose}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg w-full max-w-7xl max-h-[80vh] overflow-y-auto relative mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClickClose}
                className="absolute top-1 right-2 text-gray-500 hover:text-black text-xl"
              >
                <CloseIcon />
              </button>

              <div className="flex flex-col lg:flex-row gap-8">
                {/* 左：テキスト */}
                <div
                  className={`w-full ${!detailImages ? 'lg:w-full' : 'lg:w-[40%]'} flex flex-col justify-start min-w-0`}
                >
                  <h2 className="text-2xl font-bold mb-4">{name}</h2>
                  <p className="mb-4 whitespace-pre-line">{description}</p>

                  <div className="flex flex-row items-start gap-x-20 flex-wrap mb-4">
                    {/* 期間 */}
                    <div>
                      <h3 className="text-lg font-semibold mb-1">期間</h3>
                      <p className="text-md">{period}</p>
                    </div>

                    {/* URL */}
                    <div>
                      <h3 className="text-lg font-semibold mb-1">URL</h3>
                      <div className="flex gap-2 items-center">
                        {githubUrl && (
                          <a href={githubUrl} target="_blank" className="text-darkblue px-1 rounded-full text-lg">
                            <AiFillGithub />
                          </a>
                        )}
                        <a href={projectUrl} target="_blank" className="text-darkblue px-1 rounded-full text-2xl">
                          <AiFillEye />
                        </a>
                      </div>
                    </div>
                  </div>

                  {skills?.length > 0 && (
                    <div className="mt-2">
                      <h3 className="text-lg font-semibold mb-2">使用技術</h3>
                      <div className="flex flex-wrap gap-2 text-sm">
                        {skills.map((skill, index) => (
                          <span key={index} className="bg-darkblue text-white px-3 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {detailImages && (
                  <>
                    {/* 右：画像 */}
                    <div className="w-full lg:w-[60%] flex flex-col justify-center items-center">
                      <div className="w-full lg:max-w-[700px] lg:h-[350px] max-w-[500px] h-[250px] flex items-center justify-center mb-4">
                        <Image
                          src={`/assets/projects/detailImages/${selectedImage}`}
                          alt="選択中の画像"
                          width={800}
                          height={600}
                          className="object-contain w-full h-full"
                          onClick={handleClickOpen}
                        />
                      </div>

                      <div className="flex gap-2 overflow-x-auto justify-center w-full">
                        {detailImages.map((img, index) => (
                          <div
                            key={index}
                            className={`w-24 h-16 border ${
                              img === selectedImage ? 'border-blue-500' : 'border-gray-300'
                            } cursor-pointer`}
                            onClick={() => setSelectedImage(img)}
                          >
                            <Image
                              src={`/assets/projects/detailImages/${img}`}
                              alt={`画像${index + 1}`}
                              width={100}
                              height={80}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
