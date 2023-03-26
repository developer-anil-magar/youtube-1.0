import React from 'react';

const VideoCard = ({ title, account, date, views, image }) => (
  <div className="flex gap-5">
    <img src={image} alt={account} className="w-60 h-36 rounded-xl" />
    <div className="">
      <h1 className="truncate2Lines text-lg font-medium w-64">
        {title}
      </h1>
      <h3 className="text-gray-500 mt-3">{account}</h3>
      <div className="flex gap-3">
        <h3 className="text-gray-500">{views} views</h3>
        <div className="w-[4px] h-[4px] rounded-full bg-gray-300 mt-[10px]" />
        <h3 className="text-gray-500">{date} ago</h3>
      </div>
    </div>
  </div>
);

export default VideoCard;
