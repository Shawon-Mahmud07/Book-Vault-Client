import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  return (
    <div className="w-full ">
      {/* <div className="w-10/12 mx-auto mt-10 flex justify-between items-center ">
        <h2 className="text-2xl text-blue-gray-900 border-b-4 border-blue-gray-700 font-serif font-bold">
          Total 6 Product Added
        </h2>
        <Link to="/admin/dashboard/upload-product">
        <Button className=" bg-[#FF7F56]  font-semibold  text-white">
          Add a Product
        </Button>
        </Link>
      </div> */}
      <div className="w-10/12 mx-auto flex flex-col items-center mt-28 gap-5">
        <img
          src="https://basis.org.bd/public/images/no-product-found.jpg"
          alt=""
        />
        <div>
          <Link to="/admin/dashboard/upload-product">
            <Button className=" bg-[#FF7F56]  font-semibold  text-white">
              Add a Product
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
