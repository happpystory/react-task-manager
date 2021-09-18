import { useEffect } from 'react';
import {FaTimes} from 'react-icons/fa';


const Task = ({ task, onDelete, reminder, taskName, dateName }) => {
    useEffect(()=>{
       const taskText = document.querySelector(`.${taskName}`)
       const dateText = document.querySelector(`.${dateName}`)
       checkOverflow(taskText, dateText)
    })

    const checkOverflow = (task, date) => {
        let taskIsOverflowing = task.clientWidth < task.scrollWidth;
        let dateIsOverflowing = date.clientWidth < date.scrollWidth;
        if(taskIsOverflowing) { 
            task.style.wordBreak = "break-all"
        }
        if(dateIsOverflowing) { 
            date.style.wordBreak = "break-all"
        }
    }

    return (
        <div className={`task ${task.reminder? "reminder" : ""}`} onDoubleClick={()=>reminder(task.id)}>
            <div className="task-wrapper">
                <h3 className={`taskWidth ${taskName}`}>{task.text}</h3>

                <div className="remove">
                    <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={()=> onDelete(task.id)} />
                </div>
            </div>
            <p className={`taskWidth ${dateName}`} >{task.day}</p>
        </div>
    )
}

export default Task


