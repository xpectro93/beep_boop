import './App.css';
import Menu from './components/Menu.js'
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <div className="background-static"></div>
      <div className="main-wrapper">
        <Menu/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
