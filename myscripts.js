console.log("still working");

const letters = document.querySelectorAll(".letter")
console.log(letters);
letters.forEach(l => {
  l.addEventListener('mouseover', () => {
    console.log(l);
    l.classList.add("rubber");
    setTimeout(function () {
      l.classList.remove("rubber")
    }, 800);
  });
});
