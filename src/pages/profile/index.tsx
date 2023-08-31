import HydrationHelper from "@/common/components/HydrationHelper/HydrationHelper";
import ProfilePage from "@/modules/pagesModule/Profile/ProfilePage";
import React, { useEffect, useState } from "react";

const Profile = () => {
  //as nextjs docs say,we can prevent hydation error with one useeffect to force component to render just in client side
  // const [isClient, setisClient] = useState(false);
  // useEffect(() => {
  //   setisClient(true);
  // }, []);

  return (
    <HydrationHelper>
      <ProfilePage />
    </HydrationHelper>
  );
};

export default Profile;
