var checkTutor = document.getElementById("check-tutor");
var checkOng = document.getElementById("check-ong");
var secaoTutor = document.getElementById("secao-tutor");
var secaoOng = document.getElementById("secao-ong");

checkTutor.checked = true;
secaoTutor.classList.remove("hidden");
secaoOng.classList.add("hidden");

checkTutor.addEventListener("change", function () {
  if (checkTutor.checked) {
    checkOng.checked = false;
    secaoTutor.classList.remove("hidden");
    secaoOng.classList.add("hidden");
  } else {
    secaoTutor.classList.add("hidden");
  }
});

checkOng.addEventListener("change", function () {
  if (checkOng.checked) {
    checkTutor.checked = false;
    secaoOng.classList.remove("hidden");
    secaoTutor.classList.add("hidden");
  } else {
    secaoOng.classList.add("hidden");
  }
});
