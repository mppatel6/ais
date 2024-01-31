const url = "http://localhost:5100/api/Customer"
let Customers = []

async function login(){
    Customers = await getCustomers()
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    
}

async function getCustomers(){
    let response = await fetch(url)
    let customers = await response.json()

    return await customers
}

