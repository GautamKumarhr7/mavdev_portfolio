import Image from "next/image";
import { CardsProps } from "@/app/types";
export default function Card({ title, description, image }: CardsProps) {
  return (
    <>
      <div className=" flex flex-col items-center gap-5 border-1 border-purple-900 p-2">
        <Image src={image} alt="imge!1" width={300} height={300} />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </>
  );
}
