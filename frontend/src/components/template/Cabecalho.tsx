import useAppData from "@/data/hook/useAppData"
import BotaoAlternarTema from "./BotaoAlternarTema"
import Titulo from "./Titulo"
import AvatarUsuario from "./AvatarUsuario"

interface CabecalhoProps {
    titulo: string,
    icone: any
}

export default function Cabecalho(props: CabecalhoProps) {
    const {tema, alternarTema} = useAppData()

    return (
        <div className={`flex bg-gray-100 p-2 box-border shadow-lg dark:bg-gray-800`}>
            <div className="mr-3 dark:text-gray-200">
                {props.icone}
            </div>
            <Titulo titulo={props.titulo} />
            <div className={'flex flex-grow justify-end items-center'}>
                <BotaoAlternarTema tema={tema!} alternarTema={alternarTema!}></BotaoAlternarTema>
                <AvatarUsuario className="ml-3"/>
            </div>
        </div>
    )
}