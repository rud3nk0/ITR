$(document).ready(function(){
  
    $('body').scrollspy({target: ".navbar", offset: 0});
    $("#navbar a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
    
    $(".navbar-brand").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
    $("#home a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
    
       $('body').on('activate.bs.scrollspy', function () {
        
       });
    
      $(".overlayMore").click(function(){
        $(".overlayMore").animate({"top":"500px"},800).hide(function(){
          $("#portfolioContent").height("100%");
        });
        
      });
      
      
    });