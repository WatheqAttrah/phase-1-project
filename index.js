console.log("Hello from the index.js");

//Add EventListener to Button
const form=document.getElementById("my_form")
const submitBtn=document.querySelector("button");
form.addEventListener('submit', handleSubmit);



//Callback function for Submit Eventlistener
function handleSubmit(e){
    e.preventDefault();

    const carShow = {
        make:e.target.make.value,     
        model:e.target.model.value,  
        year:e.target.year.value,
        trim:e.target.trim.value,
        id:e.target.id.value,
    };
//To the form element to reset the form to the initail state.
    form.reset()
    addCar(carShow);
};
//
function renderOneCar(car){
    //Create a card element
    const card=document.createElement("li");
    //Create a card content container 
    const cardContent=document.createElement("div");


    //Create carMake information element
    const carMake=document.createElement("p");
    carMake.textContent="Car Make:";
    carMake.appendChild(document.createTextNode(car.make));

    //Create carModel information element
    const carModel=document.createElement("p");
    carModel.textContent="Car Model:";
    carModel.appendChild(document.createTextNode(car.model));

    //Create carYearinformation element
    const carYear=document.createElement("p");
    carYear.textContent="Car Year:";
    carYear.appendChild(document.createTextNode(car.Year));

    //Create carTrim information element
    const carTrim=document.createElement("p");
    carTrim.textContent="Car Trim:";
    carTrim.appendChild(document.createTextNode(car.trim));

    //Create carId information element
    const carId=document.createElement("p");
    carId.textContent="Car Id:";
    carId.appendChild(document.createTextNode(car.id));

    //Create RemoveButton
    const removeButton=document.createElement("button");
    removeButton.type="submit";
    removeButton.textContent="Reomve from list";

    //Add EventListener to tje removeButton
    removeButton.addEventListener("click",(e)=>{
        e.preventDefault();
        card.remove();
        removeCar(car.id);
    });

    cardContent.appendChild(carMake);
    cardContent.appendChild(carModel);
    cardContent.appendChild(carYear);
    cardContent.appendChild(carTrim);
    cardContent.appendChild(carId);

    //Append the removeButton to the cardContent container
    cardContent.appendChild(removeButton);
    
    //Append the cardContent container to the card element
    card.appendChild(cardContent);

    //Append card to the carShow
    const carList=document.querySelector("ul");
    carList.appendChild(card);
}
//Fetch GET
function getCars(){
    fetch("http://localhost:3000/carShow")
    .then(response=>response.json())
    .then(cars=>cars.forEach(car=>renderOneCar(car)))
}
//Fetch POST
function addCar(carShow){
    fetch("http://localhost:3000/carShow",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
    body: JSON.stringify(carShow)
    })
    .then(response=>response.json())
    .then(car=>renderOneCar(car));
};
//Fetch DELETE
function removeCar(id){
    fetch(`http://localhost:3000/carShow/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(response=>response.json())
    .then(car=>console.log(car))
}
function initialize(){
    getCars()
}
initialize()