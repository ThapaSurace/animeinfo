"use client";
import React from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AnimeCard from "../../components/AnimelistCard/AnimeCard";

const AnimelistSlider = ({ data, isLoading, error }) => {

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        virtual
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400:{
            slidesPerView:2,
          },
          639: {
            slidesPerView: 3,
          },
          865:{
            slidesPerView:4
          },
          1000:{
            slidesPerView:5
          },
          1500:{
            slidesPerView:6
          },
          1700:{
            slidesPerView:7
          }
        }}
      >
        {isLoading
          ? "loading..."
          : error
          ? "Something went wrong!"
          : data?.data?.map((item, index) => (
              <SwiperSlide key={index} virtualIndex={index}>
                <AnimeCard item={item} />
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
};

export default AnimelistSlider;
