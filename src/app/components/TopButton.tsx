'use client';

import { useAtomValue } from 'jotai';
import React, { useEffect, useState } from 'react';
import { BsArrowUpSquareFill } from 'react-icons/bs';

import { showProjectDetailState } from '../jotai/atom';

function TopButton() {
  const [scrolling, setScrolling] = useState(false);
  const showProjectDetail = useAtomValue(showProjectDetailState);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      {!showProjectDetail && (
        <div className={scrolling ? 'fixed bottom-[0.5rem] right-[0.7rem] z-50' : 'hidden'}>
          <a href="#home">
            <BsArrowUpSquareFill className="text-cadetblue shadow-md" size={40} />
          </a>
        </div>
      )}
    </>
  );
}

export default TopButton;
