import Link from "next/link";
import { useContext } from "react";

import { ThemeContext } from "@/context/ThemeModeContext";

import { navItem } from "@/utils";
import { DarkThemeIcon, LightThemeIcon, Logo } from "@/utils/icons";

const Header = () => {
  const { themeMode, setThemeMode } = useContext(ThemeContext);

  return (
    <header className="w-11/12 max-w-[780px] mx-auto py-6 flex justify-between items-center">
      <Link className="text-slate-300 cursor-pointer" href="/">
        <Logo />
      </Link>

      <ul className="flex items-center">
        {navItem.map((item, i) => (
          <li
            key={i}
            className="text-slate-300 mx-2 font-medium hover:text-cyan-300"
          >
            <Link href={item.route}>{item.name}</Link>
          </li>
        ))}
      </ul>
      {/* <span className="text-slate-300 cursor-pointer">
        {themeMode === "light" ? (
          <button onClick={() => setThemeMode("dark")}>
            <DarkThemeIcon />
          </button>
        ) : (
          <button onClick={() => setThemeMode("light")}>
            <LightThemeIcon />
          </button>
        )}
      </span> */}
    </header>
  );
};

export default Header;
