
// when page successfully loads all the content
let loadingInterval = setInterval((e) => {
    if(document.readyState == 'complete'){
        clearInterval(loadingInterval);

        // make sure header is visible
        header.classList.remove('hide');

        // set big heading to background and show paragraphs
        setTimeout(() => {
            document.querySelectorAll('.large-font').forEach(one => {
                one.classList.add('loaded');
            })

            setTimeout(() => {
                document.querySelectorAll('p').forEach(one => {
                    one.classList.add('loaded');
                })
        
                
            }, 1000)
            
        }, 4000)
        
    }
}, 100)

