import CardHomeGeral from "../card/CardHomeGeral";
import GraficoGNC from "../graficos/Grafico";

export default function LinhaGraficoTabela() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-4">
            <div className="grid gap-2 mt-2">
                <div className="grid grid-rows-1">
                    <div className="grid grid-cols-3 gap-2">
                        <CardHomeGeral titulo="Impressões" valor="483 Mil"
                            className={`
                        bg-gradient-to-tr from-gray-400 from-25% to-85% to-gray-600
                        dark:bg-gradient-to-tr dark:from-purple-500 dark:from-25% dark:to-85% dark:to-purple-900
                        `}
                        />
                        <CardHomeGeral titulo="Cliques" valor="7642"
                            className={`
                        bg-gradient-to-tr from-gray-400 from-25% to-85% to-gray-600
                        dark:bg-gradient-to-tr dark:from-purple-500 dark:from-25% dark:to-85% dark:to-purple-900
                        `}
                        />
                        <CardHomeGeral titulo="CTR" valor="R$ 73,55"
                            className={`
                        bg-gradient-to-tr from-gray-400 from-25% to-85% to-gray-600
                        dark:bg-gradient-to-tr dark:from-purple-500 dark:from-25% dark:to-85% dark:to-purple-900
                        `}
                        />
                    </div>
                </div>
                <div className="grid grid-rows-1">
                    <div className="grid grid-cols-3 gap-2">
                        <CardHomeGeral titulo="CPO" valor="R$ 73,55"
                            className={`
                            bg-gradient-to-tr from-gray-400 from-25% to-85% to-gray-600
                            dark:bg-gradient-to-tr dark:from-purple-500 dark:from-25% dark:to-85% dark:to-purple-900
                            `}
                        />
                        <CardHomeGeral titulo="CPL" valor="R$ 36,46"
                            className={`
                            bg-gradient-to-tr from-gray-400 from-25% to-85% to-gray-600
                            dark:bg-gradient-to-tr dark:from-purple-500 dark:from-25% dark:to-85% dark:to-purple-900
                            `}
                        />
                        <CardHomeGeral titulo="CPV" valor="241,07"
                            className={`
                            bg-gradient-to-tr from-gray-400 from-25% to-85% to-gray-600
                            dark:bg-gradient-to-tr dark:from-purple-500 dark:from-25% dark:to-85% dark:to-purple-900
                            `}
                        />
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg box-border shadow-lg dark:bg-gray-900 ">
                <GraficoGNC
                    tipo="column"
                    titulo="Leads X Origem"
                    formate='<span style="color:{point.color}">{point.y}</span><br/>'
                    texto='<b>{point.y:1f}</b>'
                    vertical={300}
                    cor={true}
                    dado={[
                        { name: "LP Manutenção", y: 156 },
                        { name: "Landing Page", y: 75 },
                        { name: "Cliente", y: 40 },
                        { name: "LP Locacao", y: 28 },
                        { name: "LP Formulario", y: 27 },
                        { name: "Google ADS", y: 14 },
                        { name: "Anuncio", y: 8 },
                        { name: "Indicacao", y: 4 },
                        { name: "Redes Sociais", y: 3 },
                        { name: "(Em Branco)", y: 1 },
                        { name: "Prospeccao", y: 1 }
                    ]}
                />
            </div>
            <div className="bg-white rounded-lg box-border shadow-lg dark:bg-gray-900">
                <GraficoGNC
                    tipo="line"
                    titulo="Conversão"
                    formate='<span style="color:{point.color}">{series.name}</span> - <b>R$ {point.y:1f}'
                    texto='<b>R$: {point.y:1f}</b>'
                    cor={true}
                    legenda={true}
                    categoria={['Jul']}
                    vertical={300}
                    mudar={true}
                    serie={[{
                        name: 'Google',
                        data: [13017.93]
                    }, {
                        name: 'Facebook',
                        data: [0]
                    }, {
                        name: 'Linkedin',
                        data: [0]
                    }
                    ]
                    }
                />
            </div>
        </div>
    )
}