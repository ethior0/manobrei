class gerenciarCategoria {
  constructor() {
    this.botaoAdicionar = document.querySelector(".adicionar");

    this.eventos();
  }

  eventos() {
    this.botaoAdicionar.addEventListener("click", (e) => {
      this.abrirModalAdicionar();
    });
  }

  async abrirModalAdicionar() {
    const { value: formValues } = await Swal.fire({
      title: "Adicionar categoria",
      html: `
        <input id="nome" class="swal2-input" placeholder="Nome"">
        <input id="descricao" class="swal2-input" placeholder="Descrição"">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Adicionar",
      cancelButtonText: "Cancelar",
      preConfirm: () => {
        const nome = document.getElementById("nome").value.trim();
        const descricao = document.getElementById("descricao").value.trim();

        if (!nome || !descricao) {
          Swal.showValidationMessage("Por favor, preencha todos os campos!");
          return false;
        }

        return { nome, descricao };
      },
    });

    if (formValues) {
      try {
        const resultado = await axios.post(`/dashboard/categorias`, formValues);

        Swal.fire({
          icon: "success",
          title: "Sucesso!",
          text: resultado.data?.message || "Categoria adicionada com sucesso.",
        }).then(() => location.reload());
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Erro ao adicionar categoria",
          text:
            err.resultado?.data?.message ||
            err.message ||
            "Ocorreu um erro inesperado.",
        });
      }
    }
  }

}

const adicionar = new gerenciarCategoria();