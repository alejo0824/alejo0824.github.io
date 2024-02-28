document.addEventListener('DOMContentLoaded', function(){

  const texto = ''

  // Seleccionar los elementos de la interfaz
  const texto_encriptado = document.querySelector('#texto_encriptado');
  const formulario = document.querySelector('#formulario')
  const encriptar = document.querySelector('#encriptar')
  const desencriptar = document.querySelector('#desencriptar')

  //Asignar Eventos 
  // texto_encriptado.addEventListener('blur',validar);
  encriptar.addEventListener('click',validar)
  desencriptar.addEventListener('click',validar)

  function validar(e){
    const texto_encriptado = document.querySelector('#texto_encriptado')
    e.preventDefault();

    if(texto_encriptado.value.trim().toLowerCase() === ''){
      mostrarAlerta('Por favor ingresa texto');
      return;
    }
    limpiarAlerta();

    console.log(e.target.value.toLowerCase());
  }

  function mostrarAlerta(mensaje){
    // Comprobar si ya existe una alerta
    limpiarAlerta();

    // Generar alerta HTML 
    const error = document.createElement('P')
    error.textContent = mensaje;
    error.classList.add('error')

    // Inyectar el error al formulario
    formulario.appendChild(error)
  }

  function limpiarAlerta(){
    const alerta = document.querySelector('.error')
    if(alerta){
      alerta.remove();
    }
  }

});