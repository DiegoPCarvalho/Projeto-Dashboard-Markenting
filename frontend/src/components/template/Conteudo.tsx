interface ConteudoProps {
    children?: any
}

export default function Layout(props: ConteudoProps) {
    return (
        <div className={` overflow-auto
         flex flex-col p-3 dark:text-gray-200`}>
            {props.children}
        </div>
    )
}

//colocar na classe o overflow-y-scroll