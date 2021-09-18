import Task from "./Task"

const Tasks = ({tasks, onDelete, reminder}) => {
    return (
        <>
             {tasks.map((task)=>(
                <Task key={task.id} task={task} onDelete={onDelete} reminder={reminder}  taskName={`task${task.id}`} dateName={`date${task.id}`} />
                
            ))} 
        </>
    )
}

export default Tasks

