import React from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="bg-zinc-900 z-10 sticky top-0 z-20 border-b border-solid border-zinc-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img src="/lambda.webp" className="mr-3" alt="Lambda icon" height={32} width={32} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jeb's portfolio</span>
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-orange-700 focus:outline-none
                        focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className={"w-full md:block md:w-auto" + (navbarOpen ? " block" : " hidden")} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href={"#home"}
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:hover:text-orange-700 md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href={"#skills"}
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-orange-700 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href={"#projects"}
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-orange-700 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href={"#about"}
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-orange-700 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href={"#contact"}
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-orange-700 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0"
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
