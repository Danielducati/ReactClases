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
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./catalogo/catalogo.css";
import "./navbar.css";





function Navbar() {
  const { carrito } = useContext(CarritoContext);
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

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
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
              <ListItem key={i}>
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
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;


