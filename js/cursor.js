
// const cursorPointer = document.querySelector('.pointer');
// const cursorBorder = document.querySelector('.border');
const cursor = document.querySelectorAll('.cursor');

window.addEventListener('mousemove', (e) => {
    // cursorPointer.setAttribute(`style`, `top:${e.pageY}px; left:${e.pageX}px;`);
    // cursorBorder.setAttribute(`style`, `top:${e.pageY}px; left:${e.pageX}px;`);

    cursor.forEach(one => {
        one.setAttribute(`style`, `top:${e.pageY}px; left:${e.pageX}px;`);
    })
})


// when the cursor hovers over a clickable element
document.querySelectorAll('.clickable').forEach(one => {
    one.addEventListener('mouseover', (e) => {
        cursor.forEach(one => {
            one.classList.add('on-link');
        })
    })

    one.addEventListener('mouseout', (e) => {
        cursor.forEach(one => {
            one.classList.remove('on-link');
        })
    })
})


// when clicking
document.addEventListener('click', (e) => {
    cursor.forEach(one => {
        one.classList.add('on-click');

        setTimeout(() => {
            one.classList.remove('on-click');
        }, 300)
    })
})