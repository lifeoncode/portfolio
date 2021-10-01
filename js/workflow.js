
// when page successfully loads all the content
let loadingInterval = setInterval((e) => {
    if(document.readyState == 'complete'){
        // make sure header is visible
        header.classList.remove('hide');
        
        // the masking feature
        setTimeout(() => {
            document.querySelectorAll('.overlay').forEach(one => {
                one.classList.add('mask');

                setTimeout(() => {
                    one.nextElementSibling.style.opacity = '1';
                    one.classList.add('unmask');
                }, 800)
            })
            
        }, 500)
        
        clearInterval(loadingInterval);
    }
}, 100)


// check theme
setInterval(() => {
    if(document.body.className == 'dark'){
        
        document.querySelector('.js').setAttribute('src', '/assets/img/js-dark.png');
        document.querySelector('.py').setAttribute('src', '/assets/img/py-dark.png');
        document.querySelector('.scss').setAttribute('src', '/assets/img/scss-dark.png');
        document.querySelector('.git').setAttribute('src', '/assets/img/git-dark.png');
        document.querySelector('.linux').setAttribute('src', '/assets/img/linux-dark.png');
        document.querySelector('.node').setAttribute('src', '/assets/img/node-dark.png');
        document.querySelector('.figma').setAttribute('src', '/assets/img/figma-dark.png');
        document.querySelector('.incoming').setAttribute('src', '/assets/img/incoming-dark.png');
        
    }else{
        document.querySelector('.js').setAttribute('src', '/assets/img/js.png');
        document.querySelector('.py').setAttribute('src', '/assets/img/py.png');
        document.querySelector('.scss').setAttribute('src', '/assets/img/scss.png');
        document.querySelector('.git').setAttribute('src', '/assets/img/git.png');
        document.querySelector('.linux').setAttribute('src', '/assets/img/linux.png');
        document.querySelector('.node').setAttribute('src', '/assets/img/node.png');
        document.querySelector('.figma').setAttribute('src', '/assets/img/figma.png');
        document.querySelector('.incoming').setAttribute('src', '/assets/img/incoming.png');
    }
}, 500)