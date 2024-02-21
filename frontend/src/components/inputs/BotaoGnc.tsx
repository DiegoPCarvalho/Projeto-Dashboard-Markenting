interface BotaoGNCProps {
    nome: any
    className?: string
    onClick?: () => void
}

export default function BotaoGnc(props: BotaoGNCProps){
    return(
        <div className="flex justify-start items-start lg:justify-center lg:items-center">
            <button className={props.className} onClick={props.onClick}>
                {props.nome}
            </button>
        </div>
    )
}