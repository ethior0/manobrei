class LoginAdmin {
  constructor() {
    this.formularioLogin = document.querySelector(".formulario-login");
    this.campoEmail = document.getElementById("email");
    this.campoSenha = document.getElementById("senha");
    this.btnCadastrar = document.querySelector(".btn");

    this.eventos();
  }

  eventos() {
    this.formularioLogin.addEventListener("submit", (e) => {
      this.logar(e);
    });
  }

  logar(e) {
    e.preventDefault();

    const email = this.campoEmail.value;
    const senha = this.campoSenha.value;

    if(email === "" || senha === "") {
      Swal.fire("Erro", "Por favor, preencha os campos corretamente!", "error");
      return;
    }

    axios.post("/admin", {
      email: email,
      senha: senha,
    })
    .then(async (res) => {
      await Swal.fire({
        title: "Login de Admin realizado!",
        text: "Você entrou com sucesso!",
        confirmButtonText: "Entendido",
        icon: "success"
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/dashboard";
        } 
      });
      console.log(res);
    })
    .catch((err) => {
      Swal.fire("Erro", "Algum erro aconteceu", "error");
      console.log(err)
      return;
    });
  }

  limparCampos() {
    this.campoEmail.value = "";
    this.campoSenha.value = "";
  }
}

const login = new LoginAdmin();