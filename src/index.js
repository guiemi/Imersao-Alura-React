import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Home from './Pages/Home/App'
import CadastroVideo from './Pages/Cadastro/Video'
import CadastroCategoria from './Pages/Cadastro/Categoria';
import About from './Pages/About/about';

import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

const pagina404 = () => (<div>Erro 404!</div>)

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/about" component={About} />
      <Route component={pagina404} />
    </Switch>
  </Router>,

  document.getElementById('root')
);