import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./components/CarritoContext";
import Navbar from "./components/Navbar";
import CatalogoLista from "./components/catalogo/CatalogoLista";
import Acerca from "./pages/Acerca";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <CarritoProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CatalogoLista />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </CarritoProvider>
  );
}

export default App;