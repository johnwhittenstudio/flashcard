$(document).ready(function() {
  $(".clickable").click(function() {
    $("#js-hidden").toggle();
    $("#js-showing").show();
  });

$(".clickable1").click(function() {
  $("#operators-hidden").toggle();
  $("#operators-showing").show();
});

$(".clickable2").click(function() {
  $("#variables-hidden").toggle();
  $("#variables-showing").show();
});

$(".clickable3").click(function() {
  $("#variableNamingConventions-hidden").toggle();
  $("#variableNamingConventions-showing").show();
});

$(".clickable4").click(function() {
  $("#functions-hidden").toggle();
  $("#functions-showing").show();
});

$(".clickable5").click(function() {
  $("#methods-hidden").toggle();
  $("#methods-showing").show();
});

$(".clickable6").click(function() {
  $("#arguments-hidden").toggle();
  $("#arguments-showing").show();
});

$(".clickable7").click(function() {
  $("#parameters-hidden").toggle();
  $("#parameters-showing").show();
});

$(".clickable8").click(function() {
  $("#return-hidden").toggle();
  $("#return-showing").show();
});

$(".clickable9").click(function() {
  $("#chainingMethods-hidden").toggle();
  $("#chainingMethods-showing").show();
});

$(".clickable10").click(function() {
  $("#strings-hidden").toggle();
  $("#strings-showing").show();
});

$(".clickable11").click(function() {
  $("#booleans-hidden").toggle();
  $("#booleans-showing").show();
});

$(".clickable12").click(function() {
  $("#undefined-hidden").toggle();
  $("#undefined-showing").show();
});

$(".clickable13").click(function() {
  $("#nan-hidden").toggle();
  $("#nan-showing").show();
});

$(".clickable14").click(function() {
  $("#null-hidden").toggle();
  $("#null-showing").show();
});

$(".clickable15").click(function() {
  $("#alert-hidden").toggle();
  $("#alert-showing").show();
});

$(".clickable16").click(function() {
  $("#comments-hidden").toggle();
  $("#comments-showing").show();
});

$(".clickable17").click(function() {
  $("#jquery-hidden").toggle();
  $("#jquery-showing").show();
});

$(".clickable18").click(function() {
  $("#attributes-hidden").toggle();
  $("#attributes-showing").show();
});
});



function myFunction() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}
