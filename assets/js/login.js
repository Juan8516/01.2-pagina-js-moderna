let loginForm = document.querySelector(".aside__login");
let inputName = document.querySelector("#name");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#pass");
let asideData = document.querySelector(".aside__data");
let loginName = document.querySelector(".data__name");
let btnLogout = document.querySelector(".data__logout");

loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    //Recoger los valores de formulario
    let name = inputName.value;
    let email = inputEmail.value;
    let password = inputPassword.value;

    //Comprobar que todos los campos estan diligenciados 
    let user = {};

    if(name && email && password) {

        //Guardar los datos en un objeto
        user = {name, email, password};

        //Guardar en el localstore
        localStorage.setItem("user", JSON.stringify(user));

        //Vaciar el formulario
        loginForm.reset();

        //Mostrar el usuario
        getUser();
    }
});

let getUser = () => {
    let myUser = localStorage.getItem("user");

    if(myUser) {
        let identity = JSON.parse(myUser);

        loginName.innerHTML = identity.name;
        loginForm.classList.add("aside__login--hide");
        asideData.classList.remove("aside__data--hide");
    }
};

