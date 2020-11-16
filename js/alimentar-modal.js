$(document).on('click', '#button-alimentar-modal-arquivo-imagem', function (e) {

    let imagem3 = document.createElement('img');
    imagem3.setAttribute('src', '../img/imagem3.jpg');
    imagem3.setAttribute('width', 240);
    imagem3.setAttribute('class', 'img-thumbnail preview-img imagem-modal');
    $('#div-imagens').append(imagem3);

    let imagem4 = document.createElement('img');
    imagem4.setAttribute('src', '../img/imagem4.jpg');
    imagem4.setAttribute('width', 240);
    imagem4.setAttribute('class', 'img-thumbnail preview-img imagem-modal');
    $('#div-imagens').append(imagem4);

    let imagem5 = document.createElement('img');
    imagem5.setAttribute('src', '../img/imagem5.jpg');
    imagem5.setAttribute('width', 240);
    imagem5.setAttribute('class', 'img-thumbnail preview-img imagem-modal');
    $('#div-imagens').append(imagem5);

    let imagem6 = document.createElement('img');
    imagem6.setAttribute('src', '../img/imagem6.jpg');
    imagem6.setAttribute('width', 240);
    imagem6.setAttribute('class', 'img-thumbnail preview-img imagem-modal');
    $('#div-imagens').append(imagem6);

    $('#modal-de-imagens').modal('show');
});

$(document).on('click', '#fechar-modal-de-imagens', function (e) {
    $('.imagem-modal').remove();
})

