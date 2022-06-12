import Task from "./Task"

const Column = ({data}) => {
  return (
    <div className="w-[280px] shrink-0">
        <h3 className="heading-sm uppercase mb-6">
            <span className={`inline-block h-3 w-3 rounded-full bg-[#67E2AE] mr-3`}></span>
            {data.name} ({data.tasks.length})
        </h3>
        <div className="flex flex-col space-y-5">
        {
            data.tasks.map((task, i) => (
                <Task data={task} key={i} />
            ))
        }
        </div>
    </div>
  )
}
export default Column
