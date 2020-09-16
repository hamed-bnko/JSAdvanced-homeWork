function selectFirst() {
  var itemsList = document.getElementById("items");
  var allItems = itemsList.getElementsByTagName("li");
  for (let i = 0; i < allItems.length; i++) {
    allItems[i].classList.remove("text-danger");
  }
  itemsList.firstElementChild.classList.add("text-danger");
}

function selectLast() {
  var itemsList = document.getElementById("items");
  var allItems = itemsList.getElementsByTagName("li");

  for (let i = 0; i < allItems.length; i++) {
    allItems[i].classList.remove("text-danger");
  }
  allItems[allItems.length - 1].classList.add("text-danger");
}

function selectNext() {
  var selectedItem;
  var itemsList = document.getElementById("items");
  var allItems = itemsList.getElementsByTagName("li");
  for (let i = 0; i < allItems.length; i++) {
    allItems[i].classList.remove("text-danger");
    if (allItems[i].className === "text-success") {
      allItems[i].classList.remove("text-success");
      allItems[i + 1].classList.add("text-success");
      selectedItem = true;
      break;
    }
  }
  if (selectedItem !== true) {
    allItems[0].classList.add("text-success");
  }
}
function selectPre() {
  var selectedItem;
  var itemsList = document.getElementById("items");
  var allItems = itemsList.getElementsByTagName("li");
  for (let i = 0; i < allItems.length; i++) {
    allItems[i].classList.remove("text-danger");
    if (allItems[i].className === "text-success") {
      allItems[i].classList.remove("text-success");
      allItems[i - 1].classList.add("text-success");
      selectedItem = true;
      break;
    }
  }
  if (selectedItem !== true) {
    allItems[allItems.length - 1].classList.add("text-success");
  }
}

function addToEnd() {
  var newItem = document.createElement("li");
  newItem.innerHTML = "NEW ITEM";
  document.getElementById("items").appendChild(newItem);
}

function addToStart() {
  var itemsList = document.getElementById("items");
  var allItems = itemsList.getElementsByTagName("li")[0];

  var newTitle = document.createElement("li");
  newTitle.innerHTML = "NEW ITEM";
  itemsList.insertBefore(newTitle, allItems);
}

function DeleteItem() {
  var ItemsList = document.getElementById("items");
  var allItems = ItemsList.getElementsByTagName("li");

  ItemsList.removeChild(allItems[allItems.length - 1]);
}
