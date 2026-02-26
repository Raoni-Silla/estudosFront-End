
document.querySelector('.calcular').addEventListener('click', calcular )

function calcular(){
    let nomeSujo = document.getElementById('nomeServico')
    let valorSujo = document.getElementById('valorBase')
    let prazoSujo = document.getElementById('prazoHoras')
    let valorFinal
    let resumo = document.querySelector('p#txtResumo')
    let selo = document.querySelector('p#txtSelo')
    

    const nomeServico = nomeSujo.value.trim().toUpperCase()
    const valorBase = Number(valorSujo.value)
    const prazoHoras = Number(prazoSujo.value)

    if(prazoHoras < 24){
         valorFinal = valorBase + (valorBase * 0.2)
    }else{
        valorFinal = valorBase
    }

    isPremium = valorFinal > 500 || nomeServico === 'REFORMA'

    if(isPremium){
        selo.innerHTML = `${nomeServico} Selo: SERVIÇO PREMIUM`
        selo.style.color = 'gold'
    }else{
        selo.innerHTML = `${nomeServico} selo: PADRÃO`
        selo.style.color = 'gray'
    }
}

/*oque lembrar desse codigo pra mim não errar mais

1.O Seletor e a "Lista" (QuerySelector vs GetByClass)

    O Erro: Tentar usar addEventListener em uma coleção (lista) de elementos.

    A Lição: Métodos que terminam no plural (getElements...) devolvem uma lista. Para um botão único, o querySelector('.classe') ou getElementById('id') são mais diretos porque pegam o elemento específico.

2. Elemento vs. Conteúdo (.value)

    O Erro: Tentar fazer cálculos ou limpar espaços direto na variável que selecionou o input.

    A Lição: O seletor pega a "caixa" (o elemento HTML). O que o usuário digitou está na propriedade .value. Sempre que for tratar dados de formulário, lembre-se do .value.

3. Case Sensitivity (Maiúsculas e Minúsculas)

    O Erro: Declarar valorBase e tentar usar valorbase.

    A Lição: O JavaScript (assim como o Java) é Case Sensitive. Nome e nome são duas coisas completamente diferentes na memória RAM. Mantenha o padrão camelCase em tudo para evitar confusão.

4. Ciclo de Vida e Inicialização (undefined)

    O Erro: Criar uma variável e só dar valor a ela dentro de um if.

    A Lição: Se a condição do if não for atendida, sua variável fica "vazia" (undefined) e quebra os cálculos seguintes. Sempre inicialize suas variáveis com um valor padrão ou garanta um else para cobrir todos os cenários.
*/