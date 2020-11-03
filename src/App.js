import './App.css';
import Menu from './components/Menu.js'
import Footer from "./components/Footer.js";
import Banner from './components/Banner.js';

import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <div className="background-static"></div>
      <AnimatePresence initial={true} exitBeforeEnter>
        <div className="main-wrapper">
          <Banner/>
          <Menu/>
        </div>
        <Footer/>
      </AnimatePresence>
    </div>
  );
}

export default App;
