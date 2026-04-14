import React from 'react';

const FriendDetails = async ({params}) => {
    const {friendId} = await params;
    const id = await (friendId);

    console.log(id);
    return (
        <div>
            <h2>friend details</h2>
        </div>
    );
};

export default FriendDetails;

/* 

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = await getPost(slug)
 
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}*/