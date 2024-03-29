import Head from 'next/head';
import Image from "next/image"
import loading from '../../../public/images/loading.gif'
import useAuth from "@/data/hook/useAuth"
import router from "next/router"

interface ForcarAutenticacaoProps{
    children: any
}

export default function ForcarAutenticacao(props: ForcarAutenticacaoProps){
    const {usuario, carregando} = useAuth()

    function renderizarConteudo(){
        return(
            <>
            <Head>
                <script dangerouslySetInnerHTML={{
                    __html:`
                        if(!document.cookie?.includes("admin-template-auth")){
                            window.location.href="/Autenticacao"
                        }
                    `
                }}/>
            </Head>
                {props.children}
            </>

        )
    }
    function renderizarCarregando(){
        return(
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <span className="text-white">.</span>
                <Image src={loading} alt="" />
            </div>
        )
    }

    if(!carregando && usuario?.email){
        return renderizarConteudo()
    }else if(carregando){
        return renderizarCarregando()
    }else{
        router.push("/Autenticacao")
        return null
    }
}