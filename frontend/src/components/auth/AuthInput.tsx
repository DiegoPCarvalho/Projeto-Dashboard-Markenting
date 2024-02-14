interface AuthInputProps{
    label: string
    valor: any
    tipo?: string
    obrigatorio?: boolean
    naoRenderizarQuando?: boolean
    onChange?: (novoValor: any) => void
}

export default function AuthInput(props: AuthInputProps){
    return props.naoRenderizarQuando ? null : (
        <div className="flex flex-col mt-2">
            <label className="font-bold">{props.label}</label>
            <input 
                type={props.tipo ?? 'text'} 
                value={props.valor}
                onChange={e => props.onChange!(e.target.value)}
                required={props.obrigatorio}
                className={`
                    px-4 py-3 rounded-lg bg-gray-100 mt-2
                    border focus:border-blue-500 focus:bg-white
                    focus:outline-none
                `}
            />
        </div>
    )
}