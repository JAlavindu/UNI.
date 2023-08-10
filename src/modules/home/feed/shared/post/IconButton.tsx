import { FC } from "react";

export const IconButton: FC<{
  disabled?: boolean;
  children: string;
  icon: string;
  onClick?: () => {};
}> = ({ children, icon, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center disabled:opacity-40 group space-x-[4px] text-[14px] active:bg-gray-F3F2EF px-[10px] py-[5px] rounded-[10px]"
    >
      <img
        src={icon}
        alt={children}
        className="object-contain object-center w-[26px] h-[26px] group-active:scale-105"
      />
      <span>{children}</span>
    </button>
  );
};
