function abrirImagem(img) {
    const modal = document.getElementById("modal"); 
    const imgAmpliada = document.getElementById("img-ampliada");
    modal.style.display = "block";
    imgAmpliada.src = img.src;
}

function fecharImagem() {
    document.getElementById("modal").style.display = "none";
}


function trocarImagem(imagem, novoSrc) {
    const srcAtual = imagem.src;
    const nomeNovo = novoSrc.split('/').pop();
    const nomeOriginal = 'img-cobertura1.jpg';

    if (srcAtual.includes(nomeNovo)) {
        imagem.src = './assets/' + nomeOriginal;
        } else {
            imagem.src = novoSrc;
        }   
}

////////

const titulo = document.querySelector('.titulo');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

observer.observe(titulo);


////////////

const btnEnviar = document.getElementById('btn-enviar');
const form = document.getElementById('form-contato');

form.addEventListener('submit', (e) => {
  // muda o botão imediatamente
  btnEnviar.innerText = 'Mensagem enviada!';
  btnEnviar.disabled = true;

  // o form vai abrir o Formspree normalmente em nova aba por causa do target="_blank"
  // não usamos preventDefault, para garantir POST correto
});



//https://formspree.io/f/mnnbrrkg