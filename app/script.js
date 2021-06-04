/*
quando clico no botão addNewList, o evento executado é criar uma caixa com as seguintes informações:
input para o título e impressão da data corrente 
*/
let xhttp = new XMLHttpRequest();
let tdlArea = document.getElementById('tdl-area');
xhttp.open("GET", "getTasks.php", true);
xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        var allTasks = this.responseText;
        var allTasks = JSON.parse(allTasks);
        for (var i in allTasks) {
            tdlArea.appendChild('div');
        }
    }
}
xhttp.send();

let createTaskButton = document.getElementById('createNewTask');
let doneButtons = document.querySelectorAll('.btn-success');
let saveTask = document.createElement('button');

// function createTask() {
    
// }

createTaskButton.addEventListener("click", () => {
    // $.ajax({
    //     url: "getTasks.php",
    //     type: "GET",
    //     dataType: JSON,
    //     success: function (data) {
    //         let allTasks = JSON.parse(data);
    //         $("#tdl-area").html(data);
    //     }
    // })
    
    // createTask();
    
    let newTask = document.createElement('div');
    let showDate = document.createElement('p');
    showDate.id = "taskdate";

    newTask.classList.add('task');
    let taskTitle = document.createElement('input');
    taskTitle.type = "text";
    taskTitle.id = "tasktitle";
    taskTitle.classList.add('task-title');
    taskTitle.placeholder = "title";

    let taskDesc = document.createElement('textarea');
    taskDesc.classList.add('task-desc');
    taskDesc.id = "taskdesc";
    taskDesc.placeholder = "details";

    saveTask.type = "submit";
    saveTask.innerText = "save task";
    saveTask.id = "savetask";
    saveTask.name = "savetask";
    saveTask.setAttribute("class", "btn col-12 btn-outline-primary");

    let container = document.createElement('div');
    let taskDone = document.createElement('button');
    taskDone.type = "submit";
    taskDone.innerText = "done";
    taskDone.id = "taskdone";
    taskDone.setAttribute("class", "btn col-6 btn-success");

    let taskCancel = document.createElement('button');
    taskCancel.type = "submit";
    taskCancel.innerText = "cancel";
    taskCancel.id = "taskcancel";
    taskCancel.setAttribute("class", "btn col-6 btn-danger");

    container.appendChild(taskDone);
    container.appendChild(taskCancel);
    tdlArea.appendChild(newTask);
    newTask.appendChild(taskTitle);
    newTask.appendChild(taskDesc);
    newTask.appendChild(saveTask);
    newTask.appendChild(container);
    newTask.appendChild(taskDesc);
    newTask.appendChild(saveTask);
    newTask.appendChild(container);
    newTask.appendChild(showDate);
    
    let taskDate = new Date();
    taskDate = taskDate.toISOString().slice(0, 19).replace('T', ' ');
    // let showDate = document.getElementById('taskdate');
    showDate.innerHTML = taskDate;

    saveTask.addEventListener("click", function () {
        var title = $("#tasktitle").val();
        var desc = $("#taskdesc").val();
        if ($("#taskdone").val()=="") {
            var done = null;
        } else {
            var done = $("#taskdone").val();
        }
        
        var date = $("#taskdate").val();
        if (title != '' && desc != '') {
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
        } else {
            alert("all fields must be filled");
        }
    });
});

     

    // criar um loop para atribuir uma id à task e aos items da task em $_POST;