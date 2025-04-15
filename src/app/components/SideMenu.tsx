'use client';

import { useAtomValue } from 'jotai';
import React, { useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { HiMenu, HiX } from 'react-icons/hi';

import { sideMenuLinks } from '@/app/constants/sideMenuLinks';

import { showProjectDetailState } from '../jotai/atom';
import { useMenuStore } from '../store/useMenuStore';

function SideMenu() {
  const { isOpen, closeMobileMenu, toggleMenu } = useMenuStore();
  const [activeLink, setActiveLink] = useState(sideMenuLinks[0]);
  const showProjectDetail = useAtomValue(showProjectDetailState);

  const handleLinkClick = () => {
    closeMobileMenu(); // メニューを閉じる
  };

  const handleScroll = () => {
    const sections = sideMenuLinks.map((link) => document.getElementById(link.sectionId));
    const scrollPosition = window.scrollY;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && section.offsetTop <= scrollPosition + 300) {
        setActiveLink(sideMenuLinks[i]);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <>
      {/* トグルボタン（モバイル用） */}
      {!showProjectDetail && (
        <button
          onClick={toggleMenu}
          className="fixed top-3 left-3 z-[60] p-2 md:hidden bg-white border rounded-md shadow-md"
        >
          {isOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>
      )}

      {/* オーバーレイ（モバイル用） */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40 md:hidden" onClick={closeMobileMenu} />}

      {/* サイドメニュー */}
      <section
        className={`fixed left-0 top-0 z-50 flex h-screen max-w-[300px] flex-col 
        justify-between py-10 px-[20px] lg:px-[80px] max-lg:max-w-[146px]
        bg-white border-r md:px-[20px]
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'max-lg:translate-x-0' : 'max-md:-translate-x-full'} 
        lg:translate-x-0
      `}
      >
        <div
          className="flex w-full flex-1 flex-col gap-10 justify-between
      items-center"
        >
          <div className="flex flex-col justify-center items-center gap-2"></div>

          {/* 中メニューリンク */}
          <div className="w-full flex flex-col gap-3">
            {sideMenuLinks.map((link) => {
              const isActive = activeLink === link;
              return (
                <a
                  key={link.label}
                  href={link.route}
                  className={`
                    relative flex justify-center rounded-lg p-3 
                    ${isActive ? 'bg-cadetblue text-white' : 'hover:bg-gray-100'}
                  `}
                  onClick={handleLinkClick}
                >
                  <p>{link.label}</p>
                </a>
              );
            })}
          </div>

          {/* 下部フッター */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex flex-col lg:flex-row items-center gap-4 mb-3">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/ka-3007/" className="text-3xl">
                <AiFillGithub />
              </a>
            </div>
            <p className="max-lg:hidden" style={{ minWidth: '200px' }}>
              © 2025 KY
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SideMenu;
