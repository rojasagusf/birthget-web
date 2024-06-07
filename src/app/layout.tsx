import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
import Header from "@/components/Header";
import { ViewTransitions } from 'next-view-transitions'

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
    <ViewTransitions>
      <html lang="en" className="bg-darkGeneral scroll-smooth">
        <body className={`${inter.className} ${delusionFont.variable} max-h-screen max-w-screen-xl p-6 mx-auto my-0 flex flex-col justify-start items-center overflow-x-hidden`}>
          <Header />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
