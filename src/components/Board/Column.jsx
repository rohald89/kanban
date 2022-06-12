import {Droppable, Draggable} from "react-beautiful-dnd";
import Task from "./Task"
import { useEffect, useState } from 'react';


const Column = ({data}) => {
  const [winReady, setWinReady] = useState(false);

  useEffect(() => {
    setWinReady(true);
  }, [])

  return (
    <div className="w-[280px] shrink-0">
        <h3 className="heading-sm uppercase mb-6">
            <span className={`inline-block h-3 w-3 rounded-full bg-[#67E2AE] mr-3`}></span>
            {data.name} ({data.tasks.length})
        </h3>
        {
            winReady ? (
        <Droppable droppableId={data.slug}>
            {(provided) => (
            <ul className="flex flex-col space-y-5" {...provided.droppableProps} ref={provided.innerRef}>
                {
                data.tasks.map((task, i) => (
                    <Draggable key={i} draggableId={task.slug} index={i} >
                        {(provided) => {
                            const completedSubtasks = task.subtasks.reduce((acc, subtask) => subtask.isCompleted ? acc + 1 : acc, 0);
                            return (
                                <li className="group shadow-main px-4 py-6 rounded-lg cursor-pointer bg-white text-black dark:bg-darkGrey dark:text-white" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                    <h4 className="heading-md mb-2 group-hover:text-mainPurple">{task.title}</h4>
                                    <p className="body-md text-mediumGrey"> {completedSubtasks} of {task.subtasks.length} subtasks</p>
                                </li>)
                        }}
                    </Draggable>
                    ))
                }
                {provided.placeholder}
            </ul>
            )}
        </Droppable>
            ) : ( null )}
    </div>
  )
}
export default Column
