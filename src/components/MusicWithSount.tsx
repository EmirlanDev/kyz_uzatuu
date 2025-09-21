"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicWithSound() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(231.3765);

  // автозапуск по клику
  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
      document.removeEventListener("click", startAudio);
    };

    document.addEventListener("click", startAudio);
    return () => document.removeEventListener("click", startAudio);
  }, []);

  // получаем длительность и обновляем прогресс плавно
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    console.log(audio.duration);

    const setAudioDuration = () => setDuration(audio.duration);
    audio.addEventListener("loadedmetadata", setAudioDuration);

    let frameId: number;
    const updateProgress = () => {
      if (audio && !audio.paused) {
        setProgress(audio.currentTime);
      }
      frameId = requestAnimationFrame(updateProgress);
    };
    frameId = requestAnimationFrame(updateProgress);

    return () => {
      audio.removeEventListener("loadedmetadata", setAudioDuration);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const newTime = Number(e.target.value);
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  return (
    <div className="flex flex-col items-center mt-[20px]">
      {/* Аудио */}
      <audio ref={audioRef} src="/music.mp3" loop />

      {/* Ползунок */}
      <input
        type="range"
        min={0}
        max={duration || 0}
        step="0.01"
        value={progress}
        onChange={handleSeek}
        className="w-[197px] h-[5px] rounded-full cursor-pointer
          bg-[#d1c1b8] relative
          appearance-none
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-[8px]
          [&::-webkit-slider-thumb]:h-[8px]
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-[#5D4334]
          [&::-webkit-slider-thumb]:cursor-pointer
          [&::-moz-range-thumb]:w-4
          [&::-moz-range-thumb]:h-4
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-[#5D4334]"
        style={{
          background: `linear-gradient(to right, #5D4334 ${
            duration ? (progress / duration) * 100 : 0
          }%, #d1c1b8 ${duration ? (progress / duration) * 100 : 0}%)`,
        }}
      />

      {/* Кнопки */}
      <div className="flex items-center gap-[16px] py-[14px]">
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 7.86603C2.83333 7.48113 2.83333 6.51887 3.5 6.13397L11 1.80385C11.6667 1.41895 12.5 1.90007 12.5 2.66987V11.3301C12.5 12.0999 11.6667 12.5811 11 12.1962L3.5 7.86603Z"
            fill="#5D4334"
          />
          <rect
            x="3"
            y="13"
            width="3"
            height="12"
            rx="1"
            transform="rotate(-180 3 13)"
            fill="#5D4334"
          />
        </svg>
        <button
          onClick={() => {
            if (!audioRef.current) return;
            if (isPlaying) {
              audioRef.current.pause();
              setIsPlaying(false);
            } else {
              audioRef.current.play();
              setIsPlaying(true);
            }
          }}
        >
          {isPlaying ? (
            <svg
              width="30"
              height="30"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12.5" cy="12.5" r="12.5" fill="#5D4334" />
              <rect x="9" y="8" width="2" height="10" rx="1" fill="#F3DEF1" />
              <rect x="14" y="8" width="2" height="10" rx="1" fill="#F3DEF1" />
            </svg>
          ) : (
            <svg
              width="30"
              height="30"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12.5" cy="12.5" r="12.5" fill="#5D4334" />
              <path
                d="M17.5 12.134C18.1667 12.5189 18.1667 13.4811 17.5 13.866L10 18.1962C9.33333 18.5811 8.5 18.0999 8.5 17.3301V8.66987C8.5 7.90007 9.33333 7.41895 10 7.80385L17.5 12.134Z"
                fill="#F7E2F5"
              />
            </svg>
          )}
        </button>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 6.13397C13.1667 6.51887 13.1667 7.48113 12.5 7.86603L5 12.1962C4.33333 12.5811 3.5 12.0999 3.5 11.3301V2.66987C3.5 1.90007 4.33333 1.41895 5 1.80385L12.5 6.13397Z"
            fill="#5D4334"
          />
          <rect x="13" y="1" width="3" height="12" rx="1" fill="#5D4334" />
        </svg>
      </div>
    </div>
  );
}
