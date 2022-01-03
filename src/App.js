import './App.css';
import { useState, useEffect } from 'react';



const BemVindo = (props) => {

  return (
    <>
      <h1>Bem vindo {props.nome} </h1>
      <h2>Você tem {props.anos} anos</h2>
    </>
  )

}


function App() {

  const [nome, setNome] = useState("");
  const [anos, setAnos] = useState(0);

  const [carregando, setCarregando] = useState(true);


  // Pagina iniciou
  useEffect(() => {
    (async () => {
      const perguntarNome = await prompt("Qual seu nome?");
      const perguntarIdade = await prompt("Qual sua idade?");
      await setNome(perguntarNome);
      await setAnos(perguntarIdade);
      await setCarregando(false);
    })()
  }, []);


  
  // Sempre que o valor da useState nome mudar irá acionar a função
  useEffect(() => {
    (async () => {
      console.log("nome:",nome);
      console.log("idade:",anos);

    })()
  }, [nome, anos]);


  return (<>

    {
      (carregando === true) ? (<>
        <h1>Carregando....</h1>
      </>) : (<>
        <h1>Olá mundo!</h1>
        <BemVindo nome={nome} anos={anos} />
        <button onClick={() => setNome(prompt("Nome?"))}>Alterar nome</button>
        <button onClick={() => setAnos(prompt("Anos?"))}>Alterar Idade</button>

      </>)
    }






  </>

  );
}

export default App;
