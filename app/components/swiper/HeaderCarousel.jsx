"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Tooltip, Button } from "@nextui-org/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Bookmark } from "lucide-react";

const HeaderCarousel = () => {
  const items = [
    {
      id: 1,
      img: "https://r4.wallpaperflare.com/wallpaper/4/880/964/one-piece-black-and-white-roronoa-zoro-hd-wallpaper-165a4cd472d87d56e8138b5208aa4d14.jpg",
      title: "One piece",
      desc: " Monkey. D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. With a course charted for the treacherous waters of the Grand Line and beyond, this is one captain who'll never give up until he's claimed the greatest treasure on Earth: the Legendary One Piece!",
      genere: ["Action", "Adventure","Comedy"],
    },
    {
      id: 2,
      img: "https://r4.wallpaperflare.com/wallpaper/9/887/675/anime-anime-girls-re-zero-kara-hajimeru-isekai-seikatsu-rem-re-zero-wallpaper-57907c323149dfb50b5e8ac7287e1a93.jpg",
      title: "Re:ZERO",
      desc: " Natsuki Subaru, an ordinary high school student, is on his way home from the convenience store when he finds himself transported to another world.",
      genere: ["Action", "Adventure","Drama"],
    },
    {
      id: 3,
      img: "https://r4.wallpaperflare.com/wallpaper/65/932/27/anime-demon-slayer-kimetsu-no-yaiba-boy-earrings-kimetsu-no-yaiba-hd-wallpaper-f910b89d613a6d7bb66788efd0f1c6dd.jpg",
      title: "Demon Slayer",
      desc: "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself.",
      genere: ["Action", "Adventure"],
    },
  ];
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + '...';
  };
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper h-[50vh] sm:h-[70vh] md:h-[calc(100vh-64px)] w-full"
    >
      {items.map((item) => (
        <SwiperSlide
          key={item.id}
          className="w-full h-full relative opacity-75 shadow-inner"
        >
          <Image
            src={item.img}
            className="w-full h-full object-cover object-cente"
            fill
            alt="/"
          />
          <div className="absolute top-0 left-0 w-full h-full  bg-black/50 flex justify-center md:justify-start items-end pb-10 ">
            <div className="flex flex-col items-center md:items-start md:ml-16 lg:ml-20 gap-1 sm:gap-3 md:w-[450px]">
              <h1 className=" text-4xl sm:text-5xl lg:text-6xl mb-4 font-dancing">{item.title}</h1>
              <div>
                <span className="mb-2 font-semibold text-slate-200 text-sm">
                  <div className="flex gap-1">
                    {item.genere.map((gen, index) => (
                      <span key={index}>{gen}</span>
                    ))}
                  </div>
                </span>
              </div>
              <p className="tracking-wide text-justify font-light text-sm hidden md:block md:text-lg">
                {
                    truncateText(`${item.desc}`,200)
                }
              </p>
              <div className="mt-4 flex gap-4 items-center">
                <Button radius="full" className=" bg-orange-500 md:text-lg tracking-wide">
                  More Details
                </Button>
                <Tooltip showArrow={true} placement="bottom" content="Bookmark">
                <div className="border-2 border-orange-500 p-1">
                  <Bookmark className="text-orange-500 cursor-pointer" />
                </div>
                </Tooltip>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeaderCarousel;
