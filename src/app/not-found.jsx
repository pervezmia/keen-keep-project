import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center text-center">
      <div className="">
        <h3>this is not found page</h3>
        <Link href={"/"}>
          <button className="btn">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
