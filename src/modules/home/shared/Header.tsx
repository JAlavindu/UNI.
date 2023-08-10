import { FC, ReactNode } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

const IconButton: FC<{ children: ReactNode; count?: number }> = ({
  count,
  children,
}) => {
  return (
    <button className="w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center relative">
      {children}
      {count ? (
        <span className="absolute top-[-5px] right-[-5px] bg-blue rounded-full flex items-center py-[3px] px-[8px] text-[12px] text-white font-bold">
          {count}
        </span>
      ) : (
        ""
      )}
    </button>
  );
};

export const Header: FC = () => {
  return (
    <header className="bg-light-blue sticky top-0 h-[72px] flex items-center justify-between lg:grid lg:grid-cols-12">
      <Link
        to={"/"}
        className="flex-shrink-0 xl:col-span-1 2xl:col-span-2 pl-[20px]"
      >
        <img
          src={logo}
          alt="Uni Logo"
          className="w-[100px] h-[40px] object-contain object-center flex-shrink-0"
        />
      </Link>
      <div className="hidden lg:flex items-center space-x-[10px] lg:col-span-6 2xl:col-span-5 xl:col-start-2 2xl:col-start-4 lg:w-[calc(100%-40px)] lg:ml-[76px]">
        <Avatar size={50} isLink />
        <div className="bg-white rounded-[10px] w-full flex items-center py-[10px] px-[15px]">
          <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.5006 17.5006H17.7106L17.4306 17.2306C18.6306 15.8306 19.2506 13.9206 18.9106 11.8906C18.4406 9.11063 16.1206 6.89063 13.3206 6.55063C9.09063 6.03063 5.53063 9.59063 6.05063 13.8206C6.39063 16.6206 8.61063 18.9406 11.3906 19.4106C13.4206 19.7506 15.3306 19.1306 16.7306 17.9306L17.0006 18.2106V19.0006L21.2506 23.2506C21.6606 23.6606 22.3306 23.6606 22.7406 23.2506C23.1506 22.8406 23.1506 22.1706 22.7406 21.7606L18.5006 17.5006ZM12.5006 17.5006C10.0106 17.5006 8.00063 15.4906 8.00063 13.0006C8.00063 10.5106 10.0106 8.50063 12.5006 8.50063C14.9906 8.50063 17.0006 10.5106 17.0006 13.0006C17.0006 15.4906 14.9906 17.5006 12.5006 17.5006Z"
              fill="#C3CAD9"
            />
          </svg>
          <input
            type="search"
            className="w-[calc(100%-40px)] ml-auto placeholder:text-[#ADB8CC] font-medium"
            placeholder="Search your things here..."
          />
        </div>
      </div>
      <div className="hidden md:flex justify-end items-center space-x-[10px] lg:col-span-3 lg:col-start-9 pr-[20px]">
        <IconButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 70 71"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M35.0001 32.6953C33.5767 32.6953 32.4334 33.8398 32.4334 35.2646C32.4334 36.6893 33.5767 37.8338 35.0001 37.8338C36.4234 37.8338 37.5667 36.6893 37.5667 35.2646C37.5667 33.8398 36.4234 32.6953 35.0001 32.6953ZM35.0001 11.9077C22.1201 11.9077 11.6667 22.3716 11.6667 35.2646C11.6667 48.1576 22.1201 58.6214 35.0001 58.6214C47.8801 58.6214 58.3334 48.1576 58.3334 35.2646C58.3334 22.3716 47.8801 11.9077 35.0001 11.9077ZM40.1101 40.3797L21.0001 49.2787L29.8901 30.1494L49.0001 21.2505L40.1101 40.3797Z"
              fill="#424242"
            />
          </svg>
        </IconButton>
        <IconButton count={4}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="41"
            viewBox="0 0 70 71"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M35.0001 11.6785C22.1134 11.6785 11.6667 21.4212 11.6667 33.4395C11.6667 40.2877 15.0598 46.3962 20.3624 50.3851V58.6823L28.3072 54.2905C30.4275 54.8816 32.6737 55.2006 35.0001 55.2006C47.8868 55.2006 58.3334 45.4579 58.3334 33.4395C58.3334 21.4212 47.8868 11.6785 35.0001 11.6785ZM37.3189 40.9834L31.3769 34.6001L19.7827 40.9834L32.5363 27.3464L38.6233 33.7297L50.0725 27.3464L37.3189 40.9834Z"
              fill="#424242"
            />
          </svg>
        </IconButton>
        <IconButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 70 71"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M34.035 57.4536C36.6017 57.4536 38.7017 55.3515 38.7017 52.7822H29.3684C29.3684 55.3515 31.445 57.4536 34.035 57.4536ZM48.035 43.4395V31.761C48.035 24.5905 44.2084 18.5878 37.535 16.9995V15.4112C37.535 13.4726 35.9717 11.9077 34.035 11.9077C32.0984 11.9077 30.535 13.4726 30.535 15.4112V16.9995C23.8384 18.5878 20.035 24.5671 20.035 31.761V43.4395L17.025 46.4525C15.555 47.924 16.5817 50.4465 18.6584 50.4465H49.3884C51.465 50.4465 52.515 47.924 51.045 46.4525L48.035 43.4395Z"
              fill="#424242"
            />
          </svg>
        </IconButton>
        <IconButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 70 70"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M34.0145 44.8467L41.6678 50.4156C42.8812 51.3178 44.5301 50.1044 44.0634 48.6733L41.1389 39.6822L48.6989 34.3C49.9434 33.4289 49.3212 31.4689 47.7967 31.4689H38.5256L35.5078 22.0733C35.0412 20.6422 33.0189 20.6422 32.5523 22.0733L29.5034 31.4689H20.2323C18.7078 31.4689 18.0856 33.4289 19.3301 34.3L26.8901 39.6822L23.9656 48.6733C23.4989 50.1044 25.1478 51.2867 26.3612 50.4156L34.0145 44.8467Z"
              fill="#424242"
            />
          </svg>
        </IconButton>
        <IconButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 70 70"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.3333 49H53.6667C54.95 49 56 47.95 56 46.6667C56 45.3833 54.95 44.3333 53.6667 44.3333H16.3333C15.05 44.3333 14 45.3833 14 46.6667C14 47.95 15.05 49 16.3333 49ZM16.3333 37.3333H53.6667C54.95 37.3333 56 36.2833 56 35C56 33.7167 54.95 32.6667 53.6667 32.6667H16.3333C15.05 32.6667 14 33.7167 14 35C14 36.2833 15.05 37.3333 16.3333 37.3333ZM14 23.3333C14 24.6167 15.05 25.6667 16.3333 25.6667H53.6667C54.95 25.6667 56 24.6167 56 23.3333C56 22.05 54.95 21 53.6667 21H16.3333C15.05 21 14 22.05 14 23.3333Z"
              fill="#424242"
            />
          </svg>
        </IconButton>
      </div>
    </header>
  );
};
