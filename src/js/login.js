import { users } from "./users.js";

document.getElementById("entrar").addEventListener("click", auth);

function auth() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  let autorizado = false;

  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email && users[i].password == password) {
      autorizado = true;
    }
  }

  if (autorizado) {
    window.location.href = "../html/meus-dados.html";
  } else {
    window.alert("Email ou senha incorretos!");
  }
}
