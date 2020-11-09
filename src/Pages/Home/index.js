import React, { useEffect, useState } from 'react';
import BannerMain from '../../Components/BannerMain';
import Carousel from '../../Components/Carousel';
import PageDefault from '../../Components/PageDefault';
import categoriasRepository from '../../Repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categorias) => {
        // console.log('TESTE 1:', categoriasComVideos[0].video[0]);
        // console.log('TESTE 2:', categoriasComVideos);
        setDadosIniciais(categorias);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Carreganderson...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
