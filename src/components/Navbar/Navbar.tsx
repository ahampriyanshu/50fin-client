import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "/logo.png";

function Navbar() {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('color-theme');
      if (typeof storedPrefs === 'string') return storedPrefs;
      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) return 'dark';
    }
    return 'light';
  });

  const rawSetTheme = (rawTheme: string) => {
    const root = window?.document?.documentElement;
    const isDark = rawTheme === 'dark';
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(isDark ? 'dark' : 'light');
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
    }
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <>
      <nav className="bg-white sticky top-0 border-b border-gray-100 dark:border-gray-700 dark:bg-gray-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
              <div className="flex items-center flex-shrink-0">
                <Link to="/">
                  <img width={48} src={logo} />
                </Link>
            </div>
            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-yellow-400 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-yellow-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              <div className="relative ml-3">
                <form action="" method="get">
                  <div className="relative">
                    <input
                      type="text"
                      name="q"
                      id="search"
                      className="p-2 pl-8 rounded border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800
                      text-gray-600 dark:text-gray-200
                       focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                      placeholder="Search..."
                    />
                    <svg
                      className="w-4 h-4 absolute left-2.5 top-3.5 text-gray-600 dark:text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </form>
              </div>

          
              <div className="relative ml-3">
                  <span className="inline-flex rounded-md">
                    <button
                      onClick={toggleMenu}
                      type="button"
                      className="inline-flex items-center px-3 py-2 
                    text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white 
                    border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-600 hover:bg-gray-50 
                    dark:hover:bg-gray-900 hover:text-gray-800 dark:hover:text-gray-100 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-900 active:bg-gray-50"
                    >
                      Options{" "}
                      <svg
                        className="ml-2 -mr-0.5 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </span>

                {isMenuOpen && 
                <div
                  className="absolute right-0 z-50 mt-2 origin-top-right rounded-md shadow-lg"
                >
                  <div className="py-1 bg-white rounded-md dark:bg-gray-700 ring-1 ring-black ring-opacity-5">
                    <div className="w-60">
                      <div className="block px-4 py-2 text-xs text-gray-400">
                        {" "}
                        Other Pages
                      </div>

                      <div>
                        <Link
                          className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100"
                          to="/"
                        >
                          {" "}
                          Home
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100"
                          to="/new-post"
                        >
                          {" "}
                          Add New
                        </Link>
                      </div>

                      <div className="border-t border-gray-100 dark:border-gray-600"></div>
                      <div className="block px-4 py-2 text-xs text-gray-400">
                        {" "}
                        Resources
                      </div>

                      <div>
                        <Link
                          to="/api/?format=json"
                          className="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100"
                        >
                          <div className="flex items-center">
                            <svg
                              className="w-5 h-5 mr-2 text-teal-400"
                              fill="none"
                              stroke-linecap="round"
                              strokeLinejoin="round"
                              stroke-width="2"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <rect
                                x="3"
                                y="3"
                                width="18"
                                height="18"
                                rx="2"
                                ry="2"
                              ></rect>
                              <rect x="7" y="7" width="3" height="9"></rect>
                              <rect x="14" y="7" width="3" height="5"></rect>
                            </svg>
                            <div>API</div>
                          </div>
                        </Link>
                      </div>

                      <div>
                        <Link
                          to="/feed/rss"
                          className="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100"
                        >
                          <div className="flex items-center">
                            <svg
                              className="w-5 h-5 mr-2 text-teal-400"
                              fill="none"
                              stroke-linecap="round"
                              strokeLinejoin="round"
                              stroke-width="2"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M4 11a9 9 0 0 1 9 9"></path>
                              <path d="M4 4a16 16 0 0 1 16 16"></path>
                              <circle cx="5" cy="19" r="1"></circle>
                            </svg>
                            <div>Sitemap</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                }
              </div>
            </div>

            <div className="flex items-center -mr-2 sm:hidden">
              <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-yellow-400 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-yellow-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md dark:text-gray-200 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:text-gray-500"
              >
                <svg
                  className="w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="inline-flex"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                  <path
                    className="hidden"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

{isMenuOpen &&
        <div x-show="mobileMenu" className="sm:hidden">

          <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
            <div className="mt-3 space-y-1">
              <div className="block w-full pb-2 pl-3 pr-4">
                <form action="" method="get">
                  <div className="relative">
                    <input
                      type="text"
                      name="q"
                      id="search"
                      className="p-2 pl-8 rounded border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800
                  text-gray-600 dark:text-gray-200
                   focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                      placeholder="Search..."
                    />
                    <svg
                      className="w-4 h-4 absolute left-2.5 top-3.5 text-gray-600 dark:text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </form>
              </div>

              <div className="block px-4 py-2 text-xs text-gray-400">Other Pages</div>
              <Link
                  className="block py-2 pl-3 pr-4 text-sm dark:hover:bg-gray-600 font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent dark:text-gray-200 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="block py-2 pl-3 pr-4 text-sm dark:hover:bg-gray-600 font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent dark:text-gray-200 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
                  to="/new-post"
                >
                  Add New
                </Link>
              <div className="border-t border-gray-200 dark:border-gray-600"></div>
              <div className="block px-4 py-2 text-xs text-gray-400">
                Resources
              </div>

              <Link
                to="/api/?format=json"
                className="block w-full py-2 pl-3 pr-4 text-sm dark:hover:bg-gray-600 font-medium text-left text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent dark:text-gray-200 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
              >
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-teal-400"
                    fill="none"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect x="7" y="7" width="3" height="9"></rect>
                    <rect x="14" y="7" width="3" height="5"></rect>
                  </svg>
                  <div>API</div>
                </div>
              </Link>
              <Link
                to="/sitemap.xml"
                className="block w-full py-2 pl-3 pr-4 text-sm dark:hover:bg-gray-600 font-medium text-left text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent dark:text-gray-200 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
              >
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-teal-400"
                    fill="none"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 11a9 9 0 0 1 9 9"></path>
                    <path d="M4 4a16 16 0 0 1 16 16"></path>
                    <circle cx="5" cy="19" r="1"></circle>
                  </svg>
                  <div>Sitemap</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
}
      </nav>
    </>
    
  );
}

export default Navbar;
