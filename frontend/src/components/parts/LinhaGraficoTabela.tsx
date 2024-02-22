import GraficoGNC from "../graficos/Grafico";

export default function LinhaGraficoTabela() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-4">
            <div className="bg-white rounded-lg box-border shadow-lg dark:bg-gray-900 ">
                <GraficoGNC
                    tipo="pie" 
                    titulo="Leads/Vendas/Oportunidades"
                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                    texto='<b>{point.name}</b>: {point.y:1f}'
                    cor={true}
                    legenda={true}
                    vertical={300}
                    dado={[
                        {name:'Leads', y: 2255},
                        {name:'Oportunidades', y: 980},
                        {name:'Vendas', y: 421},
                    ]}
                />
            </div>
            <div className="bg-white rounded-lg box-border shadow-lg dark:bg-gray-900">
                <GraficoGNC
                    tipo="column" 
                    titulo="Faturamento/Investimento"
                    formate='<span style="color:{point.color}">{series.name}</span> - R$: <b>{point.y:1f}'
                    texto='<b>R$</b>: {point.y:1f}'
                    cor={true}
                    legenda={true}
                    categoria={['Jun', 'Agos', 'Set', 'Out']}
                    vertical={300}
                    mudar={true}
                    serie={[{
                        name: 'Faturamento',
                        data: [15000,35000,45000,1420]
                    },{
                        name: 'Investimento',
                        data: [1500,3500,4500,140]
                    }]
                    }
                />
            </div>
             <div className="bg-white rounded-lg box-border shadow-lg dark:bg-gray-900">
                <div className="font-bold text-2xl flex justify-center mt-2 mb-3">
                    Tabela de Evolução
                </div>
                <div className="grid">
                    <table className="table-auto mx-2 border-separate">
                        <thead className="bg-indigo-900 text-gray-200">
                            <tr>
                                <th className="p-2">Mes</th>
                                <th className="p-2">Faturamento</th>
                                <th className="p-2">Evolução</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center">
                                <td>Abril</td>
                                <td>R$ 12500</td>
                                <td>147.62%</td>
                            </tr>
                            <tr className="text-center bg-indigo-200 dark:bg-indigo-700">
                                <td>Abril</td>
                                <td>R$ 12500</td>
                                <td>147.62%</td>
                            </tr>
                            <tr className="text-center">
                                <td>Abril</td>
                                <td>R$ 12500</td>
                                <td>147.62%</td>
                            </tr>
                            <tr className="text-center bg-indigo-200 dark:bg-indigo-700">
                                <td>Abril</td>
                                <td>R$ 12500</td>
                                <td>147.62%</td>
                            </tr>
                            <tr className="text-center font-bold bg-yellow-300 dark:bg-yellow-600">
                                <td>Total</td>
                                <td>R$325621.00</td>
                                <td>1256%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}