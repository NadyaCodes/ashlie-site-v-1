import { getDimensions } from "@/helpers/getDimensions";
import { getHomeContent } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
  const homeContent = await getHomeContent();

  const heroImageDimensions = getDimensions(homeContent?.image);

  const titleSplit = homeContent.header.split(" ");

  return (
    <div className="max-h-screen min-h-screen">
      <Image
        src={homeContent?.image}
        alt={
          homeContent.alt || homeContent.header || "No Description Available"
        }
        width={heroImageDimensions ? heroImageDimensions[0] : 300}
        height={heroImageDimensions ? heroImageDimensions[1] : 300}
        className="absolute left-0 -z-10"
      />
      <div>
        <h1 className="flex flex-row pl-10 pt-20 w-full">
          <div
            className="bg-white text-PAYNESGREY-300 p-4 border-2 border-PAYNESGREY-300"
            style={{ animation: "flyInSplitUp 0.7s linear forwards" }}
          >
            {titleSplit[0]}
          </div>
          <div
            className="bg-PAYNESGREY-300 text-white p-4 border-2 border-PAYNESGREY-300"
            style={{ animation: "flyInSplitDown 0.7s linear forwards" }}
          >
            {titleSplit[1]}
          </div>
        </h1>
      </div>
    </div>
  );
}
