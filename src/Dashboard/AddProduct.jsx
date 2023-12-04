import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {
    fetch("https://book-vault-server-theta.vercel.app/all-product")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);
  console.log(allProduct);
  return (
    <div className="w-full h-screen ">
      <div>
        <div className="w-10/12 mx-auto mt-10 flex justify-between items-center ">
          <h2 className="text-2xl text-blue-gray-900 border-b-4 border-blue-gray-700 font-serif font-bold">
            Total{" "}
            <span className="font-cinzel text-[#FF7F56]">
              {allProduct.length}
            </span>{" "}
            Product Added
          </h2>
          <Link to="/admin/dashboard/upload-product">
            <Button className=" bg-[#FF7F56]  font-semibold  text-white">
              Add a Product
            </Button>
          </Link>
        </div>
        <div className=" flex justify-center mt-5 w-full">
          <img
            src="https://clickmyemails.com/wp-content/uploads/2018/09/Create-the-purchase-of-your-product.jpg"
            alt=""
          />
        </div>
      </div>

      {/* <div className="w-10/12 mx-auto flex flex-col items-center mt-28 gap-5">
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
      </div> */}
    </div>
  );
};

export default AddProduct;
