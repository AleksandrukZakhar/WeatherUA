import { useState } from "react";
import Menu from "./Menu";
import Link from "./Clases/Link";

const Header = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [menuState, setMenuState] = useState("flex");

  return (
    <nav className="w-full h-16 bg-blue-600">
      <div className="flex flex-row flex-1 items-center justify-between h-16">
        <div className="flex space-x-2 ml-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-current text-gray-50 mt-0.5"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-bold uppercase text-gray-50">погода ua</span>
        </div>
        <div className="flex space-x-4 mr-10">
          <Link text="Головна" />
          <Link text="Про нас" />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          className={`${menuState} md:hidden w-6 h-6 fill-current text-gray-50`}
          onClick={() => {
            setVisibleMenu(true);
            setMenuState("hidden");
          }}
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>

        {visibleMenu ? <Menu setVisibleMenu={setVisibleMenu()} /> : null}
      </div>
    </nav>
  );
};

export default Header;
