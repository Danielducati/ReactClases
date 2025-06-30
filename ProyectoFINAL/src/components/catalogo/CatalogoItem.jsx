    import { useContext } from "react";
    import { CarritoContext } from "../CarritoContext";
    import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    } from "@mui/material";
    import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
    import "./catalogo.css";


    function CatalogoItem({ producto }) {
    const { agregarAlCarrito } = useContext(CarritoContext);

    return (
        <Card sx={{ maxWidth: 250, m: 2, boxShadow: 3 }}>
        <CardMedia
            component="img"
            height="140"
            image={producto.imagen}
            alt={producto.nombre}
        />
        <CardContent>
            <Typography gutterBottom variant="h6" component="div">
            {producto.nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {producto.descripcion}
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: "bold" }}>
            ${producto.precio}
            </Typography>
        </CardContent>
        <CardActions>
            <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => agregarAlCarrito(producto)}
            startIcon={<ShoppingCartIcon />}
            >
            Agregar
            </Button>
        </CardActions>
        </Card>
    );
    }

    export default CatalogoItem;

