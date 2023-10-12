import { getDimensions } from "@/helpers/getDimensions";
import { getHomeContent } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Simonetta } from "next/font/google";

const simonetta = Simonetta({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default async function Home() {
  const homeContent = await getHomeContent();

  const heroImageDimensions = getDimensions(homeContent?.image);

  const titleArray = Array.from(homeContent?.header);

  return (
    <div className="text-center">
      <h1 className="flex flex-row py-0 pt-5">
        {titleArray.map((element, index) => {
          const delay = index * 0.3;
          return (
            <div
              className={`opacity-0 text-PAYNESGREY-400 drop-shadow-sm text-7xl p-1 ${simonetta.className}`}
              style={{
                animation: `heroHeader 1s linear ${delay}s forwards`,
              }}
              key={index}
            >
              {element}
            </div>
          );
        })}
      </h1>
      <div className="">
        {homeContent?.homeContent && (
          <div className="m-3 lg:mt-20 z-20 absolute w-1/3">
            <div className="p-2 m-2 bg-gradient-to-tl from-DAVYGREY-100 via-PLATINUM-200 to-DAVYGREY-100 rounded text-PAYNESGREY-700">
              {homeContent.header2.map((element, index) => {
                return (
                  <h2 key={index} className="py-1 font-normal">
                    {element}
                  </h2>
                );
              })}
            </div>
            <div className="my-10">
              <PortableText value={homeContent?.homeContent} />
            </div>
          </div>
        )}
        {homeContent?.image && (
          <div className="relative">
            <Image
              src={homeContent?.image}
              alt={
                homeContent.alt ||
                homeContent.header ||
                "No Description Available"
              }
              width={heroImageDimensions ? heroImageDimensions[0] : 300}
              height={heroImageDimensions ? heroImageDimensions[1] : 300}
            />
            <div className="absolute top-0 left-0 w-full h-full">
              <div
                className="w-full h-full"
                style={{
                  background:
                    "linear-gradient(90deg, #eef2ef, #eef2ef 30% ,transparent 65%, transparent 90%, #eef2ef 100%)",
                }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    background:
                      "linear-gradient(0deg, #eef2ef, #eef2ef 2%, transparent 10%, transparent 90%, #eef2ef 98%, #eef2ef 100%)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
