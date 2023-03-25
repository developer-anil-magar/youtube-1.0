import React from 'react';
import { Navbar, VideoPlayer } from './components';

const App = () => {
  console.log('App');
  return (
    <>
      <Navbar />
      <main className="max-w-[1720px] flex justify-between mx-auto mt-9">
        <VideoPlayer />
        <div>
          videocard
        </div>
      </main>
    </>
  );
};

export default App;
