import { Button } from './components/Button';
import { Card } from './components/Card'
import { ListaBasica } from './components/ListaBasica'
import { Soma } from './components/Soma'
import interesses from './data.json'

function App() {
  
  // var listainteressesElementos = interesses.map(interesse => {
  //   return <li>{interesse.nome}</li>
  // })

  // var listainteressesElementos = interesses.map(interesse => <li key={interesse.id}>{interesse.nome}</li>)
  let contador = 1; 

  function quandoClicar(event) {
    console.log('click', event)
    //contador += 1
  }

  function criarAlerta() {
    alert("Hello World!")
  }

  function inputAlterou(event) {
    console.log(event.target.value)
  }


  return (
    <div>
      <h1>Hello world</h1>
      <ul>
        {/* {listainteressesElementos} */}
        {interesses.map(interesse => <li key={interesse.id}>{interesse.descricao}</li>)}
      </ul>
      <ListaBasica />

      <Soma numero1={10} numero2={150} titulo="Seu resultado" />
    
      <Card 
        imageUrl='https://dummyjson.com/image/200x150' 
        title='Iphone 15 pro max' 
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, inventore?" 
        totalComments={10}
      />

      <strong>{contador}</strong>

      <input type="text" onChange={inputAlterou} />

      <button onClick={quandoClicar}>Clique aqui!</button>


      {/* Action up = Subindo informação para o pai */}

      <Button retornarInformacao={(data) => console.log(data)}>Action up!</Button>
    </div>
  )
}

export default App
