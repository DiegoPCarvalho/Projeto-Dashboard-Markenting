import imagemLogo from "../../../public/baixados.png";
import Image from "next/image";
import { IconeCanais, IconeDev, IconeGeral, IconeSair } from "../icons/Index"
import MenuItem from "./MenuItem"
import useAuth from "@/data/hook/useAuth";

export default function MenuLateral() {
    const {logout} = useAuth()
    return (
        <aside className={`
        box-border shadow-lg
            flex flex-col
            bg-cyan-700
            dark:bg-gray-900 
        `}>
            <div className={`
                flex flex-col justify-center items-center 
                h-20 w-20
            `}>
                <Image src={imagemLogo} alt="" className="rounded-full h-12 w-12" />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Geral" icone={IconeGeral} />
                <MenuItem url="/canais" texto="Canais" icone={IconeCanais} />
            </ul>
            <ul>
                <MenuItem url="/" texto="Dev" icone={IconeDev} />
                <MenuItem url="/" texto="Sair" icone={IconeSair}
                onCLick={logout}
                className={`
                dark:text-red-700 dark:bg-gray-900
                text-gray-300 bg-red-600
                hover:bg-red-500 hover:text-white
                dark:hover:text-gray-200 dark:hover:bg-red-500
                `}
                />
            </ul>
        </aside>
    )
}