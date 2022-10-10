import {useState, useEffect} from "react"
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { addUpdateToStore } from '../reducers/update';
import SwitchButton from './SwitchButton'


function Header() {

  const dispatch = useDispatch();

const[newCityAdd, setNewCityAdd] = useState("")
const[submitCityAdd, setSubmitCityAdd] = useState("")

const addTeamToDB = async (value) => {
  const rawResponse = await fetch(
    "http://localhost:3000/weather/addCity",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `cityName=${JSON.stringify(value)}`,
    }
  );
  var response = await rawResponse.json();
  dispatch(addUpdateToStore(newCityAdd));
  setNewCityAdd("")
}



useEffect(() => {
  const keyDownHandler = event => {
       if (event.key === 'Enter') {
      event.preventDefault();
      // call function here
 

      addTeamToDB(newCityAdd)
    }
  };
    document.addEventListener('keydown', keyDownHandler);
  return () => {
    document.removeEventListener('keydown', keyDownHandler);
  };
}, [newCityAdd]);


return (
    <div className={styles.container}>
      
      <img className={styles.logo} src="meteo.png" alt="logo" />
    <div className={styles.titleW}>W</div><div className={styles.title}>eather</div>
         <form>
           <input contentEditable spellCheck="false" placeholder="new city" className={styles.input} type="text" onChange={(e) => setNewCityAdd(e.target.value)} value={newCityAdd}/>
           <FontAwesomeIcon className={styles.icon} icon={faSearch} />
         </form>
         
         <div className={styles.displayContainer}>
              <SwitchButton></SwitchButton>
        </div>
   </div>
  )
}

 export default Header;
