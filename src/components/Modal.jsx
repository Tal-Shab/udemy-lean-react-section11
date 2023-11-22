import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children, onClose }) {
  const dialog = useRef();

  useEffect( () => {
    //the useEffect will run after the competent loads, so the connection to the ref is established, ans the dialog method will work
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      { open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
