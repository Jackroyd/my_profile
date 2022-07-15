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

window.onload = function () {
  letters.forEach(function (l,i) {
    setTimeout(function () {
      l.classList.add("rubber");
    }, 200+(i*50));
    setTimeout(function () {
      l.classList.remove("rubber")
    }, 1000+(i*50));
  })
}
