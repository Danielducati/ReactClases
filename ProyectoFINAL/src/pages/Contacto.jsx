import { Container, TextField, Button, Typography, Box } from "@mui/material";

function Contacto() {
return (
    <Container sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>Contacto</Typography>
    <Box component="form" noValidate autoComplete="off" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Nombre" required />
        <TextField label="Correo electrónico" type="email" required />
        <TextField label="Mensaje" multiline rows={4} required />
        <Button variant="contained" color="primary">Enviar</Button>
    </Box>
    </Container>
);
}

export default Contacto;
