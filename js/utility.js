
// page loading animation
let load = setInterval(() => {
    if (document.readyState == 'complete') {
        clearInterval(load);
        setTimeout(() => {
            document.querySelector('.loader').classList.add('content-loaded');
            setTimeout(() => {
                document.querySelector('.loader').classList.add('disable');
            }, 500)

            document.querySelectorAll('section').forEach(one => {
                one.classList.add('loaded');
            })

        }, 3000)
    }
}, 100)
















// detect scroll direction and animate the header
const header = document.querySelector('header');
let scrollPosition = 0;

// add scroll event
window.addEventListener('scroll', (e) => {
    // detects new state and compares it with the new one
    if (document.body.getBoundingClientRect().top > scrollPosition) {
        header.classList.remove('hide');

    } else {
        header.classList.add('hide');
    }
    // saves the new position for iteration.
    scrollPosition = document.body.getBoundingClientRect().top;
})






// header
document.querySelector('header').classList.add('hide');

// smooth scroll feature
function smoothScroll(target, duration) {
    let targetPosition = target.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }

        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    function ease(t, b, c, d) {
        t /= d;
        t--;
        return c * (t * t * t + 1) + b;
    }

    requestAnimationFrame(animation);
}


// theme
const themeToggle = document.querySelector('.theme-btn');
themeToggle.addEventListener('click', darkMode);

// take current theme and seti it to browser local storage
const currentTheme = {
    onDarkMode: false
}
// if(localStorage.getItem('theme') === null){
//     localStorage.setItem('theme', JSON.stringify(currentTheme));
// }

// set to dark mode
function darkMode(e) {
    localStorage.removeItem('theme');
    currentTheme.onDarkMode = true;
    localStorage.setItem('theme', JSON.stringify(currentTheme));
}

// set to light mode
function lightMode(e) {
    localStorage.removeItem('theme');
    currentTheme.onDarkMode = false;
    localStorage.setItem('theme', JSON.stringify(currentTheme));
}


setInterval(() => {

    if (localStorage.getItem('theme') != null) {

        if (JSON.parse(localStorage.getItem('theme')).onDarkMode) {

            themeToggle.removeEventListener('click', darkMode);
            themeToggle.addEventListener('click', lightMode);

            document.body.classList.add('dark');
            themeToggle.firstElementChild.classList.add('on-dark');
            themeToggle.firstElementChild.firstElementChild.setAttribute('class', 'fas fa-moon');


        } else {

            themeToggle.removeEventListener('click', lightMode);
            themeToggle.addEventListener('click', darkMode);

            document.body.classList.remove('dark');
            themeToggle.firstElementChild.classList.remove('on-dark');
            themeToggle.firstElementChild.firstElementChild.setAttribute('class', 'fas fa-lightbulb');
        }
    }
}, 10)

















// parallax all content

window.addEventListener('scroll', (e) => {

    document.querySelectorAll('section').forEach(one => {
        one.setAttribute(`style`, `transform: translateY(${one.dataset.rate * window.pageYOffset}px);`);
    })

})

