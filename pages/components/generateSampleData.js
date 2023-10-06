import React from "react";

const TimeFrames = () => {
  // Sample data for time frames with active and inactive status
  const timeFramesData = [
    { startTime: "12:00 AM", endTime: "1:30 AM", status: "active" },
    { startTime: "1:30 AM", endTime: "2:30 AM", status: "inactive" },
    { startTime: "2:30 AM", endTime: "4:29 AM", status: "active" },
    { startTime: "4:29 AM", endTime: "5:00 AM", status: "inactive" },
    { startTime: "5:00 AM", endTime: "6:30 AM", status: "active" },
    { startTime: "6:30 AM", endTime: "7:30 AM", status: "inactive" },
    { startTime: "7:30 AM", endTime: "8:30 AM", status: "active" },
    { startTime: "8:30 AM", endTime: "10:00 AM", status: "inactive" },
    { startTime: "10:00 AM", endTime: "11:00 AM", status: "active" },
    { startTime: "11:00 AM", endTime: "12:00 PM", status: "inactive" },
    { startTime: "12:00 PM", endTime: "1:30 PM", status: "active" },
    { startTime: "1:30 PM", endTime: "2:30 PM", status: "inactive" },
    { startTime: "2:30 PM", endTime: "4:00 PM", status: "active" },
    { startTime: "4:00 PM", endTime: "5:00 PM", status: "inactive" },
    { startTime: "5:00 PM", endTime: "6:30 PM", status: "active" },
    { startTime: "6:30 PM", endTime: "7:30 PM", status: "inactive" },
    { startTime: "7:30 PM", endTime: "8:30 PM", status: "active" },
    { startTime: "8:30 PM", endTime: "10:00 PM", status: "inactive" },
    { startTime: "8:30 PM", endTime: "10:00 PM", status: "inactive" },
    { startTime: "10:00 PM", endTime: "11:00 PM", status: "active" },
    { startTime: "11:00 PM", endTime: "12:59 AM", status: "inactive" },
    { startTime: "12:00 AM", endTime: "12:00 AM", status: "active" }, // End of day
  ];

  // Create an array to store the time frame components
  const timeFrames = [];

  for (let i = 0; i < timeFramesData.length; i++) {
    const { startTime, endTime, status } = timeFramesData[i];

    const startTimeObj = new Date(`2000-01-01 ${startTime}`);
    const endTimeObj = new Date(`2000-01-01 ${endTime}`);

    // Calculate the time difference in minutes
    const timeDifference = (endTimeObj - startTimeObj) / (1000 * 60);

    // Calculate the width as a percentage of the total available width (100%)
    const widthPercentage = Math.round((timeDifference / (24 * 60)) * 100);

    // Apply different styles based on the width and status
    let frameStyle = "";

    if (status === "active") {
      frameStyle = `p-2  bg-green-500  w-${widthPercentage} h-2`;
    } else {
      frameStyle = ` p-2 bg-red-500  w-${widthPercentage} h-2`;
    }

    // Push the formatted time frame to the array
    timeFrames.push(
      <div
        key={i}
        className={frameStyle}
        title={`${startTime} ${endTime} `}
      ></div>
    );
  }

  return <div className="flex flex-wrap">{timeFrames}</div>;
};

export default TimeFrames;
