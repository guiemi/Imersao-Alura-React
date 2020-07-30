import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from '../src/Pages/Home/App'
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

function CadastroVideo() {
  return(
    <div>
      Página de cadastro de vídeo
    </div>
  )
}

const pagina404 = () => (<div>Erro 404!</div>)

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={pagina404} />
    </Switch>
  </Router>,

  document.getElementById('root')
);