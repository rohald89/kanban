import Image from "next/image";

const TaskDetailModal = ({ data, completedSubtasks }) => {
  console.log(data);
  return (
    <div className="w-[480px] min-w-11/12 mx-auto rounded-md p-6 bg-white dark:bg-darkGrey md:p-8">
        <div className="flex items-center justify-between gap-4 mb-6">
            <h1 className="heading-lg">{data.title}</h1>
            <Image src="/icon-vertical-ellipsis.svg" height={16} width={4} />
        </div>
        <p className="body-lg text-mediumGrey">
            {data.description}
        </p>
        <h3 className="mt-6 mb-4 body-md text-mediumGrey dark:text-white">
            Subtasks ({completedSubtasks} of {data.subtasks.length})
        </h3>
        {
            data.subtasks.map((subtask, i) => (
                <label key={i} htmlFor="" className={`${subtask.isCompleted ? "text-mediumGrey line-through" : "text-black"} dark:text-white p-3 mb-2 block rounded bg-lightGrey dark:bg-veryDarkGrey`}>
                    <input type="checkbox" checked={subtask.isCompleted} className="mr-3"/>
                    {subtask.title}
                </label>
            ))
        }
        <h3 className="mt-6 mb-4 body-md text-mediumGrey dark:text-white">
            Current Status
        </h3>
    </div>
  )
}
export default TaskDetailModal
