const NoBoardsFound = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-lightGrey dark:bg-veryDarkGrey">
        <h2 className="heading-lg text-mediumGrey text-center">No Boards Found</h2>
        <button className="btn btn__primary btn-lg mt-6">Create a Board</button>
    </div>
  )
}
export default NoBoardsFound
