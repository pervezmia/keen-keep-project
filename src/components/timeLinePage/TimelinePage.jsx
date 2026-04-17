"use client";
import { CommunicationContext } from "@/context/comunicate.context";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaVideo } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";

const TimelinePage = () => {
  const { communication, setCommunication, allCommunication, setAllCommunication} = useContext(CommunicationContext);


  const handleFilter = (e) => {

    const value = e.target.value;

    if(value === "Call"){
      const filtered = communication.filter(item => item.type === "call" );
      setAllCommunication(filtered);

    } else if ( value === "Text"){
      const filtered = communication.filter(item => item.type === "message" );
      setAllCommunication(filtered);
      

    }else if(value === "Video"){
      const filtered = communication.filter(item => item.type === "video" );
      setAllCommunication(filtered);
      

    }
     
    }
    
    const dated = new Date ();
    const options = {year: "numeric", month: "long", day: "numeric"};
    const today = dated.toLocaleDateString('en-US', options);

  return (
    <div className="space-y-4 max-w-[80%] w-[100%] mx-auto">
      <h2 className="font-bold text-4xl">Timeline</h2>
      <select onChange={handleFilter} defaultValue="Pick a One" className="select select-info">
  <option disabled ={true}>Pick a One</option>
  <option>Call</option>
  <option>Text</option>
  <option>Video</option>
</select>

      {allCommunication.length === 0 ? (
        <h2 className="font-bold text-4xl text-center my-5">
            No Contact
        </h2>
      ) : (
        allCommunication.map ((communicate,index) => <div key={index} className="grid grid-cols-1 gap-2.5">
        <div className="flex justify-between border border-gray-400 p-3 rounded-2xl">
          <div className="flex items-center justify-center gap-4">
            {communicate.type === "call" && <IoCall className="text-3xl" />} 
            {communicate.type === "message" && <MdOutlineTextsms className="text-3xl"/>}
            {communicate.type === "video" && <FaVideo className="text-3xl"/>}
            <div>
              <p>
                <span>{communicate.type}</span> with {communicate.name}
              </p>
              {/* {communicate.next_due_date} */}
              {today}
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
