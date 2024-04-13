import interesses from '../data.json'

export function ListaBasica() {
    return (
        <ul>
            {interesses.map(interesse => <li key={interesse.id}>{interesse.nome}</li>)}
        </ul>
    )
}