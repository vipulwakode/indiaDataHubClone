import { useState, useEffect, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { useSearch } from "../context/useSearch";

const categoriesList = [
  "India & States",
  "Global Data",
  "BIS",
  "IMF",
  "World Bank",
  "United Nations",
  "Energy Institute",
];

const Header = () => {
  const { isLoggedIn, logout } = useAuth();
  const { searchQuery, setSearchQuery } = useSearch();
  const [searchInput, setSearchInput] = useState(searchQuery);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Global Data");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="flex items-center justify-between bg-[#150E63] h-16 px-6 text-white">
      <h2 className="font-semibold text-lg">IndiaDataHub</h2>
      <div className="flex-1 flex justify-center px-6">
        <div className="relative flex w-full max-w-2xl">
          <div ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="h-11 px-4 bg-white text-black rounded-l-lg border border-gray-300 flex items-center gap-2 text-[15px]"
            >
              {selectedCategory}
              <BiChevronDown
                className={`text-xl transition ${open ? "rotate-180" : ""}`}
              />
            </button>

            {open && (
              <div className="absolute mt-1 bg-white text-black w-56 shadow-lg rounded-lg py-2 z-50">
                {categoriesList.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setSelectedCategory(item);
                      setOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 text-[15px] ${
                      selectedCategory === item ? "bg-gray-100" : ""
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="relative flex-1">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search for data and analytics"
              className="h-11 w-full rounded-r-lg pl-4 pr-10 border border-gray-300 border-l-0 text-black placeholder-gray-500 focus:outline-none"
            />
            <button
              onClick={() => setSearchQuery(searchInput)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-5 items-center">
        <button className="hover:text-gray-300">Databases</button>
        <button className="hover:text-gray-300">Offerings</button>
        <button className="hover:text-gray-300">Contact Us</button>
        {isLoggedIn ? (
          <button
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#150E63] font-semibold"
            onClick={logout}
          >
            VW
          </button>
        ) : (
          <button
            className="bg-white text-[#150E63] px-4 py-2 rounded-lg font-medium"
            onClick={() => navigate("/")}
          >
            Login/Signup
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
