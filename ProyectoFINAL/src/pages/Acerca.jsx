import { Container, Typography, Box } from "@mui/material";
import "./acerca.css"
import "../components/catalogo/catalogo.css"

function Acerca() {
return (
    <Container className="acerca-container" sx={{ mt: 4 }}>
    <Typography variant="h4" align="center" gutterBottom>
        Estos somos nosotros
    </Typography>
    <Typography align="center" paragraph>
        Aquí podrás encontrar tu verdadero estilo, inspirado en lo urbano, lo moderno y lo que te hace diferente.
        Te dejamos algunos ejemplos de nuestras prendas:
    </Typography>

    <Box className="galeria">
        <img src="/img/outfit1.jpeg" alt="Prenda 1" className="galeria-img" />
        <img src="/img/outfit2.jpeg" alt="Prenda 2" className="galeria-img" />
        <img src="/img/outfit3.jpeg" alt="Prenda 3" className="galeria-img" />
        <img src="/img/outfit4.jpeg" alt="Prenda 3" className="galeria-img" />
    </Box>
    </Container>
);
}

export default Acerca;

