import { useBoards } from "@src/context";
import EditButton from "@components/shared/EditButton";
import StatusDropdown from "@components/shared/StatusDropdown";

const TaskDetailModal = ({ data, completedSubtasks }) => {
  const { toggleSubtask, deleteTask} = useBoards();

  return (
    <div className="w-[480px] min-w-11/12 mx-auto rounded-md p-6 bg-white dark:bg-darkGrey md:p-8">
        <div className="flex items-center justify-between gap-4 mb-6">
            <h1 className="heading-lg">{data.title}</h1>
            <EditButton
            onClick={() => deleteTask(data.id)}
            taskId={data.id}
            type="Task"
            className="bottom-0 left-0 -translate-x-2/4 translate-y-28"/>
        </div>
        <p className="body-lg text-mediumGrey">
            {data.description}
        </p>
        <h3 className="mt-6 mb-4 body-md text-mediumGrey dark:text-white">
            Subtasks ({completedSubtasks} of {data.subtasks.length})
        </h3>
        {
            data.subtasks.map((subtask, i) => (
                <label key={i} className={`${subtask.isCompleted ? "text-mediumGrey line-through" : "text-black"} dark:text-white p-3 mb-2 block rounded bg-lightGrey dark:bg-veryDarkGrey`}>
                    <input
                    type="checkbox"
                    checked={subtask.isCompleted}
                    className="mr-3"
                    onChange={() => toggleSubtask(data.id, i)}
                    />
                    {subtask.title}
                </label>
            ))
        }
        <h3 className="mt-6 mb-4 body-md text-mediumGrey dark:text-white">
            Current Status
        </h3>

        <StatusDropdown data={data} />

    </div>
  )
}
export default TaskDetailModal
