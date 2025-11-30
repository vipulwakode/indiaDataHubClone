import { BiChevronDown } from "react-icons/bi";
import { FaCaretRight } from "react-icons/fa6";
import type { CategoryNode } from "../../types/categoryNode";
type SidebarProps = {
  categories: CategoryNode;
  onCategorySelect: (type: "india" | "global") => void;
};

const Sidebar = ({ categories, onCategorySelect }: SidebarProps) => {
  console.log(categories);
  return (
    <div className="flex flex-col h-full w-64 relative">
      <div className="group m-1 rounded-lg relative">
        <button className="w-full bg-[rgb(206,219,245)] rounded-lg p-3 cursor-pointer flex justify-between items-center focus:outline-none">
          <span className="text-lg font-semibold">Category</span>
          <span className="text-xl rotate-0 group-focus-within:rotate-180 transition">
            <BiChevronDown />
          </span>
        </button>
        <div
          className="
            hidden
            group-focus-within:block
            absolute left-0 right-0 top-14
            bg-white
            text-[rgba(0,0,0,0.87)]
            shadow-[0px_5px_5px_-3px_rgba(0,0,0,0.2),0px_8px_10px_1px_rgba(0,0,0,0.14),0px_3px_14px_2px_rgba(0,0,0,0.12)]
            rounded-xl p-2 z-20"
        >
          <button
            className="block w-full text-left py-2 px-2 hover:bg-gray-100"
            onClick={() => onCategorySelect("india")}
          >
            India & States
          </button>
          <button
            className="block w-full text-left py-2 px-2 hover:bg-gray-100"
            onClick={() => onCategorySelect("global")}
          >
            Global Data
          </button>
          <button className="block w-full text-left py-2 px-2 hover:bg-gray-100">
            BIS
          </button>
          <button className="block w-full text-left py-2 px-2 hover:bg-gray-100">
            IMF
          </button>
        </div>
      </div>

      {/* Sidebar Items */}
      <div className="flex-1 mt-2 rounded-lg bg-[rgb(245,248,253)] overflow-y-auto p-2">
        {Object.keys(categories).map((cat) => (
          <button className="w-full flex items-center gap-1 text-left py-2 px-2 rounded hover:bg-blue-100">
            <FaCaretRight />
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
