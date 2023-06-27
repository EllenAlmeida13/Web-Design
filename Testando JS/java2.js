// Exemplo de código JavaScript
console.log("Olá, mundo!");

// Alterando o estilo do parágrafo
var paragrafo = document.querySelector("p");
paragrafo.style.color = "red";

//

// Obtendo o elemento pelo ID
let elemento = document.getElementById("meuElemento");

// Adicionando o evento de clique ao elemento
elemento.addEventListener("click", function() {
    alert("Clicou no elemento!");
});

//

// Obtendo o elemento pelo ID
let info = document.getElementById("mye");

// Alterando o conteúdo do elemento
info.innerHTML = "Não voltem KKKKKK";

//


//

document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
// Obtenção dos valores dos campos
let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let mensagem = document.getElementById("mensagem").value;
  
// Montagem do corpo do email
let corpoEmail = "Nome: " + nome + "\n";
corpoEmail += "Email: " + email + "\n";
corpoEmail += "Mensagem: " + mensagem;
  
// Simulação do envio do email
console.log(corpoEmail);
alert("Email enviado com sucesso!");
  
// Limpa os campos do formulário
document.getElementById("form-contato").reset();
});
  