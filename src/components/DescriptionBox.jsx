import React from 'react';
import { Sort, Profile, ThumbDown, ThumbUp } from '../assets';

const DescriptionBox = () => (
  <>
    <div className="bg-gray-200 w-full  rounded-xl mx-auto">
      <div className="p-4">
        <div className="flex gap-4">
          <h1 className="text-base md:text-lg font-semibold
        "
          >28M views 4 years ago
          </h1>
          <p className="text-base md:text-lg font-medium text-blue-500">#Jeezy #ATL #DJDrama</p>
        </div>
        <p className="text-sm md:text-base">
          Follow Jeezy: <br />
          FACEBOOK: https://www.facebook.com/Jeezy <br />
          INSTAGRAM: https://www.instagram.com/jeezy/?hl=en <br />
        </p>
      </div>
    </div>

    {/* comment section */}
    <div className="mt-5 md:mt-10 mx-2 lg:mx-0">
      <div className="flex gap-24">
        <h1 className="text-lg md:text-2xl font-normal">1 comments</h1>
        <div className="flex gap-5 ml-7 lg:ml-0">
          <img src={Sort} alt="sort" className="h-[1.8rem] w-[1.8rem]" />
          <h1 className="text-sm md:text-lg font-semibold">Sort by</h1>
        </div>
      </div>
    </div>
    <div className="mt-5 md:mt-10 mx-2 xl:mx-0">
      <div className="flex gap-4 mx-auto">
        <img src={Profile} alt="profile" className="w-[3rem] h-[3rem] rounded-full" />
        <input type="text" placeholder="Add a comment" className="w-[17.5rem] md:w-[68rem] border-b-2 bg-transparent border-gray-300 mb-4" />
      </div>
    </div>

    <div className="mt-5 md:mt-16 flex gap-4 mx-2 lg:mx-0">
      <img src={Profile} alt="profile" className="w-12 h-12 rounded-full" />
      <div>
        <h1 className="text-base font-semibold">Vin Diesel</h1>
        <p className="mt-1 text-sm md:text-lg font-extralight">There’s rap for the little kids. Then there’s rap for the adults. Man I needed this</p>
        <div className="flex gap-2 mt-2">
          <img src={ThumbUp} alt="thumbup" className="h-5 w-5" />
          <h2 className="text-sm font-light ">1.1k</h2>
          <img src={ThumbDown} alt="thumbdown" className="h-5 w-5" />
        </div>
      </div>
    </div>
  </>
);

export default DescriptionBox;
