import Footer from "./Home/Footer";
import NavBar from "./Home/NavBar";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { Form, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";

const CreateStore = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const store_Name = form.storeName.value;
    const owner_Name = form.OwnerName.value;
    const location = form.location.value;
    const photo = form.photo.value;
    const description = form.Description.value;
    const roll = "manager";
    const email = form.email.value;
    const productLimit = 3;
    const storeInfo = {
      store_Name,
      owner_Name,
      email,
      location,
      photo,
      roll,
      description,
      productLimit,
    };
    console.log(storeInfo);

    // send data to the server
    fetch("https://book-vault-server-theta.vercel.app/create-store", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(storeInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Store created Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
          form.reset();
          navigate("/admin/dashboard");
        }
      });
  };
  return (
    <>
      <Helmet>
        <title>Book-Vault | Create-Store</title>
      </Helmet>
      <NavBar></NavBar>
      <div className="lg:pt-28">
        <div>
          <div>
            <div className="w-full shadow-2xl md:max-w-4xl mx-auto py-10  border md:p-10 bg-[#F4F6FD] rounded-md ">
              <div className="text-center">
                <h2 className="text-2xl  font-semibold font-cinzel">
                  Create Store
                </h2>
              </div>
              <Form onSubmit={handleFormSubmit} className="font-Inter">
                <div className="my-5 font-Inter">
                  <div className="flex flex-col gap-3 md:gap-0  md:flex-row">
                    <div className="  w-9/12 mx-auto md:w-1/2 md:px-3">
                      <h2 className="mb-3 ">Store Name </h2>
                      <Input
                        className="bg-[#FFFFFF]"
                        name="storeName"
                        label="Enter Store Name"
                        required
                      />
                    </div>

                    <div className=" w-9/12 mx-auto md:w-1/2 md:px-3">
                      <h2 className="mb-3">Owner Name</h2>
                      <Input
                        className="bg-[#FFFFFF]"
                        name="OwnerName"
                        label="Owner Name"
                        defaultValue={user?.displayName}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="my-5 font-Inter">
                  <div className="flex flex-col gap-3 md:gap-0  md:flex-row">
                    <div className="  w-9/12 mx-auto md:w-1/2 md:px-3">
                      <h2 className="mb-3 ">Email </h2>
                      <Input
                        className="bg-[#FFFFFF]"
                        name="email"
                        label="Enter Store Name"
                        defaultValue={user?.email}
                        readOnly
                      />
                    </div>

                    <div className=" w-9/12 mx-auto md:w-1/2 md:px-3">
                      <h2 className="mb-3">Store Location</h2>
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
                  <div>
                    <div className=" w-full px-10 md:px-3">
                      <h2 className="mb-3">Store Logo URL</h2>
                      <Input
                        className="bg-[#FFFFFF]"
                        name="photo"
                        label="Enter Logo URL"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="my-5">
                  <div>
                    <div className="w-9/12 mx-auto md:w-full md:px-4">
                      <h2 className="mb-3">Store Description</h2>
                      <textarea
                        className="bg-[#FFFFFF] border rounded-md p-2 w-full "
                        rows="4"
                        cols="93"
                        name="Description"
                        placeholder="Enter Store Description here...."
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
                    Create Store
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CreateStore;
