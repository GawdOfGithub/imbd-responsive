import React from "react";
import { Navbar } from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Theme from "./pages/Theme";
const AppLayout = () => {
  return (
    <>
    
      <div className="h-content min-h-screen  ">
        <Theme/>
        <div className="flex flex-col">
          <div className="">
            <Navbar />
          </div>
          <div className="mt-2">
            <div className="z-50 text-black ml-12 font-extrabold ">
              Created with ❤️ by Anurag Bhandari{" "}
            </div>
            <div className="">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AppLayout;
