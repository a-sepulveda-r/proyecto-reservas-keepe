import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import googlemaps from "../Assets/IMG/googleimages.png";

const styles = {
  textoazul: {
    color: "#4299E1",
    fontWeight: "bold",
  },
};

function Imagen1() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={googlemaps} alt="Card image" />
      <Card.ImgOverlay>
        <Alert.Link
          href="https://www.google.com/maps/place/Hipódromo+Chile/@-33.4094399,-70.6641251,14z/data=!4m5!3m4!1s0x0:0x9ebd3e6263751d47!8m2!3d-33.4047827!4d-70.6664425"
          style={styles.textoazul}
        >
          Ver en Google Maps
        </Alert.Link>
        <Card.Title></Card.Title>
        <Card.Text style={styles.textoazul}>
          Av. Fermín Vivaceta 1372, Independencia, Región Metropolitana
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Imagen1;
