const url = "https://aisapi-3933831f6e69.herokuapp.com/api/customer"

async function createAccount(){
    let customers = await getCustomers()
    let email = document.getElementById('email').value

    let customer = {
        customer_id: 0,
        email: email,
        password: document.getElementById('password').value,
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
    }

    let foundAccount = false

    customers.forEach(function(a){
        if(email == a.email){
            alert("This email already has an account")
            foundAccount = true
        }
    })

    if(foundAccount == false){
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(customer),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    
        if (response.ok) {
            alert("Account created successfully!")
        } else {
            alert("Account creation failed. Please try again.")
        }
        let myModal = new bootstrap.Modal(document.getElementById('signUpModal'));
        myModal.show();
    }
    
}

async function nextPage(){
    window.location.href='signin.html';
}

async function getCustomers(){
    let response = await fetch(url)
    let customers = await response.json()

    return await customers
}

