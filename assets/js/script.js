const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});



const boxes = document.querySelectorAll('.services-infos .box h2');
  let animado = false;

  function animarNumero(element) {
    const valorFinal = parseInt(element.textContent.replace('+',''));
    let atual = 0;
    const duracao = 2000; // duração em ms
    const passo = valorFinal / (duracao / 50);

    const intervalo = setInterval(() => {
      atual += passo;
      if(atual >= valorFinal){
        element.textContent = `+${valorFinal}`;
        clearInterval(intervalo);
      } else {
        element.textContent = `+${Math.floor(atual)}`;
      }
    }, 50);
  }

  function verificarScroll() {
    const info = document.querySelector('.services-infos');
    const topo = info.getBoundingClientRect().top;
    const alturaJanela = window.innerHeight;

    if(topo < alturaJanela && !animado){
      boxes.forEach(box => animarNumero(box));
      animado = true;
      window.removeEventListener('scroll', verificarScroll);
    }
  }

  window.addEventListener('scroll', verificarScroll);