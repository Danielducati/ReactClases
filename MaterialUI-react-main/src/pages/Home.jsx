// Importa los componentes Container y Typography desde la librería Material-UI.
// Container: proporciona un contenedor centrado y con márgenes automáticos.
// Typography: se usa para mostrar texto con estilos predefinidos de Material-UI.
import { Container, Typography } from "@mui/material";

// Define un componente funcional llamado Home.
function Home() {
    return (
        // Container envuelve todo el contenido para centrarlo y limitar su ancho.
        <Container>
            {/* Typography con variante "h3" para mostrar un título grande.
                gutterBottom agrega un margen inferior para separar visualmente del siguiente elemento. */}
            <Typography variant="h3" gutterBottom>
                Bienvenidos a la pagina principal
            </Typography>
            {/* Typography con variante "body1" para mostrar texto normal o de párrafo. */}
            <Typography variant="body1">
                Aqui encontraras informacion de mi APP en React.
            </Typography>
        </Container>
    );
}

// Exporta el componente Home para que pueda ser usado en otras partes de la aplicación.
export default Home;