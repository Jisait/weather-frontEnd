import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/Home.module.css';
import Header from './Header'
import Card_Column from './Card_Column'
import Card_Row from './Card_Row'
import HorizontalScroll from "react-scroll-horizontal";


function Home() {

const [cards, setCards] = useState([])
const update = useSelector((state) => state.update.value);
const switchDisplay = useSelector((state) => state.switchDisplay.value);

console.log("ca passe?", switchDisplay)


  useEffect(() => {
    fetch('http://localhost:3000/weather/getCities')
      .then(response => response.json())
      .then(data => {
        setCards(data.result);
      });
  }, [update]);
/* } */

  const selectCityToDelete = (name) => {
    console.log(name)
    fetch(`http://localhost:3000/weather/${name}`, { method: 'DELETE' })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      fetch('http://localhost:3000/weather/getCities')
      .then(response => response.json())
      .then(data => {
        setCards(data.result);
      });
      
   
      })
    }

  const cardsMap_Column = cards.map((data, index) => {
    console.log(cards.length)
    return   <Card_Column index={index} lastIndex={cards.length-1} selectCityToDelete={selectCityToDelete } cityName={data.cityName} description={data.description} main={data.main} temp={data.temp} tempMin={data.tempMin} tempMax={data.tempMax} humidity={data.humidity} windSpeed={data.windSpeed} windDeg={data.windDeg} icon={data.icon}/>
  })

  const cardsMap_Row = cards.map((data, index) => {
    return   <Card_Row index={index} selectCityToDelete={selectCityToDelete } cityName={data.cityName} description={data.description} main={data.main} temp={data.temp} tempMin={data.tempMin} tempMax={data.tempMax} humidity={data.humidity} windSpeed={data.windSpeed} windDeg={data.windDeg} icon={data.icon}/>
  })

let displayCard = <HorizontalScroll pageLock={true} reverseScroll={true} className={styles.cardMain_Column}>
                      {cardsMap_Column}
                  </HorizontalScroll>

  if (switchDisplay === "off"){
      displayCard = <div className={styles.cardMain_Row}>
        
                        {cardsMap_Row}
                        
                      </div>
  }

  

  return (
    <div className={styles.main}>
      <Header/>
          {displayCard}
    </div>
  );
}

export default Home;
