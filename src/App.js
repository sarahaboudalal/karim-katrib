import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header';
import Parameters from './components/Parameters/Parameters';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Parameters />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
