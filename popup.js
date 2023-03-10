
function openpopup() {
  
  $('.pop-up').addClass('open');
  //document.getElementById('pops').addClass('open');  // Remove all colours from the power level indicators.
  
}


function closepopup() {
  
  $('.pop-up').removeClass('open');
  //document.getElementById('pops').addClass('open');  // Remove all colours from the power level indicators.
  toggle('cards');
  toggle('spinner');

}
