"use client";

import { useEffect, useState } from "react";

export default function CountDown() {
  const targetDate = new Date("2025-10-19T15:00:00").getTime(); // Укажи свою дату

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="sticky pt-[55%] pb-[15%] z-10 text-white flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-semibold mb-4">Той салтанатына чейин:</h2>
      <div className="flex space-x-4 text-3xl font-bold">
        <div className="flex flex-col items-center">
          <span>{timeLeft.days}</span>
          <span className="text-sm font-normal">күн</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours.toString().padStart(2, "0")}</span>
          <span className="text-sm font-normal">саат</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>
          <span className="text-sm font-normal">мүнөт</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
          <span className="text-sm font-normal">секунд</span>
        </div>
      </div>
    </div>
  );
}
