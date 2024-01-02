import Link from "next/link";
import { useContext, useState } from "react";

import { ThemeContext } from "@/context/ThemeModeContext";

import { navItem } from "@/utils";
import { DarkThemeIcon, LightThemeIcon, Logo } from "@/utils/icons";
import { IconBuddyMenuIcon } from "@/assets/icons";
import { useRouter } from "next/router";

const Header = () => {
  const { themeMode, setThemeMode } = useContext(ThemeContext);
  const [showMobNav, setShowMobNav] = useState(false);

  const router = useRouter();

  const handleShowMobNav = () => {
    setShowMobNav((prev) => !prev);
  };

  const handleNavigation = (route) => {
    router.push(route);
  };

  return (
    <div>
      <header
        className={`w-11/12 max-w-[780px] mx-auto pt-8 px-4 flex justify-between items-center md:pb-20 md:px-0 ${
          !showMobNav ? "pb-16" : "pb-0"
        }`}
      >
        <img
          src="/profile-pic.jpeg"
          alt="profile-image"
          className="rounded-full w-[48px] h-[48px]"
        />
        <div
          className="cursor-pointer block sm:hidden"
          onClick={handleShowMobNav}
        >
          <IconBuddyMenuIcon />
        </div>
        <ul className="text-lime-100 hidden sm:flex">
          {navItem.map((item, i) => (
            <li
              key={i}
              className={`mx-2 font-medium hover:text-cyan-300 hover:border-slate-200 cursor-pointer ${
                router.route === item.route
                  ? "border-slate-200 text-cyan-300"
                  : "text-slate-300 border-gray-500"
              }`}
              onClick={() => handleNavigation(item.route)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </header>
      {showMobNav && (
        <div className="overflow-x-scroll relative h-28 scrollbar sm:hidden">
          <ul className="text-lime-100 absolute top-9 left-8 flex">
            {navItem.map((item, i) => (
              <li
                key={i}
                className={`mx-2 font-medium hover:text-cyan-300 border-2 hover:border-slate-200 p-2 px-3 rounded-full cursor-pointer ${
                  router.route === item.route
                    ? "border-slate-200 text-cyan-300"
                    : "text-slate-300 border-gray-500"
                }`}
                onClick={() => handleNavigation(item.route)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      <style jsx>{`
        /* Custom styles for the scrollbar */
        .scrollbar {
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
        }

        .scrollbar::-webkit-scrollbar {
          width: 12px; /* Adjust the width as needed */
        }

        .scrollbar::-webkit-scrollbar-thumb {
          background-color: transparent; /* Set the thumb color to transparent */
          border: 4px solid transparent; /* Set a transparent border for better visibility */
          border-radius: 6px; /* Adjust the border-radius as needed */
        }

        .scrollbar::-webkit-scrollbar-track {
          background-color: transparent; /* Set the track color to transparent */
        }
      `}</style>
    </div>
  );
};

export default Header;
