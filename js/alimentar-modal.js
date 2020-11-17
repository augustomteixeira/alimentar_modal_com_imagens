$(document).on('click', '#button-alimentar-modal-arquivo-imagem', function (e) {
    carregarImagemArquivo('../img/imagem1.jpg');
    carregarImagemArquivo('../img/imagem2.jpg');
    carregarImagemArquivo('../img/imagem3.jpg');
    carregarImagemArquivo('../img/imagem4.jpg');
    carregarImagemArquivo('../img/imagem5.jpg');
    carregarImagemArquivo('../img/imagem6.jpg');
    carregarImagemArquivo('../img/imagem7.jpg');
    carregarImagemArquivo('../img/imagem8.jpg');
    carregarImagemArquivo('../img/imagem9.jpg');

    $('#modal-de-imagens').modal('show');
});

$(document).on('click', '#button-alimentar-modal-codigo-base64', function (e) {
    carregarImagemBase64('../arquivos/imagem1.txt');
    carregarImagemBase64('../arquivos/imagem2.txt');
    carregarImagemBase64('../arquivos/imagem3.txt');
    carregarImagemBase64('../arquivos/imagem4.txt');
    carregarImagemBase64('../arquivos/imagem5.txt');
    carregarImagemBase64('../arquivos/imagem6.txt');
    carregarImagemBase64('../arquivos/imagem7.txt');
    carregarImagemBase64('../arquivos/imagem8.txt');
    carregarImagemBase64('../arquivos/imagem9.txt');

    $('#modal-de-imagens').modal('show');
});

$(document).on('click', '#button-alimentar-modal-imagem-checkbox', function (e) {
    carregarImagemCheckBox('../arquivos/imagem1.txt', 'Fullmetal Alchemist');
    carregarImagemCheckBox('../arquivos/imagem2.txt', 'Death Note');
    carregarImagemCheckBox('../arquivos/imagem3.txt', 'Dragon Ball');
    carregarImagemCheckBox('../arquivos/imagem4.txt', 'Naruto');
    carregarImagemCheckBox('../arquivos/imagem5.txt', 'Yu Yu Hakusho');
    carregarImagemCheckBox('../arquivos/imagem6.txt', 'InuYasha');
    carregarImagemCheckBox('../arquivos/imagem7.txt', 'Cavaleiros do Zodíaco');
    carregarImagemCheckBox('../arquivos/imagem8.txt', 'Shingeki no Kyojin');
    carregarImagemCheckBox('../arquivos/imagem9.txt', 'Digimon');

    $('#modal-de-imagens').modal('show');
});

function carregarImagemCheckBox (caminho, value) {
    $.get(caminho, 'text', function (conteudo) {
        let label = document.createElement('label');
        label.setAttribute('class', 'image-checkbox');

        let imagem = document.createElement('img');
        imagem.setAttribute('src', conteudo);
        imagem.setAttribute('width', 240);
        imagem.setAttribute('class', 'img-responsive img-thumbnail preview-img imagem-modal');

        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('name', 'input-imagem');
        input.setAttribute('value', value);

        label.appendChild(imagem);
        label.appendChild(input);
        $('#div-imagens').append(label);
    });
}

function carregarImagemArquivo (caminho) {
    let imagem = document.createElement('img');
    imagem.setAttribute('src', caminho);
    imagem.setAttribute('width', 240);
    imagem.setAttribute('class', 'img-thumbnail preview-img imagem-modal');
    $('#div-imagens').append(imagem);
}

function carregarImagemBase64 (caminho) {
    $.get(caminho, 'text', function (conteudo) {
        let imagem = document.createElement('img');
        imagem.setAttribute('src', conteudo);
        imagem.setAttribute('width', 240);
        imagem.setAttribute('class', 'img-thumbnail preview-img imagem-modal');
        $('#div-imagens').append(imagem);
    });
}

$(document).on('click', '#fechar-modal-de-imagens', function (e) {
    $('.imagem-modal').remove();
});

