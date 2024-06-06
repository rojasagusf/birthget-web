import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const delusionFont = localFont({ src: './../assets/fonts/delusiondisplay-regular.otf', variable: '--font-delusion' })

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Birthget",
  description: "Application to notify different birthdates",
  keywords: ['birthget', 'birthdays']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-darkGeneral">
      <body className={`${inter.className} ${delusionFont.variable} min-h-screen p-6 max-w-screen-xl mx-auto my-0 flex flex-col justify-start items-center`}>
        {children}
      </body>
    </html>
  );
}
