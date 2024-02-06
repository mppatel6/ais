const url = "http://localhost:5100/api/Journal"

async function createJournal(){
    let journals = await getJournals()

    let customer = sessionStorage.getItem('id')
    
    let journal = {
        journal_id: 1,
        customer_id: customer,
        date: document.getElementById('date').value,
        message: document.getElementById('message').value
    }
console.log(journal)

    if(journal){

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(journal),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    
        if (response.ok) {
            alert("Journal created successfully!")
        } else {
            alert("Journal creation failed. Please try again.")
        }
    }
    
}

async function getJournals(){
    let response = await fetch(url)
    let journals = await response.json()

    return await journals
}