import React from 'react';
import {Home} from './Component/Home/Home'
import {Restraurant} from './Component/Home/Restraurant'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <Router>
      
      <Route exact path="/" component={Home} />
      <Route exact path="/restraurant" component={Restraurant} />
      </Router>
    </div>
  );
}

export default App;
