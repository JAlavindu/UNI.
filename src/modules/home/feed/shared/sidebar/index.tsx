import { FC } from "react";
import { MenuItem } from "./MenuItem";
import iconNew from "../../assets/menu_new.png";
import iconPopular from "../../assets/menu_popular.png";
import iconFollowers from "../../assets/menu_followers.png";
import { Tag } from "./Tag";

export const Sidebar: FC = () => {
  return (
    <div className="lg:col-span-4 xl:col-span-3 lg:flex hidden sticky top-[72px] h-[calc(100vh-72px)] p-[20px] flex-col">
      <div className="bg-white p-[20px] rounded-[16px] flex flex-col max-h-[calc(50%-40px)] space-y-[10px] overflow-auto">
        <MenuItem
          title="Newest and Recent"
          subTitle="Find the latest update"
          theme="#0ECC8D"
          icon={iconNew}
        />
        <MenuItem
          title="Popular of the day"
          subTitle="Shots featured today by curators"
          theme="#EEA956"
          icon={iconPopular}
          active
        />
        <MenuItem
          title="Following"
          subTitle="Explore from your favorite person"
          theme="#FF6934"
          icon={iconFollowers}
          count={24}
        />
      </div>
      <div className="bg-white px-[20px] pb-[20px] rounded-[16px] mt-[20px] max-h-[calc(50%-40px)] overflow-auto">
        <div className="pt-[20px] pb-[15px] bg-white text-center text-[17px] font-medium sticky top-0">
          Popular Tags
        </div>
        <Tag title="programming" subTitle="82,645 Posted • Trending" />
        <Tag title="computing" subTitle="65,523 Posted • Trending" />
        <Tag title="design" subTitle="51,354 • Trending " />
        <Tag title="business" subTitle="48,029 Posted by this tag" />
        <Tag title="tutorial" subTitle="51,354 • Trending " />
        <Tag title="moraEXMO" subTitle="99,645 Posted by this tag" />
      </div>
    </div>
  );
};
