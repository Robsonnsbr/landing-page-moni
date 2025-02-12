import ContentContainer from "@components/common/containers/ContentContainer";

export default function Insights() {
  return (
    <ContentContainer className="flex flex-col py-12 overflow-hidden  3xl:scale-105">
      <div className="flex flex-wrap text-white marker:text-red">
        <div className="self-center lg:w-1/2 xl:w-1/4 py-4 lg:px-2">
          <h3 className="uppercase break-words font-poppins font-extrabold text-2xl text-center text-lightApricotSalmon">
            Estratégias Jurídicas Especializadas
          </h3>
        </div>

        <div className="flex w-full lg:w-1/2 xl:w-1/4 py-4 lg:px-2">
          <div className="text-center p-6 bg-midBlack shadow-lg w-full rounded-md">
            <h2 className="text-xl font-semibold mb-6 text-lightApricotSalmon text-lightApricotSalmon">
              Público de Interesse
            </h2>
            <ul className="text-left mt-4 ml-4 list-disc">
              <li className="mb-4">Clientes Individuais</li>
              <li className="mb-4">Empresas de Pequeno e Médio Porte</li>
              <li className="mb-4">Instituições Financeiras</li>
              <li className="mb-4">Órgãos Públicos</li>
              <li className="mb-4">Consultorias Jurídicas</li>
            </ul>
          </div>
        </div>

        <div className="flex w-full lg:w-1/2 xl:w-1/4 py-4 lg:px-2">
          <div className="text-center p-6 bg-midBlack rounded-md shadow-lg w-full">
            <h2 className="text-xl font-semibold mb-6 text-lightApricotSalmon">
              Serviços Oferecidos
            </h2>
            <ul className="text-left mt-4 ml-4 list-disc">
              <li className="mb-4">
                Análise Jurídica Personalizada para Casos Complexos.
              </li>
              <li className="mb-4">
                Consultoria Estratégica em Questões Regulatórias.
              </li>
              <li className="mb-4">
                Suporte Legal em Transações Comerciais e Societárias.
              </li>
              <li className="mb-4">
                Representação Judicial e Extrajudicial em Diversas Áreas do
                Direito.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-full lg:w-1/2 xl:w-1/4 py-4 lg:px-2">
          <div className="text-center p-6 bg-midBlack rounded-md shadow-lg w-full">
            <h2 className="text-xl font-semibold mb-6 text-lightApricotSalmon">
              Compromisso
            </h2>
            <ul className="text-left mt-4 ml-4 list-disc">
              <li className="mb-4">
                Excelência e Confiança na Prestação de Serviços Jurídicos.
              </li>
              <li className="mb-4">
                Atuação Ética e Responsável em Todas as Relações Profissionais.
              </li>
              <li className="mb-4">
                Parceria com Clientes para Alcançar Soluções Jurídicas Efetivas.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}
