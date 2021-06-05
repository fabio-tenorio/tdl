/*
quando clico no botão addNewList, o evento executado é criar uma caixa com as seguintes informações:
input para o título e impressão da data corrente 
*/
let xhttp = new XMLHttpRequest();
let tdlArea = document.getElementById('tdl-area');
let highestId = 0;

function showTasks() {
    xhttp.open("GET", "getTasks.php", true);
    xhttp.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            var allTasks = this.responseText;
            var allTasks = JSON.parse(allTasks);
            for (var i in allTasks) {
                let newTask = document.createElement('div');
                newTask.id = allTasks[i].id;
                let showDate = document.createElement('p');
                showDate.id = "taskdate"+allTasks[i].id;
            
                newTask.classList.add('task');
                let taskTitle = document.createElement('input');
                taskTitle.type = "text";
                taskTitle.id = "tasktitle";
                taskTitle.classList.add('task-title');
                taskTitle.placeholder = allTasks[i].title;
    
                let taskDesc = document.createElement('textarea');
                taskDesc.classList.add('task-desc');
                taskDesc.id = "taskdesc";
                taskDesc.placeholder = allTasks[i].description;
    
                let container = document.createElement('div');
                let taskDone = document.createElement('button');
                taskDone.type = "submit";
                taskDone.innerText = "done";
                taskDone.id = "taskdone"+allTasks[i].id;
                taskDone.setAttribute("class", "btn col-6 btn-success");
    
                let taskCancel = document.createElement('button');
                taskCancel.type = "submit";
                taskCancel.innerText = "cancel";
                taskCancel.id = "taskcancel"+allTasks[i].id;
                taskCancel.setAttribute("class", "btn col-6 btn-danger");
    
                container.appendChild(taskDone);
                container.appendChild(taskCancel);
                tdlArea.appendChild(newTask);
                newTask.appendChild(taskTitle);
                newTask.appendChild(taskDesc);
                newTask.appendChild(container);
                newTask.appendChild(taskDesc);
                newTask.appendChild(container);
                newTask.appendChild(showDate);
                showDate.innerHTML = allTasks[i].created;
    
                let done = document.getElementById(taskDone.id).addEventListener("click", (id)=> {
                    let taskDone = new Date();
                    taskDone = taskDone.toISOString().slice(0, 19).replace('T', ' ');
                    $.ajax({
                        url: "doneTask.php",
                        type: "POST",
                        data: {
                            id: newTask.id,
                            done: taskDone
                        },
                        cache: false,
                        success: (result) => {
                            if (result.statusCode == 200) {
                                $("#success").show();
                                $("#success").html('Data added');
                            } else if (result.statusCode == 201) {
                                alert("error occured!");
                            }
                        }
                    });
                    document.getElementById('right-side').appendChild(document.getElementById(newTask.id));
                    showDate.innerHTML = "finished at"+"<br>"+taskDone;
                });

                let done = document.getElementById(taskCancel.id).addEventListener("click", (id)=> {
                    $.ajax({
                        url: "cancelTask.php",
                        type: "POST",
                        data: {
                            id: newTask.id
                        },
                        cache: false,
                        success: (result) => {
                            if (result.statusCode == 200) {
                                $("#success").show();
                                $("#success").html('Data added');
                            } else if (result.statusCode == 201) {
                                alert("error occured!");
                            }
                        }
                    });
                }
    
                highestId = i;
            }
        }
    }
    xhttp.send();
}

showTasks();

let createTaskButton = document.getElementById('createNewTask');
let doneButtons = document.querySelectorAll('btn-success');
let saveTask = document.createElement('button');

function createTask(id) {
    id += 1;
    let newTask = document.createElement('div');      
    let showDate = document.createElement('p');
    showDate.id = "taskdate"+id;

    newTask.classList.add('task');
    let taskTitle = document.createElement('input');
    taskTitle.type = "text";
    taskTitle.id = "tasktitle"+id;
    taskTitle.classList.add('task-title');
    taskTitle.placeholder = "title";

    let taskDesc = document.createElement('textarea');
    taskDesc.classList.add('task-desc');
    taskDesc.id = "taskdesc"+id;
    taskDesc.placeholder = "details";

    saveTask.type = "submit";
    saveTask.innerText = "save task";
    saveTask.id = "savetask"+id;
    saveTask.name = "savetask";
    saveTask.setAttribute("class", "btn col-12 btn-outline-primary");

    let container = document.createElement('div');
    let taskDone = document.createElement('button');
    taskDone.type = "submit";
    taskDone.innerText = "done";
    taskDone.id = "taskdone"+id;
    taskDone.setAttribute("class", "btn col-6 btn-success");

    let taskCancel = document.createElement('button');
    taskCancel.type = "submit";
    taskCancel.innerText = "cancel";
    taskCancel.id = "taskcancel"+id;
    taskCancel.setAttribute("class", "btn col-6 btn-danger");

    container.appendChild(taskDone);
    container.appendChild(taskCancel);
    tdlArea.appendChild(newTask);
    newTask.appendChild(taskTitle);
    newTask.appendChild(taskDesc);
    newTask.appendChild(container);
    newTask.appendChild(saveTask);
    newTask.appendChild(container);
    newTask.appendChild(showDate);

    let taskDate = new Date();
    taskDate = taskDate.toISOString().slice(0, 19).replace('T', ' ');
    showDate.innerHTML = taskDate;

    saveTask.addEventListener("click", function () {
        var title = $("#tasktitle"+id).val();
        var desc = $("#taskdesc"+id).val();
        if ($("#taskdone"+id).val()=="") {
            var done = null;
        } else {
            var done = $("#taskdone"+id).val();
        }
        
        var date = $("#taskdate"+id).val();
        if (title != "" && desc != "") {
            $.ajax({
                url: "saveTask.php",
                type: "POST",
                data: {
                    title: title,
                    description: desc,
                    created: taskDate,
                    done: done
                },
                cache: false,
                success: (result) => {
                    if (result.statusCode == 200) {
                        $("#success").show();
                        $("#success").html('Data added');
                    } else if (result.statusCode == 201) {
                        alert("error occured!");
                    }
                }
            });
            // showTasks();
        } else {
            alert("all fields must be filled");
        }
    });
}

createTaskButton.addEventListener("click", () => {
    createTask(highestId);
});