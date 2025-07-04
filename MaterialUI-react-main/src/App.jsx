// Importa componentes necesarios para el enrutamiento y la interfaz de usuario.
// BrowserRouter (como Router): permite la navegación entre páginas sin recargar la web.
// Routes y Route: definen las rutas y qué componente mostrar en cada una.
// Link: permite la navegación entre rutas sin recargar la página.
// AppBar, Toolbar, Button, Typography: componentes de Material-UI para la barra de navegación y estilos.
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

// Componente principal de la aplicación.
function App() {
  return (
    // Router envuelve toda la aplicación para habilitar el enrutamiento.
    <Router>
      {/* AppBar crea una barra superior fija con Material-UI */}
      <AppBar position="static" style={{ marginBottom: "20px" }}>
        <Toolbar>
          {/* Typography muestra el título de la aplicación y ocupa el espacio disponible */}
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Mi Aplicación
          </Typography>
          {/* Botones de navegación, cada uno usa Link para cambiar de ruta */}
          <Button color="inherit" component={Link} to="/">
            Inicio
          </Button>
          <Button color="inherit" component={Link} to="/about">
            Acerca de
          </Button>
          <Button color="inherit" component={Link} to="/product">
            Productos
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contacto
          </Button>
          
        </Toolbar>
      </AppBar>
      {/* Routes define las rutas de la aplicación y qué componente mostrar en cada una */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

// Exporta el componente App para usarlo en otros archivos.
export default App;