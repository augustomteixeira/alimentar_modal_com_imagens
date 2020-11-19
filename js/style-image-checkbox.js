$(document).on('click', '.image-checkbox', function (e) {
    $(this).toggleClass('image-checkbox-checked');
    let input = $(this).find('input[type="checkbox"]');
    input.prop("checked",!input.prop("checked"));

    e.preventDefault();
});

$(document).on('click', '.image-radio', function (e) {
    $('.image-radio').removeClass('image-radio-checked');
    $(this).addClass('image-radio-checked');

    let input = $(this).find('input[type="radio"]');
    input.prop("checked", true);
    
    e.preventDefault();
});