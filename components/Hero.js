import React from 'react';
import SvgLogo from './SvgLogo';

export default function Hero() {
  return (
    <div className='relative mx-8 flex flex-1 items-center justify-center'>
      {/*    <div className='absolute z-0  flex h-full w-full flex-col justify-around'>
        <div className='flex flex-col space-y-4'>
          <div className='h-10 bg-black/70'></div>
          <div className='h-10 bg-white/50'></div>
        </div>
        <div className='h-10 bg-white/80'></div>
      </div> */}
      <SvgLogo className='h-80 w-80' />
      <div className='z-10 flex h-5/6 w-10/12  justify-center bg-bg-light p-3'>
        <div>
          <p className='text-4xl text-hero-font '>Hello I&apos;m Alaa</p>
          <p>A web application developer interseted in user experience</p>
        </div>
      </div>
    </div>
  );
}
