const btnLogout = document.getElementById("btn-logout");

btnLogout.addEventListener("click", function(e) {
  e.preventDefault();

  Swal.fire({
    title: "Tem certeza que deseja sair?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Sair",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = btnLogout.href;
    }
  });
});