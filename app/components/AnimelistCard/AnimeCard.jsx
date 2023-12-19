import { Card, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";

const AnimeCard = ({ item }) => {
  return (
    <>
      <Link href={`/anime/${item.mal_id}`}>
        <Card className="col-span-12 sm:col-span-4 h-[300px] cursor-pointer">
          <CardHeader className="absolute z-10 bottom-0 flex-col !items-start backdrop-blur-sm">
            <h1 className="text-white text-center w-full">{item.title}</h1>
          </CardHeader>

          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover object-center opacity-75"
            src={item.images.jpg.large_image_url}
          />
        </Card>
      </Link>
    </>
  );
};

export default AnimeCard;
