import { CarritoProvider } from "./components/CarritoContext";
import BarraNavegacion from "./components/Navbar";
import CatalogoLista from "./components/catalogo/CatalogoLista";
import Navbar from "./components/Navbar"; // si el archivo se llama así


function App() {
  return (
    <CarritoProvider>
      <Navbar />
      <CatalogoLista />
    </CarritoProvider>
  );
}

export default App;
