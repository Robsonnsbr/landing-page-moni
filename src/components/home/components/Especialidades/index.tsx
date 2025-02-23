import Link from "next/link";
import { data } from "@data/specialtiesContentData";
import Line from "@components/common/svgs/Line";

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
            <div className="relative text-center p-6 bg-LightGray shadow-md w-full rounded-md flex flex-col h-full hover:scale-105 transition-transform">
              <h2 className="text-2xl uppercase font-semibold text-lightApricotSalmon">
                {category}
              </h2>
              <Line position={{ left: "0px", top: "0px" }} />
              <Line rotation={90} position={{ right: "0px", top: "0px" }} />
              <Line rotation={180} position={{ right: "0px", bottom: "0px" }} />
              <Line rotation={270} position={{ left: "0px", bottom: "0px" }} />
              <ul className="mt-6 space-y-2 flex-grow flex flex-col  justify-center">
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
