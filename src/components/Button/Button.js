import { Agendar } from "../Form/Form"

export function Button(props){

    const funcoes = {
        agendar: () => {<Agendar/>},
        fechar : "sexo",
        none: console.log("uhu")
    }

    return(
        
        <button 
        type={props.type}
        onClick={ funcoes[props.funcao]}
        >{props.children}</button>
            
    )
}