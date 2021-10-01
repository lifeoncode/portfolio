const overlay = document.querySelectorAll('.wrap-heading .overlay');

// when page successfully loads all the content
let loadingInterval = setInterval((e) => {
    if(document.readyState == 'complete'){
        clearInterval(loadingInterval);

        // make sure header is visible
        header.classList.remove('hide');

        // the masking feature
        setTimeout(() => {

            document.querySelectorAll('.large-font').forEach(one => {
                one.classList.add('loaded');
            })
            
            setTimeout(() => {
                document.querySelectorAll('.text').forEach(one => {
                    one.classList.add('loaded');
                })
                
                overlay.forEach(one => {
                    one.classList.add('mask');
    
                    setTimeout(() => {
                        one.nextElementSibling.style.opacity = '1';
                        one.classList.add('unmask');
                    }, 800)
                })
            }, 2000)
            
        }, 4000)

    }
}, 100)
