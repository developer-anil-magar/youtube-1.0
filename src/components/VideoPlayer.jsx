import React from 'react';

import ReactPlayer from 'react-player/youtube';
import { Dj, ThumbDown, ThumbUp, Share, Cut } from '../assets';
import { Button, DescriptionBox } from '.';

const VideoPlayer = () => {
  console.log('video player');
  return (
    <section>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dfeGh5boU3I"
        width="72rem"
        height="35rem"
        controls
      />
      <h1 className="text-2xl font-medium mt-6">DJ Drama, Jeezy - I Aint Gon Hold Ya (Official Music Video)</h1>

      <div className="mt-3 flex justify-between">
        <div className="flex gap-4">
          <img src={Dj} alt="dj" className="w-16 h-16 rounded-full" />
          <div className="mt-1.5">
            <h1 className="text-xl font-medium">DJ Drama</h1>
            <h3 className="text-sm text-gray-500">323K subscribers</h3>
          </div>
          <div className="mt-2 ml-6">
            <Button
              title="subscribe"
              variant="black"
              size="md"
            />
          </div>
        </div>

        {/* button section */}

        <div className="flex gap-2 mt-2">
          <Button
            title="51K"
            iconLeft={ThumbUp}
            iconRight={ThumbDown}
            variant="gray"
            size="lg"
          />
          <Button
            title="Share"
            iconLeft={Share}
            variant="gray"
            size="md"
          />
          <Button
            title="Clip"
            iconLeft={Cut}
            variant="gray"
            size="md"
          />
          <Button
            title="..."
            variant="gray"
            size="smRound"
            round
          />
        </div>
      </div>

      {/* description section */}
      <div className="mt-4">
        <DescriptionBox />
      </div>
    </section>
  );
};

export default VideoPlayer;
