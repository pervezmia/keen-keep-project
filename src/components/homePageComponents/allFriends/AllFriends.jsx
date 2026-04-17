import React from 'react';
import Friend from './Friend';

const AllFriends = async () => {
    const res = await fetch("https://keen-keeper-lime.vercel.app/data.json");
    // const res = await fetch("https://vercel.com/pervezs-projects.../keen-keeper/.../data.json");
  const friendsData = await res.json();
    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[70%] my-10 mx-auto'>
                {
                    friendsData.map(friend => <div key={friend.id}>
                        <Friend friend = {friend}></Friend>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllFriends;