import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-full text-center b ">
      <h3 className="text-2xl mt-10 text-[#FF7F56] bg-gray-200 py-2 font-bold ">
        Welcome {user?.displayName}{" "}
      </h3>
    </div>
  );
};

export default Dashboard;
