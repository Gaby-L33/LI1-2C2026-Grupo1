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