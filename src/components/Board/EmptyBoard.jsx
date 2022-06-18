import Button from "@components/shared/Button"

const EmptyBoard = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-lightGrey dark:bg-veryDarkGrey">
        <h2 className="heading-lg text-mediumGrey text-center">This board is empty. Create a new column to get started.</h2>
        <Button className="btn btn__primary btn-lg mt-6">+ Add New Column</Button>
    </div>
  )
}
export default EmptyBoard
