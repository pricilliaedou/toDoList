// On sélectionne l'id de l'input
const task = document.getElementById("task");

// On sélectionne l'id de l'ul
const tasksList = document.getElementById("tasks-list");

// On sélectionne le bouton pour ajouter un élément au click
let addTask = document.getElementById("add");

addTask.addEventListener("click", addNewTask);

// Fonction pour ajouter la tâche
function addNewTask(event) {
  const text = task.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = text.trim();
    li.id = task.value.trim();

    //  la fonction trim() est aléatoire. elle permet de supprimer les espaces
    tasksList.appendChild(li);
    li.addEventListener("click", deleteTask);
    task.value = "";
  }
}

// Fonction suppression de la tâche
function deleteTask(event) {
  const taskDelated = event.target;
  tasksList.removeChild(taskDelated);
}
