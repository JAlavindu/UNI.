import { FC, useState } from "react";
import { NewComment } from "./NewComment";
import { Comment } from "./Comment";

export const Comments: FC = () => {
  const [showing, setShowing] = useState(false);
  return (
    <div className="p-[20px] flex flex-col">
      <button
        onClick={() => setShowing((cs) => !cs)}
        className="bg-gray-F3F2EF p-[10px] active:bg-opacity-80 text-center rounded-[10px]"
      >
        {showing ? "Hide" : "Show"} Comments(1)
      </button>
      {showing ? (
        <div className="flex flex-col space-y-[20px] max-h-[50vh] overflow-auto mt-[20px] pr-[10px]">
          <NewComment />
          <Comment />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
