import Image from "next/image";
import Link from "next/link";
import React from "react";

const Friend = ({ friend }) => {
  const { id, name, days_since_contact, tags, status } = friend;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure className="px-10 pt-10">
          <div className="flex items-center justify-center">
            <Image
              className=" rounded-[100%]"
              src={friend.picture}
              height={300}
              width={300}
              alt={friend.name}
            ></Image>
          </div>
        </figure>
        <div className="card-body items-center text-center space-y-3">
          <h2 className="card-title">{name}</h2>
          <p>{days_since_contact}d ago</p>
          <p className="flex flex-col md:flex gap-2.5 ">
            {tags.map((tag, index) => (
              <span
                className={`btn px-4 rounded-full ${tag === "travel" && "bg-green-300"} ${tag === "business" ? "bg-amber-200" : ""} ${tag === "family" ? "bg-violet-500" : ""}`}
                key={index}
              >
                {tag}
              </span>
            ))}
          </p>
          <div className="card-actions">
            <Link href={`/${id}`}>
              <button
                className={`rounded-full ${status === "on-track" && "btn btn-success"} ${status === "almost due" && "btn btn-secondary"} ${status === "overdue" && "btn btn-warning"}`}
              >
                {status}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend;
