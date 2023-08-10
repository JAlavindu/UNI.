import { FC } from "react";
import { Link } from "react-router-dom";

export const Tag: FC<{ title: string; subTitle: string }> = ({
  title,
  subTitle,
}) => {
  return (
    <Link
      to={"/?tag=programming"}
      className="flex flex-col group p-[10px] rounded-[10px] text-gray-424242"
    >
      <h4 className="group-hover:underline font-medium">#{title}</h4>
      <span className="text-[14px] mt-[4px]">{subTitle}</span>
    </Link>
  );
};
