"use client";
import { CommunicationContext } from "@/context/comunicate.context";
import Image from "next/image";
import React, { useContext } from "react";
import { FaVideo } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";

const TimelinePage = () => {
  const { communication, setCommunication } = useContext(CommunicationContext);

  return (
    <div className="space-y-4 max-w-[80%] w-[100%] mx-auto">
      <h2 className="font-bold text-4xl">Timeline</h2>
      <input type="text" placeholder="Filter timeline" className="input" />

      {communication.length === 0 ? (
        <h2 className="font-bold text-4xl text-center my-5">
            No Contact
        </h2>
      ) : (
        communication.map ((communicate,index) => <div key={index} className="grid grid-cols-1 gap-2.5">
        <div className="flex justify-between border border-gray-400 p-3 rounded-2xl">
          <div className="flex items-center justify-center gap-4">
            {communicate.type === "call" && <IoCall className="text-3xl" />} 
            {communicate.type === "message" && <MdOutlineTextsms className="text-3xl"/>}
            {communicate.type === "video" && <FaVideo className="text-3xl"/>}
            <div>
              <p>
                <span>{communicate.type}</span> with {communicate.name}
              </p>
              {communicate.next_due_date}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center mt-3">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  src={communicate.picture}
                  height={300}
                  width={300}
                  alt={communicate.name}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>)
        
      )}
      
    </div>
  );
};

export default TimelinePage;
