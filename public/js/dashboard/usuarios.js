class GerenciarUsuario {
  constructor() {
    this.formularioEditar = document.querySelectorAll(".form-editar");
    this.formularioExcluir = document.querySelectorAll(".form-excluir");

    this.eventos();
  }

  eventos() {
    this.formularioEditar.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const idUsuario = form.dataset.id;
        const nomeUsuario = form.dataset.nome;
        const emailUsuario = form.dataset.email;

        console.log(idUsuario, nomeUsuario, emailUsuario);
        this.abrirModalEditar(idUsuario, nomeUsuario, emailUsuario);
      });
    });

    this.formularioExcluir.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault(e);

        const idUsuario = form.dataset.id;
        this.abrirModalExcluir(idUsuario);
      });
    });
  }

  async abrirModalEditar(id, nome, email) {
    const { value: formValues } = await Swal.fire({
      title: "Editar usuário",
      html: `
        <input id="nome" class="swal2-input" placeholder="Nome" value="${nome}">
        <input id="email" type="email" class="swal2-input" placeholder="Email" value="${email}">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Salvar",
      cancelButtonText: "Cancelar",
      preConfirm: () => {
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();

        if (!nome || !email) {
          Swal.showValidationMessage("Por favor, preencha todos os campos!");
          return false;
        }

        return { nome, email };
      },
    });

    if (formValues) {
      try {
        const resultado = await axios.patch(`/dashboard/usuarios/${id}`, formValues);

        Swal.fire({
          icon: "success",
          title: "Sucesso!",
          text: resultado.data?.message || "Usuário atualizado com sucesso.",
        }).then(() => location.reload());
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Erro ao atualizar usuário",
          text:
            err.resultado?.data?.message ||
            err.message ||
            "Ocorreu um erro inesperado.",
        });
      }
    }

  }

  async abrirModalExcluir(id) {
    const resultado = await Swal.fire({
      title: "Você tem certeza?",
      text: "Você não será capaz de reverter isso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Deletar",
    });

    if (resultado.isConfirmed) {
      try {
        const response = await axios.delete(`/dashboard/usuarios/${id}`);

        Swal.fire({
          icon: "success",
          title: "Deletado!",
          text: response.data?.message || "Usuário removido com sucesso.",
        }).then(() => location.reload());
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Erro ao deletar usuário",
          text:
            err.response?.data?.message ||
            err.message ||
            "Ocorreu um erro inesperado.",
        });
      }
    }

  }
}

const gerenciar = new GerenciarUsuario();
