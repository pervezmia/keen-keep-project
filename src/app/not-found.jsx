import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center text-center">
      <div className="border p-10 rounded-2xl mt-6 space-y-3 bg-red-100">
        <h3>this is not found page</h3>
        <Link href={"/"}>
          <button className="btn bg-red-500">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
