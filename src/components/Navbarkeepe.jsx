import React from "react";
import "../Assets/css/styleNavbar.css";
import logoKeepe from "../Assets/IMG/keepelogo.png";
//import "./boton";

const NavbarKeepeComponent = () => {
  return (
    <nav class="navbar navbar-expand-lg colorNav" id="navbar-example">
      <div class="container">
        <a href="/" class="navbar-brand">
          <img class="icononav" src={logoKeepe} alt="" />
        </a>
        <span class="iconotext">Keepe</span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mb-2 mx-lg-auto mx-xs-0 textoNav">
            <li class="nav-item">
              <a href="/" class="nav-link textoNav" aria-current="page">
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <a href="/reserva" class="nav-link textoNav" aria-current="page">
                Reservar
              </a>
            </li>
            <li class="nav-item">
              <a href="/registroadmin" class="nav-link textoNav">
                Publicar
              </a>
            </li>
            <li class="nav-item">
              <a href="/misionyvision" class="nav-link textoNav">
                Conócenos
              </a>
            </li>
            <li class="nav-item dropdown dropdownLi">
              <a
                class="btn btn-circle purple-background nav-link dropdown-toggle textoNav center-icon "
                href="/"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-user-plus h3"></i>
              </a>
              <ul
                class="dropdown-menu bg-ul"
                aria-labelledby="navbarScrollingDropdown"
                onMouseEnter={(event) => {
                  event.currentTarget.previousElementSibling.classList.add(
                    "hover"
                  );
                }}
              >
                <li>
                  <a class="dropdown-item iancl" href="/iniciarsesion">
                    Iniciar Sesión
                  </a>
                </li>
                <li>
                  <a class="dropdown-item iancl" href="/registro">
                    Registrate
                  </a>
                </li>
                {/* <li>
                  <a class="dropdown-item iancl" target="_blank" href="/">
                    Ver Tickets
                  </a>
                </li>
                <li>
                  <a class="dropdown-item iancl" target="_blank" href="/">
                    Mi Perfil
                  </a>
                </li> */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarKeepeComponent;
