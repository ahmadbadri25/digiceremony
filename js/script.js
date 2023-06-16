// toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika s menu di klik
document.querySelector('#s-menu').onclick = () =>{
    navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav

const solutions = document.querySelector('#s-menu');

document.addEventListener('click', function(e){
    if(!solutions.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});