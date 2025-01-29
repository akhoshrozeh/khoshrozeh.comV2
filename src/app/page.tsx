"use client"
import './globals.css'

import GitHubCalendar from 'react-github-calendar'
import { useRef, useEffect, useState } from 'react';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCalendarLoaded, setIsCalendarLoaded] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const observer = new MutationObserver(() => {
        setIsCalendarLoaded(true);
        observer.disconnect();
      });

      observer.observe(containerRef.current, { childList: true, subtree: true });
    }
  }, []);

  useEffect(() => {
    if (containerRef.current && isCalendarLoaded) {
      const container = containerRef.current;
      // Use requestAnimationFrame to ensure layout is complete
      requestAnimationFrame(() => {
        // Calculate the desired scroll position
        const targetScrollPosition = Math.max(
          container.scrollWidth - window.innerWidth,
          0
        );
        container.scrollLeft = targetScrollPosition;
      });
    }
  }, [isCalendarLoaded]);

  return (  
    <div className="flex flex-col items-center text-center h-screen">

      <h1 className="text-white md:text-7xl text-4xl">Anthony Khoshrozeh</h1>
      <p className="text-white md:text-3xl text-xl">Software Engineer & Entrepreneur</p>
      <p className="text-white md:text-3xl text-xl">Los Angeles, CA</p>

      {/* Intro */}
      <div className="text-while md:text-2xl text-md mt-8">
        <p>
          I am a software engineer and entrepreneur. I currently run <a href="https://www.devreadz. com"
className="text-blue-500 underline">Devreadz</a>, a platform that helps developers find and read articles, and <a
href="https://jobtrendr. com" className="text-blue-500 underline">Jobtrendr</a>, a app that provides real-time and historical
analytics on the job market.
        </p>
      </div>


      <div className="mt-16">
        <p className="text-white md:text-3xl text-xl">Github Contributions</p>
        <p className="text-white md:text-xl text-sm">It's going to get greener, I promise.</p>
      </div>

      {/* GitHub Calendar Container */}
      <div
        className="w-full mt-8 overflow-x-auto no-scrollbar"
        ref={containerRef}
        dir="rtl"   // Right-to-left layout direction
      >
        <div dir="ltr" className="min-w-[1000px] px-4 flex justify-end xl:justify-center  w-auto">
          <GitHubCalendar
            username="akhoshrozeh"
            style={{ width: '1000px' }}
          />
        </div>
      </div>
    </div>
  );
}
