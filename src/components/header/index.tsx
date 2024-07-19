"use client";
import { Menu } from "react-feather";
import { useState, useEffect } from "react";

import { Logo } from "../logo";
import { MobileMenu } from "./components/mobile-menu";

export const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuIsOpened, setMobileMenuIsOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleToggleMenu = (sectionName?: string) => {
    setMobileMenuIsOpened(!mobileMenuIsOpened);

    if (!mobileMenuIsOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    if (sectionName) {
      const section = document.getElementById(sectionName);

      if (section) {
        window.scrollTo({
          top: section.offsetTop - 50,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 h-20 w-full flex-shrink-0 ${
          scrolling
            ? "bg-black bg-opacity-95"
            : "bg-opacity-0 border-none shadow-none"
        }shadow border-b border-slate-6 flex flex-row items-center transition-all duration-300`}
      >
        <div className="w-full h-full max-w-7xl px-5 mx-auto flex items-center justify-between">
          <Logo className="h-10 w-40" />

          <ul className="max-lg:hidden flex flex-row items-center gap-10 lg:-ml-24">
            <li>
              <p className="text-slate-11 hover:text-white transition duration-150 ease-in-out cursor-pointer">
                Companies
              </p>
            </li>

            <li>
              <p className="text-slate-11 hover:text-white transition duration-150 ease-in-out cursor-pointer">
                Technologies
              </p>
            </li>

            <li>
              <p className="text-slate-11 hover:text-white transition duration-150 ease-in-out cursor-pointer">
                Experiences
              </p>
            </li>
          </ul>

          <a
            href="/cv.pdf"
            download
            aria-label="Download curriculum"
            className="max-lg:hidden font-semibold rounded-lg hover:opacity-80 hover:transition hover:duration-300 bg-white text-zero-tributo-black h-10 px-4 flex items-center justify-center"
          >
            Curriculum
          </a>

          <button
            className="h-full flex items-center justify-center lg:hidden"
            aria-label="Menu"
            onClick={() => handleToggleMenu()}
          >
            <Menu size={24} color="#fff" />
          </button>
        </div>
      </header>

      <MobileMenu
        mobileMenuIsOpened={mobileMenuIsOpened}
        handleToggleMenu={handleToggleMenu}
      />
    </>
  );
};