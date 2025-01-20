import React from "react";
import Header from "./Header";
import CLI from "./CLI";

const Body = () => {
  return (
    <div className="h-96 border my-8 border-gray-600 shadow-lg mx-2 font-mono">
      <Header />
      <CLI />
    </div>
  );
};

export default Body;
