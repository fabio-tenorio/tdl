/*
quando clico no botão addNewList, o evento executado é criar uma caixa com as seguintes informações:
input para o título e impressão da data corrente 

*/
let createListButton = document.getElementById('createNewList');
let newTask = document.createElement('textarea');

let taskDate = new Date();
let day = taskDate.getDay() + 2;
let month = taskDate.getMonth() + 1;
createListButton.addEventListener("click", function() {
    let tdlArea = document.getElementById('tdl-area');
    let newList = document.createElement('div');
    newList.classList.add('task');
    let title = document.createElement('input');
    title.type = "text";
    newList.appendChild(title);
    let date = day + "/" + month + "/" + taskDate.getFullYear();
    tdlArea.appendChild(newList);
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