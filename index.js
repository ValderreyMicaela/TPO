
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});



  const formulario = document.getElementById('formulario');
  const inputs = document.querySelectorAll('#formulario input'); 
  
  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
      apellido: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    asunto: /^[a-zA-Z0-9\_\-]{4,40}$/, 
      mensaje: /^[a-zA-Z0-9\_\-]{0,100}$/
  }
  
  
  const campos = {
    nombre: false,
    apellido: false,
    correo: false,
    asunto: false,
    mensaje: false
  }
  
  const validarFormulario = (e) => {
     switch (e.target.name) {
  case 'nombre':
         validarCampo(expresiones.nombre, e.target, `nombre`);
      break;
  case 'apellido':
          validarCampo(expresiones.apellido, e.target, `apellido`); 
      break;
  case 'correo':
          validarCampo(expresiones.correo, e.target, `correo`);
      break;
  case 'asunto':
          validarCampo(expresiones.asunto, e.target, `asunto`);
      break;
  case 'mensaje':
          validarCampo(expresiones.mensaje, e.target, `mensaje`);
      break;
  
     }
  }
  
  const validarCampo = (expresion, input, campo) => {
      if(expresion.test(input.value)){
          document.getElementById(`grupo_${campo}`).classList?.remove('formulario_grupo-incorrecto');
          document.getElementById(`grupo_${campo}`).classList?.add('formulario_grupo-correcto');
          document.querySelector(`#grupo_${campo} i`).classList?.add('fa-check-circle');
          document.querySelector(`#grupo_${campo} i`).classList?.remove('fa-times-circle');
          document.querySelector(`#grupo_${campo} .formulario__input-error`).classList?.remove('formulario__input-error-activo');
          campos[campo] = true;
      } else {
          document.getElementById(`grupo_${campo}`).classList?.add('formulario_grupo-incorrecto');
          document.getElementById(`grupo_${campo}`).classList?.remove('formulario_grupo-correcto');
          document.querySelector(`#grupo_${campo} i`).classList?.add('fa-check-circle');
          document.querySelector(`#grupo_${campo} i`).classList?.remove ('fa-check-circle');
          document.querySelector(`#grupo_${campo} .formulario__input-error`).classList?.add('formulario__input-error-activo');
          campos[campo] = false;
      }
  }
  
  inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
  });
  
  
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
  
  
    if(campos.nombre && campos.apellido && campos.correo && campos.asunto && campos.mensaje){
  
      document.getElementById('formulario_mensaje-exito').classList?.add('formulario_mensaje-exito-activo');
      setTimeout(() => {
        document.getElementById('formulario_mensaje-exito').classList?.remove('formulario_mensaje-exito-activo');
      }, 5000);
  
      document.querySelectorAll('formulario_grupo-correcto').forEach((icono) => {
        icono.classList?.remove('formulario_grupo-correcto');
      });
    } else {
      document.getElementById('formulario_mensaje').classList?.add('formulario_mensaje-activo');
          setTimeout(() => {
        document.getElementById('formulario_mensaje').classList.remove('formulario_mensaje-activo');
      }, 5000);
    }
  });
