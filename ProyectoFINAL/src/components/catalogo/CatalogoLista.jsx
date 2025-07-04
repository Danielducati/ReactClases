import CatalogoItem from "./CatalogoItem";
import { Typography, Container } from "@mui/material";
import "./catalogo.css";

const productos = [
{
    id: 1,
    nombre: "Zapatos Jordan mi tio",
    descripcion: "Jordan pa que derrame manteca mi apa",
    precio: 180000,
    imagen: "/img/jordan5_sail.jpeg",
},
{
    id: 2,
    nombre: "Conjunto Nike",
    descripcion: "Conjuntico melo mi brou para ir a estdiar",
    precio: 380000,
    imagen: "/img/conjunto_nike.jpeg",
},
{
    id: 3,
    nombre: "Conjunto supreme",
    descripcion: "Supreme mi brou nada q decir",
    precio: 5400000,
    imagen: "/img/conjunto_supreme.jpeg",
},
{
    id: 4,
    nombre: "Camiseta hellstar",
    descripcion: "La nueva mis brou",
    precio: 130000,
    imagen: "/img/camiseta_hellstar.jpeg",
},
{
    id: 5,
    nombre: "Hoodie godspeed",
    descripcion: "Estilo underground",
    precio: 190000,
    imagen: "/img/hoodie_godspeed.jpg",
},
{
    id: 6,
    nombre: "Camibuzo godspeed negro",
    descripcion: "Buzo negrillo que estilo mi niño",
    precio: 190000,
    imagen: "/img/hoodie_godspeed_black.jpg",
},
{
    id: 7,
    nombre: "Jordan pa ir a estudiar",
    descripcion: "Los que usan las bestias pa ir a estudiar",
    precio: 190000,
    imagen: "/img/jordan5_black.jpeg",
},
{
    id: 8,
    nombre: "Sudadera hellstar",
    descripcion: "Una sudadera de la nueva combina con todo",
    precio: 190000,
    imagen: "/img/sudadera_hellstar.png",
},
{
    id: 9,
    nombre: "Miquito agogo",
    descripcion: "Miquito bien agogo se va con la coach, encime lo que quiera No le duele nada $$$",
    precio: 19900000,
    imagen: "/img/miquito.png",
},
];

function CatalogoLista() {
return (
    <Container sx={{ mt: 4 }}>
    <h2 className="catalogo-titulo">Catálogo de Productos</h2>
    <div className="catalogo-grid">
        {productos.map((prod) => (
        <div
        className={`catalogo-grid-item ${prod.id === 9 ? "miquito-agogo" : ""}`}
        key={prod.id}
        >
            <CatalogoItem producto={prod} />
        </div>
        ))}
    </div>
    </Container>
);
}

export default CatalogoLista;
