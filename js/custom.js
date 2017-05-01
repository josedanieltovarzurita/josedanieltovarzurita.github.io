$(window).on("scroll", function() {
    $("nav").toggleClass("shrink", $(this).scrollTop() > 50)
});

// Add scrollspy to <body>
$('body').scrollspy({target: ".navbar", offset: 50});

// Add smooth scrolling on all links inside the navbar
$("#navbar a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top+30
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

});

$("a.btn").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top+30
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

});

$("#sendMessage").on("click", function() {
    $.ajax({
        url: "https://formspree.io/josedanieltovarzurita@gmail.com", 
        method: "POST",
        dataType: "json",
        success: function() {
        	alert("¡Listo! Ha sido enviado, te contactaré en segundos");
        }
    });
});