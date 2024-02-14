import AuthBotao from "@/components/auth/AuthBotao";
import AuthInput from "@/components/auth/AuthInput";
import { useState } from "react";
import logo from '../../public/logoIcon.png';
import logoLogin from '../../public/login.jpg';
import Image from "next/image";
import { IconeErro } from "@/components/icons/Index";
import useAuth from "@/data/hook/useAuth";

type Modo = 'login' | 'Cadastro'

export default function Autenticacao(props: any) {
    const {cadastrar, login, loginGoogle} = useAuth()

    const [erro, setErro] = useState('')
    const [modo, setModo] = useState<Modo>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confimarSenha, setConfirmarSenha] = useState('')

    function exibirErro(msg: string, tempo = 2){
        setErro(msg)
        setTimeout(() => setErro(''), tempo * 1000)
    }

    async function submeter() {
        try{
            if (modo === 'login') {
                if(email || senha !== null){
                    await login!(email, senha)
                }                
            } else {
                if(senha === confimarSenha){
                    await cadastrar!(email, senha)
                }else {
                    exibirErro("Senhas não são iguais")
                }
            }
        }catch(e: any){
            if(e.code === "auth/internal-error"){
                exibirErro('Usuário e senha Inválidos')
            }else{
                exibirErro(e?.message ?? 'Erro Inesperado')
            }
            console.log(e)
        }
        
    }

    function cancelar(){
        setEmail('')
        setSenha('')
        setConfirmarSenha('')
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="hidden md:block md:w-2/3 lg:w-2/3">
                <Image
                    src={logoLogin}
                    alt="Imagem Login"
                    className="h-screen w-full object-cover"
                />
            </div>
            <div className="m-10 w-full md:w-1/3 lg:1/3">
                <div className={`
                    flex justify-center
                `}>
                    <Image src={logo} alt="" width={130} height={100} />
                </div>
                <div>
                    <h1 className={`
                        flex justify-center
                        text-2xl font-bold mb-5
                    `}>
                        {modo === 'login' ? 'Entre com a Sua Conta' : 'Cadastre-se na Plataforma'}
                    </h1>

                    {erro ? (
                        <div className={`
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg flex
                    `}>
                            {IconeErro}
                            <span className={`ml-3 text-sm`}>{erro}</span>
                        </div>
                    ) : false}

                    <AuthInput
                        label="E-mail"
                        tipo="email"
                        valor={email}
                        onChange={setEmail}
                        obrigatorio
                    />
                    <AuthInput
                        label="Senha"
                        tipo="password"
                        valor={senha}
                        onChange={setSenha}
                        obrigatorio
                    />
                    <AuthInput
                        label="Confirme a Senha"
                        tipo="password"
                        valor={confimarSenha}
                        onChange={setConfirmarSenha}
                        obrigatorio
                        naoRenderizarQuando={modo === 'login'}
                    />
                </div>
                <div className="flex justify-center">
                    <AuthBotao
                        nome={modo === 'login' ? 'Entrar' : 'Cadastrar'}
                        className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-4 py-3 mt-6 
                    font-bold mr-10
                `}
                        onClick={submeter}
                    />

                    <AuthBotao
                        nome={'Cancelar'}
                        className={`
                    w-full bg-red-600 hover:bg-red-400
                    text-white rounded-lg px-4 py-3 mt-6
                    font-bold ml-10
                `}
                        onClick={cancelar}
                    />
                </div>

                <hr className="my-4 border-gray-300 w-full" />

                <AuthBotao
                    nome={'Entar com Google'}
                    className={`
                    w-full bg-red-600 hover:bg-red-400
                    text-white rounded-lg px-4 py-3 mt-3
                    font-bold
                `}
                    onClick={loginGoogle}
                />
                {modo === 'login' ? (
                    <p className="mt-5">
                        Novo por Aqui?
                        <a onClick={() => setModo('Cadastro')} className={`
                                text-blue-500 hover:text-blue-700 font-semibold
                                cursor-pointer
                            `}>
                            <span className="ml-3">Crie uma Conta Gratuitamente</span>
                        </a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Já faz parte da plataforma?
                        <a onClick={() => setModo('login')} className={`
                                text-blue-500 hover:text-blue-700 font-semibold
                                cursor-pointer
                            `}>
                            <span className="ml-3">Entre com as suas Credenciais</span>
                        </a>
                    </p>
                )}
            </div>
        </div>
    )
}