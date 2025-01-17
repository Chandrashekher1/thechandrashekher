import React from "react";
import { useDispatch } from "react-redux";
import { toggleDeactive } from "../store/toggleSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleDeactive());
  };

  return (
    <div className="bg-blue-500 text-white flex justify-between p-1">
      <h3 className="ml-4">CP03: /PORTFOLIO/ command-line</h3>
      <p className="cursor-pointer px-2 hover:bg-red-600" onClick={handleToggle}>
        X
      </p>
    </div>
  );
};

export default Header;
