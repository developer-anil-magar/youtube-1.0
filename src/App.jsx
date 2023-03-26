import React from 'react';

import { Navbar, VideoPlayer, Button, VideoCard } from './components';
import { videoDetails } from './constants/videoDetails';

const App = () => (
  <>
    <Navbar />
    <main className="max-w-[1720px] flex gap-8 mx-auto  py-28">
      <VideoPlayer />
      <section>
        <div className="border rounded-full w-[32rem] h-12 text-center">
          <h2 className="font-medium mt-3">Show chat replay</h2>
        </div>
        <div className="flex  gap-2 mt-8">
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
