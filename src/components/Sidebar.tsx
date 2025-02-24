import { ShowChatIcon } from "./Icons";
import "./Sidebar.css";

export function Sidebar() {
  return (
    <div className="w-1/6 h-3/4 text-white px-2 py-2">

      <div className="flex flex-row channels-header items-center justify-between px-2">
        <h3 className="title">RECOMMENDED CHANNELS</h3>
        <ShowChatIcon size={18} />
      </div>

      <div>
        <ul>
          <li className="flex flex-row items-center justify-between gap-3 px-2">
            <img src="https://picsum.photos/200/300" alt="channel" className="img" />
            <div className="w-34 flex flex-col">
              <h3 className="title">Channel Name</h3>
              <span className="text-xs text-[#ADADB8]">Coding Live</span>
            </div>
            <div className="flex flex-row items-center gap-1 self-start p-1">
              <div className="h-2 w-2 bg-red-500 rounded-full"></div>
              <span className="text-xs">2.3K</span>
            </div>
          </li>
        </ul>
      </div>

    </div>
  );
}