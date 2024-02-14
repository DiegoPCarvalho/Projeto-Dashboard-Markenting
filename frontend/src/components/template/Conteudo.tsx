interface ConteudoProps {
    children?: any
}

export default function Layout(props: ConteudoProps) {
    return (
        <div className={`
         flex flex-col p-3 dark:text-gray-200`}>
            {props.children}
        </div>
    )
}