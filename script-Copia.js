function verificar() {
    // Obtém o ano atual
    var data = new Date();
    var anoAtual = data.getFullYear();
    
    // Obtém o elemento do ano de nascimento (atenção: id="txtano" no HTML)
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    
    // Verifica se o campo está vazio ou se o ano é inválido
    if (fano.value.length === 0 || Number(fano.value) > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
        return; // interrompe a função
    }
    
    var anoNasc = Number(fano.value);
    var idade = anoAtual - anoNasc;
    
    // Verifica se a idade é negativa
    if (idade < 0) {
        window.alert('[ERRO] Ano de nascimento inválido!');
        return;
    }
    
    // Obtém o sexo selecionado
    var fsex = document.getElementsByName('radsex');
    var genero = '';
    var classificacao = '';
    
    // Verifica qual sexo foi marcado
    if (fsex[0].checked) { // Masculino
        genero = 'Homem';
    } else if (fsex[1].checked) { // Feminino
        genero = 'Mulher';
    } else {
        window.alert('Selecione o sexo!');
        return;
    }
    
    // Classifica a idade (sem imagens)
    if (idade >= 0 && idade <= 3) {
        classificacao = 'bebê';
    } else if (idade >= 4 && idade <= 12) {
        classificacao = 'criança';
    } else if (idade >= 13 && idade <= 18) {
        classificacao = 'adolescente';
    } else if (idade >= 19 && idade <= 39) {
        classificacao = 'adulto(a) jovem';
    } else if (idade >= 40 && idade <= 59) {
        classificacao = 'meia-idade';
    } else {
        classificacao = 'idoso(a)';
    }
    
    // Atualiza a div de resultado
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos ${classificacao}.`;
}
    