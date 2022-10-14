const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const campos = {
  nombre: false,
  apellido: false,
  email: false,
  telefono: false,
};

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`grupo__${campo}`)
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo__${campo}`)
      .classList.add("formulario__grupo-correcto");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.remove("fa-times-circle");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.add("fa-check-circle");
    document
      .querySelector(`#grupo__${campo} .formulario__input-error`)
      .classList.remove("formulario__input-error-activo");
    campos[campo] = true;
  } else {
    document
      .getElementById(`grupo__${campo}`)
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo__${campo}`)
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.add("fa-times-circle");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.remove("fa-check-circle");
    document
      .querySelector(`#grupo__${campo} .formulario__input-error`)
      .classList.add("formulario__input-error-activo");
    campos[campo] = false;
  }
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      validarCampo(expresiones.nombre, e.target, e.target.name);
      break;
    case "apellido":
      validarCampo(expresiones.nombre, e.target, e.target.name);
      break;
    case "email":
      validarCampo(expresiones.correo, e.target, e.target.name);
      break;
    case "telefono":
      validarCampo(expresiones.telefono, e.target, e.target.name);
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  // e.preventDefault();

  const termino = document.getElementById("terminos");
  if (
    campos.nombre &&
    campos.apellido &&
    campos.email &&
    campos.telefono &&
    termino.checked
  ) {
    console.log("Todo en orden");
    formulario.reset();
    document
      .getElementById("formulario__mensaje-exito")
      .classList.add("formulario__mensaje-exito-activo");
    setTimeout(() => {
      document
        .getElementById("formulario__mensaje-exito")
        .classList.remove("formulario__mensaje-exito-activo");
    }, 5000);
    document
      .querySelectorAll(".formulario__grupo-correcto")
      .forEach((icono) => {
        icono.classList.remove("formulario__grupo-correcto");
      });
  } else {
    document
      .getElementById("formulario__mensaje")
      .classList.add("formulario__mensaje-activo");
    setTimeout(() => {
      document
        .getElementById("formulario__mensaje")
        .classList.remove("formulario__mensaje-activo");
    }, 2000);
  }
});

// const $form = document.querySelector("#formulario");

// $form.addEventListener("submit", handleSubmit);

// async function handleSubmit(event) {
//   event.preventDefault();
//   const form = new FormData(this);
//   const response = await fetch(this.action, {
//     method: this.method,
//     mode: "cors",
//     body: form,
//     header: {
//       Accept: "application/json",
//     },
//   });
//   if (response.ok) {
//     this.reset();
//     alert("Danke!");
//   }
// }
