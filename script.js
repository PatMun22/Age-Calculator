/*-------------inputs--------------*/
const dayI = document.getElementById("day");
const monthI = document.getElementById("month");
const yearI = document.getElementById("year");

/*------------------outputs---------------*/
const dayO = document.getElementById("dd");
const monthO = document.getElementById("mm");
const yearO = document.getElementById("yyyy");

/*-----------------------form-----------------------*/
const form = document.querySelector("form");

//Form event listener
form.addEventListener("submit", handleSubmit);

const date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

const dates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value) {
            i.style.borderColor = "red";
            parent.querySelector("small").innerText = "this field is required.";
            validator = false;
        } else if (monthI.value > 12) {
            monthI.style.borderColor = "red";
            monthI.parentElement.querySelector("small").innerText = "must be a valid month.";
            validator = false;
        } else if (dayI.value > 31) {
            dayI.style.borderColor = "red";
            dayI.parentElement.querySelector("small").innerText = "must be a valid day.";
            validator = false;
        } else {
            i.style.borderColor = "black";
            parent.querySelector("small").innerText = "";
            validator = true;
        }
    });
    return validator;
}

function handleSubmit(e) {
    e.preventDefault();
    if(validate()){
        if(dayI.value > day) {
            day += dates[month + 1];
            month;
        }
        if(monthI.value > month){
            month += 12;
            year -= 1;
        }

        const d = day - dayI.value;
        const m = month - monthI.value;
        const y = year - yearI.value;

        dayO.innerHTML = d;
        monthO.innerHTML = m;
        yearO.innerHTML = y;
    }
}