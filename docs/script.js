const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


// Muestra error mensaje
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Muestra input success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Chequear si el mail esta bien escrito
function isValidEmail(email) {
  const reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/

  return reg.test(String(email).toLowerCase())

}



// Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value === "") {
    showError(username, "Ingrese por favor nombre de usuario")
  } else {
    showSuccess(username)
  }

  if (email.value === "") {
    showError(email, "Ingrese por favor su Email")
  } else if(!isValidEmail(email.value)){
    showError(email, "Su email no es válido")
  }
  else {
    showSuccess(email)
  }

  if (password.value === "") {
    showError(password, "Ingrese por favor una contraseña")
  } else {
    showSuccess(password)
  }

  if (password2.value === "") {
    showError(password2, "Ingrese por favor una contraseña")
  } else {
    showSuccess(password2)
  }
})