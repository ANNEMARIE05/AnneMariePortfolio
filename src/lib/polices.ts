import { Instrument_Serif, Manrope, Space_Mono } from "next/font/google";

export const policeManrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const policeInstrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
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
  policeManrope.variable,
  policeInstrumentSerif.variable,
  policeSpaceMono.variable,
].join(" ");
