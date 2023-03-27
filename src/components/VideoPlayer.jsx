import React from 'react';

import ReactPlayer from 'react-player/youtube';
import { Dj, ThumbDown, ThumbUp, Share, Cut } from '../assets';
import { Button, DescriptionBox } from '.';

const VideoPlayer = () => (
  <section className="w-full xl:w-[65rem]">
    <div className="w-full mx-auto  lg:mx-0 h-56 md:h-[30rem] xl:h-[32rem]">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dfeGh5boU3I"
        width="100%"
        height="100%"
        controls
      />
    </div>
    <h1 className="w-full lg:w-[63rem] text-base  md:text-2xl font-medium mt-6 mx-2 lg:mx-0">DJ Drama, Jeezy - I Aint Gon Hold Ya (Official Music Video)</h1>

    <div className="w-full mt-3 flex flex-col lg:flex-row justify-between ">
      <div className="flex gap-4  mx-2">
        <img src={Dj} alt="dj" className="w-10 h-10 rounded-full mt-2 lg:mt-0" />
        <div className="mt-1.5">
          <h1 className="text-sm md:text-xl font-medium">DJ Drama</h1>
          <h3 className="text-sm text-gray-500">323K subscribers</h3>
        </div>
        <div className="w-10 h-4 mt-2 ml-2  md:ml-6">
          <Button
            title="subscribe"
            variant="black"
            size="md"
            roundedFull
          />
        </div>
      </div>

      {/* button section */}

      <div className="flex gap-2 sm:gap-10 lg:gap-2 mt-4 md:mt-2 mx-2 md:mx-0">
        <Button
          title="51K"
          iconLeft={ThumbUp}
          iconRight={ThumbDown}
          variant="gray"
          size="lg"
          roundedFull
        />
        <Button
          title="Share"
          iconLeft={Share}
          variant="gray"
          size="md"
          roundedFull
        />
        <Button
          title="Clip"
          iconLeft={Cut}
          variant="gray"
          size="md"
          roundedFull
        />
        <Button
          title="..."
          variant="gray"
          size="smRound"
          round
          roundedFull
        />
      </div>
    </div>

    {/* description section */}
    <div className="mt-4 mx-auto md:mx-0">
      <DescriptionBox />
    </div>
  </section>
);

export default VideoPlayer;
