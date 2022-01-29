console.log("Client side javascript is loaded")

const widhdrawalForm = document.querySelector('form')
const withdrawalAmount = document.querySelector('#withdrawalAmount')
const selectUser = document.querySelector('#selectUser')

// show Available Amount
selectUser.addEventListener('change', (e) => {
    // Create our number formatter.
    const formatter = new Intl.NumberFormat('vi-US', {
        style: 'currency',
        currency: 'VND',
    
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
        })
    console.log(selectUser.value)
    const position = selectUser.value.search('/')
    const amountValue = formatter.format(selectUser.value.substring(0, position))

    const amountAvailable = document.querySelector('#amountAvailable')
    amountAvailable.textContent = amountValue
})

widhdrawalForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = {
        userid: username.value,
        email: email.value,
        age : age.value,
        balance: balance.value
    }
})
