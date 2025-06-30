import { Container, Typography } from "@mui/material";

function Acerca() {
return (
    <Container sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>Acerca de nosotros</Typography>
    <Typography>
        Bienvenido a nuestra tienda. Aquí encontrarás los mejores productos para tu flow.  
        Desarrollado por Daniel 😎 con React, Vite y MUI.
    </Typography>
    </Container>
);
}

export default Acerca;
