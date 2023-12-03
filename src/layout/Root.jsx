import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";

const Root = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
