alert('Hi Jane, glad you can make it')
alert("why don't you like eggs?")

let good_food = document.querySelector('#good_food')

if (good_food){
    good_food.addEventListener('mouseover', run_me, false)
}

function run_me(){
    alert("please don't touch the food mam")
}