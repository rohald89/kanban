import {Draggable} from "react-beautiful-dnd";
import { v4 as uuidv4 } from 'uuid';

const Task = ({ data, index }) => {
  //number of completed subtasks
  const completedSubtasks = data.subtasks.reduce((acc, subtask) => subtask.isCompleted ? acc + 1 : acc, 0);
  const id = uuidv4();
  return (
    <Draggable draggableId={`${id}`} index={index} >
    {(provided) => (
            <li className="group shadow-main px-4 py-6 rounded-lg cursor-pointer bg-white text-black dark:bg-darkGrey dark:text-white"
            {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                <h4 className="heading-md mb-2 group-hover:text-mainPurple">{data.title}</h4>
                <p className="body-md text-mediumGrey">{completedSubtasks} of {data.subtasks.length} subtasks</p>
            </li>
    )}
    </Draggable>
  )
}
export default Task
