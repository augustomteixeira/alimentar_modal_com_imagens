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

    $('#escolher-animes').hide();
    $('#titulo-modal').text('Imagens de animes carregadas a partir dos arquivos de imagem');
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

    $('#escolher-animes').hide();
    $('#titulo-modal').text('Imagens de animes carregadas a partir do código Base64');
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

    $('#escolher-animes').show();
    $('#titulo-modal').text('Escolha seus animes favoritos');
    $('#modal-de-imagens').modal('show');
});

function carregarImagemCheckBox (caminho, anime) {
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
        input.setAttribute('data-anime', anime);

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
    limparModal();
});

$(document).on('click', '#fechar-card-animes-favoritos', function (e) {
    $('.lista-animes-favoritos').remove();
    $('#div-card-animes-favoritos').hide();
});

$(document).on('click', '#escolher-animes', function (e) {
    $('.lista-animes-favoritos').remove();

    let inputs = $('input[name="input-imagem"]:checked');

    inputs.each(function () {
        let li = document.createElement('li');
        li.setAttribute('class', 'lista-animes-favoritos list-group-item d-flex justify-content-between align-items-center');
        li.appendChild(document.createTextNode($(this).attr('data-anime')));

        
        let div = document.createElement('div');
        div.setAttribute('class', 'image-parent');

        let img = document.createElement('img');
        let src = $(this).closest('label').find('.imagem-modal').attr('src');
        img.setAttribute('src', src);
        img.setAttribute('class', 'img-fluid');

        div.appendChild(img);
        li.appendChild(div);
        $('#lista-animes-favoritos').append(li);
    });

    if (inputs.length == 0) {
        console.log('nenhum anime foi escolhido')
    }

    $('#div-card-animes-favoritos').show();
    limparModal();
});

function limparModal() {
    $('.image-checkbox').remove();
    $('.imagem-modal').remove();
}

