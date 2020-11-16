$(document).on('click', '#button-alimentar-modal-arquivo-imagem', function (e) {
    carregarImagemArquivo('../img/imagem1.jpg');
    carregarImagemArquivo('../img/imagem2.jpg');
    carregarImagemArquivo('../img/imagem3.jpg');
    carregarImagemArquivo('../img/imagem4.jpg');
    carregarImagemArquivo('../img/imagem5.jpg');
    carregarImagemArquivo('../img/imagem6.jpg');

    $('#modal-de-imagens').modal('show');
});

function carregarImagemArquivo (caminho) {
    let imagem = document.createElement('img');
    imagem.setAttribute('src', caminho);
    imagem.setAttribute('width', 240);
    imagem.setAttribute('class', 'img-thumbnail preview-img imagem-modal');
    $('#div-imagens').append(imagem);
}

$(document).on('click', '#button-alimentar-modal-codigo-base64', function (e) {
    carregarImagemBase64('../arquivos/imagem1.txt');
    carregarImagemBase64('../arquivos/imagem2.txt');
    carregarImagemBase64('../arquivos/imagem3.txt');
    carregarImagemBase64('../arquivos/imagem4.txt');
    carregarImagemBase64('../arquivos/imagem5.txt');
    carregarImagemBase64('../arquivos/imagem6.txt');

    $('#modal-de-imagens').modal('show');
});

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

