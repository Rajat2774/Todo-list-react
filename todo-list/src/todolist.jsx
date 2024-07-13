import React,{useState} from "react";
export default function TodoList(){

    const [task,setTask]=useState(["Sample Task"]);
    const[newTask,setNewTask]=useState([]);

    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim()!==""){
            setTask(t=>[...t,newTask]);
            setNewTask("");
        }
    }
    function handleRemoveTask(index){
        const updatedTask=task.filter((element,i)=>i!==index);
        setTask(updatedTask)
    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTask=[...task];
            [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]]
            setTask(updatedTask)
        }
    }
    function moveTaskDown(index){
        if(index<task.length-1){
            const updatedTask=[...task];
            [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]]
            setTask(updatedTask)
        }
    }

    return(<div className="todo-list">
        <h1>To-Do-List</h1>
        <div>
        <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter a Task...."/>   
        <button className="add-button" onClick={addTask}>Add</button>
    </div>
    <ol>
        {task.map((element,index)=>
        <li key={index}>
            <span className="task">{element}</span>
            <button className="delete-button" onClick={()=>handleRemoveTask(index)}>
                Delete
            </button>

            <button className="moveup-button" onClick={()=>moveTaskUp(index)}>
            <i class="fa-solid fa-up-long"></i>
            </button>

            <button className="movedown-button" onClick={()=>moveTaskDown(index)}>
            <i class="fa-solid fa-down-long"></i>
            </button>
        </li>)}
    </ol>
    </div>);
}