var loader = document.getElementById("preloader");

window.addEventListener(
  "load",
  function (load) {
    window.removeEventListener("load", load, false);
    setTimeout(function () {
      loader.style.display = "none";
    }, 1100);
},
  false
);


let type = new Typed(".auto-typed", {
    strings: ["Web Developer", "Frontend Developer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    smartBackspace: true  
});

const lenis = new Lenis({
  duration: 1.5,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let scrolleml = document.getElementById('fadeleft');

const handleSubmit = () => {
  alert('Message Sent Successfully')
}