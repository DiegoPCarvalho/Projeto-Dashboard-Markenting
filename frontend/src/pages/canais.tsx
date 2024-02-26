import CardsMain from "@/components/card/CardsMain";
import { IconeCanais } from "@/components/icons/Index";
import Filtro from "@/components/parts/FIltro";
import LinhaCardGraficoCanais from "@/components/parts/LinhaCardGraficoCanais";
import LinhaTabelaGraficoCanais from "@/components/parts/LinhaTabelaGraficoCanais";
import Layout from "@/components/template/Layout";

export default function Home() {
  return (
    <div className={`
      
    `}>
      <Layout titulo="Pagina de Resultado Canais | Zhaz" icone={IconeCanais}>
        <Filtro />
        <CardsMain />
        <LinhaCardGraficoCanais />
        <LinhaTabelaGraficoCanais />
      </Layout>
    </div>
  )
}
