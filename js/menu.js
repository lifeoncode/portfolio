// menu
const [hamburger, menu, menuLinks] = [document.querySelector('.hamburger'), document.querySelector('.menu'), document.querySelectorAll('.menu a')];

// when hamburger is hovered
hamburger.addEventListener('mouseover', (e) => {
    hamburger.firstElementChild.nextElementSibling.classList.add('onhover');
    hamburger.lastElementChild.classList.add('onhover');
})
hamburger.addEventListener('mouseout', (e) => {
    hamburger.firstElementChild.nextElementSibling.classList.remove('onhover');
    hamburger.lastElementChild.classList.remove('onhover');
})

// when hamburger is clicked
hamburger.addEventListener('click', openMenu);
// when menu link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
})

// open
function openMenu(e){
    document.querySelectorAll('.hamburger div').forEach(one => {
        one.classList.add('menu-open');
    })
    document.querySelector('.logo').classList.add('menu-open');
    menu.classList.add('open');
    document.querySelectorAll('.cursor').forEach(one => {
        one.classList.add('on-menu');
    })

    setTimeout(() => {
        menu.classList.add('stretch');
        document.querySelector('.menu .line').classList.add('loaded');
        header.classList.add('menu-open');

        setTimeout(() => {
            menuLinks.forEach(link => {
                link.classList.add('loaded');
            })
        }, 500)
        
    }, 500)
    
    hamburger.removeEventListener('click', openMenu);
    hamburger.addEventListener('click', closeMenu);
}

// close
function closeMenu(e){
    document.querySelectorAll('.hamburger div').forEach(one => {
        one.classList.remove('menu-open');
    })
    document.querySelector('.logo').classList.remove('menu-open');
    document.querySelector('.menu .line').classList.remove('loaded');
    document.querySelectorAll('.cursor').forEach(one => {
        one.classList.remove('on-menu');
    })


    menuLinks.forEach(link => {
        link.classList.remove('loaded');
    })

    setTimeout(() =>{
        menu.classList.remove('stretch');
        header.classList.remove('menu-open');

        setTimeout(() => {
            menu.classList.remove('open');
        }, 500)
    }, 1000)

    hamburger.removeEventListener('click', closeMenu);
    hamburger.addEventListener('click', openMenu);
}


