"use client";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useAnimeGenreData } from "../../api/fetchApi";

const GenreDropDown = () => {
  const { data, isLoading, error } = useAnimeGenreData();
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button  variant="light">Genre</Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Static Actions">
        {isLoading
          ? "loading..."
          : error
          ? "Something went wrong!!"
          : data.map((gen) => (
              <DropdownItem key={gen.mal_id}>{gen.name}</DropdownItem>
            ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default GenreDropDown;
