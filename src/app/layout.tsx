import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
import { ViewTransitions } from 'next-view-transitions'
import SessionAuthProvider from "@/context/SessionAuthProvider";
import { CursorVariantProvider } from "@/context/CursorVariantProvider";

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
      <SessionAuthProvider>
        <CursorVariantProvider>
          <html lang="en" className="bg-darkGeneral scroll-smooth" >
            <body className={`${inter.className} ${delusionFont.variable} mx-auto my-0 overflow-x-hidden`}>
              {children}
            </body>
          </html>
        </CursorVariantProvider>
      </SessionAuthProvider>
    </ViewTransitions>
  );
}
