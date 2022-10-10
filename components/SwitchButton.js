import {useState, useEffect} from "react"
import styles from '../styles/SwitchButton.module.css';
import { useDispatch } from 'react-redux';
import { addSwitchToDislay } from '../reducers/switchDisplay';

function SwitchButton() {

const dispatch = useDispatch();  

const [on, setOn] = useState(styles.buttonOff);
const [onPin, setOnPin] = useState(styles.pinOn)
    

function toggle() {
  if (on === styles.buttonOff) {
            setOn(styles.buttonOn)
            setOnPin(styles.pinOff)
            dispatch(addSwitchToDislay("on"))
          }
  else if (on === styles.buttonOn) {
    setOn(styles.buttonOff)
    setOnPin(styles.pinOn)
    dispatch(addSwitchToDislay("off"))
  }
}

    return (
      <div className={styles.switchContainer}>
      <button className={on} onClick={toggle}>
        <span className={onPin} />
        <img className={styles.displayOrder} src="displayOrder.png" alt="dilay" />
      </button>
      </div>
    );
  }


export default SwitchButton;