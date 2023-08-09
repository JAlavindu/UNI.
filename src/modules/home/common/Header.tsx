import { FC } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  return (
    <header className="bg-light-blue px-[20px] md:px-[40px] py-[20px] flex items-center justify-between sticky top-0 h-[64px]">
      <Link to={"/"}>
        <img
          src={logo}
          alt="Uni Logo"
          className="w-[100px] h-[40px] object-contain object-center"
        />
      </Link>
    </header>
  );
};
