import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { useContext } from "react";

// import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const TABLE_HEAD = [
  "ID",
  "Product Image",
  "product Name",
  "Quantity",
  "Discount",
  "Selling Price",
  "",
];

const CheckOut = () => {
  const { user } = useContext(AuthContext);

  const [checkOutProduct, setCheckOutProduct] = useState([]);
  useEffect(() => {
    fetch(
      `https://book-vault-server-theta.vercel.app/checkOut-product?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setCheckOutProduct(data));
  }, [user?.email]);
  console.log(checkOutProduct);
  return (
    <div className="w-full h-screen overflow-x-scroll">
      <Helmet>
        <title>Book-Vault | Check-Out</title>
      </Helmet>
      <Card className="h-screen w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Check-Out Section
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                These are details of your Check-Out product
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
              <Button
                className="flex bg-[#FF7F56] items-center gap-3"
                size="sm"
              >
                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" />{" "}
                Download
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll h-screen px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {checkOutProduct?.map(
                (
                  {
                    _id,
                    photo,
                    product_Name,
                    quantity,
                    discount,
                    sellingPrice,
                  },
                  index
                ) => {
                  const isLast = index === checkOutProduct?.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold font-serif"
                        >
                          {_id}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div>
                            <img className="w-24 h-28" src={photo} alt="" />
                          </div>
                        </div>
                      </td>

                      <td className={classes}>
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="font-bold font-serif"
                        >
                          {product_Name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="font-normal font-serif"
                        >
                          {quantity}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="font-medium font-serif "
                        >
                          {discount}%
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="font-medium font-serif "
                        >
                          ${sellingPrice}
                        </Typography>
                      </td>

                      <td className={classes}>
                        <div>
                          <Button className="bg-[#d45c34] " size="sm">
                            Get Paid
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <div className="flex items-center gap-2">
            <IconButton variant="outlined" size="sm">
              1
            </IconButton>
            <IconButton variant="text" size="sm">
              2
            </IconButton>
            <IconButton variant="text" size="sm">
              3
            </IconButton>
            <IconButton variant="text" size="sm">
              ...
            </IconButton>
            <IconButton variant="text" size="sm">
              8
            </IconButton>
            <IconButton variant="text" size="sm">
              9
            </IconButton>
            <IconButton variant="text" size="sm">
              10
            </IconButton>
          </div>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CheckOut;
