"use client";
import { CommunicationContext } from "@/context/comunicate.context";
// import { CommunicationContext } from "@/context/comunicate.context";
import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const RechartPage = () => {
  const { communication, setCommunication } = useContext(CommunicationContext);
  const callLength = communication.filter(c=> c.type === "call")
  const textLength = communication.filter(c=> c.type === "message")
  const videoLength = communication.filter(c=> c.type === "video")
  console.log(callLength);
  const data = [
    { name: "call", value: callLength.length, fill: "#0088FE" },
    { name: "text", value: textLength.length, fill: "#00C49F" },
    { name: "video", value: videoLength.length, fill: "#FFBB28" },
  ];

  return (
    <div className=" my-10 px-5 space-y-10">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-xl">Friendship Analytics</h2>
        <p>By Interaction Type</p>
      </div>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
          margin: "auto"
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Tooltip></Tooltip>
        <Legend></Legend>
      </PieChart>
    </div>
  );
};

export default RechartPage;
