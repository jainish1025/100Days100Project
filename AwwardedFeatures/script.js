const img = document.querySelector("img");
const crsr = document.querySelector("#cursor");

img.addEventListener("mousemove", function (dets) {
  const rotx = 58 - dets.x / 11;
  const roty = Math.abs(rotx);

  img.style.transform = `rotateX(${rotx}deg) rotateY(${-roty}deg)`;
});

img.addEventListener("mouseleave", function (dets) {
  setTimeout(() => {
    img.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
  }, 500);
});


window.addEventListener("mousemove",(dets) =>{
    // crsr.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    crsr.style.left = `${dets.x}px`
    crsr.style.top = `${dets.y}px`
})