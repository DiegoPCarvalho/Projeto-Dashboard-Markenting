import GraficoGNC from "../graficos/Grafico";

export default function LinhaGraficoTabela() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-4">
            <div className="bg-white rounded-lg box-border shadow-lg dark:bg-gray-900">
                <div className="font-bold text-2xl flex justify-center mt-2 mb-3">
                    Tabela de Evolução
                </div>
                <div className="grid">
                    <table className="table-auto mx-2 border-separate">
                        <thead className="bg-indigo-900 text-gray-200">
                            <tr>
                                <th className="p-2">Mes</th>
                                <th className="p-2">Vendedor</th>
                                <th className="p-2">Vendas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center">
                                <td>Abril</td>
                                <td>Julia</td>
                                <td>140</td>
                            </tr>
                            <tr className="text-center bg-indigo-200 dark:bg-indigo-700">
                                <td>Abril</td>
                                <td>Marcelo</td>
                                <td>200</td>
                            </tr>
                            <tr className="text-center">
                                <td>Abril</td>
                                <td>Joao</td>
                                <td>147</td>
                            </tr>
                            <tr className="text-center bg-indigo-200 dark:bg-indigo-700">
                                <td>Abril</td>
                                <td>Flavia</td>
                                <td>300</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bg-white rounded-lg box-border shadow-lg dark:bg-gray-900 ">
                <GraficoGNC
                    tipo="column" 
                    titulo="Oportunidades X Origem"
                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                    texto='<b>{point.y:1f}</b>'
                    cor={true}
                    vertical={300}
                    dado={[
                        { name: "LP Manutenção", y: 85 },
                        { name: "Landing Page", y: 28 },
                        { name: "Cliente", y: 20 },
                        { name: "LP Locacao", y: 15 },
                        { name: "Google ADS", y: 13 },
                        { name: "LP Formulario", y: 10 },
                        { name: "Anuncio", y: 5 },
                        { name: "Indicacao", y: 1 },
                    ]}
                />
            </div>
            <div className="bg-white rounded-lg box-border shadow-lg dark:bg-gray-900">
                <GraficoGNC
                    tipo="column" 
                    titulo="Vendas X Origem"
                    formate='<span style="color:{point.color}">{point.name}</span> : <b>{point.percentage:.1f} % </b> do total<br/>'
                    texto='<b>{point.y:1f}</b>'
                    cor={true}
                    vertical={300}
                    dado={[
                        { name: "LP Manutenção", y: 19 },
                        { name: "Cliente", y: 13 },
                        { name: "Landing Page", y: 10 },
                        { name: "Google ADS", y: 6 },
                        { name: "LP Formulario", y: 4 },
                        { name: "Anuncio", y: 1 },
                        { name: "LP Locacao", y: 1 },
                    ]}
                />
            </div>
             
        </div>
    )
}