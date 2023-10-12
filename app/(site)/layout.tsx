import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Menu from "./Menu";
import { getCopywriteContent, getExtraPages } from "@/sanity/sanity-utils";
import Socials from "./Socials";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanity Boilerplate",
  description: "Generated by Nadya Corscadden",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const extraPages = await getExtraPages();
  const copywriteObj = await getCopywriteContent();
  return (
    <html lang="en">
      <body className={`my-10 ${inter.className}`}>
        <header>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row justify-between w-screen">
              <Link
                href="/"
                className="p-3 m-5 rounded not-italic text-xl font-bold bg-gradient-to-r from-emerald-950 to-emerald-800 bg-clip-text text-transparent drop-shadow-2xl transition-all hover:bg-gradient-to-l hover:from-pink-500 hover:via-purple-700 hover:to-pink-500 border-2 border-transparent hover:border-purple-700"
              >
                HOME
              </Link>
              <Socials />
            </div>
            <Menu extraPages={extraPages} />
          </div>
        </header>
        <main className="py-10 max-w-7xl mx-auto px-5">{children}</main>
        <footer>
          <div className="flex flex-col text-center">
            <div>{copywriteObj.copywrite}</div>
            <div>
              <Link href="/privacy" className="m-2">
                Privacy Policy
              </Link>
              <Link href="/terms" className="m-2">
                Terms and Conditions
              </Link>
            </div>
            <div className="m-5">
              Website created by{" "}
              <a href="https://www.nadyacorscadden.com" target="_blank">
                Nadya Corscadden
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}