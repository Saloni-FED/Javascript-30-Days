// debugger;
const add = document.querySelector(".add");
const toAddNote = (text = "sal") => {
  var container = document.querySelector(".container");
  // console.log(container);

  const notes = document.createElement("div");
  notes.classList.add("note_1");
  const htmlData = `<div class="operations">
  <div class="edit"><i class="fa-solid fa-pen-to-square fa-2x"></i></div>
  <div class="delete" ><i class="fa-solid fa-trash fa-2x edit "></i></div>
</div>
<div class="main">hey</div>
<input class="textArea" type="text" value=" " > `;

  notes.innerHTML = htmlData;
  container.appendChild(notes);
  // Now handling  delete
  const delItem = notes.querySelectorAll(".delete");
  delItem.forEach((currValue) => {
    currValue.addEventListener("click", () => {
      notes.remove();
    });
  });
  //Event for edit
  let inputText = notes.querySelectorAll(".textArea");
  inputText.forEach((currValue) => {
    currValue.setAttribute("readonly", true);
  });
  const editBtn = notes.querySelectorAll(".edit");
  editBtn.forEach((element) => {
    element.addEventListener("click", () => {
      if (notes.querySelector(".textArea").readOnly) {
        notes.querySelector(".textArea").removeAttribute("readonly");
        console.log("removed");
      } else {
        notes.querySelector(".textArea").setAttribute("readonly", true);
        console.log("hence removed");
      }
    });
  });
};

add.addEventListener("click", () => {
  toAddNote();
});
