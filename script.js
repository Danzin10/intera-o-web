/* ===== Primeira Página ===== */
function saudar() {
    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem");
    const idadeContainer = document.getElementById("idade-container");

    mensagem.classList.remove("erro", "sucesso");

    if (nome) {
        mensagem.textContent = `Olá, ${nome}! Seja bem-vindo(a) à página de teste 🚀`;
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
        // Mostrar input de código secreto
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

    // Esconde os botões anteriores
    const idadeContainer = document.getElementById("idade-container");
    idadeContainer.style.display = "none";

    // Cria input e botão dinamicamente
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

    // Remove mensagens antigas
    mensagem.classList.remove("erro", "sucesso");

    if (codigo === "777") {
        window.location.href = "pagina_teste.html";
    } else {
        // Cria balão de erro futurista
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

/* ===== Segunda Página Integrada ===== */

window.onload = function() {
    const modal = document.getElementById("aviso");
    if(modal) modal.classList.add("show");
};

// Fecha o modal e mostra conteúdos com efeitos
function fecharAviso() {
    const modal = document.getElementById("aviso");
    const conteudos = document.getElementById("conteudos");

    if(modal) modal.style.display = "none"; // agora desaparece de vez

    if(conteudos) {
        conteudos.style.display = "block";
        setTimeout(() => conteudos.classList.add("show"), 50);
    }

    iniciarConfete();
    iniciarParticulas();
}

/* ===== Confete ===== */
function iniciarConfete() {
    const canvas = document.getElementById("confete");
    if(!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confetes = [];
    for(let i=0;i<100;i++){
        confetes.push({
            x: Math.random()*canvas.width,
            y: Math.random()*canvas.height - canvas.height,
            r: Math.random()*6+4,
            d: Math.random()*10+5,
            color: `hsl(${Math.random()*360},100%,50%)`,
            tilt: Math.random()*10-5
        });
    }

    function draw() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        confetes.forEach(c=>{
            ctx.beginPath();
            ctx.fillStyle = c.color;
            ctx.fillRect(c.x+c.tilt, c.y, c.r, c.r*0.4);
            c.y += c.d;
            c.tilt += Math.random()*0.5-0.25;
            if(c.y>canvas.height){
                c.y=-10;
                c.x=Math.random()*canvas.width;
            }
        });
        requestAnimationFrame(draw);
    }
    draw();
    window.addEventListener("resize",()=>{canvas.width=window.innerWidth; canvas.height=window.innerHeight;});
}

/* ===== Partículas leves contínuas ===== */
function iniciarParticulas() {
    const canvas = document.getElementById("particulas");
    if(!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particulas = [];
    for(let i=0;i<50;i++){
        particulas.push({
            x: Math.random()*canvas.width,
            y: Math.random()*canvas.height,
            r: Math.random()*3+1,
            d: Math.random()*2+0.5,
            color: "rgba(255,255,255,0.2)"
        });
    }

    function draw() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        particulas.forEach(p=>{
            ctx.beginPath();
            ctx.fillStyle = p.color;
            ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
            ctx.fill();
            p.y += p.d;
            if(p.y>canvas.height){ p.y=-10; p.x=Math.random()*canvas.width; }
        });
        requestAnimationFrame(draw);
    }
    draw();
    window.addEventListener("resize",()=>{canvas.width=window.innerWidth; canvas.height=window.innerHeight;});
}

/* ===== Cursos e Cards ===== */
const cursosYoutube = [
    { nome: "Curso Python Guanabara", link: "https://youtu.be/S9uPNppGsGo?si=KACQB6C2WnQJnZOw" },
    { nome: "Curso JavaScript Moderno", link: "https://youtu.be/1-w1RfGIov4?si=y13W7i7YXRlywgB0" },
    { nome: "Curso HTML e CSS", link: "https://youtu.be/Ejkb_YpuHWs?si=q8R6bZoIcXvbgB4e" },
    { nome: "Curso React Iniciante", link: "https://youtu.be/FXqX7oof0I4?si=4DVyWL_HEGECNYoh" },
    { nome: "Curso Node.js Backend", link: "https://youtu.be/hHM-hr9q4mo?si=gHSFrhVnEnd5TJ5B" },
    { nome: "Curso Python Iniciante", link: "https://youtu.be/S9uPNppGsGo?si=Y6uithvV3mPiP103" },
    { nome: "Curso JavaScript Elogiado", link: "https://youtu.be/Ptbk2af68e8?si=mVqBSJMXldVBlKA9" },
    { nome: "Curso HTML/CSS Avançado", link: "https://youtu.be/pXAGoP2G2vE?si=0PNEO7fekfQWkZ_d" },
    { nome: "Curso React Avançado", link: "https://youtu.be/n23-oo_93RM?si=LxWWe55r1G7kd1pa" },
];

const curiosidades = [
    "O JavaScript foi criado em apenas 10 dias!",
    "Python é usado em IA, web e ciência de dados.",
    "HTML significa HyperText Markup Language.",
    "React foi criado pelo Facebook em 2013.",
    "Git é essencial para versionamento de código."
];

function carregarCursosECards() {
    const listaCursos = document.getElementById("lista-cursos");
    const containerCards = document.getElementById("container-cards");

    if(listaCursos){
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
        curiosidades.forEach(texto => {
            const card = document.createElement("div");
            card.className = "card";
            card.textContent = texto;
            containerCards.appendChild(card);
        });
    }
}

// chama função ao carregar links
window.addEventListener("load", carregarCursosECards);
