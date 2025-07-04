// Importa los componentes necesarios de Material-UI para construir una tarjeta (Card).
import Card from "@mui/material/Card"; // Componente principal de la tarjeta.
import CardActionArea from "@mui/material/CardActionArea"; // Área de la tarjeta que es interactiva (clickeable).
import CardActions from "@mui/material/CardActions"; // Contenedor para los botones de acción en la parte inferior.
import CardContent from "@mui/material/CardContent"; // Contenedor para el contenido textual de la tarjeta.
import CartdMedia from "@mui/material/CardMedia"; // Componente para mostrar imágenes o medios en la tarjeta.
import Button from "@mui/material/Button"; // Botón estilizado de Material-UI.
import Typography from "@mui/material/Typography"; // Para mostrar texto con estilos predefinidos.

// Define el componente funcional Product.
function Product() {
  return (
    // Card es el contenedor principal de la tarjeta.
    <Card
      sx={{
        maxWidth: 345, // Limita el ancho máximo de la tarjeta a 345px usando la prop `sx` (estilos en línea de MUI).
      }}
    >
      {/* CardActionArea hace que el área superior de la tarjeta sea clickeable */}
      <CardActionArea>
        {/* CartdMedia muestra una imagen en la parte superior de la tarjeta */}
        <CartdMedia
          component="img" // Indica que el medio es una imagen.
          height="220" // Altura de la imagen.
          width="220" // Ancho de la imagen.
          image="https://keepcoding.io/wp-content/uploads/2023/08/image-200.png" // URL de la imagen.
          alt="Contemplative Reptile" // Texto alternativo para accesibilidad.
        />
        {/* CardContent contiene el texto principal de la tarjeta */}
        <CardContent>
          {/* Typography para el título de la tarjeta */}
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          {/* Typography para la descripción de la tarjeta */}
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica.
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* CardActions contiene los botones de acción en la parte inferior de la tarjeta */}
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

// Exporta el componente Product para que pueda ser usado en otras partes de la aplicación.
export default Product;