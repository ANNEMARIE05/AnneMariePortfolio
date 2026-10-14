import {
  Fraunces,
  Plus_Jakarta_Sans,
  Space_Mono,
  Syne,
} from "next/font/google";

export const policeSyne = Syne({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

export const policeFraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const policePlusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const policeSpaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-space-mono",
  display: "swap",
});

export const classesPolices = [
  policeSyne.variable,
  policeFraunces.variable,
  policePlusJakarta.variable,
  policeSpaceMono.variable,
].join(" ");
