// Importa componentes de Material-UI:
// Container: para centrar y dar márgenes al contenido.
// Typography: para mostrar texto con estilos.
// Button: para crear botones con estilos.
// TextField: para campos de entrada de texto.
import { Container, Typography, Button, TextField } from "@mui/material";

// Define el componente funcional Contact.
function Contact() {
    return (
        // Container envuelve todo el contenido para centrarlo y limitar su ancho.
        <Container>
            {/* Typography muestra el título "Contactenos" con estilo grande (h3) y margen inferior */}
            <Typography variant="h3" gutterBottom>
                Contactenos
            </Typography>
            {/* Formulario de contacto */}
            <form>
                {/* Campo de texto para el nombre */}
                <TextField
                    fullWidth // Ocupa todo el ancho disponible
                    label="Nombre" // Etiqueta del campo
                    variant="outlined" // Estilo del campo
                    margin="normal" // Margen vertical estándar
                />
                {/* Campo de texto para el correo electrónico */}
                <TextField
                    fullWidth
                    label="Correo Electrónico"
                    variant="outlined"
                    margin="normal"
                />
                {/* Campo de texto para el mensaje, permite varias líneas */}
                <TextField
                    fullWidth
                    label="Mensaje"
                    variant="outlined"
                    margin="normal"
                    multiline // Permite varias líneas
                    rows={4} // Muestra 4 filas de alto
                />
                {/* Botón para enviar el formulario */}
                <Button
                    variant="contained" // Botón con fondo sólido
                    color="primary" // Color principal del tema
                    style={{ marginTop: "20px" }} // Margen superior
                >
                    Enviar
                </Button>
            </form>
        </Container>
    );
}

// Exporta el componente Contact para usarlo en otras partes de la aplicación.
export default Contact;