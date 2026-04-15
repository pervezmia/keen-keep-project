import AllFriends from "@/components/homePageComponents/allFriends/AllFriends";
import BannerFourCard from "@/components/homePageComponents/banner/BannerFourCard";
import BannerTitle from "@/components/homePageComponents/banner/BannerTitle";

import Image from "next/image";
import React from "react";


const HomePage = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const friendsData = await res.json();
 
  return (
    <>
      <div className="flex items-center justify-center px-10">
        <div className="">
          {/* <BannerTitle></BannerTitle>
          <BannerFourCard></BannerFourCard>
          <AllFriends></AllFriends> */}

          {/* <Friends></Friends> */}
        </div>
      </div>

      
    </>
  );
};

export default HomePage;
