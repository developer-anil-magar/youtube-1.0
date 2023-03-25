import React from 'react';

const DescriptionBox = () => {
  console.log('description');
  return (
    <div className="bg-gray-200 w-[69rem] rounded-xl">
      <div className="p-4">
        <div className="flex gap-4">
          <h1 className="text-lg font-semibold
        "
          >28M views 4 years ago
          </h1>
          <p className="text-lg font-medium text-blue-500">#Jeezy #ATL #DJDrama</p>
        </div>
        <p className="text-base">
          Follow Jeezy:
          FACEBOOK: https://www.facebook.com/Jeezy
          INSTAGRAM: https://www.instagram.com/jeezy/?hl=en
          TWITTER: https://twitter.com/jeezy
          YOUTUBE:

          / @jeezyofficial
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
