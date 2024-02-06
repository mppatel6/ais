const url = "http://localhost:5100/api/Journal"

async function createJournal(){
    let journals = await getJournals()
    let Message = document.getElementById('entryContent').value

    let customer = sessionStorage.getItem('id')
    
    let journal = {
        customer_id: customer,
        message: Message,
        date: document.getElementById('entryDate').value
    }

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