const form = document.getElementsByClassName("form")[0];
let mensagem = false;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!mensagem) {
    const usuario = {
      nome: document.getElementById("nome").value,
      dataNascimento: document.getElementById("data").value,
      email: document.getElementById("email").value,
      senha: document.getElementById("senha").value,
    };

    const { nome, email, senha } = usuario; //destructuring

    // multiplos cadastros
    let idAtual = localStorage.getItem("idAtual");
    if (idAtual) {
      idAtual++;
      localStorage.setItem("idAtual", idAtual);
    } else {
      localStorage.setItem("idAtual", 1);
      idAtual = 1;
    }

    const strNome = "nome" + idAtual;
    const strEmail = "email" + idAtual;
    const strSenha = "senha" + idAtual;

    localStorage.setItem(strNome, nome);
    localStorage.setItem(strEmail, email);
    localStorage.setItem(strSenha, senha);
    localStorage.setItem("lembrar", -1);

    const h2 = document.getElementById("mensagemConfirmacao");
    h2.innerHTML += "Cadastro realizado com sucesso!";
    mensagem = true;
  }

  setTimeout(redirect, 500);
});

const redirect = () => {
  window.location.href = "login.html";
};
