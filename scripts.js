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