import React from 'react';
import Navigation from './components/Navigation'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="">
      <header> 
        <Navigation />
      </header>
      <body>
      </body>
      <footer>
      </footer>

      <div>
        <Route exact path="/" component={App}/>
      </div>
    </div>
  );
}

export default App;
