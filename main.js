const form = document.getElementById('form-contato');
const nomes = [];
const telefones = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizar();
});

function adicionaLinha() {
    const inputCaixadeNomes = document.getElementById('caixa-nome');
    const inputCaixadeTel = document.getElementById('caixa-tel');

    if (nomes.includes(inputCaixadeNomes.value)) {
        alert(`O usuário: ${inputCaixadeNomes.value} já foi cadastrado`);
    } else {
        nomes.push(inputCaixadeNomes.value);
        telefones.push(parseInt(inputCaixadeTel.value));

        let linhacontato = '<tr>';
        linhacontato += `<td>${inputCaixadeNomes.value}</td>`;
        linhacontato += `<td>${inputCaixadeTel.value}</td>`;
        linhacontato += '</tr>';

        linhas += linhacontato;
    }

    inputCaixadeNomes.value = '';
    inputCaixadeTel.value = '';
}

function atualizar() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}