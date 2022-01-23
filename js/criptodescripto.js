// $(window).on("load", function () {
//   $("#modal-sobre-o-programa").modal("show");
// });

function criptografar() {}

document.getElementById("cripto").addEventListener("click", function cripto() {
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
      mensagemAuxiliar[i] = "ober";
    } else if (mensagemAuxiliar[i] === "u") {
      mensagemAuxiliar[i] = "ufat";
    }
  }

  
  let result = document.getElementById("result").innerHTML = mensagemAuxiliar.join('');


  // alert(mensagemAuxiliar.join(""));
});

document.getElementById("btn-copiar").addEventListener("click", function copiar() {
  let hh = document.getElementById("result").innerHTML;
  navigator.clipboard.writeText(hh);
});


document.getElementById("descripto").addEventListener("click", function () {
  let mensagem = document.getElementById("mensagem").value;
  let mensagemAuxiliar = mensagem.split("");

  

  if (
    mensagem.includes("enter") ||
    mensagem.includes("imes") ||
    mensagem.includes("ai") ||
    mensagem.includes("ober") ||
    mensagem.includes("ufat")
  ) {
    for (let i = 0; i < mensagemAuxiliar.length; i++) {
      if (mensagemAuxiliar[i] === "e") {
        for (let j = 1; j < 5; j++) {
          mensagemAuxiliar[i+1] = ''
          i++;
        }
      } else if (mensagemAuxiliar[i] === "i") {
        for (let j = 1; j < 4; j++) {
          mensagemAuxiliar[i + 1] = '';
          i++;
        }
      } else if (mensagemAuxiliar[i] === "a") {
        for (let j = 1; j < 2; j++) {
          mensagemAuxiliar[i + 1] = '';
          i++;
        }
      } else if (mensagemAuxiliar[i] === "o") {
        for (let j = 1; j < 4; j++) {
          mensagemAuxiliar[i + 1] = '';
          i++;
        }
      } else if (mensagemAuxiliar[i] === "u") {
        for (let j = 1; j < 4; j++) {
          mensagemAuxiliar[i + 1] = '';
          i++;
        }
      }
    }
    let result = (document.getElementById("result").innerHTML = mensagemAuxiliar.join(""));
  } else {
    alert("Não contém criptografia no seu texto");
    return;
  }
});
