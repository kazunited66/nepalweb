$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});
$('.globalMenuSp').fadeIn(1000)


// drop down menu
$('.dropdown-btn').hover(
    function() {
      
      $(this).children('.dropdown').addClass('open');
    }, function() {
      
      $(this).children('.dropdown').removeClass('open');
    }
  );
   
  
  $(function() {
    $('.nav-button-wrap').on('click', function() {
      if ($(this).hasClass('active')) {
        
        $(this).removeClass('active');
        $('.globalnav').addClass('close');
        $('.globalnav-wrap , body').removeClass('open');
      } else {
        
        $(this).addClass('active');
        $('.globalnav').removeClass('close');
        $('.globalnav-wrap , body').addClass('open');
      }
    });
  });



  