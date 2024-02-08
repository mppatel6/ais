const url = "https://aisapi-3933831f6e69.herokuapp.com/api/customer"

async function login(){
    let customers = await getCustomers()
    console.log(customers)
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let id;

    let foundAccount = false

    customers.forEach(function(a){
        if(email == a.email && password == a.password && email != '' && password != ''){
            foundAccount = true
            id = a.customer_id
            
        }
    })

    if(foundAccount){
        console.log('you entered correct info')
        sessionStorage.setItem('account', email)
        sessionStorage.setItem('id', id)

        window.location.href = "dashboard.html"
 
    } else console.log('INVALID LOGIN')
}

async function getCustomers(){
    let response = await fetch(url)
    let customers = await response.json()

    return await customers
}

