import Link from "next/link";
import { X } from "react-feather";

import { Logo } from "@/components/logo";

interface MobileMenuProps {
  handleToggleMenu: (sectionName?: string) => void;
  mobileMenuIsOpened: boolean;
}

export const MobileMenu = ({
  mobileMenuIsOpened,
  handleToggleMenu,
}: MobileMenuProps) => {
  return (
    <div
      className={`fixed z-50 top-0 right-0 ${
        mobileMenuIsOpened ? "translate-x-0" : "translate-x-full"
      } w-full h-full flex-shrink-0 bg-black bg-opacity-50 transition-transform duration-500 backdrop-blur-md`}
    >
      <div className="fixed top-0 left-0 h-20 w-full flex-shrink-0 bg-transparent flex flex-row items-center">
        <div className="w-full h-full max-w-[1760px] px-5 mx-auto flex items-center justify-between">
          <Logo className="w-40" />

          <button
            aria-label="Close menu button"
            onClick={() => handleToggleMenu()}
          >
            <X size={24} color="#fff" />
          </button>
        </div>
      </div>

      <ul className="flex flex-col items-center justify-center h-full gap-10">
        <li className="max-w-[150px] w-full mx-auto flex items-center justify-center">
          <button
            aria-label="Companies"
            onClick={() => handleToggleMenu("companies")}
            className="text-white"
          >
            Companies
          </button>
        </li>

        <li className="max-w-[150px] w-full mx-auto flex items-center justify-center">
          <button
            aria-label="Technologies"
            onClick={() => handleToggleMenu("technologies")}
            className="text-white"
          >
            Technologies
          </button>
        </li>

        <li className="max-w-[150px] w-full mx-auto flex items-center justify-center">
          <button
            aria-label="Experiences"
            onClick={() => handleToggleMenu("experiences")}
            className="text-white"
          >
            Experiences
          </button>
        </li>

        <li className="mx-auto">
          <Link
            href="/cv.pdf"
            download={true}
            aria-label="Curriculum"
            className="font-semibold rounded-lg hover:opacity-80 hover:transition hover:duration-300 bg-white text-black h-12 px-5 flex items-center justify-center"
          >
            Curriculum
          </Link>
        </li>
      </ul>
    </div>
  );
};
