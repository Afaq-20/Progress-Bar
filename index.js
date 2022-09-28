const fbEl = document.querySelector(".front-bar")

const nextbtnEl = document.querySelector(".next")
const prevbtnEl = document.querySelector(".prev")
const progressEl = document.querySelector(".progress-container")

nextbtnEl.addEventListener("click", ()=>{
    nextLine();
    nextStep();
})
let nextClick = 0;
function nextLine(){
    if(nextClick >= 100){
        pause;
    }else{
        nextClick = nextClick + 25;
    fbEl.style.width = `${nextClick}%`
    // console.log(progressEl.childNodes);
}}

let nextDiv = 5;
let step = 1
function nextStep(){
    // progressEl.childNodes[nextDiv] = Ns
    nextDiv += 2
    progressEl.childNodes[nextDiv].classList.add("checked")
    progressEl.childNodes[nextDiv].innerHTML = `<i class="fa-solid fa-check"></i> <small>Step-${step}</small>`
    step += 1

}

prevbtnEl.addEventListener("click", ()=>{
    prevLine();
    prevStep();
})

function prevLine(){
    if(nextClick <= 0){
        pause;
    }else{
    nextClick = nextClick - 25;
    fbEl.style.width = `${nextClick}%`
}}

function prevStep(){
    progressEl.childNodes[nextDiv].classList.remove("checked")
    progressEl.childNodes[nextDiv].innerHTML = `<i class="fa-solid fa-xmark"></i>`
    nextDiv = nextDiv - 2
    step -= 1
}