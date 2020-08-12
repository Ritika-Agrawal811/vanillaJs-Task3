
var taskContent = document.getElementById('taskContent');

var taskTime = document.getElementById('taskTime');

var incomplete = document.getElementById('incomplete');
var complete= document.getElementById('complete');

var incomplete_list = document.getElementById('List_incomplete');
var complete_list = document.getElementById('List_complete');
var toDo = document.getElementById('toDoList');


document.getElementById('home').addEventListener('click',function(){
    toDo.style.zIndex = "10";
    complete_list.style.zIndex = "1";
    incomplete_list.style.zIndex = "2";
    
});

document.getElementById('InCom_list').addEventListener('click',function(){
    toDo.style.zIndex = "1";
    complete_list.style.zIndex = "2";
    incomplete_list.style.zIndex = "10";
    
});

document.getElementById('Com_list').addEventListener('click',function(){
    toDo.style.zIndex = "1";
    complete_list.style.zIndex = "10";
    incomplete_list.style.zIndex = "2";
    
});



function completed(){
    var task_completed = this.parentNode;
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML ="Delete";
    
    complete.appendChild(task_completed);
    this.remove();
    task_completed.appendChild(deleteButton);
    
    var set_time = deleteButton.previousSibling;
    deleteButton.previousSibling.remove();
    
    task_completed.appendChild(set_time);
    deleteButton.addEventListener('click', deleteTask);
    
     toDo.style.zIndex="-1";
     incomplete_list.style.zIndex = "2";
     complete_list.style.zIndex = "10";
    
    
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
    
    
    else{
        
        taskContent.style.border = "2px solid #d9c6a5";
        taskContent.value="";
        taskContent.placeholder = "Enter a task";
        
        var newTask = document.createElement('li');
        var completedTask = document.createElement('button');
        var set_time = document.createElement('span');
        
        newTask.innerHTML =task;
        completedTask.innerHTML ="Completed";
        set_time.innerHTML= deadline;
        
       incomplete.appendChild(newTask);
       newTask.appendChild(completedTask);
       newTask.appendChild(set_time);
        
        toDo.style.zIndex="2";
        incomplete_list.style.zIndex = "10";
        
       completedTask.addEventListener('click', completed);
        
        
    }
    
});




