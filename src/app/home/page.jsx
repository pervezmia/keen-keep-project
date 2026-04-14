import BannerFourCard from "@/components/homePageComponents/banner/BannerFourCard";
import BannerTitle from "@/components/homePageComponents/banner/BannerTitle";
import Friends from "@/components/homePageComponents/friendsInfo/Friends";
import React from "react";

const ContactPage = () => {
  return (
    <div className="flex items-center justify-center px-10">
      <div className=''>
        <BannerTitle></BannerTitle>
        <BannerFourCard></BannerFourCard>
        <Friends></Friends>
      </div>
    </div>
  );
};

export default ContactPage;
