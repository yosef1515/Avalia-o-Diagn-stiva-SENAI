const botaoHome = document.querySelector('.botaoHome');
const navbar = document.querySelector('nav');

function mudarPara(idDaPagina) {
    const paginas = document.querySelectorAll('.pagina');
    const paginaAlvo = document.getElementById(idDaPagina);

    paginas.forEach(pagina => pagina.classList.remove('ativa'));
    paginaAlvo.classList.add('ativa');

    if (idDaPagina === 'inicio') {
        botaoHome.style.display = "none";
        navbar.style.display = "block";
    } else if (idDaPagina === 'questoes' || idDaPagina === 'relatorio') {
        botaoHome.classList.add('botao');
        botaoHome.style.display = "block";
        navbar.style.display = "none";
    }
}

botaoHome.addEventListener('click', function() {
    mudarPara('inicio');
});

const questoes = [
  {
    id: 1,
    enunciado: "Quanto é 125 + 348 - 150?",
    alternativas: [
      { letra: "A", texto: "323" },
      { letra: "B", texto: "313" },
      { letra: "C", texto: "333" },
      { letra: "D", texto: "223" }
    ],
    respostaCorreta: "A"
  },
  {
    id: 2,
    enunciado: "Qual é o resultado da soma 1/4 + 3/8?",
    alternativas: [
      { letra: "A", texto: "4/12" },
      { letra: "B", texto: "5/8" },
      { letra: "C", texto: "1/2" },
      { letra: "D", texto: "4/8" }
    ],
    respostaCorreta: "B"
  },
  {
    id: 3,
    enunciado: "João comprou 3 cadernos a R$ 4,50 cada um e pagou com uma nota de R$ 20,00. Quanto ele recebeu de troco?",
    alternativas: [
      { letra: "A", texto: "R$ 6,50" },
      { letra: "B", texto: "R$ 4,50" },
      { letra: "C", texto: "R$ 5,50" },
      { letra: "D", texto: "R$ 15,50" }
    ],
    respostaCorreta: "C"
  },
  {
    id: 4,
    enunciado: "Em uma turma de 40 alunos, 15% faltaram no dia da prova. Quantos alunos estiveram ausentes?",
    alternativas: [
      { letra: "A", texto: "4 alunos" },
      { letra: "B", texto: "8 alunos" },
      { letra: "C", texto: "6 alunos" },
      { letra: "D", texto: "5 alunos" }
    ],
    respostaCorreta: "C"
  },
  {
    id: 5,
    enunciado: "Qual dos seguintes números é o maior?",
    alternativas: [
      { letra: "A", texto: "3/5" },
      { letra: "B", texto: "0,62" },
      { letra: "C", texto: "58%" },
      { letra: "D", texto: "7/12" }
    ],
    respostaCorreta: "B"
  },
  {
    id: 6,
    enunciado: "Um casaco que custava R$ 200,00 suffered um desconto de 20% e, posteriormente, sobre o novo valor, um acréscimo de 10%. Qual é o preço final do casaco?",
    alternativas: [
      { letra: "A", texto: "R$ 180,00" },
      { letra: "B", texto: "R$ 160,00" },
      { letra: "C", texto: "R$ 190,00" },
      { letra: "D", texto: "R$ 176,00" }
    ],
    respostaCorreta: "D"
  },
  {
    id: 7,
    enunciado: "Observe a sequência numérica: 3, 7, 11, 15, ... Qual é o próximo termo da sequência?",
    alternativas: [
      { letra: "A", texto: "18" },
      { letra: "B", texto: "19" },
      { letra: "C", texto: "20" },
      { letra: "D", texto: "21" }
    ],
    respostaCorreta: "B"
  },
  {
    id: 8,
    enunciado: "Se x = 4 e y = -3, qual é o valor da expressão algébrica 2x² - 3y?",
    alternativas: [
      { letra: "A", texto: "25" },
      { letra: "B", texto: "31" },
      { letra: "C", texto: "41" },
      { letra: "D", texto: "7" }
    ],
    respostaCorreta: "C"
  },
  {
    id: 9,
    enunciado: "Qual é o valor de x na equação 3(x - 2) + 5 = 2x + 9?",
    alternativas: [
      { letra: "A", texto: "8" },
      { letra: "B", texto: "10" },
      { letra: "C", texto: "7" },
      { letra: "D", texto: "12" }
    ],
    respostaCorreta: "B"
  },
  {
    id: 10,
    enunciado: "Um jardim retangular tem 8 metros de comprimento e 5 metros de largura. Qual é o perímetro desse jardim?",
    alternativas: [
      { letra: "A", texto: "40 metros" },
      { letra: "B", texto: "13 metros" },
      { letra: "C", texto: "26 metros" },
      { letra: "D", texto: "28 metros" }
    ],
    respostaCorreta: "C"
  },
  {
    id: 11,
    enunciado: "Qual é a área de um triângulo cuja base mede 10 cm e a altura correspondente mede 6 cm?",
    alternativas: [
      { letra: "A", texto: "60 cm²" },
      { letra: "B", texto: "30 cm²" },
      { letra: "C", texto: "16 cm²" },
      { letra: "D", texto: "12 cm²" }
    ],
    respostaCorreta: "B"
  },
  {
    id: 12,
    enunciado: "Quantos metros equivalem a 3,5 quilômetros somados a 450 metros?",
    alternativas: [
      { letra: "A", texto: "3545 metros" },
      { letra: "B", texto: "4000 metros" },
      { letra: "C", texto: "3750 metros" },
      { letra: "D", texto: "3950 metros" }
    ],
    respostaCorreta: "D"
  },
  {
    id: 13,
    enunciado: "A soma dos ângulos internos de um polígono regular é 720°. Qual é o nome desse polígono?",
    alternativas: [
      { letra: "A", texto: "Pentágono" },
      { letra: "B", texto: "Heptágono" },
      { letra: "C", texto: "Octógono" },
      { letra: "D", texto: "Hexágono" }
    ],
    notes: "D"
  },
  {
    id: 14,
    enunciado: "Em uma pesquisa sobre o sabor de sorvete favorito de 50 crianças, 20 escolheram chocolate, 15 morango, 10 creme e 5 flocos. Qual sabor foi o segundo mais votado?",
    alternativas: [
      { letra: "A", texto: "Chocolate" },
      { letra: "B", texto: "Morango" },
      { letra: "C", texto: "Creme" },
      { letra: "D", texto: "Flocos" }
    ],
    respostaCorreta: "B"
  },
  {
    id: 15,
    enunciado: "Uma urna contém 4 bolas vermelhas, 3 azuis e 5 verdes. Retirando-se uma bola ao acaso, qual é a probabilidade de ela NÃO ser azul?",
    alternativas: [
      { letra: "A", texto: "3/12" },
      { letra: "B", texto: "9/12" },
      { letra: "C", texto: "4/12" },
      { letra: "D", texto: "5/12" }
    ],
    respostaCorreta: "B"
  }
];

const botaoIniciar = document.getElementById('comecar');
const botaoQuestao = document.getElementById('proximaQuestao');
const divDoEnunciado = document.getElementById('enunciado');
const divDasAlternativas = document.getElementById('alternativas');

botaoIniciar.addEventListener('click', function() {
    for (let i = 1; i <= 15; i++) {
            botaoQuestao.addEventListener('click', function() {
                divDoEnunciado.innerHTML = `
                <h1 class="subtitulo">Questão ${i}</h1>
                `
        });
    }
});