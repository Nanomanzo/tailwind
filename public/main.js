//dark mode
const htmlElement = document.querySelector("html");
const toggleButton = document.querySelector("#toggle");
const toggleButtonSm = document.querySelector("#toggle-sm")

toggleButton.addEventListener("click", () => toggleDarkMode())
toggleButtonSm.addEventListener("click", () => toggleDarkMode())

const toggleDarkMode = () => {
    htmlElement.classList.contains("dark") ?
        htmlElement.classList.remove("dark") :
        htmlElement.classList.add("dark")
}

const userButton = document.querySelector("#user-button");
const contentContainer = document.querySelector("#tab_bar");
const userForm = document.getElementById("user_form");
const screenHeight = window.innerHeight;
//user form mobile
document.addEventListener("DOMContentLoaded", function () {
    userButton.addEventListener("click", function (event) {
        if (screenHeight >= 667 && screenHeight <= 820) {
            contentContainer.classList.toggle("h-full");
            console.log("entro");
        } else {
            contentContainer.classList.remove("full");
        }

        contentContainer.classList.toggle("h-16");
        contentContainer.classList.toggle("h-3/4");
        userForm.classList.toggle("-translate-y-2/3");
        event.stopPropagation();
    });

    userForm.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    document.addEventListener("click", function () {
        if (contentContainer.classList.contains("h-3/4")) {
            contentContainer.classList.remove("h-3/4");
            contentContainer.classList.add("h-16");
            userForm.classList.toggle("-translate-y-2/3");
        }
    });
});


//spin arrow tabBar
const arrow = document.getElementById('arrow');
const login = document.getElementById("login");
const registrarse = document.getElementById("registrarse");
const titleLogin = document.getElementById("title-login");


let isLoginFormVisible = true;

arrow.addEventListener('click', () => {
    // Aplica la animación de rotación a la flecha
    arrow.classList.toggle('rotate-180');
    
    // Programa la animación de rotación en los formularios
    if (isLoginFormVisible) {
        registrarse.classList.add('animate-rotate-y');
        registrarse.classList.remove('hidden');
        login.classList.remove('animate-rotate-y');
        login.classList.add('hidden');
        titleLogin.classList.remove('animate-rotate-y');
        void titleLogin.offsetWidth; // Este truco reinicia la animación
        titleLogin.classList.add('animate-rotate-y');
        titleLogin.innerHTML = 'Registrate&nbsp;';
    } else {
        login.classList.add('animate-rotate-y');
        login.classList.remove('hidden');
        registrarse.classList.remove('animate-rotate-y');
        registrarse.classList.add('hidden');
        titleLogin.classList.remove('animate-rotate-y');
        void titleLogin.offsetWidth; // Este truco reinicia la animación
        titleLogin.classList.add('animate-rotate-y');
        titleLogin.innerHTML = 'Inicia Sesion&nbsp;';
    }

    // Cambia el estado de visibilidad
    isLoginFormVisible = !isLoginFormVisible;
});


const arrowHeader = document.getElementById('arrow_header');
const loginHeader = document.getElementById("login_header");
const registrarseHeader = document.getElementById("registrarse_header");
const titleLoginHeader = document.getElementById("title-login_header");


arrowHeader.addEventListener('click', () => {
    // Aplica la animación de rotación a la flecha
    arrowHeader.classList.toggle('rotate-180');
    
    // Programa la animación de rotación en los formularios
    if (isLoginFormVisible) {
        registrarseHeader.classList.add('animate-rotate-y');
        registrarseHeader.classList.remove('hidden');
        loginHeader.classList.remove('animate-rotate-y');
        loginHeader.classList.add('hidden');
        titleLoginHeader.classList.remove('animate-rotate-y');
        void titleLoginHeader.offsetWidth; // Este truco reinicia la animación
        titleLoginHeader.classList.add('animate-rotate-y');
        titleLoginHeader.innerHTML = 'Registrate&nbsp;';
    } else {
        loginHeader.classList.add('animate-rotate-y');
        loginHeader.classList.remove('hidden');
        registrarseHeader.classList.remove('animate-rotate-y');
        registrarseHeader.classList.add('hidden');
        titleLoginHeader.classList.remove('animate-rotate-y');
        void titleLoginHeader.offsetWidth; // Este truco reinicia la animación
        titleLoginHeader.classList.add('animate-rotate-y');
        titleLoginHeader.innerHTML = 'Inicia Sesion&nbsp;';
    }

    // Cambia el estado de visibilidad
    isLoginFormVisible = !isLoginFormVisible;
});


const userFormHeader = document.getElementById('user_form_header');
const userBottomHeader = document.getElementById('user-botton_header');
const main = document.querySelector('main');
const links = document.querySelectorAll('.flex.space-x-8 a');



userBottomHeader.addEventListener('click', () => {

    const scrollTop = window.scrollY || window.pageYOffset;
    
    // Establece la posición superior de user_form_header en relación al borde superior de la pantalla.
    userFormHeader.style.top = `${scrollTop}px`;


    userFormHeader.classList.toggle('hidden');
    userFormHeader.classList.toggle('animate-fade');
    document.body.classList.toggle("overflow-hidden");
    main.classList.toggle("opacity-25");
    
    links.forEach(link => {
        link.classList.toggle('pointer-events-none');
      });

});