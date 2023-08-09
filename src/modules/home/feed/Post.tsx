import { FC } from "react";
import { Avatar } from "../common/Avatar";
import { Link } from "react-router-dom";

export const Post: FC = () => {
  return (
    <article className="flex flex-col bg-white rounded-[16px]">
      <div className="flex flex-col p-[20px]">
        <div className="flex items-start">
          <Avatar isLink size={52} />
          <div className="flex-col w-[calc(100%-52px-20px-220px)] ml-[10px] md:flex hidden">
            <Link to={"/profile"} className="hover:underline">
              <h4 className="text-[16px] leading-[16px]">
                Geethika Isuru Sampath
              </h4>
            </Link>
            <Link
              to={"/universities/srijp"}
              className="mt-[2px] truncate hover:underline text-gray-424242 text-[14px]"
            >
              University of Sri Jayawardenepura
            </Link>
            <span className="text-[12px] text-gray-424242">2d</span>
          </div>
          <div className="flex items-center space-x-[20px] ml-auto">
            <button className="active:scale-95 hover:underline">
              + Follow
            </button>
            <button
              disabled
              className="bg-gray-424242 bg-opacity-10 w-[40px] h-[40px] flex-shrink-0 rounded-full disabled:opacity-40 space-x-[4px] items-center flex justify-center"
            >
              <div className="w-[4px] h-[4px] rounded-full bg-gray-424242 bg-opacity-50"></div>
              <div className="w-[4px] h-[4px] rounded-full bg-gray-424242 bg-opacity-50"></div>
              <div className="w-[4px] h-[4px] rounded-full bg-gray-424242 bg-opacity-50"></div>
            </button>
          </div>
        </div>
        <p className="mt-[10px] text-[18px]">
          What are the two types of software products? Briefly explain them
          giving examples. Describe the original concept of software engineering
          in simple terms.
        </p>
      </div>
      <div className="h-[400px] bg-black"></div>
    </article>
  );
};
