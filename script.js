const encryptBtn = document.querySelector('.encrypt-btn')
const decryptBtn = document.querySelector('.decrypt-btn')

encryptBtn.addEventListener('click', () => {
    const msg = document.querySelector('.js-input').value
    const key = parseInt(document.querySelector('.js-numb').value)

    if(msg !== '' & key !== ""){
        var newMsg = '';

        for(let k=0; k < msg.length; k++){
            var x = msg.charCodeAt(k) + key
            newMsg += String.fromCharCode(x)
        }

        document.querySelector('.new-msg').innerHTML = `
            <h2>Encrypt Message</h2>
            <p>${newMsg}</p>
        `
    } else {
        alert('Please Enter Message and Key!!')
    }
})

decryptBtn.addEventListener('click', () => {
    const msg = document.querySelector('.js-input').value
    const key = parseInt(document.querySelector('.js-numb').value)

    if(msg !== '' & key !== ""){
        var newMsg = '';

        for(let k=0; k < msg.length; k++){
            var x = msg.charCodeAt(k) - key
            newMsg += String.fromCharCode(x)
        }

        document.querySelector('.new-msg').innerHTML = `
            <h2>Decrypt Message</h2>
            <p>${newMsg}</p>
        `
    } else {
        alert('Please Enter Message and Key!!')
    }
})