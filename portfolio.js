$(".navbar-toggler").click(function () {
  if ($(".my-footer").is(":hidden")) {
    $(".my-footer").show();
  } else {
    $(".my-footer").hide();
  }
});

$(".nav-link").click(function () {
  $(".navbar-collapse").collapse("hide");
  $(".my-footer").show();
});

let x = window.matchMedia("(max-width: 992px)");
