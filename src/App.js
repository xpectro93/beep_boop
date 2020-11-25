import './App.css';

import Content from './components/Content.js'
import Banner from './components/Banner.js';
import Error from "./Error.js";
import { Route, Switch } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

function App() {

  return (
    <div className="App">
      <div className="background-static"></div>
      <AnimatePresence initial={true} exitBeforeEnter>
        
        <div className="main-wrapper" key={"main-wrapper"}>
          <Banner/>

          <Switch>
          <Route exact path="/">
           <Content/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>



          </Switch>
        </div> 
      </AnimatePresence>
      
    </div>
  );
}

export default App;

