//import "./boton";
import "../Assets/css/stylesForm.css";
import qrCode from "../Assets/IMG/qrCode.png";
import React, { useState, useEffect } from "react";

const initiaUser = {
  fullname: "",
  correo: "",
  password: "",
  phonenumber: "",
  rut: "",
  username: "",
  // rol_user_id: 2, ACACACACACACACACACACACAC
};

const TicketComponent = ({
  userAdd,
  usuarioEditado,
  setUsuarioEditado,
  userEdit,
}) => {
  const [usuario, setUsuario] = useState(initiaUser);
  const { fullname, correo, password, phonenumber, rut, username } = usuario;

  useEffect(() => {
    if (usuarioEditado !== null) {
      setUsuario(usuarioEditado);
    } else {
      setUsuario({
        fullname: "",
        correo: "",
        password: "",
        phonenumber: "",
        rut: "",
        username: "",
      });
    }
  }, [usuarioEditado]);

  const handleInputChange = (e) => {
    const changedFormValue = {
      ...usuario,
      [e.target.name]: e.target.value,
    };
    setUsuario(changedFormValue);
  };
  return (
    <>
      <div class="container-fluid py-5 bg-form">
        <form
          id="formulario my-5 py-3 "
          class="container bg-light border-radius col-lg-6 col-12"
        >
          <div class="row">
            <div class="col-6">
              <h3 class="card-title">
                <br />
                <span id="pago" class="form-text pb-2 pt-5 ml-5">
                  Pago Exitoso
                </span>
                <span id="exclamacion">!</span>
              </h3>
              <div id="textosubtitulo" class="form-text pb-2 pt-3 ml-5">
                Tu ticket de reserva es:
                <h4 id="codigo">ZTDS983291</h4>
              </div>
            </div>
            <div class="col-6">
              <div class="">
                <img src={qrCode} class="img-fluid" id="qr" />
              </div>
            </div>
          </div>
          <div>
            <h5>Tus datos son:</h5>
            <div class="border border-success rounded p-2 mb-2 border-opacity-75">
              Manuel Manolito Mandarin
            </div>
            <div class="border border-success rounded p-2 mb-2 border-opacity-75">
              Rut: 14329739-4
            </div>
            <div class="border border-success rounded p-2 mb-2 border-opacity-75">
              Cancha de Futbol Chacabuco
            </div>
            <div class="border border-success rounded p-2 mb-2 border-opacity-75">
              4 de Enero de 2023 - 19:00 a 20:00
            </div>
          </div>

          {usuarioEditado !== null ? (
            <button
              type="button"
              class="btn btn-success"
              onClick={() => userEdit(usuario)}
            >
              Editar usuario
            </button>
          ) : (
            <button
              id="imprimirTicket"
              type="button"
              class="btn btn-lg w-100 py-3 mb-3 botonIngresar"
              onClick={() => userAdd(usuario)}
            >
              Imprimir Ticket
            </button>
          )}
          <div class="form-text text-center">
            <a href="FormInicio.jsx">Puedes ver este ticket en Tus Reservas</a>
          </div>

          {usuarioEditado !== null ? (
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => setUsuarioEditado(null)}
            >
              Cancelar
            </button>
          ) : (
            <></>
          )}
          <br />
          <button
            id="btnCargando"
            class="btn btn-secondary w-100 d-none"
            type="button"
            disabled
          >
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Cargando...
          </button>
        </form>
      </div>
      <div
        class="toast align-items-center mt-2 ms-4"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="d-flex">
          <div class="toast-body">Formulario procesado!</div>
          <button
            type="button"
            class="btn-close me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </>
  );
};

export default TicketComponent;
