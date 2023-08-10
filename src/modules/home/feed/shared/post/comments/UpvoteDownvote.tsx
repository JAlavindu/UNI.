import { FC, useState } from "react";
import upvoteIcon from "../../../assets/upvote_icon.svg";
import downVoteIcon from "../../../assets/downvote_icon.svg";

export const UpvoteDownvote: FC = () => {
  const [upvotes, setUpvotes] = useState(123);
  const [upVoted, setUpVoted] = useState(false);
  const [downVoted, setDownVoted] = useState(false);
  return (
    <div className="bg-lighter-blue border rounded-[10px] flex w-max max-w-full ml-[10px]">
      <button
        onClick={() => {
          setUpvotes((ouv) => (upVoted ? ouv - 1 : ouv + 1));
          setDownVoted(false);
          setUpVoted((ouv) => !ouv);
        }}
        className={`${
          upVoted ? "bg-blue bg-opacity-40" : ""
        } flex items-center disabled:bg-light-blue group space-x-[6px] px-[5px] py-[3px] border-r rounded-l-[10px] active:bg-light-blue`}
      >
        <img
          src={upvoteIcon}
          className="w-[26px] h-[26px] group-disabled:active:scale-100 group-active:scale-105 object-contain object-center"
          alt="Upvote Icon"
        />
        <span className="font-medium text-[13px]">
          {Intl.NumberFormat("en", { notation: "compact" }).format(upvotes)}
        </span>
      </button>
      <button
        onClick={() => {
          setUpvotes((ouv) => (upVoted ? ouv - 1 : ouv));
          setUpVoted(false);
          setDownVoted((ouv) => !ouv);
        }}
        className={`${
          downVoted ? "bg-blue bg-opacity-40" : ""
        } px-[5px] py-[3px] group rounded-r-[10px] active:bg-black active:bg-opacity-5`}
      >
        <img
          src={downVoteIcon}
          className="w-[26px] h-[26px] group-active:scale-105 object-contain object-center"
          alt="Downvote Icon"
        />
      </button>
    </div>
  );
};
