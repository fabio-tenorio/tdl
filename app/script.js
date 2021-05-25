/*
quando clico no botão addNewList, o evento executado é criar uma caixa com as seguintes informações:
input para o título e impressão da data corrente 
*/
let createListButton = document.getElementById('createNewTask');

function convertDate(timestamp) {
    let miliseconds = timestamp * 1000;
    let date = new Date(miliseconds);
    let humanReadable = date.toLocaleString("fr-FR", {weekday: "long"});
    return humanReadable;
}

createListButton.addEventListener("click", () => {
        // criar um loop para atribuir uma id à task e aos items da task em $_POST;
        const taskDate = new Date();
        const timestamp = taskDate.getTime();
        let date = convertDate(timestamp);

        let tdlArea = document.getElementById('tdl-area');
        let newTask = document.createElement('div');

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

        let showDate = document.createElement('p');
        showDate.id = "taskdate";

        let saveTask = document.createElement('button');
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
        showDate.innerHTML = date;

        saveTask.addEventListener("click", function () {
            var title = $("#tasktitle").val();
            var desc = $("#taskdesc").val();
            var done = $("#taskdone").val();
            var date = $("#taskdate").val();
            $.ajax({
                url: "saveTask.php",
                type: "POST",
                data: {
                    title: title,
                    description: desc,
                    created: date,
                    done: done
                },
                cache: false,
                success: (result) => {
                    console.log(result);
                    result = JSON.parse(result);
                    if (result.statusCode == 200) {
                        $("#success").show();
                        $("#success").html('Data added');
                    } else if (result.statusCode == 201) {
                        alert("error occured!");
                    }
                }
            });
        });
    });


// buttonSaveTask.addEventListener("click", function() {
//     let title = document.getElementById("tasktitle");
//     let desc = document.getElementById("taskdesc");
//     let done = document.getElementById("taskdone");
//     let date = document.getElementById("taskdate");
//     $.ajax({
//         url: "saveTask.php",
//         type: "POST",
//         data: {
//             title: title,
//             description: desc,
//             created: date,
//             done: done
//         },
//         cache: false,
//         success: function(result) {
//             var result = JSON.parse(result);
//             if (result.statusCode==200) {
//                 $("#success").show();
//                 $("#success").html('Data added');
//             } else if (result.statusCode==201) {
//                 alert("error occured!");
//             }
//         }
//     });
// })

// createNewList.addEventListener('click', addNewList);

// function newTask() {              
    
//     $.ajax({
//         type: "POST",  
//         dataType: "json",  
//         contentType: "application/json; charset=utf-8",  
//         url: "DataInsertUseJQuery.aspx/InsertPersonRecord",  
//         data: "{'Name':'" + Name + "', 'LName':'" + LName + "'}",  
//         success: function (Record) {  
                
//                 $('#txtName').val();  
//                 $('#txtLastName').val();  


//             if (Record.d == true) {  
            
//                 $('#Result').text("Your Record insert");  
//             }  
//             else {  
//                 $('#Result').text("Your Record Not Insert");  
//             }  

//         },  
//             Error: function (textMsg) {  
                  
//                 $('#Result').text("Error: " + Error);  
//             }  
//         });  
//     }  
//     else {             
//         $('#Result').html('');  
//         $('#Result').html(Messege);  
//     }  
//     $('#Result').fadeIn();  
// }