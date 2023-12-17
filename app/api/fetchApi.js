"use client";
import newRequest from "../utils/newRequest";
import { useQuery } from "@tanstack/react-query";

export const useAnimeRecommendationData = () => {
  return useQuery({
    queryKey: ["singlegig"],
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
