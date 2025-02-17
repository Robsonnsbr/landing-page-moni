import Link from "next/link";
import { data } from "@data/specialtiesContentData";

export default function Especialidades() {
  return (
    <>
      <div>
        <h3 className="text-3xl font-extrabold text-center uppercase text-white">
          Atendimento Jurídico Exclusivo, Soluções Personalizadas
        </h3>
      </div>
      <ul className="flex flex-wrap justify-center gap-6">
        {data.map(({ category, services, slug }) => (
          <li
            key={category}
            className="flex-grow min-w-[200px] w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
          >
            <div className=" text-center p-6 bg-white shadow-md w-full rounded-md flex flex-col h-full">
              <h2 className="text-2xl uppercase font-semibold text-lightApricotSalmon">
                {category}
              </h2>
              <ul className="mt-6 space-y-2 flex-grow ">
                {services.map(({ title }) => (
                  <li key={title} className="flex flex-col">
                    <h3 className="font-semibold text-midBlack ">{title}</h3>
                  </li>
                ))}
              </ul>
              <Link
                href={`http://moccelinadvocacia.com/especialidades/` + slug}
                target="_blank"
                rel="noopener"
                className="py-6 px-4 m-auto text-success font-openSans font-semibold hover:underline"
              >
                Saiba mais
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
