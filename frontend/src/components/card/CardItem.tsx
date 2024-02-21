interface CardItemProps{
    titulo: string
    valor?: string
    icone?: any
}

export default function CardItem(props: CardItemProps){
    return(
        <div className={`
            lg:h-24 sm:h-20
            w-full text-white bg-gradient-to-tr from-emerald-500 to-emerald-900
            dark:bg-gradient-to-tr dark:from-stone-500 dark:to-stone-700
            rounded-lg box-border shadow-lg
        `}>
            <div className="flex justify-center mt-2 font-bold text-xs sm:text-base lg:text-xl">{props.titulo}</div>
            <div className="flex justify-center sm:justify-between lg:justify-between mt-2 mx-1 lg:mt-6 lg:mx-2">
                <div className="overflow-hidden text-xl font-bold sm:text-base lg:text-lg">{props.valor}</div>
                <div className="hidden sm:block">{props.icone}</div>
            </div>
        </div>
    )
}