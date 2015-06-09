var editTask = function() {
  var listItem = this.parentElement.parentElement.querySelector('p');
  console.log('clicked edit');

  if (listItem === null) {
    listItem = this.parentElement.parentElement.parentElement.querySelector('p')
  }
  var editInput = listItem.querySelector("input[type=text");
  var label = listItem.querySelector("label");
  
  var containsClass = listItem.classList.contains("editMode");
  //if the class of the parent is .editMode
  if(containsClass) {
    //Switch from .editMode
    //label text become the input's value
    this.innerHTML = "Edit";
    label.innerText = editInput.value;
  } else {
    //Switch to .editMode
    //input value becomes the label's text
    this.innerHTML = "Save";
    editInput.value = label.innerText;
  }
  
  //Toggle .editMode on the list item
  listItem.classList.toggle("editMode");
  
}

//Delete an existing task
var deleteTask = function() {
  console.log("Delete task...");
  var listItem = this.parentElement.parentElement.parentElement;
  var ul = listItem.parentElement;
  
  //Remove the parent list item from the ul
  ul.removeChild(listItem);
}


var bindTaskEvents = function(taskListItem) {
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  
  //bind editTask to edit button
  editButton.onclick = editTask;
  
  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
}

$('.edit').each(function(i, el) {
  el = el.parentElement;
  bindTaskEvents(el)
})