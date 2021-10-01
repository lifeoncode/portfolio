

// when page successfully loads all the content
let loadingInterval = setInterval((e) => {
    if (document.readyState == 'complete') {
        clearInterval(loadingInterval);

        // make sure header is visible
        header.classList.remove('hide');

        // show hero heading after 3 second
        setTimeout(() => {
            document.querySelectorAll('.hero .large-font').forEach(one => {
                one.classList.add('show');
            })
            document.querySelector('.hero .btn').classList.add('show');

        }, 4000)
    }
}, 100)



// check theme
setInterval(() => {
    if (document.body.className == 'dark') {

        document.querySelector('.hero .mock-a').setAttribute('src', '/assets/img/hero-mock-dark-1.png');
        document.querySelector('.hero .mock-b').setAttribute('src', '/assets/img/hero-mock-dark-2.png');

    } else {
        document.querySelector('.hero .mock-a').setAttribute('src', '/assets/img/hero-mock-1.png');
        document.querySelector('.hero .mock-b').setAttribute('src', '/assets/img/hero-mock-2.png');
    }
}, 500)








// call smoothScroll function when hero cta btn is clicked
document.querySelector('.hero .btn').addEventListener('click', (e) => {
    smoothScroll(document.querySelector('.work'), 2000);
});








// projects showcase animation on hover
const showcase = document.querySelectorAll('.work .screenshot');

showcase.forEach(one => {
    one.addEventListener('mouseover', (e) => {
        one.classList.add('on-hover');

        // after 1 second
        setTimeout(() => {
            one.firstElementChild.classList.add('popout');
        }, 1000)
    })

    one.addEventListener('mouseout', (e) => {
        one.firstElementChild.classList.remove('popout');

        // after 1 second
        setTimeout(() => {
            one.classList.remove('on-hover');
        }, 1000)
    })
})









// window scroll events
const heroHeading = document.querySelectorAll('.hero .large-font');
const heroBtn = document.querySelector('.hero .btn');

const aboutHeading = document.querySelectorAll('.about .big-font');
const [...aboutContent] = [document.querySelector('.about p'), document.querySelector('.about a')];

const workHeading = document.querySelectorAll('.work .big-font');
const projects = document.querySelectorAll('.showcase');
const [projectA, projectB, projectC] = [document.querySelector('#project-a'), document.querySelector('#project-b'), document.querySelector('#project-c')];

const ctaHeading = document.querySelectorAll('.call-to-action .big-font');
const ctaContent = document.querySelectorAll('.call-to-action .cta');

const skillsHeading = document.querySelectorAll('.skills .big-font');
const skillsContent = document.querySelectorAll('.skills .cta');

const blogHeading = document.querySelectorAll('.blog .big-font');
const blogContent = document.querySelector('.blog .articles');

const footerHeading = document.querySelector('footer h4');
const [...footerContent] = [document.querySelector('footer .links'), document.querySelector('footer .on-mobile')];

const designElements = document.querySelectorAll('.design-el');

// when the window scrolls
window.addEventListener('scroll', (e) => {

    let position = window.pageYOffset;

    // if screen height less than 540
    if (screen.height < 540) {

        if (position >= 30) {
            heroHeading.forEach(one => {
                one.classList.remove('show');
            })

            heroBtn.classList.remove('show');

            document.querySelectorAll('h2 .big-font').forEach(one => {
                one.classList.add('show');
            })

            aboutContent.forEach(one => {
                one.classList.add('show');
            })

            projects.forEach(one => {
                one.classList.add('show');
            })

            ctaContent.forEach(one => {
                one.classList.add('show');
            })

            skillsHeading.forEach(one => {
                one.classList.add('show');
            })

            skillsContent.forEach(one => {
                one.classList.add('show');
            })

            blogContent.classList.add('show');

            footerHeading.classList.add('show');
            footerContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            heroHeading.forEach(one => {
                one.classList.add('show');
            })

            heroBtn.classList.add('show');

            document.querySelectorAll('h2 .big-font').forEach(one => {
                one.classList.remove('show');
            })

            aboutContent.forEach(one => {
                one.classList.remove('show');
            })

            projects.forEach(one => {
                one.classList.remove('show');
            })

            ctaContent.forEach(one => {
                one.classList.remove('show');
            })


            skillsHeading.forEach(one => {
                one.classList.remove('show');
            })

            skillsContent.forEach(one => {
                one.classList.remove('show');
            })

            blogContent.classList.remove('show');

            footerHeading.classList.remove('show');
            footerContent.forEach(one => {
                one.classList.remove('show');
            })
        }
    }








    // if screen height is between 540 and 640
    if (screen.height >= 540 && screen.height < 640) {

        // hide hero heading at scroll position 60
        if (position >= 60) {
            heroHeading.forEach(one => {
                one.classList.remove('show');
            })

        } else {
            heroHeading.forEach(one => {
                one.classList.add('show');
            })
        }



        // show about heading at scroll position 300
        if (position >= 300) {
            // hero section button
            heroBtn.classList.remove('show');
            // about section heading
            aboutHeading.forEach(one => {
                one.classList.add('show');
            })
            // about section content
            aboutContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            // hero section button
            heroBtn.classList.add('show');
            // about section heading
            aboutHeading.forEach(one => {
                one.classList.remove('show');
            })
            // about section content
            aboutContent.forEach(one => {
                one.classList.remove('show');
            })
        }




        // show work section heading at scroll position 750
        if (position >= 750) {
            workHeading.forEach(one => {
                one.classList.add('show');
            })
            projects.forEach(one => {
                one.classList.add('show');
            })

        } else {
            workHeading.forEach(one => {
                one.classList.remove('show');
            })
            projects.forEach(one => {
                one.classList.remove('show');
            })
        }




        // show cta section at scroll position 1650
        if (position >= 1650) {
            ctaHeading.forEach(one => {
                one.classList.add('show');
            })
            ctaContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            ctaHeading.forEach(one => {
                one.classList.remove('show');
            })
            ctaContent.forEach(one => {
                one.classList.remove('show');
            })
        }





        // show skilss section at scroll position 1960
        if (position >= 1960) {
            skillsHeading.forEach(one => {
                one.classList.add('show');
            })

            skillsContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            skillsHeading.forEach(one => {
                one.classList.remove('show');
            })

            skillsContent.forEach(one => {
                one.classList.remove('show');
            })
        }





        // show blog section at scroll position 2140
        if (position >= 2140) {
            blogHeading.forEach(one => {
                one.classList.add('show');
            })

            blogContent.classList.add('show');

        } else {
            blogHeading.forEach(one => {
                one.classList.remove('show');
            })

            blogContent.classList.remove('show');
        }




        // show footer section at scroll position 2560
        if (position >= 2560) {
            footerHeading.classList.add('show');
            footerContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            footerHeading.classList.remove('show');
            footerContent.forEach(one => {
                one.classList.remove('show');
            })
        }
    }







    // if screen height is between 640 and 760
    if (screen.height >= 640 && screen.height < 760) {

        // hide hero heading at scroll position 60
        if (position >= 60) {
            heroHeading.forEach(one => {
                one.classList.remove('show');
            })

        } else {
            heroHeading.forEach(one => {
                one.classList.add('show');
            })
        }



        // show about heading at scroll position 250
        if (position >= 250) {
            // hero section button
            heroBtn.classList.remove('show');
            // about section heading
            aboutHeading.forEach(one => {
                one.classList.add('show');
            })
            // about section content
            aboutContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            // hero section button
            heroBtn.classList.add('show');
            // about section heading
            aboutHeading.forEach(one => {
                one.classList.remove('show');
            })
            // about section content
            aboutContent.forEach(one => {
                one.classList.remove('show');
            })
        }




        // show work section heading at scroll position 600
        if (position >= 600) {
            workHeading.forEach(one => {
                one.classList.add('show');
            })
            projects.forEach(one => {
                one.classList.add('show');
            })

        } else {
            workHeading.forEach(one => {
                one.classList.remove('show');
            })
            projects.forEach(one => {
                one.classList.remove('show');
            })
        }




        // show cta section at scroll position 1650
        if (position >= 1650) {
            ctaHeading.forEach(one => {
                one.classList.add('show');
            })
            ctaContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            ctaHeading.forEach(one => {
                one.classList.remove('show');
            })
            ctaContent.forEach(one => {
                one.classList.remove('show');
            })
        }




        // show skills section at scroll position 1900
        if (position >= 1900) {
            skillsHeading.forEach(one => {
                one.classList.add('show');
            })

            skillsContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            skillsHeading.forEach(one => {
                one.classList.remove('show');
            })

            skillsContent.forEach(one => {
                one.classList.remove('show');
            })
        }




        // show blog section at scroll position 2180
        if (position >= 2180) {
            blogHeading.forEach(one => {
                one.classList.add('show');
            })

            blogContent.classList.add('show');

        } else {
            blogHeading.forEach(one => {
                one.classList.remove('show');
            })

            blogContent.classList.remove('show');
        }




        // show footer section at scroll position 2450
        if (position >= 2450) {
            footerHeading.classList.add('show');
            footerContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            footerHeading.classList.remove('show');
            footerContent.forEach(one => {
                one.classList.remove('show');
            })
        }
    }







    // if screen height is between 740 and 800
    if (screen.height >= 760 && screen.height < 800) {

        // hide hero heading at scroll position 60
        if (position >= 60) {
            heroHeading.forEach(one => {
                one.classList.remove('show');
            })

        } else {
            heroHeading.forEach(one => {
                one.classList.add('show');
            })
        }



        // show about heading at scroll position 360
        if (position >= 360) {
            // hero section button
            heroBtn.classList.remove('show');
            // about section heading
            aboutHeading.forEach(one => {
                one.classList.add('show');
            })
            // about section content
            aboutContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            // hero section button
            heroBtn.classList.add('show');
            // about section heading
            aboutHeading.forEach(one => {
                one.classList.remove('show');
            })
            // about section content
            aboutContent.forEach(one => {
                one.classList.remove('show');
            })
        }




        // show work section heading at scroll position 950
        if (position >= 950) {
            workHeading.forEach(one => {
                one.classList.add('show');
            })
            projects.forEach(one => {
                one.classList.add('show');
            })

        } else {
            workHeading.forEach(one => {
                one.classList.remove('show');
            })
            projects.forEach(one => {
                one.classList.remove('show');
            })
        }




        // show cta section at scroll position 2920
        if (position >= 2920) {
            ctaHeading.forEach(one => {
                one.classList.add('show');
            })
            ctaContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            ctaHeading.forEach(one => {
                one.classList.remove('show');
            })
            ctaContent.forEach(one => {
                one.classList.remove('show');
            })
        }





        // show skills section at scroll position 3200
        if (position >= 3200) {
            skillsHeading.forEach(one => {
                one.classList.add('show');
            })
            skillsContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            skillsHeading.forEach(one => {
                one.classList.remove('show');
            })
            skillsContent.forEach(one => {
                one.classList.remove('show');
            })
        }





        // show blog section at scroll position 3550
        if (position >= 3700) {
            blogHeading.forEach(one => {
                one.classList.add('show');
            })

            blogContent.classList.add('show');

        } else {
            blogHeading.forEach(one => {
                one.classList.remove('show');
            })

            blogContent.classList.remove('show');
        }




        // show footer section at scroll position 4100
        if (position >= 4100) {
            footerHeading.classList.add('show');
            footerContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            footerHeading.classList.remove('show');
            footerContent.forEach(one => {
                one.classList.remove('show');
            })
        }
    }





    // if screen height is between 740 and 840
    if (screen.height >= 800 && screen.height < 900) {

        // hide hero heading at scroll position 60
        if (position >= 60) {
            heroHeading.forEach(one => {
                one.classList.remove('show');
            })
            // hero section button
            heroBtn.classList.remove('show');

        } else {
            heroHeading.forEach(one => {
                one.classList.add('show');
            })
            // hero section button
            heroBtn.classList.add('show');
        }



        // show about heading at scroll position 100
        if (position >= 60) {
            // about section heading
            aboutHeading.forEach(one => {
                one.classList.add('show');
            })
            // about section content
            aboutContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            // about section heading
            aboutHeading.forEach(one => {
                one.classList.remove('show');
            })
            // about section content
            aboutContent.forEach(one => {
                one.classList.remove('show');
            })
        }




        // show work section heading at scroll position 500
        if (position >= 500) {
            workHeading.forEach(one => {
                one.classList.add('show');
            })
            projects.forEach(one => {
                one.classList.add('show');
            })

        } else {
            workHeading.forEach(one => {
                one.classList.remove('show');
            })
            projects.forEach(one => {
                one.classList.remove('show');
            })
        }




        // show cta section at scroll position 1580
        if (position >= 1580) {
            ctaHeading.forEach(one => {
                one.classList.add('show');
            })
            ctaContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            ctaHeading.forEach(one => {
                one.classList.remove('show');
            })
            ctaContent.forEach(one => {
                one.classList.remove('show');
            })
        }




        // show skills section at scroll position 1760
        if (position >= 1760) {
            skillsHeading.forEach(one => {
                one.classList.add('show');
            })

            skillsContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            skillsHeading.forEach(one => {
                one.classList.remove('show');
            })

            skillsContent.forEach(one => {
                one.classList.remove('show');
            })
        }




        // show blog section at scroll position 2100
        if (position >= 2100) {
            blogHeading.forEach(one => {
                one.classList.add('show');
            })

            blogContent.classList.add('show');

        } else {
            blogHeading.forEach(one => {
                one.classList.remove('show');
            })

            blogContent.classList.remove('show');
        }




        // show footer section at scroll position 2400
        if (position >= 2400) {
            footerHeading.classList.add('show');
            footerContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            footerHeading.classList.remove('show');
            footerContent.forEach(one => {
                one.classList.remove('show');
            })
        }
    }







    // if screen height is between 740 and 840
    if (screen.height >= 900 && screen.height < 1040) {

        // hide hero heading at scroll position 60
        if (position >= 60) {
            heroHeading.forEach(one => {
                one.classList.remove('show');
            })
            // hero section button
            heroBtn.classList.remove('show');

        } else {
            heroHeading.forEach(one => {
                one.classList.add('show');
            })
            // hero section button
            heroBtn.classList.add('show');
        }



        // show about heading at scroll position 100
        if (position >= 10) {

            // about section heading
            aboutHeading.forEach(one => {
                one.classList.add('show');
            })
            // about section content
            aboutContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            // about section heading
            aboutHeading.forEach(one => {
                one.classList.remove('show');
            })
            // about section content
            aboutContent.forEach(one => {
                one.classList.remove('show');
            })
        }




        // show work section heading at scroll position 500
        if (position >= 400) {
            workHeading.forEach(one => {
                one.classList.add('show');
            })
            projects.forEach(one => {
                one.classList.add('show');
            })

        } else {
            workHeading.forEach(one => {
                one.classList.remove('show');
            })
            projects.forEach(one => {
                one.classList.remove('show');
            })
        }




        // show cta section at scroll position 2100
        if (position >= 1400) {
            ctaHeading.forEach(one => {
                one.classList.add('show');
            })
            ctaContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            ctaHeading.forEach(one => {
                one.classList.remove('show');
            })
            ctaContent.forEach(one => {
                one.classList.remove('show');
            })
        }




        // show skills section at scroll position 2360
        if (position >= 1600) {
            skillsHeading.forEach(one => {
                one.classList.add('show');
            })

            skillsContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            skillsHeading.forEach(one => {
                one.classList.remove('show');
            })

            skillsContent.forEach(one => {
                one.classList.remove('show');
            })
        }




        // show blog section at scroll position 2660
        if (position >= 1800) {
            blogHeading.forEach(one => {
                one.classList.add('show');
            })

            blogContent.classList.add('show');

        } else {
            blogHeading.forEach(one => {
                one.classList.remove('show');
            })

            blogContent.classList.remove('show');
        }




        // show footer section at scroll position 3000
        if (position >= 2000) {
            footerHeading.classList.add('show');
            footerContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            footerHeading.classList.remove('show');
            footerContent.forEach(one => {
                one.classList.remove('show');
            })
        }
    }








    // if screen height is more than 1040
    if (screen.height >= 1040) {

        // hide hero heading at scroll position 60
        if (position >= 50) {
            heroHeading.forEach(one => {
                one.classList.remove('show');
            })
            // hero section button
            heroBtn.classList.remove('show');

        } else {
            heroHeading.forEach(one => {
                one.classList.add('show');
            })
            // hero section button
            heroBtn.classList.add('show');
        }



        // show about heading at scroll position 100
        if (position >= 0) {

            // about section heading
            aboutHeading.forEach(one => {
                one.classList.add('show');
            })
            // about section content
            aboutContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            // about section heading
            aboutHeading.forEach(one => {
                one.classList.remove('show');
            })
            // about section content
            aboutContent.forEach(one => {
                one.classList.remove('show');
            })
        }




        // show work section heading at scroll position 500
        if (position >= 100) {
            workHeading.forEach(one => {
                one.classList.add('show');
            })
            projects.forEach(one => {
                one.classList.add('show');
            })

        } else {
            workHeading.forEach(one => {
                one.classList.remove('show');
            })
            projects.forEach(one => {
                one.classList.remove('show');
            })
        }




        // show cta section at scroll position 520
        if (position >= 2300) {
            ctaHeading.forEach(one => {
                one.classList.add('show');
            })
            ctaContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            ctaHeading.forEach(one => {
                one.classList.remove('show');
            })
            ctaContent.forEach(one => {
                one.classList.remove('show');
            })
        }




        // show skills section at scroll position 2660
        if (position >= 2660) {
            skillsHeading.forEach(one => {
                one.classList.add('show');
            })

            skillsContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            skillsHeading.forEach(one => {
                one.classList.remove('show');
            })

            skillsContent.forEach(one => {
                one.classList.remove('show');
            })
        }




        // show blog section at scroll position 3100
        if (position >= 3100) {
            blogHeading.forEach(one => {
                one.classList.add('show');
            })

            blogContent.classList.add('show');

        } else {
            blogHeading.forEach(one => {
                one.classList.remove('show');
            })

            blogContent.classList.remove('show');
        }




        // show footer section at scroll position 3400
        if (position >= 3400) {
            footerHeading.classList.add('show');
            footerContent.forEach(one => {
                one.classList.add('show');
            })

        } else {
            footerHeading.classList.remove('show');
            footerContent.forEach(one => {
                one.classList.remove('show');
            })
        }
    }














    // parallaxing
    designElements.forEach(one => {
        let currentPosition = position * one.dataset.rate;
        one.setAttribute(`style`, `transform: translateY(${currentPosition}px);`);
    })

})
