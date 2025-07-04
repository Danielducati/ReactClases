// Importa los componentes Container y Typography desde la librería Material-UI.
// Container: proporciona un contenedor con márgenes y centrado automático.
// Typography: se usa para mostrar texto con estilos predefinidos de Material-UI.
import { Container, Typography } from "@mui/material";

// Define un componente funcional llamado About.
function About() {
    // El componente retorna JSX que representa la estructura visual.
    return (
        // Container envuelve todo el contenido para darle un ancho máximo y centrado.
        <Container>
            {/* Typography con variante "h3" para mostrar un título grande.
                gutterBottom agrega un margen inferior para separar visualmente del siguiente elemento. */}
            <Typography variant="h3" gutterBottom>
                Nosotros
            </Typography>
            {/* Typography con variante "body1" para mostrar texto normal o de párrafo. */}
            <Typography variant="body1">
                Mision y vision de nuestra empresa.
            </Typography>
        </Container>
    );
}

// Exporta el componente About para que pueda ser usado en otras partes de la aplicación.
export default About;