import useAuth from "@/data/hook/useAuth";

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
    const { usuario } = useAuth()

    return (
        <img
            src={usuario?.imageUrl ?? '/images/avatar.svg'}
            alt="Avatar"
            className={`
            h-10 w-10 rounded-full
                ${props.className}
            `} />
    )
}
