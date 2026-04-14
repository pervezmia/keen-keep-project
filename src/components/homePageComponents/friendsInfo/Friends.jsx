import React from 'react';



const Friends = async () => {
    const res = await fetch("http://localhost:3000/data.json");
    const friendsData = await res.json();
    console.log(friendsData);
    return (
        <div >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5'>

            {
                friendsData.map(friend => <div key={friend.id} className='bg-green-200 p-4 rounded-xl text-center'>
                    
                    <div>
                        <h2>{friend.name}</h2>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default Friends;