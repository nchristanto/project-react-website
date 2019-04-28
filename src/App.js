import React from 'react';
import NavigationBar  from './components/NavigationBar'
import Cover from './components/Cover'
import MainCard from './components/Card'
import SecondCard from './components/SecondCard'
import { BrowserRouter as Router, Route} from 'react-router-dom'
// import Login from "./pages/Login"

function App() {
  return (
    <div>
      <header> 

        <NavigationBar />
        <Cover />
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
