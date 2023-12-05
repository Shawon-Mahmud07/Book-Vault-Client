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

// import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TABLE_HEAD = [
  "ID",
  "Product Image",
  "product Name",
  "Quantity",
  "Discount",
  "Selling Price",
  "",
  "",
];

const SalesAllProduct = () => {
  const { user } = useContext(AuthContext);
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch(
      `https://book-vault-server-theta.vercel.app/store-products?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, [user?.email]);
  console.log(allBooks);

  const handleAddForCheckOut = (
    _id,
    photo,
    product_Name,
    quantity,
    discount,
    sellingPrice
  ) => {
    const addForCheckOut = {
      _id,
      photo,
      product_Name,
      quantity,
      discount,
      sellingPrice,
    };
    console.log(addForCheckOut);
    // send data to the server
    fetch("https://book-vault-server-theta.vercel.app/check-out", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addForCheckOut),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Add for Check Out Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      });
  };
  return (
    <div className="w-full h-screen overflow-x-scroll">
      <Card className="h-screen w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Product Sales Section
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                These are details of your product
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
              {allBooks?.map(
                (
                  {
                    photo,
                    product_Name,
                    quantity,
                    discount,
                    sellingPrice,
                    _id,
                  },
                  index
                ) => {
                  const isLast = index === allBooks?.length - 1;
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
                            <img className="w-18 h-24" src={photo} alt="" />
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
                        <div
                          onClick={() => {
                            handleAddForCheckOut(
                              _id,
                              photo,
                              product_Name,
                              quantity,
                              discount,
                              sellingPrice
                            );
                          }}
                          className=" -ml-8"
                        >
                          <Button className="bg-[#d45c34]" size="sm">
                            Add For Check-out
                          </Button>
                        </div>
                      </td>
                      <td className={classes}>
                        <Link to="/admin/dashboard/check-out">
                          <div className=" -ml-5">
                            <Button className="bg-[#d45c34] " size="sm">
                              Check-out
                            </Button>
                          </div>
                        </Link>
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

export default SalesAllProduct;
