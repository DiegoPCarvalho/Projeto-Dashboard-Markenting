interface InputGncProps {
    texto: string
    tipo?: string
    children?: any
    valor?: string
    onChange?: (novoValor: any) => void
}

export default function InputGnc(props: InputGncProps) {
    return (
        <div className="flex flex-col ml-2">
            <label className="font-bold text-lg dark:text-white">{props.texto}</label>
            <input 
                
                type={props.tipo ?? 'text'} 
                value={props.valor}
                onChange={e => props.onChange!(e.target.value)}
                className={`
                    box-border shadow-md 
                    px-4 py-3 rounded-lg bg-white mt-2
                    border focus:border-blue-500 focus:bg-white
                    focus:outline-none dark:bg-slate-900
                `}
            />
        </div>
    )
}