let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
let ulEl = document.querySelector("#ul-El");
console.log(ulEl);
// Event listener
inputBtn.addEventListener("click", function () {
  console.log("ButtonClicked");
  myLeads.push(inputEl.value);
  renderLists();
  inputEl.value = " ";
});
function renderLists() {
  let lists = " ";
  for (var i = 0; i < myLeads.length; i++) {
    lists += `<li> <a target="_blank" href = '#${myLeads}'> ${myLeads} </a>`
    console.log(lists);
  }
  ulEl.innerHTML = lists;
}
