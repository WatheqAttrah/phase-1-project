//Add EventListener to the "form" Submit btn
document.querySelector("form").addEventListener("submit", handleSubmit);

function handleSubmit(e){
    const carShow={
        make:e.target.make.value,     
        model:e.target.model.value,  
        year:e.target.year.value,
        trim:e.target.trim.value
    }
addCar(carShow);
renderOneCar(carShow);
document.querySelector("form").reset()
e.preventDefault()
}

function renderOneCar(car){
    const card = document.createElement("li")
    card.innerHTML = `
    <div>
    <p>Car Make:  ${car.make}</p>
    <p>Car Model: ${car.model}</p>
    <p>Car Year: ${car.year}</p>
    <p>Car Trim: ${car.trim}</p>
    <p>Car Id:${car.id}</p>
    
    <button type="click">Remove From List</button>
    </div>
    `;
}
document.querySelector("ul").appendChild(card)

const btn=card.querySelector("btn")
btn.addEventListener("click",()=>{
    card.remove();
    removeCar(car.id)
});

function fetchCars(){
    fetch("http://localhost:3000/carShow")
    .then(response=>response.json())
    .then(cars=>cars.forEach(car=>renderOneCar(car)))
}
function addCar(carShow){
    fetch("http://localhost:3000/carShow",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(carShow)
        })
        .then(response=>response.json())
        .then(car=>console.log(car))

}



function removeCar(id){
    fetch(`http://localhost:3000/carShow/${id}`,{
        method:'DELETE',
        headers:{
            "Content-Type":"application/json"
        },
    })
    .then(response=>response.json())
    .then(car=>console.log(car))
};






//TO READ DATA FROM JSON FILE OR API
function initialize(){
    fetchCars()
}
initialize()