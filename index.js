//Add EventListener to Button
document.querySelector('form').addEventListener('submit', handleSubmit);

//callback function for event listener
function handleSubmit(e){
    e.preventDefault()
    let carShow = {
        make:e.target.make.value,     
        model:e.target.model.value, 
        year:e.target.year.value,
        trim:e.target.trim.value,
    }
renderOneCar(carShow)
document.querySelector('form').reset()
}
//add car to the car list
function renderOneCar(car){
    let card = document.createElement("li")
    card.innerHTML = `
         <div>
            <h4><p>Car Make:  ${car.make}</p></h4>
            <h4><p>Car Model: ${car.model}</p></h4>
            <h4><p>Car year: ${car.year}</p></h4>
            <h4><p>Trim: ${car.trim}</p></h4>

         <button type="click">Remove From List</button>
         </div> `;


//add new car to my car list and append it to ul
document.querySelector('ul').appendChild(card);
let btn = document.querySelector('div ul');
btn.addEventListener('click', e=>e.target.parentNode.parentNode.remove());
}


//take car from (form) and add it to page
function addCar(carShow){
    fetch("http://localhost:3000/carShow",{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
    body: JSON.stringify(carShow)
    })
    .then(response=>response.json())
    .then(car=>renderOneCar(car))
}

//load my cars list from json file
function initialize(){
    getAllCars();
}
initialize();