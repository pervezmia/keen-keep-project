import React from "react";
import { BsPlus } from "react-icons/bs";
import BannerFourCard from "./BannerFourCard";

const BannerTitle = () => {
    
  return (
    <div>
        
        <div className="text-center">
      <h2 className="font-bold text-3xl">Friends to keep close in your life</h2>
      <p className="text-[#64748B] text-[1rem]">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br />
        relationships that matter most.
      </p>
      <div className="flex items-center justify-center">
        
        <button className="flex items-center justify-center gap-1 btn bg-[#244D3F]">
          <BsPlus />
          Add a Friend
        </button>
      </div>
    </div>
    </div>
  );
};

export default BannerTitle;
