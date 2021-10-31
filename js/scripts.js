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
});


  $(".variables").click(function() {
    alert("A container that stores some information such as a number, an object, or a string. Variables can be declared with one of the following JavaScript reserved words: var, let, and const.");
  });

  $(".variableNamingConventions").click(function() {
    alert("Lower camel case is the naming convention for variables whereby the first word is lowercased and all words after are capitalized.");
  });

  $(".functions").click(function() {
    alert("A block of code written to perform some specific set of tasks. We can define a function using the function keyword, followed by Name and optional parameters. Body of function is enclosed in Curly braces..");
  });

  $(".methods").click(function() {
    alert("A property of an object that contains a function definition. Methods are functions stored as object properties.");
  });

  $(".arguments").click(function() {
    alert("The value that is passed into a parameter. Arguments can be had by both functions and methods, and are passed into the parentheses.");
  });

  $(".parameters").click(function() {
    alert("A placeholder for a variable. Parameters are used when functions and methods are declared");
  });

  $(".return").click(function() {
    alert("This is an image.");
  });

  $(".chainingMethods").click(function() {
    alert("This is an image.");
  });

  $(".strings").click(function() {
    alert("Any set of characters - letters, numbers, exclamations points, or some combination thereof - enclosed in quotations.");
  });

  $(".booleans").click(function() {
    alert("A true or false value.");
  });

  $(".undefined").click(function() {
    alert("Something that has yet to be defined.");
  });

  $(".nan").click(function() {
    alert("Not a Number.");
  });

  $(".null").click(function() {
    alert("This is an image.");
  });

  $(".alerts").click(function() {
    alert("This is an image.");
  });

  $(".comments").click(function() {
    alert("This is an image.");
  });

  $(".jquery").click(function() {
    alert("JavaScript library that makes it easy to make web pages interactive.");
  });

  $(".attributes").click(function() {
    alert("This is an image.");
  });

});

function myFunction() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}
