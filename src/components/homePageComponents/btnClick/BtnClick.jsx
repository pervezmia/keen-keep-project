'use client'
import { CommunicationContext } from "@/context/comunicate.context";
import React, { useContext } from "react";
import { BiMessageAltDetail } from "react-icons/bi";
import { FcVideoCall } from "react-icons/fc";
import { IoMdCall } from "react-icons/io";
import { toast } from "react-toastify";

const BtnClick = ({friend}) => {
  console.log(friend);

    const {communication, setCommunication} = useContext(CommunicationContext);
    console.log(communication, "data of universal");
  const callHandle = () => {
    console.log("callHandle");
    setCommunication([...communication, friend])
    toast.success("Successfully calling!")
  };
  const messageHandle = () => {
    console.log("messageHandle");
    setCommunication([...communication, friend])
    toast.success("Successfully Messaging!")
    
  }
  const videoHandle = () => {
    console.log("videoHandle");
    setCommunication([...communication, friend])
    toast.success("Successfully Video calling!")
  }
  return (
    <div className="grid grid-cols-3 gap-1.5">
      <button onClick={callHandle} className="btn">
        <IoMdCall /> call
      </button>
      <button onClick={messageHandle} className="btn">
        <BiMessageAltDetail /> text
      </button>
      <button onClick={videoHandle} className="btn">
        <FcVideoCall /> video
      </button>
    </div>
  );
};

export default BtnClick;
