import React from 'react';

const VideoCard = ({ title, account, date, views, image }) => (
  <div className=" flex flex-col md:flex-row gap-5 mx-2 lg:mx-0">
    <img src={image} alt={account} className="w-full h-[9rem] sm:h-[12rem] sm:w-[25rem] lg:w-[33rem] xl:w-[16rem] lg:h-[14rem] xl:h-[8rem] rounded-xl" />
    <div className="">
      <h1 className="truncate2Lines text-base sm:text-xl font-medium md:w-[16rem]">
        {title}
      </h1>
      <h3 className="text-gray-500 text-sm sm:text-lg mt-1 md:mt-3">{account}</h3>
      <div className="flex gap-3">
        <h3 className="text-gray-500 text-sm sm:text-lg">{views} views</h3>
        <div className="w-[4px] h-[4px] rounded-full bg-gray-500 mt-[10px]" />
        <h3 className="text-gray-500 text-sm md:text-base">{date} ago</h3>
      </div>
    </div>
  </div>
);

export default VideoCard;
