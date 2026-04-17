import React from "react";

const BannerFourCard = async() => {
    const res = await fetch("http://localhost:3000/data.json");
    // const res = await fetch("https://vercel.com/pervezs-projects.../keen-keeper/.../data.json");
    const friendsData = await res.json();
    
    
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card card-border border-base-300 bg-base-100 ">
          <div className="card-body">
            <h2 className="card-title ">{friendsData.length}</h2>
            <p>Total Friends</p>
          </div>
        </div>
        <div className="card card-border border-base-300 bg-base-100 ">
          <div className="card-body">
            <h2 className="card-title">3</h2>
            <p>On Track</p>
          </div>
        </div>
        <div className="card card-border border-base-300 bg-base-100 ">
          <div className="card-body">
            <h2 className="card-title">6</h2>
            <p>Need Attention</p>
          </div>
        </div>
        <div className="card card-border border-base-300 bg-base-100 ">
          <div className="card-body">
            <h2 className="card-title">12</h2>
            <p>Interactions This Month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerFourCard;
