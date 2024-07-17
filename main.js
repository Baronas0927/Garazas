let form = document.querySelector("#createVehicle");
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
function createVehicle(){
    event.preventDefault();
    const form = event.target;

    fetch(`${baseUrl}${port}/createVehicle`, {
        method: "POST",
        body: JSON.stringify(formData)
    })
        .then(response => {
            if (response.ok) {
                showAlert("Sukurtas");
                form.reset();
                getVehicles();
            }
        })
}

function updateVehicle(){
    event.preventDefault();
    const form = event.target;
    fetch(`${baseUrl}${port}/updateVehicle`, {
        method: "POST",
        body: JSON.stringify(formData),
    })
        .then(response => {
            if (response.ok) {
                showAlert("Atnaujintas");
                form.reset();
                getVehicles();
            }
        })
}

function fillTable(data){
    let table = document.querySelector("#table");
    let HTML = "";
    let counter = 1;
    data.forEach(vehicle => {
        console.log("vehicle");
        HTML += `
        <tr>
            <td>${counter++}</td>
            <td>${vehicle.manufacturer}</td>
            <td>${vehicle.model}</td>
            <td>${vehicle.releaseYear}</td>
            <td>${vehicle.fuelType}</td>
        </tr>
        `
    });
    table.innerHTML += HTML;
}

function fillForm(vehicle) {
    document.querySelector("#manufacturer").value = vehicle.manufacturer;
    document.querySelector("#model").value = vehicle.model;
    document.querySelector("#releaseYear").value = vehicle.releaseYear;
    document.querySelector("#fuelType").value = vacation.fuelType;
}