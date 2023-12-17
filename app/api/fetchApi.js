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
          return res.data.data;
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
export const useTopAnimeData = () => {
  return useQuery({
    queryKey: ["top"],
    queryFn: async () =>
      await newRequest
        .get("/top/anime", {
          params: {
            limit: 20,
          },
        })
        .then((res) => {
          return res.data.data;
        }),
  });
};