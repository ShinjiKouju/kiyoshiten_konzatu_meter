$(function () {
  var a, b;
  var c = 20;　/*入場制限*/

  function save() {
    localStorage.setItem("Sample", JSON.stringify([a,b]));
  }

  function load() {
    var x = JSON.parse(localStorage.getItem("Sample"));
    a = x[0];
    b = x[1];
    $("#ninzu").html(a);
    $("#konzatu").html(b);
    $("#max").html(c);
  }

  $('.calbutton').click(function() {
    switch($(this).attr("id")) {
    case "plus":
      ++a;
      break;
    case "minus":
      --a;
      if (a<0) {
        a=0;
      }
      break;
    case "clear":
      a = 0;

    }
    b = Math.floor(a / c * 100);
    
    $("#ninzu").html(a);
    $("#konzatu").html(b);
    $("#max").html(c);
    save();
  });

  if(localStorage.getItem("Sample")) {
    load();
  }
});