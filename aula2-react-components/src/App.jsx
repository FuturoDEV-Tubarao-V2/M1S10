// import default
import Botao from './components/Botao'
// import nomeado
// import { Botao } from './components/Botao'
import { CapsLock } from './components/CapsLock'
import { CapsLockChildren } from './components/CapsLockChildren'
import { Cartao } from './components/Cartao'
import { Input } from './components/Input'

function App() {

  var produto = {
    titulo: "Meu produto",
    quantidade: 50,
    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, facere.",
  }

  return (
    <div>
      <img src="/vite.svg" alt="Logotipo do Vite" />
      {/* É dessa forma que comentamos código em JSX */}
      {/* <Titulo /> */}
      <CapsLock titulo="pagina de cadastro" />
      <Botao variacao="verde" tamanho="grande">
        🎯Efetue seu cadastro
      </Botao>
      <br />
      <br />
      <br />
      {/* <Cartao data={produto} ativo={true} /> */}
      <Cartao data={produto} ativo />
      <br />
      <br />
      <br />
      <Input prefix="R$" placeholder="Adicione um interesse" disabled />

      <CapsLockChildren>
        Hello world
      </CapsLockChildren>
    </div>
  )
}
// Podemos utilizar criar mais de um componente no mesmo arquivo.
// function Titulo() {
//   return <h1>Meu titulo</h1>
// }

export default App
