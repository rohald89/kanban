import { useState } from "react";

const BoardContainer = ({data}) => {
    const [activeBoard, setActiveBoard] = useState(0);

  return (
    <div className="flex-1 my-16 w-full">
        <h3 className="heading-sm ml-6 uppercase">All boards ({data.length})</h3>
        <div className="mt-8">
            {
            data.map((board, i) => (
                <h3
                key={i}
                onClick={() => setActiveBoard(i)}
                className={`heading-m pl-6 w-11/12 font-bold text-mediumGrey py-3 rounded-r-full hover:bg-mainPurpleHover hover:text-white
                ${i === activeBoard && 'active-board'}`}
                >
                    {board.name}
                </h3>
                ))
            }
        </div>
    </div>
  )
}
export default BoardContainer
