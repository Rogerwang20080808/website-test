const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richestPeople = [
  "Jeff Bezos",
  "Bill Gates",
  "Warren Buffett",
  "Bernard Arnault",
  "Carlos Slim Helu",
  "Amancio Ortega",
  "Larry Ellison",
  "Mark Zuckerbert",
  "Michael Bloomberg",
  "Larry Page",
];

//Store listItems
const listItems = [];

let dragStartIndex;

createList();

//Insert list items into DOM
function createList() {
  [...richestPeople]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((person, index) => {
      // console.log(person);
      const listItem = document.createElement("li");

      // listItem.classList.add('over');
      // listItem.classList.add('right');

      listItem.setAttribute("data-index", index);
      listItem.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="draggable" draggable="true"> 
       <p class="person-name">${person}</p>
       <i class="fas fa-grip-lines"></i>
    </div>
    `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });
  addEventListeners();
}

function dragStart() {
  // console.log("Event: ", "dragstart");
  dragStartIndex = +this.closest("li").getAttribute("data-index");
  // console.log(dragStartIndex);
}

function dragEnter() {
  // console.log("Event: ", "dragenter");
  this.classList.add("over");
}

function dragOver(e) {
  // console.log("Event: ", "dragover");
  e.preventDefault();
}

function dragLeave() {
  // console.log("Event: ", "dragleave");
  this.classList.remove("over");
}

function dragDrop() {
  // console.log("Event: ", "dragdrop");
  const dragEndIndex = +this.getAttribute("data-index");
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove("over");
}

//Swap list items that are dragged and dropped
function swapItems(fromIndex, toIndex) {
  // console.log(123);
  const itemOne = listItems[fromIndex].querySelector(".draggable");
  const itemTwo = listItems[toIndex].querySelector(".draggable");
  // console.log(itemOne, itemTwo);
  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

//check the order of list items
function checkOrder() {
  listItems.forEach((listItem, index) => {
    const personName = listItem.querySelector(".draggable").innerText.trim();

    if (personName != richestPeople[index]) {
      listItem.classList.add("wrong");
    } else {
      listItem.classList.remove("wrong");
      listItem.classList.add("right");
    }
  });
}

function addEventListeners() {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItem = document.querySelectorAll(".draggable-list li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });

  dragListItem.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
}

check.addEventListener("click", checkOrder);
