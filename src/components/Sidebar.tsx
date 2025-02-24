import { ShowChatIcon } from "./Icons";
import miduncy from "../assets/images/miduncy.jpg";
import miduxokas from "../assets/images/miduncy.jpg";
import midubai from "../assets/images/midubai.jpg";
import miduelcapo from "../assets/images/miduelcapo.png";
import miduplay from "../assets/images/miduplay.jpg";
import miduvenant from "../assets/images/miduvenant.jpg";
import midutar from "../assets/images/m1dutar.jpg";
import miduxeneize from "../assets/images/miduxeneize.png";
import "./Sidebar.css";

const RECOMMENDED_CHANNELS = [
  {
    name: "Miduncy",
    topic: "Coding Live",
    image: miduncy,
    followers: "2.3K",
  },
  {
    name: "Miduxokas",
    topic: "Debugging Sessions",
    image: miduxokas,
    followers: "1.1K",
  },
  {
    name: "Midubai",
    topic: "Frontend Fun",
    image: midubai,
    followers: "50K",
  },
  {
    name: "Miduelcapo",
    topic: "Backend Magic",
    image: miduelcapo,
    followers: "1.2K",
  },
  {
    name: "Miduplay",
    topic: "JavaScript World",
    image: miduplay,
    followers: "1.1K",
  },
  {
    name: "MiduVENANT",
    topic: "Rust Adventures",
    image: miduvenant,
    followers: "1.5K",
  },
  {
    name: "M1dutar",
    topic: "TypeScript Time",
    image: midutar,
    followers: "3.3K",
  },
  {
    name: "Miduuxeneize",
    topic: "Furvo",
    image: miduxeneize,
    followers: "8.1K",
  },
];

export function Sidebar() {
  return (
    <div className="w-1/6 h-3/4 text-white px-2 py-2">
      <div className="flex flex-row channels-header items-center justify-between px-2">
        <h3 className="title">RECOMMENDED CHANNELS</h3>
        <ShowChatIcon size={18} />
      </div>

      <div>
        <ul className="flex flex-col gap-2">
          {RECOMMENDED_CHANNELS.map(({ name, topic, image, followers }) => (
            <li className="flex flex-row items-center justify-between gap-3 px-2">
              <img src={image} alt="channel" className="img" />
              <div className="w-34 flex flex-col">
                <h3 className="title">{name}</h3>
                <span className="text-xs text-[#ADADB8]">{topic}</span>
              </div>
              <div className="flex flex-row items-center gap-1 self-start p-1">
                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                <span className="text-xs">{followers}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
