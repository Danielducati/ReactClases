import { Container, TextField, Button, Typography, Box } from "@mui/material";
import "./contacto.css"

function Contacto() {
return (
    <Container>
    <Box className="contacto-formulario">
        <Typography variant="h4" gutterBottom>
        Contáctanos
        </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Nombre" required fullWidth />
        <TextField label="Correo electrónico" type="email" required fullWidth />
        <TextField label="Mensaje" multiline rows={4} required fullWidth />
        <Button variant="contained" sx={{ backgroundColor: "rgb(9, 80, 83)"}}>Enviar</Button>
        </Box>
    </Box>
    </Container>
);
}

export default Contacto;
