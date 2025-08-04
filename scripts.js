function abrirImagem(img) {
    const modal = document.getElementById("modal"); 
    const imgAmpliada = document.getElementById("img-ampliada");
    modal.style.display = "block";
    imgAmpliada.src = img.src;
}

function fecharImagem() {
    document.getElementById("modal").style.display = "none";
}