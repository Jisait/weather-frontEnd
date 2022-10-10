import styles from '../styles/Card_Row.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp} from '@fortawesome/free-solid-svg-icons'
import { CloseCircleOutlined} from '@ant-design/icons';



function Card(props) {

  const handleClick = () => {
    props.selectCityToDelete(props.cityName)
    };

  return (
    <div>
    
      <div className={styles.cardContainer}>
          
            <div className={styles.gradient}></div>
            <img className={styles.card} src={props.icon} alt={props.icon} />
       
          
          <div className={styles.mainInfoContainer}>
        
            <div className={styles.city}>{props.cityName}</div>
            <div className={styles.desc}>{props.description}</div>
            <div className={styles.temp}>{`${(props.temp).toFixed(1)}°`}</div>
            <CloseCircleOutlined onClick={() => handleClick()} className={styles.cross} size={"20px"}/>
          
           {/*  <div className={styles.trait}></div> */}
              {/* <div className={styles.miscInfoContainer}>
                <div className={styles.leftColumn}>
                  <div className={styles.tempMinText}>temp. min</div>
                  <div className={styles.tempMin}>{`${(props.tempMin).toFixed(1)}°`}</div>
                  <div className={styles.humidityText}>humidité</div>
                  <div className={styles.humidity}>{`${props.humidity}%`}</div>
                </div>
               
              </div> */}
           </div>
          
            
          {/*   <div className={styles.wind} >
            <FontAwesomeIcon icon={faArrowUp} /></div>
          </div> */}
      
     
     
  
     </div>
    </div>
  );
 }
 
 export default Card;
