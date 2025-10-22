AOS.init();

function abrirImagem(img) {
    const modal = document.getElementById("modal"); 
    const imgAmpliada = document.getElementById("img-ampliada");
    modal.style.display = "block";
    imgAmpliada.src = img.src;
}

function fecharImagem() {
    document.getElementById("modal").style.display = "none";
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

///////////////////////////////////////////

const menuList = document.getElementById("menu-list")
    menuList.style.maxHeight = "0px"

    function showMenu(){
        if(menuList.style.maxHeight == "0px"){
            menuList.style.maxHeight = "200px"
       } else{
            menuList.style.maxHeight = "0px"
       }
    }

///////////////////////////////////////////

let slideIndex = 0;
    const slidesWrapper = document.getElementById("slides");
    const dots = document.getElementsByClassName("dot");

    function updateSlidePosition() {
      slidesWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }
      dots[slideIndex].classList.add("active");
    }

    function moveSlide(n) {
      slideIndex += n;
      if (slideIndex > 1) slideIndex = 0;
      if (slideIndex < 0) slideIndex = 1;
      updateSlidePosition();
    }

    function currentSlide(n) {
      slideIndex = n;
      updateSlidePosition();
    }

    // inicializa
    updateSlidePosition();