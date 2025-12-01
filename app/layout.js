import localFont from "next/font/local";
import "./globals.css";

const gilroy = localFont({
  src: [
    {
      path: "../fonts/Gilroy/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Gilroy/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
});


export const metadata = {
  title: "Эко-Тех: Деревянные дома",
  description: "Made by Momdzhi Georgii",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${gilroy.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
