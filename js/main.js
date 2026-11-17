const botton = document.getElementById("btn-modo");

if (localStorage.getItem("tema") === "oscuro") {
  document.body.classList.add('oscuro');
  botton.innerText = "Modo Claro";
}

botton.addEventListener("click", () => {document.body.classList.toggle("oscuro");

    if(document.body.classList.contains("oscuro")){
        botton.innerText = "Modo Claro";
        localStorage.setItem("tema", "oscuro");
    }
    else{
        botton.innerText = "Modo Oscuro";
        localStorage.setItem("tema", "claro");
    }

});

const form = document.querySelector(".formulario-contacto");

if(form){
    document.querySelector(".formulario-contacto").addEventListener("submit", function(event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const comentario = document.getElementById("comentario").value;
        const mensajeEstado = document.getElementById("mensaje-estado");

        if(nombre && email && comentario && !email.includes("@")){
            mensajeEstado.className = "alert alert-danger mt-3";
            mensajeEstado.textContent = "Por favor, ingresa un correo electrónico válido.";
        } else if(nombre && email && comentario && email.includes("@") && telefono !== "" && isNaN(telefono)){
            mensajeEstado.className = "alert alert-danger mt-3";
            mensajeEstado.textContent = "Por favor, ingresa un número de teléfono válido.";
        } else if (nombre && email && comentario && email.includes("@")) {
            mensajeEstado.className = "alert alert-success mt-3";
            mensajeEstado.textContent = "¡Gracias por contactarnos! Hemos recibido tu mensaje.";
            document.querySelector(".formulario-contacto").reset();
        } else {
            mensajeEstado.className = "alert alert-danger mt-3";
            mensajeEstado.textContent = "Por favor, completa todos los campos obligatorios antes de enviar el formulario.";
        }
    });
}
