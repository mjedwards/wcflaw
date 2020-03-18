let navbar = document.querySelector(".nav");
let headerItems = document.querySelector(".header-items");

function navAnimation() {
  window.addEventListener("scroll", function() {
    if (window.scrollY != 0) {
      navbar.setAttribute(
        "style",
        "position:fixed; background: #197ba8; z-index: 6; width: 100%; overflow-x: hidden;"
      );
      headerItems.setAttribute("style", "margin-top: 166px;");
    } else {
      navbar.setAttribute(
        "style",
        "position:initial; background: none; z-index: 4"
      );
      headerItems.setAttribute("style", "margin-top: none;");
    }
  });
}

navAnimation();


//select items from DOM

const menuBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');


const scrollBtn = document.querySelector('.scrollToTop');

let lastScrollTop = 0;

function scroll () {
    window.addEventListener('scroll', function() {
        scrollBtn.removeAttribute('id');

    })

    scrollBtn.addEventListener('click', function () {
        scrollBtn.setAttribute('id', 'hidden');
    })
}
//initial state

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('showing');
        menuNav.classList.add('showing');
        

        navItems.forEach(item => item.classList.add('showing'));
        
//set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('showing');
        menuNav.classList.remove('showing');
        

        navItems.forEach(item => item.classList.remove('showing'));

//set menu state
        showMenu = false;
    }
}

scroll();