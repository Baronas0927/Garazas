let form = document.querySelector("#createAutoForm");
let formBtn = document.querySelector("#formBtn");
let baseUrl = "http://127.0.0.1";
let port = ":8000";
getVehicles();
function getVehicles(){
    fetch(`${baseUrl}${port}/getVehicles`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            fillTable(data);
        })
}
