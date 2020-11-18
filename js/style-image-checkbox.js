
$(".image-checkbox").each(function () {
    if ($(this).find('input[type="checkbox"]').first().attr("checked")) {
      $(this).addClass('image-checkbox-checked');
    }
    else {
      $(this).removeClass('image-checkbox-checked');
    }
  });
  
// sync the state to the input

$(document).on('click', '.image-checkbox', function (e) {
    $(this).toggleClass('image-checkbox-checked');
    let input = $(this).find('input[type="checkbox"]');
    input.prop("checked",!input.prop("checked"))

    e.preventDefault();
});