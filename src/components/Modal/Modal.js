import { useEffect } from "react";
import { CSSTransition } from "react-transition-group";

const Modal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div
        className={`modal fixed opacity-0 bg-opacity-50 flex transition left-0 right-0 top-0 bottom-0 bg-black z-10 items-center justify-center`}
      >
        <div className="modal-content -translate-y-[200px] transition">
          {props.children}
        </div>
      </div>
    </CSSTransition>
  );
};
export default Modal;
