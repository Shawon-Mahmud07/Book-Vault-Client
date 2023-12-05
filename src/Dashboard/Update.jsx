import { useLoaderData } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { Form } from "react-router-dom";

const Update = () => {
  const singleProductObj = useLoaderData();
  const {
    _id,
    product_Name,
    location,
    photo,
    description,
    discount,
    product_Cost,
    profit_Margin,
    quantity,
  } = singleProductObj || {};
  console.log(singleProductObj);

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
    const UpdateProductInfo = {
      product_Name,
      location,
      photo,
      description,
      quantity,
      product_Cost,
      profit_Margin,
      discount,
    };
    console.log(UpdateProductInfo);

    // update data to the server
    fetch(`https://book-vault-server-theta.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateProductInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Product updated Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      });
  };
  return (
    <div>
      <div className="w-full shadow-xl md:max-w-4xl mx-auto  border md:p-10 bg-[#f6f6f6] rounded-md ">
        <div className="text-center">
          <h2 className="text-2xl font-cinzel font-semibold">Update Product</h2>
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
                  defaultValue={product_Name}
                />
              </div>

              <div className=" w-9/12 mx-auto md:w-1/2 md:px-3">
                <h2 className="mb-3"> Location</h2>
                <Input
                  className="bg-[#FFFFFF]"
                  name="location"
                  label="Enter location"
                  defaultValue={location}
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
                  defaultValue={photo}
                />
              </div>
              <div className=" w-9/12 mx-auto md:w-1/2 md:px-3">
                <h2 className="mb-3">Quantity</h2>
                <Input
                  className="bg-[#FFFFFF]"
                  name="quantity"
                  label="Enter quantity"
                  defaultValue={quantity}
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
                  defaultValue={product_Cost}
                />
              </div>
              <div className=" w-9/12 mx-auto md:w-1/2 md:px-3">
                <h2 className="mb-3"> Profit Margin(%)</h2>
                <Input
                  className="bg-[#FFFFFF]"
                  name="profitMargin"
                  label="Enter Value"
                  defaultValue={profit_Margin}
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
                  defaultValue={discount}
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
                  defaultValue={description}
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
              Update Product
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Update;
