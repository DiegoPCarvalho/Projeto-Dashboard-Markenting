interface AuthBotaoPorps {
    nome: any
    className: string
    onClick?: () => void
}

export default function AuthBotao(props: AuthBotaoPorps){
    return(
        <div>
            <button className={props.className} onClick={props.onClick}>
                {props.nome}
            </button>
        </div>
    )
}