import React from 'react';

import { Navbar, VideoPlayer, Button, VideoCard } from './components';
import { videoDetails } from './constants/videoDetails';

const App = () => (
  <>
    <Navbar />
    <main className="max-w-[400px] sm:max-w-[800px] lg:max-w-[1720px]  flex flex-col xl:flex-row gap-8 xl:gap-16 py-0 lg:py-28 mx-auto lg:mx-20 xl:mx-auto ">
      <VideoPlayer />
      <section>
        <div className="hidden lg:block border rounded-full w-[32rem] h-12 text-center border-gray-300">
          <h2 className="font-medium mt-3">Show chat replay</h2>
        </div>
        <div className="flex mx-2 lg:mx-0 gap-2  mt-2 lg:mt-8">
          <Button
            title="All"
            variant="black"
            size="sm"
          />
          <Button
            title="Dj Drama"
            variant="gray"
            size="md"
          />
          <Button
            title="FromDj Drama Vevo"
            variant="gray"
            size="xl"
          />
          <Button
            title="DJ"
            variant="gray"
            size="xs"
          />
        </div>
        <div className="mt-5">
          {videoDetails.map((video) => (
            <div key={video.id} className="mb-3">
              <VideoCard
                title={video.title}
                date={video.date}
                account={video.accountName}
                image={video.image}
                views={video.views}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  </>
);

export default App;
