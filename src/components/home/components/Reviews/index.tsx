import Image from "next/image";
import imageMonichara from "@public/images/mochara-imagem.webp";
import TaggBoxWidget from "./TaggBoxWidget";

export default function Reviews() {
  return (
    <>
      <h3 className="text-3xl font-extrabold text-center uppercase text-deepIndigoBlue font-poppins">
        Excelência reconhecida: temos 5 estrelas no Google!
      </h3>
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
      <h3 className="text-xl text-deepIndigoBlue font-semibold text-center">
        Para mais informações, acesse:{" "}
        <a
          href="http://moccelinadvocacia.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lightApricotSalmon hover:underline"
        >
          moccelinadvocacia.com
        </a>
      </h3>
    </>
  );
}
