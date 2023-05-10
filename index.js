//Add EventListener to Button
document.querySelector('form').addEventListener('submit', handleSubmit)
const demo=document.getElementById('demo');
demo.textContent=Date();

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



//take car from (form) and add it to page



//load my cars list from json file