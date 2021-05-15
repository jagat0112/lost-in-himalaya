const collabsible = document.querySelectorAll(".collapsible");

collabsible.forEach((c) => {
  c.addEventListener("click", function () {
    this.classList.toggle("collapsible--active");
  });
});
