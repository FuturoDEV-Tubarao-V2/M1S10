import PropsTypes from 'prop-types'
// export function Button(props) {
    // return <button {...props} />
// }
export function Button({ cliqueAqui, retornarInformacao, children }) {

    function quandoClicar() {
        retornarInformacao("Dado chegou no elemento pai!")
    }
    // evento de clique subindo para o pai
    // return <button onClick={cliqueAqui}>{children}</button>

    // subindo informação para o pai (callback)
    return <button onClick={quandoClicar}>{children}</button>
}


Button.propTypes = {
    cliqueAqui: PropsTypes.func,
    retornarInformacao: PropsTypes.func,
    children: PropsTypes.string,
}

