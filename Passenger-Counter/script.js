let count = 0;
let countEl=document.querySelector(".count-el");
let saveBtn = document.querySelector("#btn-save");
let saveEl = document.querySelector("#save-el");
function increment() {
    count +=1;
    countEl.innerHTML=count;
}
function save(){
    let element=count+ " - ";
    saveEl.innerHTML+=element;
    countEl.innerHTML=0;
    count=0;
}
function del(){
    saveEl.innerHTML=`Entries:`;
}