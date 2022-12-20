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

const FormUserComponent = ({
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
      <div class="container-fluid my-5 py-5 bg-form">
        <h1 class="text-center py-3">Registro</h1>

        <form
          id="formulario my-5 py-3 "
          class="container bg-light border-radius col-lg-6 col-12"
        >
          <div class="mb-3 pb-2 pt-5 mx-3">
            <label for="exampleInputNombre" class="form-label">
              Nombre:
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputNombre"
              placeholder="Ingrese aquí su nombre"
              aria-describedby="nombreHelp"
              name="fullname"
              value={fullname}
              onChange={handleInputChange}
              required
            />
            <div id="nombreHelp" class="form-text">
              Nunca compartiremos su correo electrónico con nadie.
            </div>
          </div>
          <div class="mb-3 py-2 mx-3">
            <label for="exampleInputUsername" class="form-label">
              Username:
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputUsername"
              placeholder="Ingrese aquí su username"
              aria-describedby="usernameHelp"
              name="username"
              value={username}
              onChange={handleInputChange}
              required
            />
            <div id="usernameHelp" class="form-text">
              Nunca compartiremos su correo electrónico con nadie.
            </div>
          </div>
          <div class="mb-3 py-2 mx-3">
            <label for="exampleInputEmail1" class="form-label">
              Email:
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
              Nunca compartiremos su correo electrónico con nadie.
            </div>
          </div>
          <div class="mb-3 py-2 mx-3">
            <label for="exampleInputRut" class="form-label">
              Rut:
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputRut"
              placeholder="Ingrese aquí su rut"
              aria-describedby="rutHelp"
              name="rut"
              value={rut}
              onChange={handleInputChange}
              required
            />
            <div id="rutHelp" class="form-text">
              Nunca compartiremos su correo electrónico con nadie.
            </div>
          </div>
          <div class="mb-3 py-2 mx-3">
            <label for="exampleInputTel" class="form-label">
              Telefono:
            </label>
            <input
              type="tel"
              class="form-control"
              id="exampleInputTel"
              pattern="[0-9]*"
              placeholder="Ingrese aquí su telfono"
              aria-describedby="telHelp"
              name="phonenumber"
              value={phonenumber}
              onChange={handleInputChange}
              required
            />
            <div id="telHelp" class="form-text">
              Nunca compartiremos su correo electrónico con nadie.
            </div>
          </div>
          <div class="mb-3 py-2 mx-3">
            <label for="exampleInputPassword1" class="form-label">
              Contraseña:
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
          <div class="mb-3 form-check py-2 mx-3">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
              name="chekCampo"
            />
            <label class="form-check-label" for="exampleCheck1">
              Acepto las condiciones
            </label>
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
              Ingresar usuario
            </button>
          )}

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

export default FormUserComponent;
