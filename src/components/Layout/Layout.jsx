import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import Loader from "../Loader/Loader";
import s from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={s.box}>
      <AppBar />{" "}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
