interface CardHomeGeral {
    titulo?: string
    valor?: string
    className?:string
}

export default function CardHomeGeral(props: CardHomeGeral) {
    return (
        <div className={`
             flex flex-col justify-center items-center
             bg-white h-32 w-full text-white
             rounded-lg box-border shadow-lg
             ${props.className}
            `}>
            <div className={`
                sm:${(props.titulo === 'Faturamento' ? 'text-md':'text-2xl')} 
                mb-5  font-bold
                ${(props.titulo === 'Faturamento' ? 'text-sm':'text-md')}
                `}>
                {props.titulo}
            </div>
            <div className={`
                font-semibold text-sm
                lg:text-lg
                `}>
                {props.valor}
            </div>
        </div>
    )
}