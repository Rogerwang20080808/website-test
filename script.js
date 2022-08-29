const touchable_list = document.getElementById("touchable-list");
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

let touchStartIndex;

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
    <div class="touchable" touchable="true"> 
       <p class="person-name">${person}</p>
       <i class="fas fa-grip-lines"></i>
    </div>
    `;

      listItems.push(listItem);

      touchable_list.appendChild(listItem);
    });
  addEventListeners();
}

function touchStart() {
  // console.log("Event: ", "touchstart");
  touchStartIndex = +this.closest("li").getAttribute("data-index");
  // console.log(touchStartIndex);
}

function touchStart() {
  // console.log("Event: ", "touchstart");
  this.classList.add("over");
}

function touchMove(e) {
  // console.log("Event: ", "touchMove");
  e.preventDefault();
}

function touchLeave() {
  // console.log("Event: ", "touchleave");
  this.classList.remove("over");
}

function touchCancel() {
  // console.log("Event: ", "touchtouchcancel");
  const touchEndIndex = +this.getAttribute("data-index");
  swapItems(touchStartIndex, touchEndIndex);

  this.classList.remove("over");
}

//Swap list items that are touched and touchcancelped
function swapItems(fromIndex, toIndex) {
  // console.log(123);
  const itemOne = listItems[fromIndex].querySelector(".touchable");
  const itemTwo = listItems[toIndex].querySelector(".touchable");
  // console.log(itemOne, itemTwo);
  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

//check the order of list items
function checkOrder() {
  listItems.forEach((listItem, index) => {
    const personName = listItem.querySelector(".touchable").innerText.trim();

    if (personName != richestPeople[index]) {
      listItem.classList.add("wrong");
    } else {
      listItem.classList.remove("wrong");
      listItem.classList.add("right");
    }
  });
}

function addEventListeners() {
  const touchables = document.querySelectorAll(".touchable");
  const touchListItem = document.querySelectorAll(".touchable-list li");

  touchables.forEach((touchable) => {
    touchable.addEventListener("touchstart", touchStart);
  });

  touchListItem.forEach((item) => {
    item.addEventListener("touchmove", touchMove);
    item.addEventListener("touchcancel", touchCancel);
    item.addEventListener("touchenter", touchStart);
    item.addEventListener("touchleave", touchLeave);
  });
}

check.addEventListener("click", checkOrder);
