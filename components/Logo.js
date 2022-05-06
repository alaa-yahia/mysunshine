import React from 'react';
import { motion } from 'framer-motion';

const wrapperVariants = {
  initial: {
    clipPath: `polygon(
			0% 45%,
			16% 44%,
			33% 50%,
			54% 60%,
			70% 61%,
			84% 59%,
			100% 52%,
			100% 100%,
			0% 100%
		)`,
    transition: { duration: 0.5, yoyo: Infinity },
  },
  animate: {
    clipPath: `polygon(
		0% 60%,
		15% 65%,
		34% 66%,
		51% 62%,
		67% 50%,
		84% 45%,
		100% 46%,
		100% 100%,
		0% 100%
	)`,
    transition: { duration: 1, yoyo: Infinity },
  },
  exit: {
    clipPath: `polygon(
		0% 45%,
		16% 44%,
		33% 50%,
		54% 60%,
		70% 61%,
		84% 59%,
		100% 52%,
		100% 100%,
		0% 100%
	)`,
    transition: { duration: 0.5, yoyo: Infinity },
  },
};

function Logo() {
  return (
    <div className='relative ml-6'>
      <h1 className='absolute text-4xl tracking-wide -translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-tl-lg rounded-tr-xl rounded-bl-xl'>
        ALAA
      </h1>
      <motion.h1
        variants={wrapperVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        className='absolute text-pink-600 tracking-wide text-4xl -translate-x-1/2 -translate-y-1/2'
      >
        ALAA
      </motion.h1>
    </div>
  );
}

export default Logo;
{
  /* <div className='relative'>
      <p className='x text-trasparent absolute -translate-x-2/4 -translate-y-2/4'>
        Alaa
      </p>
      <p className='y text-brown-300  absolute -translate-x-2/4 -translate-y-2/4'>
        Alaa
      </p>
    </div> */
}
