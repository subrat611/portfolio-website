import { useContext } from "react";

import { ThemeContext } from "@/context/ThemeModeContext";

import { navItem } from "@/utils";
import { useRouter } from "next/router";

const Header = () => {
  const { themeMode, setThemeMode } = useContext(ThemeContext);

  const router = useRouter();

  const handleNavigation = (route) => {
    router.push(route);
  };

  return (
    <div>
      <header className={`pt-8 flex justify-between sm:items-center sm:py-10`}>
        <p className="font-seaweed text-gray-50 text-2xl pt-2">Subrat</p>
        <ul className="sm:flex">
          {navItem.map((item, i) => (
            <li
              key={i}
              className={`mx-2 font-medium hover:text-gray-100 hover:border-slate-200 cursor-pointer ${
                router.route === item.route ? "text-gray-100" : "text-gray-400"
              }`}
              onClick={() => handleNavigation(item.route)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default Header;
