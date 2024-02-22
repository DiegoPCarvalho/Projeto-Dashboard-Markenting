import CardsMain from "@/components/card/CardsMain";
import { IconeGeral } from "@/components/icons/Index";
import Filtro from "@/components/parts/FIltro";
import LinhaGraficoCard from "@/components/parts/LinhaGraficoCard";
import LinhaGraficoTabela from "@/components/parts/LinhaGraficoTabela";
import Layout from "@/components/template/Layout";

export default function Home() {
  return (
    <div  className={`
      
    `}>
      <Layout titulo="Pagina de Resultado Geral | Zhaz" icone={IconeGeral}>
        <Filtro />
        <CardsMain />
        <LinhaGraficoTabela />
        <LinhaGraficoCard />
      </Layout>
    </div>
  )
}
