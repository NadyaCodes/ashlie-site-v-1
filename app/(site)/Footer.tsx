"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer({ copywrite }: { copywrite: string }) {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsFooterVisible(true);
      } else {
        setIsFooterVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      className={`fixed bottom-0 w-full bg-PLATINUM-400 p-3 footer ${
        isFooterVisible ? "visible" : ""
      }`}
    >
      <div className="flex flex-col text-center">
        <div>
          <div>{copywrite}</div>
          <Link href="/privacy" className="m-2">
            Privacy Policy
          </Link>
          <Link href="/terms" className="m-2">
            Terms and Conditions
          </Link>
        </div>
        <div className="">
          Website created by{" "}
          <a href="https://www.nadyacorscadden.com" target="_blank">
            Nadya Corscadden
          </a>
        </div>
      </div>
    </footer>
  );
}
