import { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Parameters from './components/Parameters/Parameters';
import './index.css';

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Navbar setOpen={handleOpen} open={open} />
      <Header />
      <About />
      <Parameters />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
