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
        window.location.href = "pagina_teste.html";
    } else {
        mensagem.textContent = "Sentimos muito, mas essa página não é pra você ❌";
        mensagem.classList.add("erro");
        mensagem.style.color = "#ff7f7f";
    }
}

/* ===== Segunda Página ===== */
window.onload = function() {
    const modal = document.getElementById("aviso");
    if(modal) modal.classList.add("show");
};

function fecharAviso() {
    const modal = document.getElementById("aviso");
    const conteudos = document.getElementById("conteudos");

    if(modal) modal.classList.remove("show");

    setTimeout(() => {
        if(conteudos) {
            conteudos.style.display = "block";
            setTimeout(() => conteudos.classList.add("show"), 50);
        }
        iniciarConfete();
        iniciarParticulas();
    }, 400);
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
