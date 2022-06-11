import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

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

  const backdropVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        // delayChildren: -0.1,
      },
    },
  };

  const modalVariant = {
    hidden: {
      y: "-200px",
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.25,
      },
    },
  };

  const modalContent = (
    <AnimatePresence>
      {props.show ? (
        <motion.div
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={`modal fixed bg-opacity-50 flex left-0 right-0 top-0 bottom-0 bg-black z-50 items-center justify-center`}
        >
          <motion.div variants={modalVariant}>{props.children}</motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  if (isBrowser) {
    return createPortal(modalContent, document.querySelector("#modal"));
  } else {
    return null;
  }
};
export default Modal;
