"use client";

import { useState } from "react";
import { useTopAnimeData } from "../api/fetchApi";
import AnimeCard from "../components/AnimelistCard/AnimeCard";
import { Pagination } from "@nextui-org/react";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error, refetch } = useTopAnimeData(currentPage);
  

  console.log(currentPage);
  return (
    <div className=" max-w-xs sm:max-w-xl md:max-w-6xl mx-auto  px-4 md:px-6 lg:px-8 my-10">
      {isLoading ? (
        "loading..."
      ) : error ? (
        "Something went wrong"
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            {data.data.map((item) => (
              <AnimeCard key={item.mal_id} item={item} />
            ))}
          </div>
          <div className="mt-10 flex justify-center items-center">
            <Pagination
              isCompact
              showControls
              total={100}
              initialPage={1}
              size="lg"
              color="warning"
              page={currentPage}
              onChange={page => setCurrentPage(page)}
              
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
