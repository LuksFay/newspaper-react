import React, {useState,useEffect} from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import Noticias from './components/Noticias';
function App() {

  const [appCategoria, appSetCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);
  useEffect(()=>{
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${appCategoria}&apiKey=b1f445275e5043da984766ec7f8389dc`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      setNoticias(noticias.articles)
    }
    consultarAPI();
  },[appCategoria])

  return (
    <>
      <Header titulo='Buscador de Noticias'/>
        
      <div className="container white">
        <Formulario appSetCategoria={appSetCategoria}/>
        <Noticias noticias={noticias}/>
      </div>
    </>
  );
}

export default App;
