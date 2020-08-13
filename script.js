
var taskContent = document.getElementById('taskContent');

var taskTime = document.getElementById('taskTime');

var incomplete = document.getElementById('incomplete');
var complete= document.getElementById('complete');


function completed(){
    var task_completed = this.parentNode;
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML ="Delete";
    deleteButton.style.backgroundColor="#cff6cf";
    
    complete.appendChild(task_completed);
    this.remove();
    task_completed.appendChild(deleteButton);
    
    var set_time = deleteButton.previousSibling;
    deleteButton.previousSibling.remove();
    
    task_completed.appendChild(set_time);
    deleteButton.addEventListener('click', deleteTask);
    
    
    
}

function deleteTask(){
    var deleted_task = this.parentNode;
    deleted_task.remove();
}

document.getElementById('Add_task').addEventListener('click',function(){
    
    var task = taskContent.value;
    
    var deadline = taskTime.value;
    
    if(task==""){
        taskContent.placeholder = "Field cannot be empty";
        taskContent.style.border = "2px solid red";
    }
    
    if(deadline==""){
        taskTime.style.border ="2px solid red";
        
    }
    
    
    else{
        
        taskContent.style.border = "2px solid #d9c6a5";
        taskTime.style.border = "2px solid #d9c6a5";
        taskContent.value="";
        taskContent.placeholder = "Enter a task";
        taskTime.value="";
        
        var newTask = document.createElement('li');
        var completedTask = document.createElement('button');
        var set_time = document.createElement('span');
        
        newTask.innerHTML =task;
        completedTask.innerHTML ="Completed";
        completedTask.style.backgroundColor="#fce2ce";
        set_time.innerHTML= deadline;
        
       incomplete.appendChild(newTask);
       newTask.appendChild(completedTask);
       newTask.appendChild(set_time);
        
       completedTask.addEventListener('click', completed);
        
        
    }
    
});




