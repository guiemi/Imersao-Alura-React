import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        return respostaDoServidor.json();
      }

      throw new Error('Não foi possível pegar os dados (erro 1: getAll) :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then((respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        return respostaDoServidor.json();
      }

      throw new Error('Não foi possível pegar os dados (erro 2: getAllWithVideos) :(');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
