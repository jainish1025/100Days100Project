var crsr = document.querySelector("#cursor");
let menu = document.querySelector("#nav-menu");
let main = document.querySelector("#main")

window.addEventListener("mousemove", function (dets) {
    crsr.style.transform = `translate(${dets.clientX - 5}px, ${dets.clientY - 5}px)`;
})


let menutogglebtn = document.querySelector('.toggle');
function togglebtn(){
    menutogglebtn.addEventListener("click", function(){
        menutogglebtn.classList.toggle('active');
    })
}

function menubar(){
    let menutoggle = document.querySelector("#menu-items");
    menutogglebtn.addEventListener("click", function(){
        menutoggle.classList.toggle('active');
    })
}

togglebtn();
menubar();