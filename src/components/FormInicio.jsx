//import "./boton";
import "../Assets/css/stylesForm.css";
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

const FormInicioComponent = ({
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
          id="formulario my-5 py-5  "
          class="container bg-light border-radius col-lg-6 col-12"
        >
          <h3 class="card-title py-3">
            <br />
            <span>Inicio Sesión</span>
            <span id="exclamacion">!</span>
            <br />
          </h3>
          <div id="textosubtitulo" class="form-text">
            Inicia sesión para reservar y ver tus reservas
          </div>
          <div class="mb-3 py-2 mx-3">
            <label for="exampleInputEmail1" class="form-label">
              Email:<abbr aria-label="required">*</abbr>
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Ingrese aquí su email"
              aria-describedby="emailHelp"
              name="correo"
              value={correo}
              onChange={handleInputChange}
              required
            />
            <div id="emailHelp" class="form-text">
              Nunca compartiremos sus datos con nadie.
            </div>
          </div>
          <div class="mb-3 py-2 mx-3">
            <label for="exampleInputPassword1" class="form-label">
              Contraseña:<abbr aria-label="required">*</abbr>
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Ingrese aquí su constraseña"
              name="password"
              value={password}
              onChange={handleInputChange}
              required
            />
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
              type="button"
              class="btn btn-lg btn-primary w-100 py-3 mb-3 botonIngresar"
              onClick={() => userAdd(usuario)}
            >
              Iniciar Sesión
            </button>
          )}
          <div class="form-text text-center mb-4">
            ¿No te has registrado? <a href="/registro">Registrate</a>
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

export default FormInicioComponent;
