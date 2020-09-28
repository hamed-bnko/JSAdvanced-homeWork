var AddButton = document.getElementById("additem"),
  EditButton = document.getElementById("edit"),
  DeleteButton = document.getElementById("delete"),
  Form = document.getElementById("form"),
  Cancel = document.querySelector(".cancel"),
  addItem = document.querySelector(".add"),
  Item = document.querySelector("textarea"),
  myList = document.getElementById("list-item"),
  actionTodo = "",
  elementToEdit;

const ToggleForm = () => {
  Form.classList.toggle("hide");
  Form.classList.toggle("show");
  if (actionTodo === "edit") {
    addItem.value = "Edit Item List";
  } else {
    addItem.value = "Add Item List";
  }
};
const AddItemToList = () => {
  let newItem = `
    <li>
    
    
    
    <span >${Item.value} </span>
    <input type="button" class="edit" onClick="EditFormShow(this)" />
    <input  type="button" class="delete"  onClick="deleteItem(this)" value="&times;" />
    
    </li>
    `;

  myList.insertAdjacentHTML("beforeend", newItem);
  ToggleForm();
  Item.value = "";
};

const EditFormShow = (editButton) => {
  actionTodo = "edit";
  elementToEdit = editButton.parentNode;
  ToggleForm();
  Item.value = elementToEdit.innerText.trim();
};

const deleteItem = (item) => {
  myList.removeChild(item.parentNode);
};

AddButton.addEventListener("click", ToggleForm);
Cancel.addEventListener("click", ToggleForm);
addItem.addEventListener("click", AddItemToList);
