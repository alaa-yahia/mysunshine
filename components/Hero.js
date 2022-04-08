import React from 'react';
import AnimatedCanvas from './AnimatedCanvas';

export default function Hero() {
  return (
    <div className=' h-full w-full'>
      <div
        className='bottom-4 mt-6 flex h-full  w-full border-white'
        style={{
          background: `rgb(246,238,242)`,

          background: `linear-gradient(
           0deg,
            rgba(255, 235, 254, .8) 32.99%,
            rgba(249, 255, 255, 0.3) 80%,
            rgba(249, 247, 255, 0) 100%
            )`,
        }}
      >
        <div className='h-10 w-20 bg-white'>ff</div>
        <div
          className=' h-1/2 w-3/4 bg-white bg-opacity-5 text-3xl shadow-lg'
          style={{
            background: `linear-gradient(45deg ,rgba(255, 0, 255,1) 0%,rgba(58, 45, 239,1)100% )`,
          }}
        >
          Hello I&apos;m Alaa
          <br />A web application developer interseted in user experience
        </div>
        <div className='h-10 flex-1 bg-white'>ff</div>
      </div>

      {/* <AnimatedCanvas /> */}
    </div>
  );
}
