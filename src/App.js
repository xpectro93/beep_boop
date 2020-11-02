import './App.css';
import Menu from './components/Menu.js'
import Footer from "./components/Footer.js";
import Banner from './components/Banner.js';
function App() {
  return (
    <div className="App">
      <div className="background-static"></div>
      <div className="main-wrapper">
        <Banner/>
        <Menu/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
