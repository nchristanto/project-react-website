import React from 'react';
import  NavigationBar  from './components/NavigationBar'
import CardDropDown from './components/Form'
import MainCard from './components/Card'
import SecondCard from './components/SecondCard'
// import { Button } from 'reactstrap';
// import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="">
      <header> 
        <NavigationBar />
        <CardDropDown />
      </header>
      <body>
        <MainCard />
        <SecondCard />
      </body>
      <footer>
      </footer>

      {/* <div>
        <Route exact path="/" component={App}/>
      </div> */}
    </div>
  );
}

export default App;
