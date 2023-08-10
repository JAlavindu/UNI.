import { FC } from "react";
import { Avatar } from "../../../../shared/Avatar";
import { Link } from "react-router-dom";
import { UpvoteDownvote } from "./UpvoteDownvote";

export const Comment: FC = () => {
  return (
    <div className="flex flex-col rounded-tl-[24px] rounded-br-[24px] bg-lighter-blue pr-[20px] pb-[20px] pt-[8px] pl-[8px]">
      <div className="flex items-start space-x-[20px] justify-between">
        <div className="flex items-center space-x-[10px]">
          <Avatar size={48} />
          <div className="flex flex-col flex-grow">
            <Link to={"/profile"} className="hover:underline">
              <h4 className="text-[16px] leading-[16px]">Theshawa Dasun</h4>
            </Link>
            <Link
              to={"/universities/srijp"}
              className="mt-[2px] truncate hover:underline text-gray-424242 text-[14px]"
            >
              University of Colombo
            </Link>
          </div>
        </div>
        <button
          disabled
          className="flex space-x-[3px] w-[30px] h-[30px] items-center justify-center disabled:opacity-40"
        >
          <div className="w-[3px] h-[3px] bg-black rounded-full"></div>
          <div className="w-[3px] h-[3px] bg-black rounded-full"></div>
          <div className="w-[3px] h-[3px] bg-black rounded-full"></div>
        </button>
      </div>
      <p className="my-[20px] text-[16px] pl-[10px]">
        I’m saying that you should chatgpt it or google it. Why the f are your
        asking about your problems here?
      </p>
      <UpvoteDownvote />
    </div>
  );
};
