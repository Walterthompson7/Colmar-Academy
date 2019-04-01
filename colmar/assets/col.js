var coll = document.getElementsByClassName("box");
var i;

for(i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var reveal = this.nextElementSibling;
    if(reveal.style.display === "block") {
      reveal.style.display = "none";
    } else {
      reveal.style.display = "block";
    }
  });
}
