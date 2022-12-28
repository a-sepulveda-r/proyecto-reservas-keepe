import * as React from "react";
import "../Assets/css/stylesCardReserva.css";

export default function BootCard() {
  return (
    <div class="container my-4">
      <div class="row">
        <div class="mx-auto col-12 col-lg-8 mb-3 pruebaAlto">
          <button class="raquiImagen1 w-100" href="#">
            <a href="/iniciarsesion" class="ancla-style">
              <h1 class="raquiTextoImagen">
                Club de Basketball "Dragones" - Santiago
              </h1>
            </a>
          </button>
          <button class="raquiBoton w-100" href="/iniciarsesion">
            <a href="/iniciarsesion" class="ancla-style">
              <h1 class="raqui">Reserva aquí</h1>
            </a>
          </button>
        </div>

        <div class="mx-auto col-12 col-lg-8 mb-3 pruebaAlto">
          <button class="raquiImagen2 w-100" href="#">
            <a href="/iniciarsesion" class="ancla-style">
              <h1 class="raquiTextoImagen">
                Club de Tenis "Las Raquetas" - Las Condes
              </h1>
            </a>
          </button>
          <button class="raquiBoton w-100" href="#">
            <a href="/iniciarsesion" class="ancla-style">
              <h1 class="raqui">Reserva aquí</h1>
            </a>
          </button>
        </div>

        <div class="mx-auto col-12 col-lg-8 mb-3 pruebaAlto">
          <button class="raquiImagen3 w-100" href="#">
            <a href="/iniciarsesion" class="ancla-style">
              <h1 class="raquiTextoImagen">
                Club de Natación "Delfines" - San Bernardo
              </h1>
            </a>
          </button>
          <button class="raquiBoton w-100" href="#">
            <a href="/iniciarsesion" class="ancla-style">
              <h1 class="raqui">Reserva aquí</h1>
            </a>
          </button>
        </div>

        <div class="mx-auto col-12 col-lg-8 mb-3 pruebaAlto">
          <button class="raquiImagen4 w-100" href="#">
            <a href="/iniciarsesion" class="ancla-style">
              <h1 class="raquiTextoImagen">
                Club de baile "Ritmo latino" - Renca
              </h1>
            </a>
          </button>
          <button class="raquiBoton w-100" href="#">
            <a href="/iniciarsesion" class="ancla-style">
              <h1 class="raqui">Reserva aquí</h1>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
