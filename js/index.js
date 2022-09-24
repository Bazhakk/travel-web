jQuery(document).ready(function ( $ ) {
  
  $(document).on('click', '#burger', ()=>{
    $('#burger').toggleClass('burger-active');
    $('#mobile-menu').slideToggle();
  });

  $(document).on('click', function(e) {
    if (!$(e.target).closest('#burger').length) {
      $('#mobile-menu').hide();
      $('#burger').removeClass('burger-active');
    }
    e.stopPropagation();
  });

});