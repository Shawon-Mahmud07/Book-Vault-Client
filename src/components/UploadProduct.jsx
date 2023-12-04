import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { Form } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext, useEffect, useState } from "react";

const UploadProduct = () => {
  const { user } = useContext(AuthContext);
  const [userStoreInfo, setUserStoreInfo] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user-store/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserStoreInfo(data));
  }, [user?.email]);
  const store = userStoreInfo[0];
  const storeId = store?._id;
  const storeName = store?.store_Name;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const product_Name = form.name.value;
    const location = form.location.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const quantity = form.quantity.value;

    const product_Cost = parseFloat(form.productCost.value);
    const discount = parseFloat(form.discount.value);
    const profit_Margin = parseFloat(form.profitMargin.value);
    const email = user?.email;
    const store_id = storeId;
    const store_Name = storeName;
    const saleCount = 0;
    // Calculate parts
    const costPercentage = 0.075 * product_Cost;
    const profitMarginAmount = 0.01 * profit_Margin * product_Cost;
    const price = product_Cost + costPercentage + profitMarginAmount;
    const sellingPrice = price.toFixed(2);
    const date = new Date();
    // 'en-GB' represents the format with day-month-year
    const addingDate = date.toLocaleDateString("en-GB");

    const addProductInfo = {
      product_Name,
      location,
      photo,
      description,
      quantity,
      saleCount,
      email,
      discount,
      sellingPrice,
      addingDate,
      store_id,
      store_Name,
    };
    console.log(addProductInfo);

    // send data to the server
    fetch("http://localhost:5000/upload-product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProductInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <div>
        <div>
          <div className="w-full shadow-xl md:max-w-4xl mx-auto  border md:p-10 bg-[#f6f6f6] rounded-md ">
            <div className="text-center">
              <h2 className="text-2xl font-cinzel font-semibold">
                Add Product
              </h2>
            </div>
            <Form onSubmit={handleFormSubmit} className="font-Inter">
              <div className="my-5">
                <div className="flex flex-col gap-3 md:gap-0  md:flex-row">
                  <div className="  w-9/12 mx-auto md:w-1/2 md:px-3">
                    <h2 className="mb-3">Product Name</h2>
                    <Input
                      className="bg-[#FFFFFF]"
                      name="name"
                      label="Enter Product Name"
                      required
                    />
                  </div>

                  <div className=" w-9/12 mx-auto md:w-1/2 md:px-3">
                    <h2 className="mb-3"> Location</h2>
                    <Input
                      className="bg-[#FFFFFF]"
                      name="location"
                      label="Enter Location"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="my-5">
                <div className="flex flex-col gap-3 md:gap-0 md:flex-row">
                  <div className=" w-9/12 mx-auto md:w-1/2 md:px-3">
                    <h2 className="mb-3">Photo URL</h2>
                    <Input
                      className="bg-[#FFFFFF]"
                      name="photo"
                      label="Enter photo URL"
                      required
                    />
                  </div>
                  <div className=" w-9/12 mx-auto md:w-1/2 md:px-3">
                    <h2 className="mb-3">Quantity</h2>
                    <Input
                      className="bg-[#FFFFFF]"
                      name="quantity"
                      label="Enter quantity"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="my-5">
                <div className="flex flex-col gap-3 md:gap-0 md:flex-row">
                  <div className=" w-9/12 mx-auto md:w-1/2 md:px-3">
                    <h2 className="mb-3">Product Cost($)</h2>
                    <Input
                      className="bg-[#FFFFFF]"
                      name="productCost"
                      label="Enter Amount"
                      required
                    />
                  </div>
                  <div className=" w-9/12 mx-auto md:w-1/2 md:px-3">
                    <h2 className="mb-3"> Profit Margin(%)</h2>
                    <Input
                      className="bg-[#FFFFFF]"
                      name="profitMargin"
                      label="Enter Value"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="my-5">
                <div>
                  <div className=" w-full px-10 md:px-3">
                    <h2 className="mb-3">Discount(%)</h2>
                    <Input
                      className="bg-[#FFFFFF]"
                      name="discount"
                      label="Enter Value"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="my-5">
                <div>
                  <div className="w-9/12 mx-auto md:w-full md:px-4">
                    <h2 className="mb-3">Description</h2>
                    <textarea
                      className="bg-[#FFFFFF] border rounded-md p-2 w-full "
                      rows="4"
                      cols="93"
                      name="description"
                      placeholder="Enter Product Description here..."
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="px-4">
                <Button
                  type="submit"
                  className="bg-[#FF7F56] text-white "
                  fullWidth
                >
                  Add Product
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadProduct;
