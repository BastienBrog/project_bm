if (document.getElementById('connexion')){
const oneSecondInMillisecond = 1000
const email = "prof@lp.wd"
const password = 'password'

const onLoginFormSubmit = e => {
    e.preventDefault();

    startPendingState()

    setTimeout(() => {
        stopPendingState()

        const data = new FormData(e.target)
        processDataForm(data)

    }, oneSecondInMillisecond)
}

const startPendingState = () =>{
    const button = document.querySelector('#login')
    button.setAttribute('disabled', '')
}

const processDataForm = data => {
    if (data.get('mdp') === password || data.get('mail') === email){
        handleSuccessMessage()
    } else {
        handleErrorMessage()
    }
}

const handleErrorMessage = () => {
    document.querySelector('#messageerror').style.display="block";
}

const handleSuccessMessage = () => {
    document.querySelector('#messageok').style.display="block";
}

const stopPendingState = () => {
    const button = document.querySelector('#login')
    button.removeAttribute('disabled')
}
document.querySelector('#connexion_form').addEventListener('submit', onLoginFormSubmit);
}