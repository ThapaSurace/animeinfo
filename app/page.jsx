import React from "react";
import HeaderCarousel from "./components/swiper/HeaderCarousel";
import SeasonalAnimeList from "./components/lists/SeasonalAnimeList";
import TopAnimeList from "./components/lists/TopAnimeList";
import Marquee from "react-fast-marquee";
import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <HeaderCarousel />
      <div className="my-16 px-6">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-orange-500 mb-2">
            Seasonal Sampler
          </h1>
          <p className="text-slate-400 tracking-wide font-semibold text-sm">
            Check out the first few episodes of these new shows for free!
          </p>
        </div>
        <SeasonalAnimeList />
      </div>
      <div className="my-16 px-6">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-orange-500 mb-2">Top Anime</h1>
          <p className="text-slate-400 tracking-wide font-semibold text-sm">
            Check out the first few episodes of these new shows for free!
          </p>
        </div>
        <TopAnimeList />
      </div>
      <div className="sm:h-screen flex justify-center items-center px-6 lg:px-0">
        <div className=" bg-feature_img h-96 sm:h-[70%] max-w-7xl mx-auto w-full rounded-lg bg-center bg-no-repeat bg-cover relative">
          <Button className="absolute bottom-10 right-10 bg-orange-500 font-bold text-4xl py-4" size="lg" radius="sm">Watch Now</Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center my-10 lg:my-16 py-6 lg:py-10 px-4">
      <Image
            src="pngegg.png"
            alt="browse_image"
            className="object-center object-cover w-20"
          />
        <p className="text-center text-xl mdtext-2xl">Still looking for something to watch? <br />  Check out our full library</p>
       <Link href="/animelists">
       <Button className="text-orange-500 border-yellow-500" variant="ghost" size="md">View All</Button>
       </Link>
      </div>
      <Marquee>
        <div className="flex items-end">
          <Image
            width={90}
            src="https://i.pinimg.com/originals/c0/f4/37/c0f437422402e22abec115e7ce3aa421.gif"
            alt="gif"
            className="object-center object-cover"
          />
          <Image
            width={100}
            src="https://64.media.tumblr.com/667b9a86298b13ded15614ea54f43704/163835212083f5ee-ec/s1280x1920/c6342d5fa9fc6bcd7ca2f30442a0f04fc48e12ea.gif"
            alt="gif"
            className="object-center object-cover"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Page;
