import { FC } from "react";
import { Sidebar } from "./shared/sidebar";
import { NewPost } from "./shared/NewPost";
import { Post } from "./shared/post";

export const FeedPage: FC = () => {
  return (
    <div className="bg-gray-F3F2EF min-h-screen grid lg:grid-cols-12">
      {/* Side bar */}
      <Sidebar />
      <div className="w-full flex flex-col lg:ml-[56px] p-[20px] space-y-[56px] lg:col-span-7 xl:col-span-5 lg:col-start-5 xl:col-start-4">
        <NewPost />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
