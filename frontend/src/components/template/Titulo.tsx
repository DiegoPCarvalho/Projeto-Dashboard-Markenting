interface TituloProps{
    titulo: string
}

export default function Titulo(props: TituloProps){
    return(
        <div>
              <h1 className={`
                font-black text-xl
                text-gray-900
                dark:text-gray-200
              `}
              >{props.titulo}
              </h1>  
        </div>
    )
}