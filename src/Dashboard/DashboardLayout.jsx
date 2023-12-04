import { Outlet } from "react-router-dom";
import { SidebarWithLogo } from "../components/SidebarWithLogo";
import { Helmet } from "react-helmet-async";

const DashboardLayout = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <Helmet>
        <title>Book-Vault | DashBoard</title>
      </Helmet>
      <SidebarWithLogo></SidebarWithLogo>
      <Outlet></Outlet>
    </div>
  );
};

export default DashboardLayout;
