
/*
    OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior

    - passo 1 - pegar os elementos que representam as abas no HTML
    - passo 2 - identificar o clique no elemento da aba
    - passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    - passo 4 - marcar a aba clicada como selecionado
    - passo 5 - esconder o conteúdo anterior
    - passo 6 - mostrar o conteúdo da aba selecionada
*/

//Cria uma constante chamada abas que pega os elementos que representa o html
const abas = document.querySelectorAll(".aba"); //passo 1

/*FOREACH é uma estrutura de repetição para manipulação de array, 
tem a mesma função do FOR porem sem a procupação de uma variavel indice "i*/
abas.forEach(aba => { //passo 2

    //Permite configurar funções a serem chamadas quando um evento especificado acontece
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }
        
        selecionarAba(aba) //Faz chamada da função selecionarAba

        mostrarInformacoesDaAba(aba) //faz chamada da função mostrarInformacoesDaAba
    });
});

//Funçao selecionarAba
function selecionarAba(aba) {

    //passo 3: quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado"); //desmarca aba selecionada
    
    //passo 4: marcar a aba clicada como selecionado
    aba.classList.add("selecionado");
}

//Função mostrarInformacoesDaAba
function mostrarInformacoesDaAba(aba){
    
    //passo 5: esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");
    
    //passo 6: mostrar o conteúdo da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
    
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado");
}


