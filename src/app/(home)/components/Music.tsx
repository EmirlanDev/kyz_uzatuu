"use client";

import { useState } from "react";
import spinImg from "../../../assets/spinImg.png";
import downMusic from "../../../assets/downMusic.png";
import Image from "next/image";
import MusicWithSound from "@/components/MusicWithSount";

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <section className="relative">
      {/* SPINS */}
      <div className="flex justify-between absolute w-[100%] top-[65px] z-[-2]">
        <Image
          className="spin translate-x-[-50%]"
          src={spinImg}
          alt="spin Img"
        />
        <Image
          className="spin translate-x-[50%]"
          src={spinImg}
          alt="spin Img"
        />
      </div>
      <div className="container">
        <div className="flex flex-col  text-[#5D4334] items-center">
          <h1 data-aos="zoom-in-down" className="mt-[32px] text-[32px]">
            Тойго чакыруу!
          </h1>
          <h2
            data-aos="zoom-in-down"
            className="text-[24px] border-b-2 px-[25px] pb-[7px]"
          >
            19.10.2025
          </h2>
          <div className="mb-6 animate-bounce mt-[70px]">
            <span className="flex justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="5.10339"
                  width="34.0619"
                  height="7"
                  rx="3.5"
                  transform="rotate(46.8075 5.10339 0)"
                  fill="#5D4334"
                />
                <rect
                  width="34.0619"
                  height="7"
                  rx="3.5"
                  transform="matrix(-0.684452 0.729058 0.729058 0.684452 42.3138 0)"
                  fill="#5D4334"
                />
                <rect
                  x="5.10339"
                  y="18"
                  width="34.0619"
                  height="7"
                  rx="3.5"
                  transform="rotate(46.8075 5.10339 18)"
                  fill="#5D4334"
                />
                <rect
                  width="34.0619"
                  height="7"
                  rx="3.5"
                  transform="matrix(-0.684452 0.729058 0.729058 0.684452 42.3138 18)"
                  fill="#5D4334"
                />
              </svg>
            </span>
          </div>

          <div data-aos="zoom-in-up">
            <h3 className="text-center text-[20px] mt-[50px]">
              Музыканы иштетүү үчүн <br /> баскычты басыңыз
            </h3>

            <MusicWithSound />
          </div>

          <Image className="my-[80px]" src={downMusic} alt="down music" />
        </div>
      </div>
    </section>
  );
}
