"use client";
import { useRef, useState } from "react";
import { FaVolumeMute } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";

function Sound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (isMuted) {
      audioRef.current.muted = false;
      audioRef.current
        .play()
        .catch((err) => console.log("Autoplay blocked:", err));
      setIsMuted(false);
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div className="ml-4 mt-4">
      {/* موزیک */}
      <audio ref={audioRef} src="/music/hbd.mp3" loop autoPlay muted />

      {/* دکمه */}
      <button
        onClick={toggleSound}
        className="rounded-full bg-white p-3 text-purple-800 shadow-lg transition"
      >
        {isMuted ? <FaVolumeMute size={22} /> : <AiFillSound size={22} />}
      </button>
    </div>
  );
}

export default Sound;
