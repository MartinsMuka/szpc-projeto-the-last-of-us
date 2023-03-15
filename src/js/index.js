/*
OBJETIVO: quando clicarmos no botão temos que mostrar a imagem de fundo correspondete
-Passo 1 - dar um jeito de pegar o elemnto html dos botões

-Passo 2 - dar um jeiro de identificar o clique do usuário no botão

-Passo 3 - desmarcar o botão selecionado anterior

-Passo 4 - marcar o botão clicado como se estivesse selecionado

-Passo 5 - esconder a imagem anterior

-passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado 

*/

//-Passo 1 - dar um jeito de pegar o elemnto html dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

//-Passo 2 - dar um jeiro de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //-Passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        //-Passo 4 - marcar o botão clicado como se estivesse selecionado
        selecionarBotaoCarrossel(botao);
        
        //-Passo 5 - esconder a imagem anterior
        esconderImagemAtiva();

        //-passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
