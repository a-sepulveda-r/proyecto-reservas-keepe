import React from "react";
import "../Assets/css/styleQueHacemos.css";

const QuehacemosComponent = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-12">
          <i class="icon-quehacemos fa-solid fa-handshake-simple"></i>
          <h1 class="texto-info-quehacemos">
            <strong>¿Qué hacemos?</strong>
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="texto-info-subinfo col-12">
          <h5>
            Te ayudamos a poder reservar tu lugar favorito al instante. Explora
            las
          </h5>
        </div>
      </div>
      <div class="row">
        <div class="texto-info-subinfo2 col-12">
          <h5>múltiples opciones que tenemos para ofrecerte.</h5>
        </div>
      </div>
    </div>
  );
};
export default QuehacemosComponent;
