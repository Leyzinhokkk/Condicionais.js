let idade = Number(prompt("Digite sua idade:"));
let status = prompt("Digite seu status (registrado ou não registrado):").toLowerCase();

let maioridade = idade >= 18 ? true : false;

switch (status) {
  case "registrado":
    console.log("Bem-vindo!");
    break;
  case "não registrado":
    console.log("Por favor, complete seu registro.");
    break;
  default:
    console.log("Status desconhecido.");
    break;
}

if (maioridade && status === "registrado") {
  console.log("Acesso completo.");
} else {
  console.log("Acesso limitado.");
}
