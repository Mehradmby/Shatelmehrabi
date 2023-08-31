import React, { useState } from "react";

const PaginationComp = () => {
  const [isActive, setIsActive] = useState(1);
  return (
    <div className="flex gap-2">
      <div
        onClick={() => setIsActive(1)}
        className={`rounded-full w-3 h-3 ${isActive == 1 ? "bg-white" : "bg-gray-400"} cursor-pointer`}
      ></div>
      <div
        onClick={() => setIsActive(2)}
        className={`rounded-full w-3 h-3 ${isActive == 2 ? "bg-white" : "bg-gray-400"} cursor-pointer`}
      ></div>
      <div
        onClick={() => setIsActive(3)}
        className={`rounded-full w-3 h-3 ${isActive == 3 ? "bg-white" : "bg-gray-400"} cursor-pointer`}
      ></div>
      <div
        onClick={() => setIsActive(4)}
        className={`rounded-full w-3 h-3 ${isActive == 4 ? "bg-white" : "bg-gray-400"} cursor-pointer`}
      ></div>
    </div>
  );
};

export default PaginationComp;
