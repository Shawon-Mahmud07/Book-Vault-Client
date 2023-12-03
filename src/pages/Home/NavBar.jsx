import logoImg from "../../assets/img/favIcon.png";
import {
  Collapse,
  Typography,
  IconButton,
  Button,
  Avatar,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import React from "react";

function NavList() {
  const activeNav = " text-[#FF7F56]";
  const normalNav = "flex items-center  transition-colors";
  // const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  // const handleLogOut = () => {
  //   logOut()
  //     .then(() => {
  //       toast.success("Sign-out successful.");
  //       Navigate("/login");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <ul className="my-2 text-white flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center  lg:gap-6">
      <Typography
        as="li"
        className="p-1  md:text-sm xl:text-lg  lg:font-extrabold font-Inter"
      >
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeNav : normalNav)}
        >
          HOME
        </NavLink>
      </Typography>
      <Typography
        as="li"
        className="px-1  md:text-sm xl:text-lg  lg:font-extrabold font-Inter"
      >
        <NavLink to="/contact" className="flex items-center  transition-colors">
          CREATE STORE
        </NavLink>
      </Typography>
      <Typography
        as="li"
        className="px-1  md:text-sm xl:text-lg  lg:font-extrabold font-Inter"
      >
        <a href="#" className="flex items-center  transition-colors">
          DASHBOARD
        </a>
      </Typography>
      <Typography
        as="li"
        className="px-1  md:text-sm xl:text-lg  lg:font-extrabold font-Inter"
      >
        <NavLink
          to="https://www.youtube.com/watch?v=RYRLxVfijpI"
          target="_blank"
          className={({ isActive }) => (isActive ? activeNav : normalNav)}
        >
          WATCH DEMO
        </NavLink>
      </Typography>

      {/* {user ? (
        <Button
          onClick={handleLogOut}
          className="hidden md:block bg-[#FF7F56]  rounded-md  font-semibold text-base text-[#fff]"
          size="sm"
        >
          <span>Log Out</span>
        </Button>
      ) : (
        <Link to="/login">
          <Button
            className="block bg-[#FF7F56]  rounded-md  font-semibold text-base text-[#fff]"
            size="sm"
          >
            <span>Login</span>
          </Button>
        </Link>
      )} */}
      <div className="flex flex-col items-center">
        <Avatar
          src="https://airproductionservice.com/wp-content/uploads/2021/05/Login.jpg"
          alt="avatar"
          size="md"
        />
        <p className="text-sm">Shawon Mahmud</p>
      </div>

      <Button
        className="block bg-[#FF7F56] py-1 lg:py-2 rounded-md  font-semibold text-base text-[#fff]"
        size="sm"
      >
        <span>Login</span>
      </Button>
    </ul>
  );
}

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="lg:fixed w-full  z-10 px-6 py-5 lg:py-2 bg-gradient-to-b from-[#1e1f27] to-[#380e16]   ">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link to="/">
          <div className="flex gap-2 items-center text-white cursor-pointer">
            <img className="w-10 lg:w-12" src={logoImg} alt="" />
            <h1 className="font-cinzel text-2xl lg:text-3xl font-semibold">
              <span>Book</span> <span className="text-[#FF7F56]">Vault</span>
            </h1>
          </div>
        </Link>

        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 text-white" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white " strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </div>
  );
};

export default NavBar;
