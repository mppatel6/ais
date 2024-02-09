/* globals Chart:false */
async function handleOnLoad(){
  const url = "https://aisapi-3933831f6e69.herokuapp.com/api/chat";
  text = `You are a helpful and joyous mental therapy assistant. Always answer as helpfully and cheerfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content.Please ensure that your responses are socially unbiased and positive in nature.
  If a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.`
  let promptresponse = await fetch(url, {
        method: "POST",
        body: JSON.stringify(text),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
  let gptresponse = await promptresponse.json();
  let response = gptresponse.choices[0].message.content
  console.log(response);
}


(() => {
    'use strict'
  
    // Graphs
    const ctx = document.getElementById('myChart')
    // eslint-disable-next-line no-unused-vars
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        datasets: [{
          data: [
            15.3,
            21.3,
            18.4,
            24.0,
            23.4,
            24.0,
            12.0
          ],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            boxPadding: 3
          }
        }
      }
    })
  })()



  function trackMood() {
    // var selectedMood = document.getElementById('mood').value;
    var userMessage = document.getElementById('message').value;

    // You can add your logic to handle the mood and message data
    

    if (recordedButtonId) {
      // Set the recorded button ID to the hidden input field before submitting the form
      // document.getElementById('buttonIdInput').value = recordedButtonId;
      console.log("Form submitted with Button ID:", recordedButtonId);
    } else {
      console.error("Please press a button before submitting the form.");
    }
    // console.log('Mood:', selectedMood);
    console.log('Message:', userMessage);
}

let recordedButtonId;

  function recordButtonId(buttonId) {
    recordedButtonId = buttonId;
    console.log("Button ID recorded:", recordedButtonId);
    document.getElementById(buttonId).style.backgroundColor = "#f4a616";
  }

  
  async function generateResponse() {
    // Get user input
    let text = document.getElementById("chat-text").value.trim();
    
    // Check if input is empty
    if (text === "") {
        return;
    }

    // Clear input field
    document.getElementById("chat-text").value = "";

    // Append user message
    appendMessage(text, "user");

    // Fetch response from server
    const url = "https://aisapi-3933831f6e69.herokuapp.com/api/chat";
    let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(text),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    let response2 = await response.json();
    let gptresponse = response2.choices[0].message.content;

    console.log(gptresponse)
    // Append bot response
    appendMessage(gptresponse, "bot");

    // Scroll to bottom of chat
    scrollToBottom();
}

// function appendMessage(message, sender) {
//     const messageContainer = document.getElementById("chatter");

//     // Create message element
//     const messageElement = document.createElement("div");
//     messageElement.classList.add("message", sender);

//     // Set message text
//     messageElement.innerText = message;

//     // Append message element to container
//     messageContainer.appendChild(messageElement);
// }


// function appendMessage(message, sender) {
//   const messageContainer = document.getElementById("chatter");
  
//   // Create message HTML
//   const messageHTML = `<div class="message ${sender}">${message}</div>`;
  
//   // Append message HTML to container
//   messageContainer.insertAdjacentHTML('beforeend', messageHTML);
// }


function appendMessage(message, sender) {
  const messageContainer = document.getElementById("chatter");

  // Create text node with the message
  messageContainer.appendChild(document.createElement("br"));
  const messageTextNode = document.createTextNode("\n\n" + message);


  messageContainer.appendChild(document.createElement("br"));
  // Append message text node to container
  messageContainer.appendChild(messageTextNode);

  // Append line break for better readability
  messageContainer.appendChild(document.createElement("br"));
  messageContainer.appendChild(document.createElement("br"));
}


function scrollToBottom() {
    const messageContainer = document.getElementById("chatter");
    messageContainer.scrollTop = messageContainer.scrollHeight;
}
