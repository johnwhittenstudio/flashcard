$(document).ready(function() {
  $(".clickable").click(function() {
    $("#javascript-term").hide();
    $("#javascript-definition").show();
  });
});

$(document).ready(function() {
  $("h5").click(function() {
    alert("This is a heading.");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });
});

function myFunction() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}
