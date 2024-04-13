import PropsTypes from 'prop-types'

export function Soma({ numero1, numero2, titulo }) {
    
    var resultado = numero1 + numero2;
    var tituloApresentar = titulo ? titulo : "Resultado da sua soma é" 

    return <p>{tituloApresentar}: {resultado}</p>
}
// criando a validação
Soma.propTypes = {
    numero1: PropsTypes.number.isRequired,
    numero2: PropsTypes.number.isRequired,
    titulo: PropsTypes.string,
}

