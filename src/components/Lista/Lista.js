
import { Item } from './Item/Item';
import './Lista.css';
export function Lista(){
    const horarios = [{
        data: "13/12",
        hora: "13:00"
        
    },
    {
        data: "15/12",
        hora: "13:30"
    }]
    return(
        <div>
            <h2>Seus horários</h2>
            <ul className="horario">
                {(horarios.map((horario) => (
                    <Item
                    key={Lista}
                    {...horario}
                     /// data={horario.data} hora={horario.hora} /// na ln 24 ver como faz pra objt ficar undfnd
                    />
                ))  ?? 'Você não tem nenhum horário marcado')} 
            </ul>
        </div>
    )
}
  