import { FC, useState } from "react";
import { Avatar } from "../../shared/Avatar";
import PollsIcon from "../assets/polls_icon.svg";
import PostIcon from "../assets/post_icon.svg";

const Button: FC<{ children: string; onClick: () => void; icon: string }> = ({
  icon,
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      title={children}
      className="bg-light-blue flex items-center space-x-[16px] font-medium text-[18px] rounded-[12px] active:bg-opacity-80 py-[13px] pl-[16px] pr-[24px]"
    >
      <img
        src={icon}
        alt={children}
        className="object-contain object-center w-[30px] h-[30px] flex-shrink-0"
      />
      <span>{children}</span>
    </button>
  );
};

export const NewPost: FC = () => {
  const [content, setContent] = useState("");
  return (
    <div className="bg-white p-[20px] rounded-[12px] flex md:flex-row flex-col">
      <Avatar size={64} isLink />
      <div className="flex flex-col md:w-[calc(100%-20px-64px)] md:ml-auto mt-[20px] md:mt-0">
        <textarea
          onChange={(e) => setContent(e.target.value)}
          autoFocus
          placeholder="Let’s share what going on your mind..."
          className={`resize-none h-[110px] rounded-[12px] bg-gray-F3F2EF p-[16px] placeholder-gray-858EAD ${
            !content ? "text-[16px]" : "text-[20px]"
          } font-medium`}
        ></textarea>

        <div className="flex justify-end space-x-[20px] mt-[15px]">
          <Button onClick={() => {}} icon={PostIcon}>
            Post
          </Button>
          <Button onClick={() => {}} icon={PollsIcon}>
            Polls
          </Button>
        </div>
      </div>
    </div>
  );
};
