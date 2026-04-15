import Image from "next/image";
import React from "react";

const FriendDetails = ({ friend }) => {
  console.log(friend);
  const {
    name,
    bio,
    tags,
    next_due_date,
    status,
    days_since_contact,
    goal,
    picture,
    email,
  } = friend;
  return (
    <div>
      <div className="grid grid-cols-4 gap-2 card">
        <div className="col-span-1 p-1 space-x-3.5">
          <div className="card bg-base-300  text-neutral">
            <div className="flex items-center justify-center">
              <Image
                className="rounded-full"
                alt={name}
                src={picture}
                width={50}
                height={50}
              ></Image>
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <div className="card-actions flex-col justify-center">
                <div className="grid md:grid-cols-2 gap-1.5 ">
                  {tags.map((item, index) => (
                    <p className="bg-violet-400 rounded-2xl px-3" key={index}>
                      {item}
                    </p>
                  ))}
                </div>
                <p className="bg-green-200 px-3 rounded-2xl text-black">
                  {status}
                </p>
                {/* <button className="btn btn-primary">Accept</button>
                <button className="btn btn-ghost">Deny</button> */}
              </div>
              <p className="italic">{`"${bio}"`}</p>
              <p className="text-xs md">Email: {email}</p>
            </div>
          </div>
        </div>

        <div className="col-span-3  p-1 space-y-3.5">

          <div className="grid grid-cols-3 gap-1">

            <div className="card card-border bg-base-300 ">
              <div className="card-body">
                <h2 className="card-title">{days_since_contact} </h2>
                <p>
                  Days Since Contact
                </p>
              </div>
            </div>
            <div className="card card-border bg-base-300 ">
              <div className="card-body">
                <h2 className="card-title">{next_due_date} </h2>
                <p>
                  Goal (Days)
                </p>
              </div>
            </div>
            <div className="card card-border bg-base-300 ">
              <div className="card-body">
                <h2 className="card-title">{days_since_contact} </h2>
                <p>
                  Days Since Contact
                </p>
              </div>
            </div>

            
            
            
          </div>

          <div className="grid grid-cols-1 card card-border bg-base-300 p-5">
            <div className="grid grid-cols-2 justify-between items-center">

              <p>Relationship Goal</p>
              <button>Edit</button>
            </div>
            <p>Connect every {days_since_contact} days</p>
          </div>
          <div className="grid grid-cols-1 card card-border bg-base-300 p-5 space-y-1.5">
            <p>Quick Check-In</p>
            <div className="grid grid-cols-3 gap-1.5">
              <button className="btn">call</button>
              <button className="btn">text</button>
              <button className="btn">video</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
