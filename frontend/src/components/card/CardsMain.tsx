import { IconeDev } from "../icons/Index";
import CardItem from "./CardItem";

export default function CardsMain(){
    return(
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            <CardItem titulo="Faturamento" valor="R$ 36.000" icone={IconeDev}/>
            <CardItem titulo="Investimento" valor="R$ 36.000" icone={IconeDev}/>
            <CardItem titulo="CAC" valor="R$ 36.000" icone={IconeDev}/>
            <CardItem titulo="Ticket Médio" valor="R$ 36.000" icone={IconeDev}/>
            <CardItem titulo="ROI" valor="R$ 36.000" icone={IconeDev}/>
            <CardItem titulo="ROAS" valor="R$ 36.000" icone={IconeDev}/>
        </div>
    )
}