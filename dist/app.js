// menu variables
const menuButton = document.querySelector('#menu-button');
const menuItems = document.querySelector('#menu');
const menuButtonSpans = document.querySelectorAll('#menu-button span');
const links = document.querySelectorAll('#menu a');

// abrir menu
menuButton.addEventListener('click', () => {   
    menuItems.classList.toggle('hidden');
    menuButtonSpans.forEach((span) => {
        span.classList.toggle('animated');
    });
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        menuItems.classList.add('hidden');
        menuButtonSpans.forEach((span) => {
            span.classList.remove('animated');
        });
    });
});

// close menu on resize
window.onresize = function() {
    let w = window.outerWidth;
    if (w > 768) {
        menuItems.classList.add('hidden');
        menuButtonSpans.forEach((span) => {
            span.classList.remove('animated');
        });
    }
};

// dark mode
const darkButton = document.querySelector('#dark-button');
darkButton.addEventListener('click', function() {
    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
});