const url = "http://localhost:5100/api/Customer"

async function createAccount(){
    let customer = {
        customer_id: 0,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
    }

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(customer),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    if (response.ok) {
        alert("Account created successfully!")
        window.location.href = "signin.html"
    } else {
        alert("Account creation failed. Please try again.")
    }
}