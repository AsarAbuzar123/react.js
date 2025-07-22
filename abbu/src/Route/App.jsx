import { Routes,Route} from 'react-router-dom';
import Home from "./home";
import About from "./About";
import Product from "./Product";
import Navbar from "./Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
