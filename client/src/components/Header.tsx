import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" shadow-md">
      <div className="flex flex-row justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="text-md font-bold sm:text-3xl flex flex-wrap">
            <span className="text-orange-600">Search</span>
            <span className="text-blue-800">Room</span>
          </h1>
        </Link>
        <div className="flex flex-row items-center gap-2 sm:gap-20">
          <form className="bg-gray-100 rounded-full flex flex-row items-center">
            <Search size={15} className="ml-5 text-orange-600" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent p-2 rounded-full focus:outline-none w-28 sm:w-80 text-sm sm:text-base"
            />
          </form>
          <ul className="flex sm:gap-4">
            <Link to="/">
              <li className="hidden sm:inline text-blue-800 hover:text-orange-600">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="hidden sm:inline text-blue-800 hover:text-orange-600">
                About
              </li>
            </Link>
            <Link to="/sign-in">
              <li className=" text-blue-800 hover:text-orange-600 text-sm sm:text-base">
                Sign In
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
