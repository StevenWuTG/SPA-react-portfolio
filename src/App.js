import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
// import './App.css';
import './app.scss';

function App() {
  return (

    <div className="app">
      
      <Navbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Contact/>
      </div>

    </div>
  );
}

export default App;
