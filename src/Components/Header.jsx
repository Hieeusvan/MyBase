// import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function Header() {
  const [onSearch, setOnSearch] = useState();
  const [activeNav, setActiveNav] = useState("games");

  useEffect(() => {
    //
  });

  return (
    <header>
      <div className="flex justify-between items-center h-16 w-full px-8 text-gray fixed top-0 bg-white shadow-lg">
        <nav className="item-left flex items-center">
          <ul className="flex items-center gap-6">
            <li className="hover:text-green-400 hover:scale-110 duration-300">
              <Link
                to="/games"
                onClick={() => setActiveNav("games")}
                className="text-2xl flex items-center"
              >
                <span className="material-symbols-outlined mr-1">
                  extension
                </span>
                <span className="text-2xl font-semibold hover:text-violet-500">
                  Demo
                </span>
              </Link>
            </li>

            {/* <hiddenApp/> */}
            {onSearch === 1 ? (
              ""
            ) : (
              <li className="active:skew-y-6 duration-150 hover:text-black">
                <Link
                  to="/games"
                  onClick={() => setActiveNav("games")}
                  className={
                    activeNav === "games"
                      ? "text-[15px] font-medium px-1 text-violet-500 py-5 border-b-2 border-violet-500"
                      : "text-[15px] font-medium px-1 py-5"
                  }
                >
                  Games
                </Link>
              </li>
            )}
            {onSearch === 1 ? (
              ""
            ) : (
              <li className="active:skew-y-6 duration-150 hover:text-black">
                <Link
                  to="/apps"
                  onClick={() => setActiveNav("apps")}
                  className={
                    activeNav === "apps"
                      ? "text-[15px] font-medium text-violet-500 px-1 py-5 border-b-2 border-violet-500"
                      : "text-[15px] font-medium py-5 px-1"
                  }
                >
                  Apps
                </Link>
              </li>
            )}
            {/* <hiddenApp/> */}
          </ul>
        </nav>
        {/* <searchOn> */}
        {onSearch === 1 ? (
          <div className="item-center w-1/3">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pl-3 pointer-events-none">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                autoFocus
                onBlur={() => setOnSearch()}
                type="text"
                id="default-search"
                className="block w-full p-3 ps-10 text-base rounded-xl focus:text-gray-600"
                placeholder="Search..."
                required
              />
            </div>
          </div>
        ) : (
          ""
        )}
        {/* <searchOn/> */}
        <div className="item-right">
          {/* <search> */}
          {!onSearch ? (
            <span
              onClick={() => setOnSearch(1)}
              className="material-symbols-outlined cursor-pointer hover:bg-gray-200 active:bg-violet-300 p-3 rounded-full mr-2"
            >
              search
            </span>
          ) : (
            ""
          )}
          {/* <search/> */}
          <span className="material-symbols-outlined cursor-pointer hover:bg-gray-200 p-3 active:bg-violet-300 rounded-full">
            help
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
