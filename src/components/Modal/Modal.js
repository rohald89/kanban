import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Modal = (props) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    setIsBrowser(true);
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  const modalContent = props.show ? (
    <div
      className={`modal fixed bg-opacity-50 flex transition left-0 right-0 top-0 bottom-0 bg-black z-50 items-center justify-center ${
        props.show ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="modal-content -translate-y-[200px] transition">
        {props.children}
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return createPortal(modalContent, document.querySelector("#modal"));
  } else {
    return null;
  }
};
export default Modal;
