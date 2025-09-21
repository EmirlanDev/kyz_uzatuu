import type { Metadata } from "next";
import {
  Dancing_Script,
  Pacifico,
  Satisfy,
  Great_Vibes,
  Allura,
  Kaushan_Script,
  Courgette,
  Alex_Brush,
  Parisienne,
  Shadows_Into_Light,
  Lobster,
} from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import AosProvider from "@/components/AosProvider";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lobster",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing-script",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-satisfy",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allura",
});

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kaushan",
});

const courgette = Courgette({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-courgette",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alex-brush",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-parisienne",
});

const shadows = Shadows_Into_Light({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-shadows",
});

export const metadata: Metadata = {
  title: "Айзаттын кыз узатуу тоюна чакыруу",
  // description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={[
        lobster.variable,
        dancingScript.variable,
        pacifico.variable,
        satisfy.variable,
        greatVibes.variable,
        allura.variable,
        kaushan.variable,
        courgette.variable,
        alexBrush.variable,
        parisienne.variable,
        shadows.variable,
      ].join(" ")}
      lang="en"
    >
      <body className={`antialiased`} cz-shortcut-listen="true">
        <AosProvider>{children}</AosProvider>
      </body>
    </html>
  );
}
