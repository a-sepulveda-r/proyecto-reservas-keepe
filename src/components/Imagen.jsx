import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import googlemaps from "../Assets/IMG/googleimages.png";

const styles = {
  textoazul: {
    color: "#303030",
    fontWeight: "bold",
  },
  imagenfull: {
    height: "100%",
  },
};

function Imagen1() {
  return (
    <Card className="bg-dark text-white">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212967.2010134411!2d-70.62812206766979!3d-33.485437693883775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c565b67e6037%3A0x11c88eba7457c3b1!2sCanchas%20Basketball!5e0!3m2!1ses!2scl!4v1672257198838!5m2!1ses!2scl"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Card>
  );
}

export default Imagen1;
