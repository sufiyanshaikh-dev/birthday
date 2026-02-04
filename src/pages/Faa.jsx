import React, { useEffect, useRef, useState } from 'react'
import assest from '../assets/assest.js';

const Faa = () => {
  const [play, setPlay] = useState(false)

  const firstAudioRef = useRef(null)
  const secondAudioRef = useRef(null)

  // 🔹 Play audio ONCE when page is entered via routing
  useEffect(() => {
    firstAudioRef.current = new Audio(assest.faa)
    firstAudioRef.current.play().catch(() => {
      // autoplay might be blocked — silently fail
    })

    return () => {
      firstAudioRef.current?.pause()
      firstAudioRef.current = null
    }
  }, [])

  // 🔹 Play different audio on button click
  useEffect(() => {
    if (play) {
      if (!secondAudioRef.current) {
        secondAudioRef.current = new Audio(assest.ladle_audio)
      }
      secondAudioRef.current.currentTime = 0
      secondAudioRef.current.play()
    }
  }, [play])

  return (
    <div className='p-4 flex flex-col justify-center items-center gap-6'>
      <h1 className="text-4xl font-bold text-pink-500 p-4">Hehehehhehehe</h1>
      <img src={assest.faa1} alt="Faa 1" className="w-60 h-80 rounded-lg" />
      <img src={assest.faa2} alt="Faa 2" className="w-60 h-80 rounded-lg" />
      <button onClick={() => setPlay(true)} className="px-6 py-3 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600 transition">Play Music</button>
    </div>
  )
}

export default Faa
