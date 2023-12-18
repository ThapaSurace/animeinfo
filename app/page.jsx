import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeaderCarousel from "./components/swiper/HeaderCarousel";
import SeasonalAnimeList from "./components/lists/SeasonalAnimeList";
import TopAnimeList from "./components/lists/TopAnimeList";
import Footer from "./components/Footer";
import Marquee from "react-fast-marquee";
import { Image } from "@nextui-org/react";

const Page = () => {
  return (
    <div>
      <Navbar />
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
        <div className=" bg-feature_img h-96 sm:h-[70%] max-w-7xl mx-auto w-full rounded-lg bg-center bg-no-repeat bg-cover"></div>
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
      <Footer />
    </div>
  );
};

export default Page;
