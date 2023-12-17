import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import HeaderCarousel from "./components/swiper/HeaderCarousel";
import SeasonalAnimeList from "./components/lists/SeasonalAnimeList";


const page = () => {
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
    </div>
  )
}

export default page