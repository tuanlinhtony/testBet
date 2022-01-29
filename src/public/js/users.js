console.log("Client side javascript is loaded")

const addUserForm = document.querySelector('form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const age = document.querySelector('#age')
const balance = document.querySelector('#balance')



// const widhdrawalForm = document.querySelector('#widhdrawalForm')
// const withdrawalAmount = document.querySelector('#withdrawalAmount')

addUserForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = {
        name: username.value,
        email: email.value,
        age : age.value,
        balance: balance.value
    }
    fetch("/users/add", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
        console.log(location)
        response.json().then((data) =>{
            if(data.error){
                messageOne.textContent = data.error

            }else{
                console.log(data)
               
            }
        })
    })
    addUserForm.reset()
    window.location.reload()
})








