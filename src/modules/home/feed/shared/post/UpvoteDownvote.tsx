import { FC, useState } from "react";
import upvoteIcon from "../../assets/upvote_icon.svg";
import downVoteIcon from "../../assets/downvote_icon.svg";

export const UpvoteDownvote: FC = () => {
  const [upvotes, setUpvotes] = useState(123);
  const [upVoted, setUpVoted] = useState(false);
  const [downVoted, setDownVoted] = useState(false);
  return (
    <div className="bg-lighter-blue border rounded-[10px] flex">
      <button
        onClick={() => {
          setUpvotes((ouv) => (upVoted ? ouv - 1 : ouv + 1));
          setDownVoted(false);
          setUpVoted((ouv) => !ouv);
        }}
        className={`flex items-center group space-x-[10px] p-[10px] border-r rounded-l-[10px] active:bg-light-blue ${
          upVoted ? "bg-blue bg-opacity-40" : ""
        }`}
      >
        <img
          src={upvoteIcon}
          className="w-[26px] h-[26px] group-active:scale-105 object-contain object-center"
          alt="Upvote Icon"
        />
        <span className="font-medium text-[14px]">
          Upvote&nbsp;&nbsp;
          {Intl.NumberFormat("en", { notation: "compact" }).format(upvotes)}
        </span>
      </button>
      <button
        onClick={() => {
          setUpvotes((ouv) => (upVoted ? ouv - 1 : ouv));
          setUpVoted(false);
          setDownVoted((ouv) => !ouv);
        }}
        className={`p-[10px] group rounded-r-[10px] active:bg-black active:bg-opacity-5 ${
          downVoted ? "bg-blue bg-opacity-40" : ""
        }`}
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
