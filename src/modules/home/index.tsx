import { FC } from "react";
import { Header } from "./shared/Header";
import { Outlet } from "react-router-dom";

export const HomePage: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
