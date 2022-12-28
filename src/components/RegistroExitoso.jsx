import * as React from "react";
import "../Assets/css/styleRegistroExitoso.css";
import keepelogo2 from "../Assets/IMG/keepelogo2.png";

export default function RegistroExitosoComponent() {
  return (
    <div class="container">
      <div class="card-body border-0 mb-5">
        <h5 class="retext text-center mt-5">Resgistro Exitoso!</h5>
        <div className="card mx-auto border-0" style={{ width: "18rem" }}>
          <button type="button" className="btn btn-link p-0">
            <img
              src={keepelogo2}
              className="card-img-top rounded-circle mx-auto d-block"
              alt="image"
            />
          </button>
          <div className="card-body text-center">
            <button className="reservabuton">
              <a href="/pagoreserva" className="text-decoration-none">
                <h5 class="retext2 text-center">Ir a la Reserva ↑</h5>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
