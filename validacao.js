const formulario = document.getElementById("meuFormulario");
const mensagemErro = document.getElementById("erro");


formulario.addEventListener("submit", function(event) {
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;

    let erros = [];

    
    if (nome.trim() === "") {
        erros.push("O nome não pode estar vazio.");
    }
    
    if (!email.includes("@")) {
        erros.push("O email deve conter '@'.");
    }
    
    if (idade <= 0) {
        erros.push("A idade deve ser maior que 0.");
    }

    
    if (erros.length > 0) {
        
        event.preventDefault();
        
       
        mensagemErro.textContent = erros.join(" "); 
    } else {
        
        mensagemErro.textContent = ""; 
        alert("Formulário enviado com sucesso!");
    }
});