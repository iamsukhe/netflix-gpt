import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen  aspect-video absolute pt-[20%] px-24 text-white bg-linear-to-r from-black z-10">
      <h1 className="text-6xl font-bold">{title}</h1>
      <h1 className="py-6 text-lg w-1/4">{overview}</h1>
      <div>
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg cursor-pointer hover:opacity-80">
          ▷ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl opacity-80 rounded-lg cursor-pointer hover:opacity-50">
          More Info!
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
