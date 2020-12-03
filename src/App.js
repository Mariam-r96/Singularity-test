import React from 'react';
import Header from '../src/components/header';
import Sohayota from '../src/pages/index.js';
import '../src/style/index.css';
import Form from '../src/pages/form.jsx';
import Certificate from '../src/pages/certificate';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
       
        <React.Fragment>
        <Header/>
        <Route path="/form" component={Form}/>
        <Route path="/sohayota" component={Sohayota}>
          <Sohayota/>
        </Route>
        <Route path="/certificate" component={Certificate}/>
        </React.Fragment>

      </Switch>
    </Router>
  
  );
}

export default App;
