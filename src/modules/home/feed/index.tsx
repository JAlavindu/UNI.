import { FC } from "react";
import { Sidebar } from "./Sidebar";
import { NewPost } from "./NewPost";
import { Post } from "./Post";

export const FeedPage: FC = () => {
  return (
    <div className="bg-gray-F3F2EF min-h-screen flex">
      {/* Side bar */}
      <Sidebar />
      <div className="lg:max-w-[600px] xl:max-w-[800px] w-full flex flex-col lg:ml-[56px] bg-light-blue p-[20px] space-y-[56px]">
        <NewPost />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
