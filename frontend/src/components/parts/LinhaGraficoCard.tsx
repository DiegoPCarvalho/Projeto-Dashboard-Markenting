import CardHomeGeral from "../card/CardHomeGeral";
import GraficoGNC from "../graficos/Grafico";

export default function LinhaGraficoTabela() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-4">
            <div className="bg-white rounded-lg box-border shadow-lg dark:bg-gray-900 ">
                <GraficoGNC
                    tipo="area" 
                    titulo="Custos"
                    formate='<span style="color:{point.color}">R$ {point.y}</span><br/>'
                    texto='<b style="color:{point.color}">{point.name}R${point.y:1f}</b>'
                    legenda={true}
                    mudar={true}
                    categoria={['Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago']}
                    vertical={300}
                    serie={[{
                        name: 'CPV',
                        data: [263.39, 329.24, 364.20, 383.89, 245.23, 333.75]
                    },{
                        name: 'CPO',
                        data: [106.00, 172.76, 149.29, 105.24, 162.24]
                    },{
                        name: 'CPl',
                        data: [51.28, 83.75, 66.22, 59.84, 48.32, 49.32]
                    }]
                    }
                />
            </div>
            <div className="bg-white rounded-lg box-border shadow-lg dark:bg-gray-900">
                <GraficoGNC
                    tipo="line" 
                    titulo="Conversão"
                    formate='<span style="color:{point.color}">{series.name}</span> - <b>{point.y:1f}%'
                    texto='<b>{point.y:1f}</b>%{point.percent:1f}'
                    cor={true}
                    legenda={true}
                    categoria={['Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago']}
                    vertical={300}
                    mudar={true}
                    serie={[{
                        name: '%Led>Oportunidade',
                        data: [49,59,38,40,46,31]
                    },{
                        name: '%Oportunidade>Venda',
                        data: [40,43,48,39,44,48]
                    }]
                    }
                />
            </div>
             <div className="grid gap-2 mt-2">
                <div className="grid grid-rows-1">
                    <div className="grid grid-cols-3 gap-2">
                        <CardHomeGeral titulo="CPL" valor="R$58,33"/>
                        <CardHomeGeral titulo="Faturamento" valor="R$2,44 MI"/>
                        <CardHomeGeral titulo="Roas" valor="19"/>
                    </div>
                </div>    
                <div className="grid grid-rows-1">
                <div className="grid grid-cols-3 gap-2">
                        <CardHomeGeral titulo="CPV" valor="R$314,10"/>
                        <CardHomeGeral titulo="Custo" valor="R$130.665,33"/>
                        <CardHomeGeral titulo="CTR" valor="0.87%"/>
                    </div>
                </div>                       
            </div>
        </div>
    )
}