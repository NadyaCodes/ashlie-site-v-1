import React from "react";
import Link from "next/link";
import { Page } from "@/types/Page";

export default function Menu({ extraPages }: { extraPages: Page[] }) {
  const pagesarray = ["About", "Media", "Gallery", ...extraPages, "Contact"];

  const linkClass =
    "mx-3 mb-5 p-1 lg:mx-5 not-italic text-PAYNESGREY-400 no-underline border-2 border-transparent hover:border-b-PAYNESGREY-300 hover:text-PAYNESGREY-300  transition-all";
  return (
    <div className="flex flex-wrap items-center">
      {pagesarray.map((element) => {
        if (typeof element === "string") {
          return (
            <Link
              href={`/${element.toLowerCase()}`}
              className={linkClass}
              key={element}
            >
              {element}
            </Link>
          );
        } else {
          <Link
            href={`/${element.slug}`}
            className={linkClass}
            key={element._id}
          >
            {element.name}
          </Link>;
        }
      })}
    </div>
  );
}
