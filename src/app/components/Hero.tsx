import Image from 'next/image';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

import '../animations.css';
import ZennIconLink from './common/ZennIconLink';

function Hero() {
  return (
    <section className="w-full lg:max-h-[70vh] h-fit bg-[#f5f5f5] relative px-6 py-16 max-xs:px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center h-full gap-12 text-center lg:text-left">
        {/* 左側：テキスト */}
        <div className="flex flex-col gap-6 items-center lg:items-start z-40">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            <span className="block">MY</span>
            <span className="block text-primary">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-md">エンジニアとしての実績やスキルを紹介しています。</p>
          <div className="flex gap-4 max-md:justify-center">
            <ZennIconLink />
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ka-3007/" className="text-3xl">
              <AiFillGithub />
            </a>
          </div>
        </div>

        {/* 右側：ロゴ画像 */}
        <div className="z-10">
          <Image
            src="/assets/logo.png"
            width={350}
            height={350}
            alt="heroImage"
            className="rounded-full shadow-xl transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* animationcss */}
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
