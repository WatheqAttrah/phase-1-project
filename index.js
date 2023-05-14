//Add EventListener to Button
document.querySelector('form').addEventListener('submit',handleSubmit)
//callback function for eventlistener
function handleSubmit(e){
    e.preventDefault()//Prevent to re-direct the from 
    let carShow = {
        make:e.target.make.value,     
        model:e.target.model.value,  
        year:e.target.year.value,
        trim:e.target.trim.value,
    }
renderOneCar(carShow)
//Using reset function to prevent redirect
document.querySelector('form').reset()
addCar(carShow);//add the car to the object 
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
//append to DOM
document.querySelector('ul').appendChild(card)
//Remove from list 
let btn = card.querySelector('div ul li div')//remove btn
btn.addEventListener('click', ()=>{
    card.remove()
    removeCar(car.id)
    })
}
// fetch GET
function fetchCars(){
    fetch('http://localhost:3000/carShow')
    .then(response=>response.json())
    .then(cars=>cars.forEach(car=>renderOneCar(car)))
}

//fetch POST
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
// fetch DELETE
function removeCar(id){
    fetch(`http://localhost:3000/carShow/${id}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(response=>response.json())
    .then(car=>console.log(car))
}
function initialize(){
    fetchCars()
}
initialize()