"use client";
import Image from "next/image";
import React from "react";
import Sound from "../module/Sound";
import DateText from "@/components/module/DateText";
import { FaLocationDot } from "react-icons/fa6";
import animationData from "@/lottie/Confetti.json"; // فایل JSON انیمیشن
import dynamic from "next/dynamic";
import TextDemo from "../module/TextDemo";

function Main() {
  const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });
  return (
    <div className="relative">
      <Sound />
      <div>
        <h1 className="mx-auto w-max text-4xl font-bold text-white">
          تولد هوراد
        </h1>
        {/* textDemo  */}
        <TextDemo />

        <DateText />
      </div>
      <Image
        src="/image/gh.png"
        alt="hero"
        width={400}
        height={400}
        priority
        className="mx-auto mb-5 w-[18rem] animate-slide-down select-none will-change-transform"
      />
      <div className="absolute top-16">
        <Lottie
          animationData={animationData}
          loop
          play
          style={{
            width: 400,
            height: 300,
          }}
        />
      </div>
      {/* addres  */}
      <div className="-mt-24 flex items-center justify-center gap-4 font-bold text-white">
        <div className="flex flex-col items-center justify-center gap-1">
          <span>میدان شیخ زاهد،ابتدای کمربندی</span>
          <span>ساختمان پلاس سالن آدم و حوا</span>
          <span> از ساعت 20:00 الی 00:00 </span>
        </div>
        <span>
          <FaLocationDot className="text-2xl" />
        </span>
      </div>
    </div>
  );
}

export default Main;
