import React from "react";
import Header from "./Header";
import CLI from "./CLI";

const Body = () => {
  return (
    <div className=" border border-blue-600 shadow-lg w-[90%] md:w-[50%]">
      <Header />
      <CLI />
    </div>
  );
};

export default Body;
