import { PencilIcon } from "@heroicons/react/24/solid";
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
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { FaRegTrashCan } from "react-icons/fa6";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const TABLE_HEAD = [
  "Product Image",
  "product Name",
  "Quantity",
  "Sale Count",
  "Delete",
  "Update",
];

const AllProduct = () => {
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

  const handleDeleteBtn = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://book-vault-server-theta.vercel.app/delete-product/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Product has been Deleted.", "success");
              const remaining = allBooks.filter((data) => data._id !== _id);
              setAllBooks(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="w-full h-screen">
      <Card className="h-screen w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Product Section
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
                ({ photo, product_Name, quantity, saleCount, _id }, index) => {
                  const isLast = index === allBooks.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
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
                          className="font-normal font-serif pl-4"
                        >
                          {quantity}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="font-medium font-serif pl-8"
                        >
                          {saleCount}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div
                          onClick={() => {
                            handleDeleteBtn(_id);
                          }}
                          className=" ml-4 text-lg text-red-900  cursor-pointer"
                        >
                          <Tooltip content="Delete Product">
                            <IconButton variant="text">
                              <FaRegTrashCan />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </td>

                      <td className={classes}>
                        <Link to={`/admin/dashboard/update-product/${_id}`}>
                          <Tooltip content="Update Product">
                            <IconButton variant="text">
                              <PencilIcon className="h-4 w-4 text-green-900 " />
                            </IconButton>
                          </Tooltip>
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

export default AllProduct;
