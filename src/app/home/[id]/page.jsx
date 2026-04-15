import React from 'react';

const DynamicFriendsData = async ({params}) => {
    
    const {id} = await params ;
    console.log(id); 
    
    return (
        <div>
            <h1>dynamic data is coming soon</h1>
        </div>
    );
};

export default DynamicFriendsData;