const carta = document.getElementById('carta');
const conteudo = document.getElementById('conteudo');
const imagemCarta = document.getElementById('imagem-carta');

// Transição de carregamento
window.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 1;
});

imagemCarta.addEventListener('click', () => {
    carta.style.opacity = 0;
    setTimeout(() => {
        carta.style.display = 'none';
        conteudo.style.opacity = 1; // Inicia a transição do conteúdo
        conteudo.style.display = 'block';
        document.body.style.overflow = 'auto'; // Restaura o scroll
    }, 1000); // Tempo de transição da carta
});


const botaoPresente = document.getElementById('botao-presente');
const conteudoPresente = document.getElementById('conteudo-presente');

botaoPresente.addEventListener('click', () => {
    conteudoPresente.style.display = conteudoPresente.style.display === 'none' ? 'block' : 'none';
});

//import { SpeedInsights } from "@vercel/speed-insights/next"