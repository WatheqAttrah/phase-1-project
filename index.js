//Add EventListener to Button
console.log("Hello Live");
document.querySelector('form').addEventListener('submit', handleSubmit)

//callback function for eventlistener
function handleSubmit(e){
    e.preventDefault()
    let carShow = {
        make:e.target.make.value,     
        model:e.target.model.value,  
        year:e.target.year.value,
        trim:e.target.trim.value,
    }
renderOneCar(carShow)
//Using reste function to prevent redirect
document.querySelector('form').reset()
addCar(carShow);
}
//add car to the car list
function renderOneCar(car){
    let card = document.createElement("li")
    card.innerHTML = `
         <div>
            <p>Car Make:  ${car.make}</p>
            <p>Car Model: ${car.model}</p>
            <p>Car year: ${car.year}</p>
            <p>trim: ${car.trim}</p>

            <button type="click">Remove From List</button>
         </div> `;

//add new car to my car list and append it to Unordered List
document.querySelector('ul').appendChild(card)

//Remove car from list 
//let btn = document.querySelector('div ul');

btn.addEventListener('click', e=>e.target.parentNode.parentNode.remove())
//Remove car fetch function 
removeCar(car.id)

//function get cars
function getCars(){
    fetch('http://localhost:3000/carShow')
    .then(response=>response.json())
    .then(cars=>cars.forEach(car=>renderOneCar(car)))
}

//take car from (form) and add it to page
function addCar(carShow){
    fetch('http://localhost:3000/carShow',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
    body: JSON.stringify(carShow)
    })
    .then(response=>response.json())
    .then(car=>renderOneCar(car));
}

//Remove a car form the object carShow
function removeCar(id){
    fetch(`http://localhost:3000/${id}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(response=>response.json())
    .then(can=>console.log(car))
}
function initialize(){
    getCars()
}
initialize();