"use client"
import React from 'react'
import { useTopAnimeData } from '../../api/fetchApi'
import AnimelistSlider from "../swiper/AnimelistSlider"

const TopAnimeList = () => {
const {data,isLoading,error} = useTopAnimeData()
  return (
    <AnimelistSlider data={data} isLoading={isLoading} error={error} />
  )
}

export default TopAnimeList