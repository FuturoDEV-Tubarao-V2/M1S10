// estilização arquivo css importando.
import './cartao.css'
/** 
 * Meu cartão de produto, vai esperar a seguinte estrutura: 
 * Titulo, Quantidade e descrição
 * 
 * estilização inline
 * // css
 * background-color: red;
 * 
 * //react 
 * {
 *  backgroundColor: 'red'
 * }
 */

export function Cartao({ data, ativo }) {
    
    // if(!ativo) {
    //     return <span>Produto inativo</span>
    // }
    // condição ternária
    // var condicao = (ativo === true) ? "Ativa" : "Inativa";

    return (
        <div 
            className='container'
            // style={{
            //     backgroundColor: 'red'
            // }}
        >
            <header>
                <strong>{data.titulo} - {(ativo === true) ? "Ativa" : "Inativa"}</strong>
                {/* {
                   ativo ?  <span>{data.quantidade} quantidade</span> : ""
                } */}
                <span>{data.quantidade} quantidade</span>
            </header>
            <div>
                <p>{data.descricao}</p>
            </div>
        </div>
    )
}