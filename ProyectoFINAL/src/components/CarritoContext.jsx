import { createContext, useState } from "react";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
const [carrito, setCarrito] = useState([]);

const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
};

return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito }}>
    {children}
    </CarritoContext.Provider>
);
}
