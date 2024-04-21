//funcion que muestra menú responsive
function responsiveMenu(){
    const x = document.getElementById("nav");

        if(x.className==="") {
            x.className = "responsive";
        }else {
            x.className="";
        }
}

//Estilo a opcion seleccionada
function seleccionar(link) {

    const opciones = document.querySelectorAll('#links a');

    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";

    link.className = "seleccionado";

    const x = document.getElementById("nav");
    x.className = "";



}

//Detectar scroll para animación
window.onscroll = function(){
    efectoHabilidades();
}

//funcion que aplica la animación
function efectoHabilidades() {
    const skills = document.getElementById("skills");
    const distaciaSkills = window.innerHeight - skills.getBoundingClientRect().top;

    if(distaciaSkills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("jv").classList.add("barra-progreso4");
        document.getElementById("rts").classList.add("barra-progreso5");
        document.getElementById("net").classList.add("barra-progreso6");
    }
}