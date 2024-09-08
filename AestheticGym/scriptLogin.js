const botaoLogin = document.getElementById("botaoLogin");
const storageLembrar = localStorage.getItem("lembrar");
const formEmail = document.getElementById("email");
const lembrar = document.getElementById("lembrar");

botaoLogin.addEventListener("click", function (event) {
  event.preventDefault();
  login();
});

if (storageLembrar != -1) {
  emailGuardado = localStorage.getItem("email" + storageLembrar);
  email = emailGuardado;
  formEmail.value = email;
  lembrar.checked = true;
}

const login = () => {
  let email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  let countId = 1;
  let emailEncontrado = localStorage.getItem("email" + countId);
  while (emailEncontrado) {
    if (emailEncontrado == email) break;
    countId++;
    emailEncontrado = localStorage.getItem("email" + countId);
  }

  if (senha == localStorage.getItem("senha" + countId)) {
    if (lembrar.checked) {
      localStorage.setItem("lembrar",countId);
    } else localStorage.setItem("lembrar",-1);

    alert("login feito com sucesso");
    window.location.href = "home.html";
  } else {
    alert("usuário e/ou senha inválidos");
  }
};

const trocarVisibilidade = () => {
  const div = document.getElementById("visibilidadeSenha");
  const input = document.getElementById("senha");
  if (div.classList.contains("mostrarSenha")) {
    div.classList.remove("mostrarSenha");
    div.classList.add("esconderSenha");
    input.type = "text";
  } else {
    div.classList.remove("esconderSenha");
    div.classList.add("mostrarSenha");
    input.type = "password";
  }
};
