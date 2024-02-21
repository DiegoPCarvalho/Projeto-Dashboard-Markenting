import BotaoGnc from "../inputs/BotaoGnc";
import InputGnc from "../inputs/InputGnc";
import SelectInput from "../inputs/Select";

export default function Filtro(){
    return(
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-5">
          <SelectInput texto="Midia:" />
          <SelectInput texto="Origem:" />
          <InputGnc texto="Data Inicio:" tipo="date"/>
          <InputGnc texto="Data Final:" tipo="date" />
          <BotaoGnc nome="Buscar"
            className={`
                  lg:w-full bg-indigo-500 hover:bg-indigo-400
                text-white rounded-lg px-4 py-3 lg:mt-8  mt-2
                  font-bold lg:mx-5 
                  dark:bg-indigo-800 dark:hover:bg-indigo-600
              `}
          />
        </div>
    )
}