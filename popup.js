

$('.pop-up .close').click(function(){
  $('.pop-up').removeClass('open');
  toggle('cards');
  toggle('spinner');
});

function openpopup() {
  
  $('.pop-up').addClass('open');
  //document.getElementById('pops').addClass('open');  // Remove all colours from the power level indicators.
  
}

