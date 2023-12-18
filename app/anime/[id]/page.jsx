"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useSingleAnime } from "../../api/fetchApi";

const Page = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useSingleAnime(id);

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 lg:px-0">
        <div className="pb-6">
          {isLoading ? (
            "loading..."
          ) : error ? (
            "Something went wrong!!"
          ) : (
            <>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full  rounded-md "
                  src={data.trailer.embed_url}
                ></iframe>
              </div>
              <div className="mt-4">
                <h1 className="text-orange-500 text-2xl md:text-3xl font-bold">
                  {data.title}
                </h1>
                <div>
                  {data.genres.map((genre, index) => (
                    <span className="mr-1 text-sm text-slate-400" key={index}>
                      {genre.name}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6 items-start my-4">
                  <div className="flex flex-col items-center">
                    <h3 className="text-blue-600">Score</h3>

                    <span className="text-[12px]">{data.score}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-yellow-400">Rank</h3>
                    <span className="text-[12px]">#{data.rank}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-pink-400">Popularity</h3>
                    <span className="text-[12px]">#{data.popularity}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-sky-400">Members</h3>
                    <span className="text-[12px]">#{data.members}</span>
                  </div>
                </div>
                <div className="mt-2">
                  <h2 className="text-lg md:text-xl font-semibold mb-1 tracking-wide text-violet-400">
                    Synopsis
                  </h2>
                  <p className="text-justify tracking-wide text-[14px] text-slate-300">
                    {data.synopsis}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
