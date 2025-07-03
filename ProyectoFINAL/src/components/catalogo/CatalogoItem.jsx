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
        <Card
            className="catalogo-card"
            sx={{
                width: 280,
                height: 380,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: 3,
                m: 2,
            }}
            >
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
            onClick={() => agregarAlCarrito(producto)}
            startIcon={<ShoppingCartIcon />}
            sx={{
                backgroundColor: "#fbc02d", // Amarillo fuerte
                color: "#000", // Texto oscuro
                '&:hover': {
                backgroundColor: "#f9a825", // Amarillo más oscuro al pasar el mouse
                }
            }}
            >
            Agregar al carrito
            </Button>
        </CardActions>
        </Card>
    );
    }

    export default CatalogoItem;

