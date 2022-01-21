$(window).on("load", function () {
  $("#modal-sobre-o-programa").modal("show");
});

function criptografar() {

  
}

document.getElementById("cripto").addEventListener("click", function () {
    let mensagem = document.getElementById("mensagem").value;
    let mensagemAuxiliar = mensagem.split("");

    for (let i = 0; i < mensagemAuxiliar.length; i++) {
      if (mensagemAuxiliar[i] === "e") {
        mensagemAuxiliar[i] = "enter";
      } else if (mensagemAuxiliar[i] === "i") {
        mensagemAuxiliar[i] = "imes";
      } else if (mensagemAuxiliar[i] === "a") {
        mensagemAuxiliar[i] = "ai";
      } else if (mensagemAuxiliar[i] === "o") {
        mensagemAuxiliar[i] = "obter";
      } else if (mensagemAuxiliar[i] === "u") {
        mensagemAuxiliar[i] = "ufat";
      }
    }

    alert(mensagemAuxiliar.join(''));
});

document.getElementById("descripto").addEventListener("click", function () {
    let mensagem = document.getElementById("mensagem").value;
    let mensagemAuxiliar = mensagem.split("");


    alert(mensagemAuxiliar.join(''));
});
