
const menuToggle = document.querySelector(".menuToggle");
const nav = document.querySelector(".nav");
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
}
window.addEventListener('scroll', function(){
    var header = this.document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

function toggleMenu(){
    menuToggle.classList.remove('active');
    nav.classList.remove('active');
}