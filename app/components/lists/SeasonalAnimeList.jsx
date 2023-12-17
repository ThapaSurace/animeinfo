"use client"
import React from 'react'
import AnimelistSlider from "../swiper/AnimelistSlider"
import {useAnimeRecommendationData} from "../../api/fetchApi"

const SeasonalAnimeList = () => {
    const { data, isLoading, error } = useAnimeRecommendationData();
  return (
    <AnimelistSlider data={data} isLoading={isLoading} error={error} />
  )
}

export default SeasonalAnimeList