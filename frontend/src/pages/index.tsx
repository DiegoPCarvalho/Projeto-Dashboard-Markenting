import { IconeGeral } from "@/components/icons/Index";
import Layout from "@/components/template/Layout";
import useAppData from "@/data/hook/useAppData";

export default function Home() {
  const {alternarTema } = useAppData()
  return (
    <div className={`
      
    `}>
      <Layout titulo="Pagina de Resultado Geral | Zhaz" icone={IconeGeral}>
        <div>
          <button onClick={alternarTema}>Click</button>
        </div>
      </Layout>
    </div>
  )
}
