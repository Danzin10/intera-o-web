/* ===== Primeira Página ===== */
function saudar() {
    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem");
    const idadeContainer = document.getElementById("idade-container");

    mensagem.classList.remove("erro", "sucesso");

    if (nome) {
        mensagem.textContent = `Olá, ${nome}! Seja bem-vindo(a) à nossa Página de Conteúdos  🚀`;
        mensagem.classList.add("sucesso");

        idadeContainer.style.display = "block";
        idadeContainer.style.opacity = 0;
        idadeContainer.style.transition = "opacity 0.5s";
        setTimeout(() => idadeContainer.style.opacity = 1, 50);
    } else {
        mensagem.textContent = "Por favor, digite um nome!";
        mensagem.classList.add("erro");
        idadeContainer.style.display = "none";
    }
}

function verificarIdade(maior) {
    const mensagem = document.getElementById("mensagem");
    mensagem.classList.remove("erro", "sucesso");

    if (maior) {
        mostrarCodigoSecreto();
    } else {
        mensagem.textContent = "Sentimos muito, mas essa página não é pra você ❌";
        mensagem.classList.add("erro");
        mensagem.style.color = "#ff7f7f";
    }
}

function mostrarCodigoSecreto() {
    const container = document.querySelector(".container");
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Digite o código de acesso para continuar:";
    mensagem.classList.add("sucesso");

    const idadeContainer = document.getElementById("idade-container");
    idadeContainer.style.display = "none";

    const codigoInput = document.createElement("input");
    codigoInput.type = "text";
    codigoInput.id = "codigo";
    codigoInput.placeholder = "Digite o código de acesso aqui";
    codigoInput.style.marginTop = "10px";

    const codigoBtn = document.createElement("button");
    codigoBtn.textContent = "Enviar";
    codigoBtn.className = "btn";
    codigoBtn.onclick = verificarCodigo;

    container.appendChild(codigoInput);
    container.appendChild(codigoBtn);
}

function verificarCodigo() {
    const codigo = document.getElementById("codigo").value.trim();
    const mensagem = document.getElementById("mensagem");
    mensagem.classList.remove("erro", "sucesso");

    if (codigo === "777") {
        window.location.href = "pagina_teste.html";
    } else {
        if (!document.getElementById("erro-codigo")) {
            const erroDiv = document.createElement("div");
            erroDiv.id = "erro-codigo";
            erroDiv.className = "erro-codigo";
            erroDiv.innerHTML = `<span class="close-erro" onclick="fecharErro()">&times;</span>Access Denied`;
            document.body.appendChild(erroDiv);
        } else {
            document.getElementById("erro-codigo").style.display = "flex";
        }
    }
}

function fecharErro() {
    const erroDiv = document.getElementById("erro-codigo");
    if (erroDiv) erroDiv.style.display = "none";
}
function saudar() {
    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem");
    const idadeContainer = document.getElementById("idade-container");

    mensagem.classList.remove("erro", "sucesso");

    if (nome) {
        mensagem.textContent = `Olá, ${nome}! Seja bem-vindo(a) à nossa página de conteúdos 🚀`;
        mensagem.classList.add("sucesso");

        // SALVA NO LOCALSTORAGE
        localStorage.setItem("nomeUsuario", nome);

        idadeContainer.style.display = "block";
        idadeContainer.style.opacity = 0;
        idadeContainer.style.transition = "opacity 0.5s";
        setTimeout(() => idadeContainer.style.opacity = 1, 50);
    } else {
        mensagem.textContent = "Por favor, digite um nome!";
        mensagem.classList.add("erro");
        idadeContainer.style.display = "none";
    }
}

/* ===== Segunda Página ===== */
window.addEventListener("load", () => {
    // Pega o nome do usuário salvo na primeira página
    const nomeUsuario = localStorage.getItem("nomeUsuario");
    const mensagemBoasVindas = document.getElementById("mensagem-bem-vindo");

    if (nomeUsuario && mensagemBoasVindas) {
        mensagemBoasVindas.textContent = `Olá, ${nomeUsuario}! Confira os links abaixo:`;
    }
});

// Fecha o modal e exibe conteúdos
function fecharAviso() {
    const modal = document.getElementById("aviso");
    const conteudos = document.getElementById("conteudos");

    if(modal) modal.style.display = "none";

    if(conteudos){
        conteudos.style.display = "block";
        setTimeout(() => {
            conteudos.classList.add("show");
            carregarCursosECards(); // cria links e cards
        }, 50);
    }

    iniciarConfete();
    iniciarParticulas();
}

/* ===== Cursos e Cards ===== */
function carregarCursosECards() {
    const listaCursos = document.getElementById("lista-cursos");
    const containerCards = document.getElementById("container-cards");

    const cursosYoutube = [
        { nome: "Curso Python Guanabara", link: "https://youtu.be/S9uPNppGsGo?si=KACQB6C2WnQJnZOw" },
        { nome: "Curso JavaScript Moderno", link: "https://youtu.be/1-w1RfGIov4?si=y13W7i7YXRlywgB0" },
        { nome: "Curso HTML e CSS", link: "https://youtu.be/Ejkb_YpuHWs?si=q8R6bZoIcXvbgB4e" },
        { nome: "Curso React Iniciante", link: "https://youtu.be/FXqX7oof0I4?si=4DVyWL_HEGECNYoh" },
        { nome: "Curso Node.js Backend", link: "https://youtu.be/hHM-hr9q4mo?si=gHSFrhVnEnd5TJ5B" },
        { nome: "Curso Python Iniciante", link: "https://youtu.be/S9uPNppGsGo?si=Y6uithvV3mPiP103" },
        { nome: "Curso JavaScript Elogiado", link: "https://youtu.be/Ptbk2af68e8?si=mVqBSJMXldVBlKA9" },
        { nome: "Curso HTML/CSS Avançado", link: "https://youtu.be/pXAGoP2G2vE?si=0PNEO7fekfQWkZ_d" },
        { nome: "Curso React Avançado", link: "https://youtu.be/n23-oo_93RM?si=LxWWe55r1G7kd1pa" }
    ];

    const curiosidades = [
        "O JavaScript foi criado em apenas 10 dias!",
        "Python é usado em IA, web e ciência de dados.",
        "HTML significa HyperText Markup Language.",
        "React foi criado pelo Facebook em 2013.",
        "Git é essencial para versionamento de código.",
        "O primeiro computador eletrônico foi criado em 1943 e ocupava uma sala inteira!",
        "Python é uma das linguagens mais usadas em IA e machine learning.",
        "O Git foi criado por Linus Torvalds em 2005 para gerenciar o Linux.",
        "HTML5 introduziu elementos semânticos como <header>, <footer> e <article>.",
        "O primeiro bug de computador registrado foi uma mariposa presa em um relé.",
        "Existem linguagens de programação que só existem como piadas, como Brainfuck e Whitespace."
    ];

    if(listaCursos){
        listaCursos.innerHTML = "";
        cursosYoutube.forEach(curso => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = curso.link;
            a.target = "_blank";
            a.textContent = curso.nome;
            li.appendChild(a);
            listaCursos.appendChild(li);
        });
    }

    if(containerCards){
        containerCards.innerHTML = "";
        curiosidades.forEach(texto => {
            const card = document.createElement("div");
            card.className = "card-curiosidade";
            card.innerHTML = `<p>${texto}</p>`;
            containerCards.appendChild(card);
        });

        // Animação fade-in em cascata
        const cards = containerCards.querySelectorAll(".card-curiosidade");
        cards.forEach((card, i) => setTimeout(() => card.classList.add("visible"), i * 150));
    }
}
