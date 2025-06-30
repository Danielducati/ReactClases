import { createContext, useState } from "react";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
const [carrito, setCarrito] = useState([]);

const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
};

const quitarUno = (producto) => {
    const index = carrito.findIndex((p) => p.id === producto.id);
    if (index !== -1) {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
    }
};

const pagar = () => {
    if (carrito.length === 0) return alert("No tienes productos en el carrito.");
    alert("¡Gracias por tu compra!");
    setCarrito([]);
};

return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, quitarUno, pagar }}>
    {children}
    </CarritoContext.Provider>
);
}
