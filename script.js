function mudarPara(idDaPagina) {
    const paginas = document.querySelectorAll('.pagina');
    const paginaAlvo = document.getElementById(idDaPagina);

    paginas.forEach(pagina => pagina.classList.remove('ativa'));

    paginaAlvo.classList.add('ativa');
}