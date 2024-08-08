// On sélectionne l'id de l'input
const task = document.getElementById("task");

// On sélectionne l'id de l'ul
const tasksList = document.getElementById("tasks-list");

// On sélectionne le bouton pour ajouter un élément au click
let addTask = document.getElementById("add");
addTask.addEventListener("click", addNewTask);

// Fonction pour ajouter la tâche
function addNewTask(event) {
  const li = document.createElement("li");
  const text = task.value.trim();
  //  la fonction trim() est aléatoire. elle permet de supprimer les espaces

  if (text !== "") {
    li.innerHTML = '<input type="checkbox">' + text;
    tasksList.appendChild(li);

    // Création du l'icône corbeille
    const btnDelete = document.createElement("i");
    console.log(btnDelete);
    btnDelete.classList.add("fa-solid");
    btnDelete.classList.add("fa-trash-can");
    btnDelete.classList.add("delete");
    li.appendChild(btnDelete);

    btnDelete.addEventListener("click", deleteTask);

    task.value = "";
  } else {
    alert("Veuillez saisir une tâche");
  }
}

// Fonction suppression de la tâche

function deleteTask(event) {
  const taskDelated = event.target.parentNode;
  console.log(taskDelated);
  tasksList.removeChild(taskDelated);
}
