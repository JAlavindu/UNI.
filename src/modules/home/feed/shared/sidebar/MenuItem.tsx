import { FC } from "react";

export const MenuItem: FC<{
  title: string;
  subTitle: string;
  active?: boolean;
  count?: number;
  theme: string;
  icon: string;
}> = ({ icon, subTitle, theme, title, active, count = 0 }) => {
  return (
    <button
      disabled={active}
      className={`flex items-center space-x-[12px] p-[10px] rounded-[10px] disabled:bg-gray-F4F6F8 text-left`}
    >
      <div className="w-[50px] h-[50px] bg-gray-F4F6F8 rounded-[10px] flex items-center justify-center">
        <img src={icon} alt={title} className="w-[30px] h-[30px]" />
      </div>
      <div className="flex flex-col w-[calc(100%-72px)]">
        <div className="flex items-center">
          <h4 className="text-[17px] font-medium">{title}</h4>
          {count ? (
            <span
              style={{ background: theme }}
              className="bg-blue p-[10px]  ml-[10px] rounded-[6px] text-white font-medium flex items-center justify-center text-[14px] leading-[14px] min-w-[36px] h-[36px]"
            >
              {count}
            </span>
          ) : (
            ""
          )}
        </div>
        <span className="mt-[2px] text-[14px] text-gray-424242">
          {subTitle}
        </span>
      </div>
    </button>
  );
};
