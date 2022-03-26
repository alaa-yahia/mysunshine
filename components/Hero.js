import React from 'react';
import AnimatedCanvas from './AnimatedCanvas';

export default function Hero() {
  return (
    <div className=' h-full w-full'>
      <div
        className='bottom-4 flex h-full w-full items-center justify-center border-white'
        style={{
          background: `rgb(246,238,242)`,

          background: `linear-gradient(
           0deg,
            rgba(255, 235, 254, .8) 32.99%,
            rgba(249, 247, 255, 0.6) 56.18%,
            rgba(249, 247, 255, 0) 100%
            )`,
        }}
      >
        <div className='text-pink  h-1/2  text-5xl'>
          Hello I&apos;m Alaa
          <br />A web application developer interseted in user experience
        </div>
        <div></div>
      </div>

      {/* <AnimatedCanvas /> */}
    </div>
  );
}
