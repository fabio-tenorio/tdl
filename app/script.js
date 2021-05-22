/*
quando clico no botão addNewList, o evento executado é criar uma caixa com as seguintes informações:
input para o título e impressão da data corrente 

*/
let createListButton = document.getElementById('createNewTask');
let taskDate = new Date();
let day = taskDate.getDay() + 2;
let month = taskDate.getMonth() + 1;
createListButton.addEventListener("click", function() {
    let tdlArea = document.getElementById('tdl-area');
    let newTask = document.createElement('div');
    newTask.classList.add('task');
    let taskTitle = document.createElement('input');
    taskTitle.type = "text";
    let taskDesc = document.createElement('textarea');
    let date = day + "/" + month + "/" + taskDate.getFullYear();
    let showDate = document.createElement('p');
    let taskDone = document.createElement('button');
    taskDone.type = "submit";
    taskDone.innerText = "accomplished";
    taskDone.setAttribute("class", "btn btn-warning");
    let taskCancel = document.createElement('button');
    taskCancel.type = "submit";
    taskCancel.innerText = "cancel task";
    taskCancel.setAttribute("class", "btn btn-danger");
    tdlArea.appendChild(newTask);
    newTask.appendChild(taskTitle);
    newTask.appendChild(taskDesc);
    newTask.appendChild(taskDone);
    newTask.appendChild(taskCancel);
    newTask.appendChild(showDate);
    showDate.innerHTML = date;
})

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