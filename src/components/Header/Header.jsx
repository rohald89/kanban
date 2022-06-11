import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";
import Button from "../shared/Button";

const Header = () => {
  const {width} = useWindowSize();

  return (
    <header className="flex bg-white justify-between items-center p-4 border-b border-lightGreyLine dark:bg-darkGrey dark:text-white dark:border-darkGreyLine">
        <div className="flex items-center">
        {
            width <= 768 && (
                <Image src="/logo-mobile.svg" alt="kanban logo" height={25} width={24}  />
            )
        }
            <div className="flex justify-center items-center">
                <h2 className="heading-lg ml-5 mr-2">Platform Launch</h2>
                {
                    width <= 768 && (
                        <Image src="/icon-chevron-down.svg" alt="chevron" height={4} width={8} />
                    )
                }
            </div>
        </div>
        <div className="flex items-center gap-4">
        {
            width > 768 ? (
                <Button className="btn btn__primary btn-lg">
                    + Add New Task
                </Button>
            ) : (
                <Button className="btn btn__primary px-5 flex justify-center items-center">
                    <Image src="/icon-add-task-mobile.svg" height={12} width={12} />
                </Button>
            )
        }
        <Image src="/icon-vertical-ellipsis.svg" height={16} width={4} />
        </div>
    </header>
  )
}
export default Header
