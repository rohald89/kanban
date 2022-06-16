import Image from "next/image";
import { useBoards } from "@src/context";

const TaskDetailModal = ({ data, completedSubtasks }) => {
  const {columns} = useBoards();

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

        <div className="relative">
            <button type="button" class="inline-flex justify-between w-full rounded-md outline outline-1 outline-mediumGrey shadow-sm px-4 py-2 bg-white text-sm font-medium text-black focus:outline-mainPurple dark:bg-darkGrey dark:text-white" id="menu-button" aria-expanded="true" aria-haspopup="true">
                {data.status}
                <svg class="-mr-1 ml-2 h-5 w-5 fill-mainPurple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>
            <div class="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-veryDarkGrey" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                    {columns.map((column, i) => (
                        <a href="#" class="text-mediumGrey block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">{column.name}</a>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
export default TaskDetailModal
