import React from 'react';

const DescriptionBox = () => {
  console.log('description');
  return (
    <div className="bg-gray-200 w-[72rem] rounded-xl">
      <div className="p-4">
        <div className="flex gap-4">
          <h1 className="text-lg font-semibold
        "
          >28M views 4 years ago
          </h1>
          <p className="text-lg font-medium text-blue-500">#Jeezy #ATL #DJDrama</p>
        </div>
        <p className="text-base">
          Follow Jeezy: <br />
          FACEBOOK: https://www.facebook.com/Jeezy <br />
          INSTAGRAM: https://www.instagram.com/jeezy/?hl=en <br />
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
