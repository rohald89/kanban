const styling = (props) => {
  return (
    <div className="grid gap-4 p-4 bg-lightGrey dark:bg-veryDarkGrey">
      <div className="bg-mainPurple h-[50px]">mainPurple</div>
      <div className="bg-mainPurpleHover h-[50px]">mainPurpleHover</div>
      <div className="bg-black h-[50px] text-white">Black</div>
      <div className="bg-veryDarkGrey h-[50px] text-white">veryDarkGrey</div>
      <div className="bg-darkGrey h-[50px] text-white">darkGrey</div>
      <div className="bg-darkGreyLine h-[50px] text-white">darkGreyLine</div>
      <div className="bg-mediumGrey h-[50px]">mediumGrey</div>
      <div className="bg-lightGreyLine h-[50px]">lightGreyLine</div>
      <div className="bg-lightGrey h-[50px]">lightGrey</div>
      <div className="bg-mainRed h-[50px]">mainRed</div>
      <div className="bg-mainRedHover h-[50px]">mainRedHover</div>

      <h1 className="heading-xl text-mainPurple">heading-xl</h1>
      <p className="heading-xl text-black dark:text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur,
        veniam?
      </p>
      <h1 className="heading-xl text-mainPurple">heading-lg</h1>

      <p className="heading-lg text-black dark:text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur,
        veniam?
      </p>
      <h1 className="heading-xl text-mainPurple">heading-md</h1>

      <p className="heading-md text-black dark:text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur,
        veniam?
      </p>
      <h1 className="heading-xl text-mainPurple">heading-sm</h1>

      <p className="heading-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur,
        veniam?
      </p>
      <h1 className="heading-xl text-mainPurple">body-lg</h1>

      <p className="body-lg text-black dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, minima
        quibusdam, sapiente, molestias accusamus deserunt officia expedita ea et
        voluptatibus asperiores unde cum. Voluptatum necessitatibus laboriosam
        itaque in aperiam laborum quo. Ullam non suscipit laboriosam. Ut,
        tempore totam! Ipsam dicta sequi autem nihil optio distinctio totam
        blanditiis, adipisci impedit. Commodi.
      </p>

      <h1 className="heading-xl text-mainPurple">body-md</h1>

      <p className="body-md text-black dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, minima
        quibusdam, sapiente, molestias accusamus deserunt officia expedita ea et
        voluptatibus asperiores unde cum. Voluptatum necessitatibus laboriosam
        itaque in aperiam laborum quo. Ullam non suscipit laboriosam. Ut,
        tempore totam! Ipsam dicta sequi autem nihil optio distinctio totam
        blanditiis, adipisci impedit. Commodi.
      </p>

      <button className="bg-mainPurple text-white font-bold text-md rounded-full p-4 transition duration-200 hover:bg-mainPurpleHover">
        Button Primary (L)
      </button>
      <button className="bg-mainPurple text-white text-base rounded-full p-2 transition duration-200 hover:bg-mainPurpleHover">
        Button Primary (S)
      </button>
      <button className="bg-mainPurple bg-opacity-10 text-mainPurple text-base rounded-full p-2 transition duration-200 hover:bg-opacity-25 dark:bg-opacity-100 dark:bg-white">
        Button Secondary (S)
      </button>
      <button className="bg-mainRed text-white text-base rounded-full p-2 transition duration-200 hover:bg-mainRedHover">
        Button Danger (S)
      </button>
    </div>
  );
};
export default styling;
