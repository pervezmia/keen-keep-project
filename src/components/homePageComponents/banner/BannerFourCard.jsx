import React from "react";

const BannerFourCard = async() => {
    const res = await fetch("https://keen-keeper-lime.vercel.app/data.json");

    const friendsData = await res.json();
    const onTrack = friendsData.filter(item => item.status === 'on-track');
    const overDue = friendsData.filter(item => item.status === 'overdue');
    const almostDue = friendsData.filter(item => item.status === 'almost due');
    console.log(onTrack);
    
    
  return (
    <div className="flex items-center justify-center mt-5 px-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        <div className="card card-border border-base-300 bg-base-100 ">
          <div className="card-body">
            <h2 className="card-title ">{friendsData.length}</h2>
            <p>Total Friends</p>
          </div>
        </div>
        <div className="card card-border border-base-300 bg-base-100 ">
          <div className="card-body">
            <h2 className="card-title">{onTrack.length}</h2>
            <p>On Track</p>
          </div>
        </div>
        <div className="card card-border border-base-300 bg-base-100 ">
          <div className="card-body">
            <h2 className="card-title">{overDue.length}</h2>
            <p>Need Attention</p>
          </div>
        </div>
        <div className="card card-border border-base-300 bg-base-100 ">
          <div className="card-body">
            <h2 className="card-title">{almostDue.length}</h2>
            <p>Interactions This Month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerFourCard;
