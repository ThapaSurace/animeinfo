"use client";
import newRequest from "../utils/newRequest";
import { useQuery } from "@tanstack/react-query";

//get seasonal animes
export const useAnimeRecommendationData = () => {
  return useQuery({
    queryKey: ["seasonal"],
    queryFn: async () =>
      await newRequest
        .get("/seasons/now", {
          params: {
            limit: 20,
          },
        })
        .then((res) => {
          return res.data;
        }),
  });
};


//get single anime by id
export const useSingleAnime = (id) => {
  return useQuery({
    queryKey: ["singleanime",id],
    queryFn: async () =>
      await newRequest
        .get(`/anime/${id}`)
        .then((res) => {
          return res.data.data;
        }),
  });
};

//get top animes
export const useTopAnimeData = (page) => {
  return useQuery({
    queryKey: ["top",page],
    staleTime: 300000,
    queryFn: async () =>
      await newRequest
        .get(`/top/anime?page=${page}`)
        .then((res) => {
          return res.data;
        }),
  });
};

//get anime genre
export const useAnimeGenreData = () => {
  return useQuery({
    queryKey: ["genre"],
    queryFn: async () =>
      await newRequest
        .get("/genres/anime", {
          params: {
            limit: 10,
          },
        })
        .then((res) => {
          return res.data.data.slice(0, 10);
        }),
  });
};