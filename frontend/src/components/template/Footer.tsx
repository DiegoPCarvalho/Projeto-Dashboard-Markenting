interface FooterPorps{
    children?: any
}

export default function Footer(props: FooterPorps){
    return(
        <footer>
               {props.children} 
        </footer>
    )
}