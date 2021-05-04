let createNewList = document.getElementById('createNewList');
let newList = document.createElement('div');
let taskDate = new Date();
let day = taskDate.getDay() + 2;
let month = taskDate.getMonth() + 1;

function addNewList () {
    let tdlArea = document.getElementById('tdl-area');
    // newList.innerHTML = taskDate.getDay;
    tdlArea.appendChild(newList).classList.add("task");
    let date = day + "/" + month + "/" + taskDate.getFullYear();
    tdlArea.appendChild(newList).innerHTML = date;
}

createNewList.addEventListener('click', addNewList);

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