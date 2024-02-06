/* globals Chart:false */

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
            15339,
            21345,
            18483,
            24003,
            23489,
            24092,
            12034
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

  async function generateResponse(){
    let text = document.getElementById("chat-text").value
    console.log(text)
    const url = "http://localhost:5100/api/Chat"
  
    let response = await fetch(url,{  //post announcement to database
      method: "POST",
      body: JSON.stringify(text),
      headers:{
          "Content-type": "application/json; charset=UTF-8"
      }
    })
    let response2 = await response.json()
    // console.log(response2)
    console.log(response2.choices[0].message.content)
  
    gptresponse = response2.choices[0].message.content
  
    document.getElementById("chatter").innerHTML += `\n\n`;
    document.getElementById("chatter").innerHTML += text;
    document.getElementById("chatter").innerHTML += `\n\n`;
    document.getElementById("chatter").innerHTML += gptresponse
  
    // const url1 = "http://localhost:5100/api/Customer"
    // let response1 = await fetch(url1)
    // let data = await response1.json()
    // console.log(data)
    // const url = "http://localhost:5100/api/Chat"
    // let response = await fetch(url)
    // let data1 = await response.json()
    // console.log(data1)
  }

  