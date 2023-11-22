import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  

  //we need useEffect not to set the timer up, but in order to clean it up
  useEffect( () => {
    console.log('setting timer');
    const timer = setTimeout( () => {
      onConfirm();
    }, TIMER);

    return () => {
      console.log('Cleaning up timer');
      clearTimeout(timer);
    };

    /*
    be aware - when adding a function as a dependency there is a risk of crating an infinite loop 
    when we add a dependency, we are telling react that this effect function should be re executed whenever the component renders,
    and when the dependency value change - when the dependency is a function, is it recrated every time the components its in renders, 
    so because the function in an object, when it is re-created, even though it has the same code - it is not equal!
    so if we are updating the sate inside the onConfirm(which we do - handleRemovePlace) - it could cause an infinite loop.
    but in oue specific case the state update is setModalIsOpen(false) - so open=false, and children of Modal is not rendered - 
    so DeleteConfirmation does not render and there is no infinite loop. another solution is useCallback
    */
  }, [onConfirm])
  
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
}
