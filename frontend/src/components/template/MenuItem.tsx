import Link from "next/link"

interface MenuItemProps {
    texto: string
    icone: any
    url?: string
    className?: string
    onCLick?: (evento: any) => void
}

export default function MenuItem(props: MenuItemProps) {
    function renderizar(){
        return(
            <a className={`
            flex flex-col justify-center items-center
            h-20 w-20 text-gray-200 hover:text-gray-700
            dark:text-gray-200
            ${props.className}
        `}>
        {props.icone}
            <span className={`
                text-xs font-light
            `}>
                {props.texto}
            </span>
        </a>
        )
    }

    return (
        <li onClick={props.onCLick} className={`
            hover:bg-gray-200 
            dark:hover:bg-gray-800
            cursor-pointer
        `}>
            {props.url ? (<Link href={props.url} legacyBehavior>
               {renderizar()}
            </Link>) : (renderizar())}
        </li>
    )
}