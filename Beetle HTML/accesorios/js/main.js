

$(document).ready(function() {

   $("#send-button").click(function(e) {
      e.preventDefault();
      var color = $("#color").val();
      var texto = $("#texto").val();

      var mensaje = $("<div></div>");
      mensaje.addClass("alert alert-"+color);
      mensaje.html("<p>"+texto+"</p>");
      
      $(".resultado").append(mensaje);
   })


});