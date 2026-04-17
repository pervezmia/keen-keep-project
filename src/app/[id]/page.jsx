import FriendDetails from "@/components/homePageComponents/allFriends/friendDetails/FriendDetails";
import React from "react";
export async function generateMetadata ({params}){
  const {id} = await params;
  const res = await fetch("https://keen-keeper-lime.vercel.app/data.json", {
    cache: "no-store",
  });
  const friendsData = await res.json();
  const friend = friendsData.find((f) => f.id === Number(id));

  return {
    title: friend.name,
    description: friend.bio,
  }
    
  }
const DynamicFriendsData = async ({ params }) => {
  const { id } = await params;
  //   console.log(id);
  const res = await fetch("https://keen-keeper-lime.vercel.app/data.json", {
    cache: "no-store",
  });

  const friendsData = await res.json();
  //   console.log(friendsData);

  const friend = friendsData.find((f) => f.id === Number(id));
  // console.log(friend);

  if (!friend) {
    return <h1>Friend not found</h1>;
  }

  return (
    <div className="p-6">
      {/* <h1 className="text-2xl font-bold">{friend.name}</h1>
      <p>{friend.email}</p>
      <p>{friend.phone}</p> */}
      <FriendDetails friend={friend}></FriendDetails>
    </div>
  );
};

export default DynamicFriendsData;
