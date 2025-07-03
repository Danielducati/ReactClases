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
import DeleteIcon from "@mui/icons-material/Delete";
import HomeIcon from "@mui/icons-material/Home";

import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./catalogo/catalogo.css";
import "./navbar.css";





function Navbar() {
  const { carrito, agregarAlCarrito, quitarUno, pagar, eliminarProducto } = useContext(CarritoContext);
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
<AppBar
  position="static"
  sx={{
    background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    paddingX: 2,
  }}
>
  <Toolbar sx={{ justifyContent: "space-between" }}>
    <Box sx={{ display: "flex", gap: 2 }}>
      <Link to="/" style={{ color: "white" }}>
        <HomeIcon />
      </Link>
      <Link to="/acerca" style={{ color: "white", textDecoration: "none" }}>
        Acerca
      </Link>
      <Link to="/contacto" style={{ color: "white", textDecoration: "none" }}>
        Contacto
      </Link>
    </Box>

      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#fff",
          fontWeight: "bold",
          fontFamily: "Poppins, sans-serif",
          textShadow: "0 0 8px rgba(255, 255, 255, 0.6), 0 0 16px rgba(0, 170, 255, 0.4)",
          animation: "glowPulse 2.5s ease-in-out infinite",
          '@keyframes glowPulse': {
            '0%': {
              textShadow: "0 0 8px rgba(255, 255, 255, 0.6), 0 0 16px rgba(0, 170, 255, 0.4)",
            },
            '50%': {
              textShadow: "0 0 12px rgba(255, 255, 255, 0.8), 0 0 24px rgba(0, 170, 255, 0.6)",
            },
            '100%': {
              textShadow: "0 0 8px rgba(255, 255, 255, 0.6), 0 0 16px rgba(0, 170, 255, 0.4)",
            },
          }
        }}
      >
        Dancousin Shop
      </Typography>



    <IconButton color="inherit" onClick={() => setMostrarCarrito(true)}>
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
        <Box className="carrito-box" sx={{ width: 300, p: 2 }}>
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
                    {/* Sumar */}
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      onClick={() => agregarAlCarrito(item)}
                      sx={{ minWidth: "32px", mx: 0.5 }}
                    >
                      +
                    </Button>
                    {/* Eliminar  */}
                    <Button
                      size="small"
                      variant="outlined"
                      color="error"
                      onClick={() => eliminarProducto(item)}
                      sx={{ minWidth: "32px", ml: 1 }}
                    >
                      <DeleteIcon fontSize="small" />
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
                    // primary={item.nombre}  //Para mostrar el nombre mi tio
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