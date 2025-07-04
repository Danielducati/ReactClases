import { createContext, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
const [carrito, setCarrito] = useState([]);
const [mensaje, setMensaje] = useState("");
const [tipoMensaje, setTipoMensaje] = useState("success");
const [openSnackbar, setOpenSnackbar] = useState(false);

const mostrarMensaje = (texto, tipo = "success") => {
    setMensaje(texto);
    setTipoMensaje(tipo);
    setOpenSnackbar(true);
};

const eliminarProducto = (producto) => {
    setCarrito((prev) => prev.filter((p) => p.id !== producto.id));
    mostrarMensaje("Producto eliminado", "info");
};

const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
    mostrarMensaje("Producto añadido", "success");
};

const quitarUno = (producto) => {
    const index = carrito.findIndex((p) => p.id === producto.id);
    if (index !== -1) {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
    mostrarMensaje("Producto quitado", "warning");
    }
};

const pagar = () => {
    if (carrito.length === 0) {
    mostrarMensaje("No tienes productos en el carrito", "warning");
    return;
    }
    mostrarMensaje("¡Gracias por tu compra!", "success");
    setCarrito([]);
};

return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, quitarUno, pagar, eliminarProducto }}>
    {children}
    <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
        <Alert onClose={() => setOpenSnackbar(false)} severity={tipoMensaje} sx={{ width: "100%" }}>
        {mensaje}
        </Alert>
    </Snackbar>
    </CarritoContext.Provider>
);
}
