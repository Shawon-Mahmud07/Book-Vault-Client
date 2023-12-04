import React, { useContext } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";

export function SidebarWithLogo() {
  const { user, logOut } = useContext(AuthContext);
  const [userStoreInfo, setUserStoreInfo] = useState([]);
  useEffect(() => {
    fetch(
      `https://book-vault-server-theta.vercel.app/user-store?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setUserStoreInfo(data));
  }, [user?.email]);
  const store = userStoreInfo[0];
  const ownerImg = store?.photo;
  const storeName = store?.store_Name;
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Sign-out successful.");
        Navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 ">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src={ownerImg} alt="brand" className="h-8 w-8" />
        <h2 className="font-cinzel text-xl" color="blue-gray">
          {storeName}
        </h2>
      </div>
      <List>
        <Link to="/admin/dashboard">
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Product Management
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link to="/admin/dashboard/add-product">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Add Product
                </ListItem>
              </Link>
              <Link to="/admin/dashboard/all-product">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Products
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />

        <Link to="/">
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Home
          </ListItem>
        </Link>

        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem onClick={handleLogOut}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
