"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AosProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // длительность анимации
      once: true, // запуск один раз
    });
  }, []);

  return <>{children}</>;
}
