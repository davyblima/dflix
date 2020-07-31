import React from 'react';
import Menu from './components/Menu/'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import dadosIniciais from './components/data/dados_iniciais.json'

function App() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
      />
      {dadosIniciais.categorias.map(tema=>
      <Carousel 
        category={tema}
        ignoreFirstVideo = {tema.videos.length>5}
      />)}
      <Footer />

    </div>
  );
}

export default App;
