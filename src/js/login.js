import { users } from "./users.js";

document.getElementById("entrar").addEventListener("click", auth);

function auth() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;

  for (let i = 0; i < users.length; i++) {
    console.log(users[i]);

    if (users[i].email == email && users[i].password == password) {
      window.location.href = "../html/meus-dados.html";
    } else {
      window.alert("Acesso negado!");
    }
  }
}
