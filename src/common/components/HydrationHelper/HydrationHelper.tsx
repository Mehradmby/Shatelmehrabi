import React, { ReactNode, useEffect, useState } from "react";
type HydrationHelper={
    children:ReactNode
}
const HydrationHelper = ({ children }: HydrationHelper) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return <div>{isClient ? children : null}</div>;
};

export default HydrationHelper;
