import Image from 'next/image';
import { JSX } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

type SkillCardProps = {
  name: string;
  imageSrc: string;
  experienceYears: number;
  rating: number; // 例：3.5など
  width?: number;
  height?: number;
};

// 評価スターを描画する関数
const renderStars = (score: number): JSX.Element[] => {
  return Array.from({ length: 5 }, (_, i) => {
    const full = i + 1 <= score;
    const half = i + 0.5 <= score && score < i + 1;

    if (full) return <FaStar key={i} className="text-yellow-400" />;
    if (half) return <FaStarHalfAlt key={i} className="text-yellow-400" />;
    return <FaRegStar key={i} className="text-yellow-400" />;
  });
};

const SkillCard: React.FC<SkillCardProps> = ({
  name,
  imageSrc,
  experienceYears,
  rating,
  width = 100,
  height = 100,
}) => {
  return (
    <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
      <Image src={imageSrc} width={width} height={height} alt={name} className="mb-2" />
      <span>{name}</span>
      {/* 評価 */}
      <div className="flex gap-1 mt-1 text-sm">{renderStars(rating)}</div>
      {/* 実務年数 */}
      <p className="text-gray-600 text-xs mt-2">実務経験：{experienceYears}年</p>
    </div>
  );
};

export default SkillCard;
