
let loadingInterval = setInterval(() => {
    if(document.readyState == 'complete'){
        // make sure header is visible
        document.querySelector('header').classList.remove('hide');
        clearInterval(loadingInterval);
    }
})

// sending message
const toName = document.querySelector('#to-name');
const fromName = document.querySelector('#from-name');
const msg = document.querySelector('#message');
const output = document.querySelector('#output');
const sendBtn = document.querySelector('#send');

// 
fromName.addEventListener('keyup', (e) => {
    toName.value = 'nduduzo';
})
fromName.addEventListener('focus', clearError);
msg.addEventListener('focus', clearError);

function clearError(e){
    output.className = '';
    output.textContent = null;
}

sendBtn.addEventListener('click', sendEmail);

function sendEmail(e){
    if(fromName.value === '' || msg.value === ''){
        output.classList.add('error');
        output.textContent = 'All fields are required';

    }else if(fromName.value.indexOf('@') === -1 || fromName.value.indexOf('.') === -1){
        output.classList.add('error');
        output.textContent = "That doesn't look like an email";

    }else{

        let tempParams = {
            from_name: fromName.value,
            to_name: toName.value,
            message: msg.value,
        }
    
        emailjs.send('service_qb5ttty', 'template_ex0b9vs', tempParams)
        .then(function(res){
            output.className = 'success';
            output.textContent = `Message sent`;

            setTimeout(() => {
                document.querySelectorAll('input').forEach(one => {
                    one.value = null;
                })
                msg.value = null;
            }, 3000);
        })

    }
}