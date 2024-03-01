document.addEventListener('DOMContentLoaded', function(){ 
  
  // Seleccionar los elementos de la interfaz
  const textoEncriptado = document.querySelector('#textoEncriptado');
  const formulario = document.querySelector('#formulario')
  const btnEncriptar = document.querySelector('#encriptar')
  const btndesencriptar = document.querySelector('#desencriptar')
  const resultado = document.querySelector('#resultado')

  //Asignar Eventos 
  // textoEncriptado.addEventListener('blur',validar);
  btnEncriptar.addEventListener('click',validar)
  btndesencriptar.addEventListener('click',validar)

  function validar(e){
    e.preventDefault();

    if(textoEncriptado.value.trim().toLowerCase() === ''){
      mostrarAlerta('Por favor ingresa texto');
      return;
    }
    limpiarAlerta();
    let texto = textoEncriptado.value
    //textoEncriptado.value = ''; //Descomentar par PRD

    encriptarODesencriptar = e.target.value.toLowerCase()

    if (encriptarODesencriptar == 'encriptar'){
      encriptar(texto);
    }
    else {
      desencriptar(texto);
    }
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

  function encriptar(texto){
    let textoEncriptado = '';

    for (let i = 0; i < texto.length; i++) {
      let letra = texto[i];

      switch (letra) {
        case 'a':
          textoEncriptado += 'ai'
          break;

        case 'e':
          textoEncriptado += 'enter'
          break;

        case 'i':
          textoEncriptado += 'imes'
          break;

        case 'o':
          textoEncriptado += 'ober'
          break;

        case 'u':
          textoEncriptado += 'ufat'
          break;
      
        default:
          textoEncriptado += letra
          break;
      }
    }

    console.log(textoEncriptado);
  }

  function desencriptar(texto) {

    for (let i = 0; i < texto.length; i++) {
      
      if (texto.includes('ai')) {
        texto = texto.replace('ai', 'a')
    
      } else if (texto.includes('enter')){
        texto = texto.replace('enter', 'ae')
    
      } else if (texto.includes('imes')){
        texto = texto.replace('imes', 'i')
    
      } else if (texto.includes('ober')){
        texto = texto.replace('ober', 'o')
    
      } else if (texto.includes('ufat')){
        texto = texto.replace('ufat', 'u')  
      } 
    }
    
    console.log(texto);
  }

  function name(params) {
    
  }
});

