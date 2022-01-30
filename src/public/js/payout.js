console.log("Client side javascript is loaded")

const widhdrawalForm = document.querySelector('form')
const withdrawalAmount = document.querySelector('#withdrawalAmount')
const selectUser = document.querySelector('#selectUser')

const url = document.querySelector('#url')
const merchantid = document.querySelector('#merchantid')
const bankName = document.querySelector('#bankName')
const accountNumber = document.querySelector('#accountNumber')
const amount = document.querySelector('#amount')
const sign = document.querySelector('#sign')
const channel = document.querySelector('#channel')
const ipAddress = document.querySelector('#ipAddress')



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
    const position = selectUser.value.search('/')
    const userid = selectUser.value.substring(position+1)
    

    const data = {
        url: url.value,
        userid: userid,
        merchantid: merchantid.value,
        bankName : bankName.value,
        accountNumber : accountNumber.value,
        accountName : accountName.value,
        amount : amount.value,
        sign : sign.value,
        channel : channel.value,
        ipAddress : ipAddress.value,
    }

    fetch("/fundtransfer", {
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
    widhdrawalForm.reset()
})
