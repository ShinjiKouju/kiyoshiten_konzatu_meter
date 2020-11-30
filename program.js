$(function () {
  var a, b, c;

  function save() {
    localStorage.setItem("Sample", JSON.stringify([a,b]));
  }

  function load() {
    var x = JSON.parse(localStorage.getItem("Sample"));
    a = x[0];
    b = x[1];
    $("#ninzu").html(a);
    $("#konzatu").html(b);
    $("#num").html(c);
  }

  $('.calbutton').click(function() {
    switch($(this).attr("id")) {
    case "plus":
      ++a;
      break;
    case "minus":
      --a;
      break;
    case "clear":
      a = 0;

    }
    b = a / 20 * 100;
    $("#ninzu").html(a);
    $("#konzatu").html(b);
    save();
  });

  if(localStorage.getItem("Sample")) {
    load();
  }
});