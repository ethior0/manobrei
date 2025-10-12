class CadastroUsuario {
  constructor() {
    this.formularioCadastro = document.querySelector(".formulario-cadastro");
    this.campoNome = document.getElementById("nome");
    this.campoEmail = document.getElementById("email");
    this.campoSenha = document.getElementById("senha");
    this.btnCadastrar = document.querySelector(".btn");

    this.eventos();
  }

  eventos() {
    this.formularioCadastro.addEventListener("submit", (e) => {
      this.cadastrar(e);
    });
  }

  cadastrar(e) {
    e.preventDefault();

    const nome = this.campoNome.value;
    const email = this.campoEmail.value;
    const senha = this.campoSenha.value;
    this.limparCampos();

    if(nome === "" || email === "" || senha === "") {
      Swal.fire("Erro", "Por favor, preencha os campos corretamente!", "error");
      return;
    }

    axios.post("/cadastro", {
      nome: nome,
      email: email,
      senha: senha,
    })
    .then(async (res) => {
      await Swal.fire({
        title: "Cadastro realizado!",
        text: "Sua conta foi cadastrada com sucesso!",
        confirmButtonText: "Entendido",
        icon: "success"
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/";
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
    this.campoNome.value = "";
    this.campoEmail.value = "";
    this.campoSenha.value = "";
  }
}

const cadastrar = new CadastroUsuario();