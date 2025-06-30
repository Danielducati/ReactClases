import CatalogoItem from "./CatalogoItem";
import { Grid, Typography, Container } from "@mui/material";
import "./catalogo.css";


const productos = [
{
    id: 1,
    nombre: "Zapatos Jordan mi tio",
    descripcion: "Jordan pa que derrame manteca mi apa",
    precio: 100,
    imagen: "/img/jordan5_sail.jpeg",
},
{
    id: 2,
    nombre: "Conjunto Nike",
    descripcion: "Conjuntico melo mi brou para ir a estdiar",
    precio: 120,
    imagen: "/img/conjunto_nike.jpeg",
},
{
    id: 3,
    nombre: "Conjunto supreme",
    descripcion: "Supreme mi boru nada q decir",
    precio: 120,
    imagen: "/img/conjunto_supreme.jpeg",
},
{
    id: 4,
    nombre: "Camiseta hellstar",
    descripcion: "La nueva mis brou",
    precio: 120,
    imagen: "/img/camiseta_hellstar.jpeg",
},
{
    id: 5,
    nombre: "Hoodie godspeed",
    descripcion: "Estilo underground",
    precio: 120,
    imagen: "/img/hoodie_godspeed.jpg",
},
{
    id: 6,
    nombre: "Camibuzo godspeed negro",
    descripcion: "Buzo negrillo que estilo mi niño",
    precio: 120,
    imagen: "/img/hoodie_godspeed_black.jpg",
},
{
    id: 7,
    nombre: "Jordan pa ir a estudiar",
    descripcion: "Los que usan las bestias pa ir a estudiar",
    precio: 120,
    imagen: "/img/jordan5_black.jpeg",
},
{
    id: 8,
    nombre: "Sudadera hellstar",
    descripcion: "Una sudadera de la nueva combina con todo",
    precio: 120,
    imagen: "/img/sudadera_hellstar.png",
}
]
;
function CatalogoLista() {
return (
    
    <Container sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom align="center">
        Catálogo de Productos
    </Typography>
    <Grid container justifyContent="center">
        {productos.map((prod) => (
        <Grid item key={prod.id}>
            <CatalogoItem producto={prod} />
        </Grid>
        ))}
    </Grid>
    </Container>
);
}

export default CatalogoLista;
