import { OptionsIcon, SearchIcon, TwitchIcon } from "./Icons";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar flex flex-row w-full h-[50px] bg-[#18181b] p-2 items-center justify-between text-white">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <TwitchIcon size={28} />
          <span>MIDUTCH</span>
        </div>
        <OptionsIcon size={18} />
      </div>

      <div className="flex items-center">
        <input
          dir="ltr"
          type="text"
          placeholder="Search"
          className="w-[356px] h-[40px] border-2 border-[#DEDEE366] p-1.5 rounded-s-md "
        />
        <button
          dir="rtl"
          className="bg-[#53535F61] px-1 h-[40px] rounded-s-md flex items-center"
        >
          <SearchIcon size={24} />
        </button>
      </div>

      <div>Frame 1</div>
    </nav>
  );
}
