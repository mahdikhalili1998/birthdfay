"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

function TextDemo() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["شما دعوتید به جشن هوراد عزیزمون ", "منتظر حضور گرمتون هستیم "],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="my-5 flex justify-center text-xl font-bold text-white">
      <span ref={el} />
    </div>
  );
}

export default TextDemo;
