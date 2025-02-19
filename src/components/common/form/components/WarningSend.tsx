import { BsCheck2All } from 'react-icons/bs';
import { TbFaceIdError } from 'react-icons/tb';

interface IWarningMsgProps {
  isWasSend: boolean;
  isError: boolean;
}

function WarningSend({ isWasSend = false, isError = false }: IWarningMsgProps) {
  return (
    <>
      <div
        className={`text-noBlack absolute top-1/4 left-1/2 flex items-center gap-1 transition-opacity ease-in-out duration-500 ${
          isWasSend ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="flex flex-wrap justify-center">
          Sua mensagem&nbsp;
          <span className="flex flex-nowrap">
            foi enviada!&nbsp;
            <BsCheck2All className="size-5 text-green-400  self-center" />
          </span>
        </span>
      </div>
      <div
        className={`text-noBlack absolute top-1/4 left-1/2 flex items-center gap-1 transition-opacity ease-in-out duration-500 ${
          isError ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="flex flex-wrap justify-center">
          Falha ao enviar&nbsp;
          <span className="flex flex-nowrap">
            mensagem&nbsp;
            <TbFaceIdError className="size-5 text-errorRed  self-center" />
          </span>
        </span>
      </div>
    </>
  );
}

export default WarningSend;
