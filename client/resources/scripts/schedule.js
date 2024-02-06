let app = document.getElementById("app")
let timeUrl = "http://localhost:5100/GetTime"

async function handleOnLoad(){  
    
    
    let html = `
     <div class="content">
            <div id='calendar'></div>
        </div>`

    document.getElementById('app').innerHTML = html;
    loadCalendar();
}

async function seeGames(num){
    let team = document.getElementById('addteam'+num).value
    console.log(team)

    let response = await fetch("http://localhost:5269/GetTeams/" +team)
    let data = await response.json();
    console.log(data)

    const results = await Promise.all(data.map(async function(e) {
    let responses = await fetch(teamUrl + "/" + e.teamid); // get the most up-to-date data from SQL
    let team = await responses.json();
    let responses2 = await fetch(teamUrl + "/" + e.opposingteamid); // get the most up-to-date data from SQL
    let team2 = await responses2.json();
    return { title: team.teamname + " vs " + team2.teamname,
                start: e.date,
                id: e.id};
    }));
    console.log(results)
   
    let html = ``

    results.forEach(function(e){
        html += `<p class = "team-text">${e.title}, ${e.start}</p>`
    })

    document.getElementById('teamlist').innerHTML = html
}

async function loadCalendar() {
    let response = await fetch(timeUrl)
    let currentDateTime = await response.text()
    let currentDate = currentDateTime.split(' ')[0]
    // let results = await fetchData()
    let results = { title: "bruh",
    start: 2-6-2024,
    id: 1};

    var calendarEl = document.getElementById('calendar');
    
    if (calendarEl && calendarEl.innerHTML !== '') {
        calendarEl.innerHTML = '';
    }

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['interaction', 'dayGrid'],
        defaultDate: currentDate,
        editable: false,
        eventLimit: true,
        events: results
    });

    calendar.render();
}

async function handleClick(title){
    console.log("Clicked")
    let text = title.split(' vs ')
    console.log(text)
    let results = await fetchData()
    let gameid
    results.forEach(function(e){
        if(e.title == title){
            gameid = e
        }
    })
    let responses = await fetch(url + "/" + gameid.id); //get the most up-to date data from sql 
    let game = await responses.json();

    let popupContainer = document.createElement('div');
    popupContainer.id = 'popup-container';
    
    let popupContent = document.createElement('div');
    popupContent.id = 'popup-content';
    
    let html = `<h2>${title}</h2>
    <p>Date: ${game.date}</p>
    <p>Time: ${game.time}</p>
    <p>Location: ${game.location}</p>
    <button class = "tsa-btn" onclick="closePopup()">Close</button>`
    if (retrievedBooleanValue ==="true"){
        html+= `&nbsp<button class = "tsa-btn" style = "background-color: rgb(178, 229, 201);
        border-color: rgb(178, 229, 201);
        color: black;" onclick= \'editGame(${JSON.stringify(game)})\'>Edit</button>&nbsp<button class = "tsa-btn" style = "background-color: rgb(178, 229, 201);
        border-color: rgb(178, 229, 201);
        color: black;"onclick= \'deleteGame(${JSON.stringify(game)})\'>Delete</button>`
    }
    popupContent.innerHTML = html;
    popupContainer.appendChild(popupContent);
    document.body.appendChild(popupContainer);
}

async function getTeamName(game){
    let responses = await fetch(teamUrl + "/" + game.teamid); // get the most up-to-date data from SQL
    let team = await responses.json();
    let responses2 = await fetch(teamUrl + "/" + game.opposingteamid); // get the most up-to-date data from SQL
    let team2 = await responses2.json();
    return { title: team.teamname + " vs " + team2.teamname,
            start: game.date,
            id: game.id};
}
async function deleteGame(game){
    closePopup()
    let popupContainer = document.createElement('div');
    popupContainer.id = 'popup-container3';
    
    let popupContent = document.createElement('div');
    popupContent.id = 'popup-content3';
    
    const results = await getTeamName(game)
    console.log(results)
    
    let html = `<p>Are you sure you would like to delete:</p>
    <p>Game: ${results.title}</p>
    <p>Date: ${results.start}</p>
    <button onclick=\'handleDelete(${results.id})\' class = "btn tsa-btn" style = "background-color: rgb(178, 229, 201);
    border-color: rgb(178, 229, 201);
    color: black;">Yes Delete</button><button class = "btn tsa-btn" style = "background-color: rgb(178, 229, 201);
    border-color: rgb(178, 229, 201);
    color: black;"onclick = "closePopup3()">Cancel Delete</button>`
  

    popupContent.innerHTML = html;
    popupContainer.appendChild(popupContent);
    document.body.appendChild(popupContainer);
}

async function handleDelete(id){
    await fetch(url +"/" +id,{
        method: "DELETE"
      })
      closePopup3()
      loadCalendar()
}

function editGame(game){
    localStorage.setItem('editEntryID', game.id);

    console.log(game)
    let popupContainer = document.createElement('div');
    popupContainer.id = 'popup-container2';
    
    let popupContent = document.createElement('div');
    popupContent.id = 'popup-content2';
    
    let html = `<div>
    <form onsubmit = "return false">
              <label class = "starlabel" for="date">Date: </label><br>
              <input type="date" id="editdate" name="editdate" value="${game.date.split(' ')[0]}"><br>
              <label class = "starlabel" for="location">Location: </label><br>
              <input class = "starlabel" type="text" id="editlocation" name="editlocation" value="${game.location}"><br>
              <label class = "starlabel" for="time">Time: </label><br>
              <input class = "starlabel" type="text" id="edittime" name="edittime" value="${game.time}"><br>
         </form>
         <div class="modal-footer">
          <button onclick = \'handleEdit(${JSON.stringify(game)})\' type="button" class = "btn btn-secondary" >Submit Changes</button>
        </div>
    </div>`

    popupContent.innerHTML = html;
    popupContainer.appendChild(popupContent);
    document.body.appendChild(popupContainer);
}

async function handleEdit(game){
    let gameid = localStorage.getItem('editEntryID')
    console.log(gameid)

  text = document.getElementById('editdate').value
  textArray = text.split("-");
  formattedDate = textArray[0]+ "-" + textArray[1] + "-" + textArray[2]  //format the date

  let entry = {teamid: game.teamid, opposingteamid: game.opposingteamid,
  date: formattedDate, 
  location: document.getElementById('editlocation').value, 
  time: document.getElementById('edittime').value};

  await fetch(url+ "/" + gameid,{
      method: "PUT",
      body: JSON.stringify(entry),
      headers:{
          "Content-type": "application/json; charset=UTF-8"
      }
  })
  closePopup()
  document.getElementById('popup-container2').remove();
}

function closePopup() {
    document.getElementById('popup-container').remove();
}

function closePopup3() {
    document.getElementById('popup-container3').remove();
}

async function fetchData() {
    let teamSelection = localStorage.getItem('teamSelection');
    let teamid = 1;
    let response = await fetch(url); 
    let data = await response.json();
    
    if (teamSelection == "true"){
        teamid = document.getElementById('teams').value
        let response = await fetch("http://localhost:5269/GetTeams/"+teamid); 
        data = await response.json();
    }

    const results = await Promise.all(data.map(async function(e) {
        let responses = await fetch(teamUrl + "/" + e.teamid); 
        let team = await responses.json();
        let responses2 = await fetch(teamUrl + "/" + e.opposingteamid);
        let team2 = await responses2.json();
        return { title: team.teamname + " vs " + team2.teamname,
                start: e.date,
                id: e.id};
    }));
    return results
}




