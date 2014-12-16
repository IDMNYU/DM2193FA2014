
var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0]; //the very first button
var incompleteTasksHolder = document.getElementsByTagName("incomplete-tasks");
var completedTasksHolder = document.getElementsByTagName("completed-tasks");


var createNewTaskElement = function(taskString) {

var listItem = document.createElement("li");
var checkBox = document.createElement("input"); 
var label = document.createElement("label");
var editInput = document.createElement("input");
var editButton = document.createElement("button");
var deleteButton = document.createElement("button");


checkBox.type = "checkbox";
editInput.type = "text";


editButton.innerText = "Edit";
editButton.className = "edit";
deleteButton.innerText = "Delete";
deleteButton.className = "delete";
label.innerText = taskString;


listItem.appendChild(checkbox);
listItem.appendChild(label);
listItem.appendChild(editInput);
listItem.appendChild(editButton);
listItem.appendChild(deleteButton);

return listItem;



}


var addTask = function() {
	console.log("Add task...");
	var listItem = createNewTaskElement(taskInput.value);
	incompleteTasksHolder.appendChild(listItem);
	 bindTaskEvents(listItem, taskCompleted);
  taskInput.value = "";

}

var editTask = function() {
console.log("Edit task...");
var listItem = this.parentNode;

var editInput = listItem.querySelector("input[type=text");
var label = listItem.querySelector("label");
var containsClass = listItem.classList.contains("editMode");

if(containsClass){
label.innerText = editInput.value;
}  else {
editInput.value = label.innerText;

}
listItem.classList.toggle("editMode");




}

var deleteTask = function() {
console.log("Delete task...");
var listItem = this.parentNode;
var ul = listItem.parentNode;
ul.removeChild(listItem);
}

var taskCompleted = function() {
console.log("Task complete...");
var listItem = this.parentNode;
completedTasksHolder.appendChild(listItem);
bindTaskEvents(listItem, taskIncomplete);
}

var taskIncomplete = function() {
console.log("Task incomplete...");
var listItem = this.parentNode;
incompleteTasksHolder.appendChild(listItem);
bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
console.log("Bind list item events");
var checkBox = taskListItem.querySelector("input[type=checkbox]");
var editButton = taskListItem.querySelector("button.edit");
var deleteButton = taskListItem.querySelector("button.delete");


editButton.onclick = editTask;
deleteButton.onlclick = deleteTask;
checkbox.onchange = checkBoxEventHandler;


}

var ajaxRequest = function() {
 console.log("AJAX request");
}
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

for(var i = 0; i < completedTasksHolder.children.length; i++) {
bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
}

