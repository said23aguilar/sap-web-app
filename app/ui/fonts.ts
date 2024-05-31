import { Lato, Montserrat_Alternates } from 'next/font/google';

export const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const montserratAlternates = Montserrat_Alternates({
  weight: ["100", "300", "400", "700", "900", "200", "500", "600", "800"],
  subsets: ["latin"],
});