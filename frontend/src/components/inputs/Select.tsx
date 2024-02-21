interface SelectProps {
    texto: string
    children?: any
    valor?: string
    onChange?: (novoValor: any) => void
}

export default function SelectInput(props: SelectProps) {
    return (
        <div className="flex flex-col ml-2">
            <label className="font-bold text-lg dark:text-white">{props.texto}</label>
            <select
                className={`
                    px-4 py-3 rounded-lg bg-white mt-2
                    border focus:border-blue-500 focus:bg-white
                    focus:outline-none dark:bg-slate-900 box-border
                    shadow-md 
                `}
                value={props.valor}
                onChange={e => props.onChange!(e.target.value)}
            >
                <option>Selecione...</option>
                {props.children}
            </select>
        </div>
    )
}