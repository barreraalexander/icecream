let check_run = window.localStorage.getItem('ran_once')
if (! check_run){
    alert('Hi Jane, glad you can make it')
    alert("why don't you like eggs?")
    alert("check the test.js file and you'll see why this annoying little prompt only occurs once :) ")
    window.localStorage.setItem('ran_once', 'true')
}



let good_food = document.querySelector('#good_food')
if (good_food){
    good_food.addEventListener('mouseover', run_me, false)
}

function run_me(){
    alert("please don't touch the food mam")
}