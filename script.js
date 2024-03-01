document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar los elementos de la interfaz
  const textoEncriptado = document.querySelector("#textoEncriptado");
  const formulario = document.querySelector("#formulario");
  const btnEncriptar = document.querySelector("#encriptar");
  const btndesencriptar = document.querySelector("#desencriptar");
  const divResultado = document.querySelector(".desencriptador");

  //Asignar Eventos
  btnEncriptar.addEventListener("click", validar);
  btndesencriptar.addEventListener("click", validar);

  function validar(e) {
    let resultado = "";
    let textoUsuario = textoEncriptado.value.trim().toLowerCase();
    // Expresión regular que acepta solo letras (mayúsculas y minúsculas), números y espacios
    let expresionRegular = /^[a-zA-Z0-9\s]+$/;

    // Quitamos las opciones que vienen por defecto del evento  clic en un boton
    e.preventDefault();

    // Validación si el usuario no ingresa texto y da clic en alguna opción
    if (textoUsuario === "") {
      mostrarAlerta("Por favor ingresa texto");
      return;
    }

    // Verifica si el texto cumple con la expresión regular
    if (!expresionRegular.test(textoUsuario)) {
      mostrarAlerta("No se permite ingresar caracteres especiales");
      return;
    }

    //Eliminamos las alertas si existieron
    limpiarAlerta();
    textoEncriptado.value = "";

    encriptarODesencriptar = e.target.value.toLowerCase();

    if (encriptarODesencriptar == "encriptar") {
      resultado = encriptar(textoUsuario);
    } else {
      resultado = desencriptar(textoUsuario);
    }

    mostrarResultado(resultado);
  }

  function mostrarAlerta(mensaje) {
    // Comprobar si ya existe una alerta
    limpiarAlerta();

    // Generar alerta HTML
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("error");

    // Inyectar el error al formulario
    formulario.appendChild(error);
  }

  function limpiarAlerta() {
    const alerta = document.querySelector(".error");
    if (alerta) {
      alerta.remove();
    }
  }

  function encriptar(texto) {
    let textoEncriptado = "";

    for (let i = 0; i < texto.length; i++) {
      let letra = texto[i];

      switch (letra) {
        case "a":
          textoEncriptado += "ai";
          break;

        case "e":
          textoEncriptado += "enter";
          break;

        case "i":
          textoEncriptado += "imes";
          break;

        case "o":
          textoEncriptado += "ober";
          break;

        case "u":
          textoEncriptado += "ufat";
          break;

        default:
          textoEncriptado += letra;
          break;
      }
    }

    return textoEncriptado;
  }

  function desencriptar(texto) {
    for (let i = 0; i < texto.length; i++) {
      if (texto.includes("ai")) {
        texto = texto.replace("ai", "a");
      } else if (texto.includes("enter")) {
        texto = texto.replace("enter", "e");
      } else if (texto.includes("imes")) {
        texto = texto.replace("imes", "i");
      } else if (texto.includes("ober")) {
        texto = texto.replace("ober", "o");
      } else if (texto.includes("ufat")) {
        texto = texto.replace("ufat", "u");
      }
    }

    return texto;
  }

  function mostrarResultado(texto) {
    const parrafoResultado = document.createElement("H4");
    const inputCopiar = document.createElement("input");

    // Agragando el resultado
    divResultado.innerHTML = "";
    parrafoResultado.textContent = texto;
    parrafoResultado.classList.add("resultado");
    divResultado.appendChild(parrafoResultado);

    //Agragando el Botón para copiar
    inputCopiar.type = "submit";
    inputCopiar.value = "Copiar";
    inputCopiar.classList.add("boton", "btn-desencriptar");
    divResultado.appendChild(inputCopiar);

    inputCopiar.addEventListener("click", function () {
      let inputTemp = document.createElement("input");

      // Asigna el texto al valor del input
      inputTemp.value = texto;

      // Agrega el input al DOM
      document.body.appendChild(inputTemp);

      // Selecciona el texto dentro del input
      inputTemp.select();

      // Ejecuta el comando "copy" para copiar el texto seleccionado
      document.execCommand("copy");

      // Remueve el input temporal del DOM
      document.body.removeChild(inputTemp);

      alert("Texto copiado");
    });
  }
});
