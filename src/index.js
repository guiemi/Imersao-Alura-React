import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={ () => (<div>Erro 404 </div>) } />
    </Switch>
  </Router>,

  document.getElementById('root')
);