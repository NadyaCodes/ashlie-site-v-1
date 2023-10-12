"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

export default function Logo() {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href="/"
      className="mt-5 ml-5 p-1 no-underline flex flex-row not-italic text-xl font-bold rounded-sm transition-all border-transparent border-4 hover:border-PAYNESGREY-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`text-PAYNESGREY-300 flex justify-center w-12 transition-all p-3 bg-white border border-PAYNESGREY-300 ${
          hover ? "translate-y-0" : "-translate-y-2"
        }`}
      >
        A
      </div>
      <div
        className={`text-white p-3 flex justify-center w-12 transition-all bg-PAYNESGREY-300 border border-PAYNESGREY-300 ${
          hover ? "translate-y-0" : "translate-y-2"
        }`}
      >
        W
      </div>
    </Link>
  );
}
