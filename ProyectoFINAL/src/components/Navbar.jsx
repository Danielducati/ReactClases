import { useContext, useState } from "react";
import { CarritoContext } from "./CarritoContext";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./catalogo/catalogo.css";
import "./navbar.css";





function Navbar() {
  const { carrito, agregarAlCarrito, quitarUno, pagar } = useContext(CarritoContext);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  // Agrupar productos por nombre
  const resumenCarrito = carrito.reduce((acc, prod) => {
    const clave = prod.nombre;
    if (!acc[clave]) {
      acc[clave] = { ...prod, cantidad: 1 };
    } else {
      acc[clave].cantidad++;
    }
    return acc;
  }, {});
  const total = carrito.reduce((sum, prod) => sum + prod.precio, 0);


  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/acerca" className="nav-link">Acerca</Link>
            <Link to="/contacto" className="nav-link">Contacto</Link>
          </Box>
          <Typography variant="h6">Dancosuin shop</Typography>
          <IconButton
            color="inherit"
            onClick={() => setMostrarCarrito(true)}
          >
            <Badge badgeContent={carrito.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mostrarCarrito}
        onClose={() => setMostrarCarrito(false)}
      >
        <Box sx={{ width: 300, p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Carrito
          </Typography>
          <List>
              {Object.values(resumenCarrito).map((item, i) => (
                <ListItem key={i} secondaryAction={
                  <>
                  {/* Botones para sumar y restar en el carrito mi tio */}
                  {/* Quitar */}
                    <Button
                      size="small"
                      variant="contained"
                      color="error"
                      onClick={() => quitarUno(item)}
                      sx={{ minWidth: "32px", mx: 0.5 }}
                    >
                      -
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      onClick={() => agregarAlCarrito(item)}
                      sx={{ minWidth: "32px", mx: 0.5 }}
                    >
                      +
                    </Button>
                  </>
                }>
                  <ListItemAvatar>
                    <Avatar
                      alt={item.nombre}
                      src={item.imagen}
                      sx={{ width: 56, height: 56 }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.nombre}
                    secondary={`Cantidad: ${item.cantidad}`}
                  />
                </ListItem>
              ))}
          </List>
          <Box sx={{ mt: 2, textAlign: "right" }}>
            <Typography variant="h6">
              Total: ${total.toLocaleString("es-CO", { minimumFractionDigits: 2 })}
            </Typography>
            <Button
              variant="contained"
              color="success"
              fullWidth
              sx={{ mt: 1 }}
              onClick={pagar}
            >
              Pagar
            </Button>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}

export default Navbar;


