import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Menu from './components/Menu'
import Contact from './components/Contact'
import { useState } from 'react'
// import './App.css';
import './app.scss';

function App() {

  const [ menuOpen,setMenuOpen ] = useState(false)

  return (

    <div className="app">
      
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Contact/>
      </div>

    </div>
  );
}

export default App;
