$(document).on('click', '#button-alimentar-modal', function (e) {
    
    let imagem1 = document.createElement('img');
    imagem1.setAttribute('src', '../img/imagem1.jpg');
    imagem1.setAttribute('width', 240);
    imagem1.setAttribute('class', 'img-thumbnail preview-img imagem-modal');
    $('#div-imagens').append(imagem1);

    let imagem2 = document.createElement('img');
    imagem2.setAttribute('src', '../img/imagem2.jpg');
    imagem2.setAttribute('width', 120);
    imagem2.setAttribute('class', 'img-thumbnail preview-img imagem-modal');
    $('#div-imagens').append(imagem2);

    let imagem3 = document.createElement('img');
    imagem3.setAttribute('src', '../img/imagem3.jpg');
    imagem3.setAttribute('width', 120);
    imagem3.setAttribute('class', 'img-thumbnail preview-img imagem-modal');
    $('#div-imagens').append(imagem3);

    let imagem4 = document.createElement('img');
    imagem4.setAttribute('src', '../img/imagem4.jpg');
    imagem4.setAttribute('width', 120);
    imagem4.setAttribute('class', 'img-thumbnail preview-img imagem-modal');
    $('#div-imagens').append(imagem4);

    let imagem5 = document.createElement('img');
    imagem5.setAttribute('src', '../img/imagem5.jpg');
    imagem5.setAttribute('width', 120);
    imagem5.setAttribute('class', 'img-thumbnail preview-img imagem-modal');
    $('#div-imagens').append(imagem5);

    let imagem6 = document.createElement('img');
    imagem6.setAttribute('src', '../img/imagem6.jpg');
    imagem6.setAttribute('width', 120);
    imagem6.setAttribute('class', 'img-thumbnail preview-img imagem-modal');
    $('#div-imagens').append(imagem6);

    $('#modal-de-imagens').modal('show');
});



