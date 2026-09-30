const botaoVoltar = document.querySelector('.botaoVoltar');
const navbar = document.querySelector('nav');

const historicoDePaginas = ['inicio']; 

function mudarPara(evento, idDaPagina) {
    const paginas = document.querySelectorAll('.pagina');
    const paginaAlvo = document.getElementById(idDaPagina);

    const paginaAtual = document.querySelector('.pagina.ativa');
    const idPaginaAtual = paginaAtual ? paginaAtual.id : 'inicio';

    if (idPaginaAtual !== idDaPagina && historicoDePaginas[historicoDePaginas.length - 1] !== idDaPagina) {
        historicoDePaginas.push(idPaginaAtual);
    }

    paginas.forEach(pagina => pagina.classList.remove('ativa'));
    paginaAlvo.classList.add('ativa');

    if (historicoDePaginas.length <= 1 && idDaPagina === 'inicio') {
        botaoVoltar.style.display = "none";
        navbar.style.display = "block";
    } else {
        botaoVoltar.classList.add('botao');
        botaoVoltar.style.display = "block";
        navbar.style.display = "none";
    }
}

botaoVoltar.addEventListener('click', function(evento) {
    if (historicoDePaginas.length > 0) {
        const ultimaPagina = historicoDePaginas.pop(); 
        
        mudarPara(evento, ultimaPagina);
    }
});
