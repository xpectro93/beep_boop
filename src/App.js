import './App.css';

import Content from './components/Content.js'
import Banner from './components/Banner.js';
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
            <div style={{color:"white",margin:"auto"}}>
              ERROR ERROR BOOP BOOP
            </div>
          </Route>



          </Switch>
        </div> 
      </AnimatePresence>
      
    </div>
  );
}

export default App;

