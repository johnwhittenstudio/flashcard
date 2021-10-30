$(document).ready(function() {
  $("btn#btn-light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background")
});

$("btn#btn-dark").click(function() {
  $("body").removeClass();
  $("body").addClass("dark-background");
});