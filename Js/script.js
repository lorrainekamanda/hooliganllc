


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
    
    
  