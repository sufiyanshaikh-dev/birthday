// Birthday.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Birthday = () => {
  const [showCake, setShowCake] = useState(false);
  const [Showtext, setShowText] = useState(false);
  const handleClick = () => {
    setShowCake(true);
    setShowText(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-800 font-sans">
      <h1 className="text-3xl mb-8 text-white drop-shadow-lg font-semibold">Happy Birthday Pada!</h1>
      {
        showCake && Showtext ?
          (
            <>
              <i><p className='mt-[-20px] text-white border-2 border-black mb-2 rounded-lg px-1 py-1'>Pade ka budday yeahhhhhhhhhhhhhhhhhh!</p></i>
              <i><p className='text-white border-2 border-black rounded-lg px-2 py-1'>Bhai treat!?</p></i>
            </>
          ) : null
      }
      {!showCake && (
        <button
          onClick={handleClick}
          className="px-6 py-3 text-xl bg-red-500 text-white rounded-full cursor-pointer shadow-lg transition-all duration-300 hover:bg-red-600 hover:-translate-y-1"
        >
          Click to Reveal the Cake
        </button>
      )}
      <AnimatePresence>
        {showCake && (
          <div className="relative w-80 h-80 flex flex-col items-center justify-center" style={{ perspective: '1000px' }}>
            {/* Cake layers with 3D effect */}
            <motion.div
              className="top-[2px] relative w-[221.5px] h-16 bg-gradient-to-b from-amber-700 to-amber-900 shadow-lg mb-2"
              style={{ transformStyle: 'preserve-3d', transform: 'rotateX(10deg)' }}
              initial={{ y: 100, opacity: 0, rotateX: 0 }}
              animate={{ y: 0, opacity: 1, rotateX: 10 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Frosting */}
              <motion.div
                className="absolute top-[-9px] transform -translate-x-1/2 w-[221.5px] h-6 bg-white rounded-t-lg shadow-md"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              />
              {/* Side for 3D effect */}
              <div className="absolute bottom-0 left-0 w-full h-4 bg-amber-800 rounded-b-lg transform rotateX(-90deg) origin-bottom"></div>
            </motion.div>
            <motion.div
              className="relative w-56 h-16 bg-gradient-to-b from-amber-700 to-amber-900 shadow-lg mb-2"
              style={{ transformStyle: 'preserve-3d', transform: 'rotateX(10deg)' }}
              initial={{ y: 100, opacity: 0, rotateX: 0 }}
              animate={{ y: 0, opacity: 1, rotateX: 10 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="absolute top-[-8px] transform -translate-x-1/2 w-56 h-6 bg-white shadow-md"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              />
              <div className="absolute bottom-0 left-0 w-full h-4 bg-amber-800 rounded-b-lg transform rotateX(-90deg) origin-bottom"></div>
            </motion.div>
            <motion.div
              className="relative w-56 h-16 bg-gradient-to-b from-amber-700 to-amber-900 rounded-lg border-b-none border-amber-800 shadow-lg mb-2"
              style={{ transformStyle: 'preserve-3d', transform: 'rotateX(10deg)' }}
              initial={{ y: 100, opacity: 0, rotateX: 0 }}
              animate={{ y: 0, opacity: 1, rotateX: 10 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="absolute top-[-8px] transform -translate-x-1/2 w-56 h-6 bg-white shadow-md"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              />
              <div className="absolute bottom-0 left-0 w-full h-4 bg-amber-800 rounded-b-lg transform rotateX(-90deg) origin-bottom"></div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Birthday;