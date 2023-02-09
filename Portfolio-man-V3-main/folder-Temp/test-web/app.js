$('#edit').on('click', function(){
  $('body').addClass('active-modal');
  $('.box-modal').addClass('modal-show');
});

$('.overlay').on('click', function(){
  $('body').removeClass('active-modal');
  $('.box-modal').removeClass('modal-show');
})