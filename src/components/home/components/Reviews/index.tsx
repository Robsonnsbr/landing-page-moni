import Image from "next/image";
import imageMonichara from "@public/images/mochara-imagem.webp";
import TaggBoxWidget from "./TaggBoxWidget";

export default function Reviews() {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-6 items-center">
      <TaggBoxWidget />
      <Image
        src={imageMonichara}
        placeholder="blur"
        loading="lazy"
        priority={false}
        alt="imagem Monichara advocada"
        width={612}
        height={918}
        className="max-w-[300px] h-auto rounded-md border-2 border-lightApricotSalmon shadow-md"
      />
    </div>
  );
}
