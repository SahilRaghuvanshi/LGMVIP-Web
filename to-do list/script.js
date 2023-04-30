var taskList = document.getElementById("taskList");
var inputBox = document.getElementById("inputBox");
var addButton = document.getElementById("addButton");

addButton.addEventListener("click", function(){
  var taskText = inputBox.value;
  if (taskText.trim() !== "") {
    var task = document.createElement("li");
    var label = document.createElement("label");
    label.textContent = taskText;
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove Task";
    deleteButton.addEventListener("click", function(){
      task.parentNode.removeChild(task);
    });
    var doneCheckbox = document.createElement("input");
    doneCheckbox.type = "checkbox";
    doneCheckbox.name = "done";
    doneCheckbox.addEventListener("click", function(){
      if (this.checked) {
        label.style.textDecoration = "line-through";
        label.style.color = "black";
      } else {
        label.style.textDecoration = "none";
        label.style.color = "#000";
      }
    });
    task.appendChild(doneCheckbox);
    task.appendChild(label);
    task.appendChild(deleteButton);
    taskList.appendChild(task);
    inputBox.value = "";
  }
});
