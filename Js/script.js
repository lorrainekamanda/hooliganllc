


$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});

$('.back-to-top').click(function() {
  $('html, body').animate({ scrollTop: 0 }, "slow");
  return false;
});

$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();

});



// set up text to print, each item in array is new line
var aText = new Array(
    "We do UX Design,Mobile",
        "And Web UI and ",
    "Software Development."
    // "There are only 10 types of people in the world:", 
    // "Those who understand binary, and those who don't"
    );
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 10; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();

    $(document).ready(function(){
      "use strict";
    
      var window_width 	 = $(window).width(),
      window_height 		 = window.innerHeight,
      header_height 		 = $(".default-header").height(),
      header_height_static = $(".site-header.static").outerHeight(),
      fitscreen 			 = window_height - header_height;
    
    
      $(".fullscreen").css("height", window_height)
      $(".fitscreen").css("height", fitscreen);
    
      //-------- Active Sticky Js ----------//
         $(".default-header").sticky({topSpacing:0});
    
      
      //------- Active Nice Select --------//
         $('select').niceSelect();
         
         
       // -------   Active Mobile Menu-----//
    
      $(".menu-bar").on('click', function(e){
          e.preventDefault();
          $("nav").toggleClass('hide');
          $("span", this).toggleClass("lnr-menu lnr-cross");
          $(".main-menu").addClass('mobile-menu');
      });
    
    
      $('.nav-item a:first').tab('show');
    
    
    
      // Select all links with hashes
      $('.main-menubar a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
          // On-page links
          if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
          ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                  return false;
                } else {
                  $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                };
              });
            }
          }
        });
    
        function _(id){ return document.getElementById(id); }
        function submitForm(){
          _("button").disabled = true;
          _("status").innerHTML = 'please wait...';
          var formdata = new FormData();
          formdata.append( "firstName", _("firstName").value );
          formdata.append( "lastName", _("lastName").value );
          formdata.append( "phoneNumber", _("phoneNumber").value );
          formdata.append( "emailAddress", _("emailAddress").value );
          formdata.append( "message", _("message").value );
          var ajax = new XMLHttpRequest();
          ajax.open( "POST", "mail.php" );
          ajax.onreadystatechange = function() {
            if(ajax.readyState == 4 && ajax.status == 200) {
              if(ajax.responseText == "success"){
                _("my_form").innerHTML = '<h2>Thank you '+_("name").value +', your message has been sent.</h2>';
              } else {
                _("status").innerHTML = ajax.responseText;
                _("button").disabled = false;
              }
            }
          }
          ajax.send( formdata );
        }