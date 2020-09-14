// Run the script once the document is completely loaded.
$(function () {
  var role = 0;
  var roles = ["Web Devoloper", "Food Lover", "Programming Enthusiast","Travel Blogger"];
  setInterval(() => {
    $(".home-content h2 span").fadeOut(500, function () {
      $(this).text(roles[role++ % roles.length] + "...");
      $(this).fadeIn(500);
    });
  }, 2500);
});
