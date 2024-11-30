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
    strings: ["Mern Stack Developer", "Frontend Developer", "Web Designer", "Freelancer"],
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

// const handleSubmit = () => {
//   alert('Message Sent Successfully')
// }

