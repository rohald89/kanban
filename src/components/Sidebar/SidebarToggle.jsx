import Image from "next/image"

const SidebarToggle = ({ show }) => {

  return (
    <>
    { show ? (
        <div className={`group cursor-pointer flex space-x-3 items-center mt-4 pl-6 w-11/12 transition duration-500 bg-opacity-0 bg-white rounded-r-full hover:bg-opacity-70`}>
            <Image src="/icon-hide-sidebar.svg" alt="board" height={16} width={16} />
            <h3 className={`heading-m font-bold text-mediumGrey py-3 group-hover:text-mainPurple`}>
                Hide Sidebar
            </h3>
        </div>
        ) : (
        <h1>TO DO!</h1>
        )
    }
    </>
    )
}
export default SidebarToggle
