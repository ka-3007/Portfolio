import React from 'react';
import { AiFillBulb } from 'react-icons/ai';

import SkillCard from './SkillCard';

function Skills() {
  return (
    <section className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white" id="skills">
      <div className="max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2">
            <span>
              <AiFillBulb className="w-4 h-4" />
            </span>
            使用技術・開発環境
          </p>
        </div>

        <small className="block text-gray-500 text-xs mt-6">
          ★は自分の中で一番得意な技術を5として、それに対する相対的な評価です。
        </small>

        {/* グリットレイアウト */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-xs:grid-cols-1 mt-6">
          <SkillCard name="HTML" imageSrc="/assets/skills/html.png" rating={3} experienceYears={2} />
          <SkillCard name="CSS" imageSrc="/assets/skills/css.png" rating={3} experienceYears={2} />
          <SkillCard name="Javascript" imageSrc="/assets/skills/js.png" rating={5} experienceYears={2} />
          <SkillCard name="php" imageSrc="/assets/skills/php.png" rating={5} experienceYears={1} />

          <SkillCard name="Jquery" imageSrc="/assets/skills/jquery.png" rating={3.5} experienceYears={1} />
          <SkillCard name="Vue.js" imageSrc="/assets/skills/vuejs.png" rating={3.5} experienceYears={1} />
          <SkillCard name="React" imageSrc="/assets/skills/react.png" rating={5} experienceYears={1} />
          <SkillCard name="React Native" imageSrc="/assets/skills/react-native.png" rating={3} experienceYears={1} />
          <SkillCard name="Nextjs" imageSrc="/assets/skills/nextjs.png" rating={5} experienceYears={1} />
          <SkillCard name="Laravel" imageSrc="/assets/skills/laravel.png" rating={5} experienceYears={1} />

          <SkillCard name="WordPress" imageSrc="/assets/skills/wordpress.png" rating={3} experienceYears={1} />

          <SkillCard name="Bootstrap" imageSrc="/assets/skills/bootstrap.png" rating={3} experienceYears={1} />
          <SkillCard name="Tailwind CSS" imageSrc="/assets/skills/tailwindcss.png" rating={3} experienceYears={1} />

          <SkillCard name="Git" imageSrc="/assets/skills/git.png" rating={4} experienceYears={2} />
          <SkillCard name="Docker" imageSrc="/assets/skills/docker.png" rating={3.5} experienceYears={1} />
          <SkillCard name="MySQL" imageSrc="/assets/skills/mysql.png" rating={3} experienceYears={1} />
          <SkillCard name="AWS" imageSrc="/assets/skills/aws.png" rating={3} experienceYears={1} />
          <SkillCard name="Firebase" imageSrc="/assets/skills/firebase.png" rating={3.5} experienceYears={1} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
