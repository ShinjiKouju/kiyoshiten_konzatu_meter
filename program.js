$(function () {
  var a, b, c;

  function save() {
    localStorage.setItem("Sample", JSON.stringify([a,b,c]));
  }

  function load() {
    var x = JSON.parse(localStorage.getItem("Sample"));
    a = x[0];
    b = x[1];
    c = x[2];
    $("#num1").val(a);
    $("#num2").val(b);
    $("#hyouji").html(c);
  }

  $('.calbutton').click(function() {
    a = +($("#num1").val());
    b = +($("#num2").val());
    switch($(this).attr("id")) {
    case "plus":
      c = a + b;
      break;
    case "minus":
      c = a - b;
      break;
    case "multi":
      c = a * b;
      break;
    case "divs":
      c = a / b;
      break;
    }
    $("#hyouji").html(c);
    save();
  });

  if(localStorage.getItem("Sample")) {
    load();
  }
});