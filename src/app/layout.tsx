import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { StateProvider } from "./context/State";
import "./globals.css";

const inter = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <StateProvider>{children}</StateProvider>
        </body>
      </html>
    </>
  );
}
