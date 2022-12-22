import { convertLength } from "@mui/material/styles/cssUtils";
import Card from "react-bootstrap/Card";
import estadio from "../Assets/IMG/estadio.jpg";

const styles = {
  imagenfull: {
    height: "100%",
  },
};

function Imagen2() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={estadio} alt="Card image" style={styles.imagenfull} />
      <Card.ImgOverlay>
        <Card.Title>Cancha de Fútbol Chacabuco</Card.Title>
        <Card.Text>Cancha de fútbol compatible con niños.</Card.Text>
        <Card.Text>Horario: Lun a Viernes. 8-23PM</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Imagen2;
