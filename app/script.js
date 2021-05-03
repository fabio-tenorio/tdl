function newTask() {              
    
    $.ajax({  
        type: "POST",  
        dataType: "json",  
        contentType: "application/json; charset=utf-8",  
        url: "DataInsertUseJQuery.aspx/InsertPersonRecord",  
        data: "{'Name':'" + Name + "', 'LName':'" + LName + "'}",  
        success: function (Record) {  
                
                $('#txtName').val();  
                $('#txtLastName').val();  


            if (Record.d == true) {  
            
                $('#Result').text("Your Record insert");  
            }  
            else {  
                $('#Result').text("Your Record Not Insert");  
            }  

        },  
            Error: function (textMsg) {  
                  
                $('#Result').text("Error: " + Error);  
            }  
        });  
    }  
    else {             
        $('#Result').html('');  
        $('#Result').html(Messege);  
    }  
    $('#Result').fadeIn();  
}   