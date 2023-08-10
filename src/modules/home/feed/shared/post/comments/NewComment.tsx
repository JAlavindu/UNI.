import { FC } from "react";
import { Avatar } from "../../../../shared/Avatar";
import emojiIcon from "../../../assets/emoji_icon.svg";
export const NewComment: FC = () => {
  return (
    <div className="bg-lighter-blue py-[10px] pl-[5px] pr-[16px] rounded-tl-[20px] rounded-br-[20px] flex md:flex-row flex-col md:items-center md:space-x-[10px] md:space-y-0 space-y-[10px]">
      <Avatar size={40} isLink />
      <div className="md:w-[calc(100%-60px)] bg-light-blue px-[12px] py-[8px] flex items-center space-x-[10px] rounded-[5px]">
        <input
          type="text"
          className="bg-light-blue placeholder-gray-858EAD w-[calc(100%-30px)] text-[14px]"
          placeholder="Write your comment..."
        />
        <button>
          <img
            src={emojiIcon}
            className="w-[20px] h-[20px] object-contain object-center active:scale-95"
            alt="Add Emojis Icon"
          />
        </button>
      </div>
      <button
        disabled
        className="bg-blue text-white px-[15px] py-[8px] rounded-[6px] active:scale-95 text-[14px] font-medium disabled:active:scale-100 disabled:opacity-40"
      >
        Post
      </button>
    </div>
  );
};
