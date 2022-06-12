const Task = ({ data }) => {
    //number of completed subtasks
    const completedSubtasks = data.subtasks.reduce((acc, subtask) => subtask.isCompleted ? acc + 1 : acc, 0);
  return (
    <div className="shadow-main px-4 py-6 rounded-lg bg-white text-black dark:bg-darkGrey dark:text-white">
        <h4 className="heading-md mb-2">{data.title}</h4>
        <p className="body-md text-mediumGrey">{completedSubtasks} of {data.subtasks.length} subtasks</p>
    </div>
  )
}
export default Task
